// Public, read-only THORChain quote adapter. No secrets, wallets, or transaction submission.
export const access = "public";
export const methods = ["GET"];
const ASSETS = Object.freeze({
  BTC: "BTC.BTC",
  ETH: "ETH.ETH",
  USDT: "ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7",
  USDC: "ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",
  BNB: "BSC.BNB",
  SOL: "SOL.SOL"
});
const NODES = [
  "https://gateway.liquify.com/chain/thorchain_api/thorchain/quote/swap",
  "https://thornode.ninerealms.com/thorchain/quote/swap"
];
const AFFILIATE_ADDRESS = "thor1nz2mgfmvu8r460f8l7578l9v44nfjw82g0dmkm";
const AFFILIATE_BPS = 30; // 0.3%, included in quoted output, not collected by this API.
const pretty = (s) => {
  const v = String(s || "0");
  if (!/^\d+$/.test(v)) return null;
  const digits=v.padStart(9,"0");
  const whole = digits.slice(0,-8), fraction = digits.slice(-8).replace(/0+$/,"");
  return fraction ? whole+"."+fraction : whole;
};
function units(text){
  if (!/^\d{1,9}(?:\.\d{1,8})?$/.test(text)) return null;
  const [whole,frac=""]=text.split(".");
  const v=BigInt(whole)*100000000n+BigInt((frac+"00000000").slice(0,8));
  return v>0n && v<=100000000000000000n ? String(v) : null;
}
export default async function(req,res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.setHeader("X-Content-Type-Options","nosniff");
  try {
    const q=req.query || {};
    const from=String(q.from||"").toUpperCase(), to=String(q.to||"").toUpperCase(), amount=String(q.amount||"").trim();
    if (!ASSETS[from]||!ASSETS[to]||from===to) return res.status(400).json({error:"Choose two different supported assets."});
    const unitAmount=units(amount);
    if (!unitAmount) return res.status(400).json({error:"Enter a valid positive amount (up to 8 decimals)."});
    const qp=new URLSearchParams({
      from_asset: ASSETS[from], to_asset: ASSETS[to], amount: unitAmount,
      affiliate: AFFILIATE_ADDRESS, affiliate_bps: String(AFFILIATE_BPS),
      streaming_interval:"1",streaming_quantity:"0"
    });
    let lastError="THORChain quote API unavailable";
    for(const node of NODES){
      try{
        const control=new AbortController();
        const timeout=setTimeout(()=>control.abort(),7500);
        let response;
        try {response=await fetch(node+"?"+qp.toString(),{signal:control.signal,headers:{"Accept":"application/json"}});}
        finally {clearTimeout(timeout);}
        const data=await response.json();
        if(!response.ok || data.error || data.code && !data.expected_amount_out) {
          lastError=String(data.error||data.message||"Quote unavailable").slice(0,220);
          // Exchange errors are not network faults; do not bypass them by trying another node.
          if(response.status===400 || response.status===422) break;
          continue;
        }
        const value=pretty(data.expected_amount_out_streaming||data.expected_amount_out);
        if(value===null) {lastError="Quote missing expected output"; continue;}
        return res.json({
          status:"live", provider:"THORChain THORNode", quoted_at:new Date().toISOString(),
          from,to,amount, received:value, source_asset:ASSETS[from], destination_asset:ASSETS[to],
          estimated_seconds:Number(data.total_swap_seconds||0),
          outbound_fee:pretty(data.fees?.outbound), liquidity_fee:pretty(data.fees?.liquidity),
          fee_asset:data.fees?.asset||ASSETS[to], price_impact_bps:Number(data.slippage_bps||0),
          affiliate_address:AFFILIATE_ADDRESS,affiliate_bps:AFFILIATE_BPS,
          affiliate_fee:pretty(data.fees?.affiliate), affiliate_fee_in_quote: !!data.fees?.affiliate && BigInt(String(data.fees.affiliate))>0n,
          affiliate_fee_collected:false,
          expiry:data.expiry||null,
          warning:"Indicative quote includes the 30 bps affiliate fee. No commission is collected until a real swap is executed with an affiliate memo. The current external handoff does not transmit this affiliate configuration. Do not send funds to quote endpoints."
        });
      }catch(e){lastError="THORChain temporarily unreachable";}
    }
    return res.status(502).json({error:lastError});
  }catch(e){return res.status(500).json({error:"Unable to fetch a quote right now."});}
}