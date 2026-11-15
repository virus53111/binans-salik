// Private integration diagnostic. Never log, serialize or return API credentials.
// Uses Hatchable's encrypted THORChain connection configured in Setup.
import { api } from "hatchable";
export const access = "admin";
export const methods = ["GET"];
export default async function(req,res){
  res.setHeader("Cache-Control","no-store");
  res.setHeader("X-Content-Type-Options","nosniff");
  try {
    const quote = await api.thorchain.post("/quote", {
      body: {
        sellAsset: "BTC.BTC",
        buyAsset: "ETH.ETH",
        sellAmount: "0.01",
        dry: true
      }
    });
    if(!quote || quote.status < 200 || quote.status >= 300) {
      return res.status(502).json({
        connected:false,
        message:"Partner quote request was rejected. Check API key status and dashboard."
      });
    }
    const data=quote.body||{};
    const routes=Array.isArray(data.routes)?data.routes:[];
    return res.json({
      connected:true,
      aggregator:"THORChain / Maya Protocol",
      test:"Read-only BTC.BTC → ETH.ETH quote",
      quote_routes:routes.length,
      provider_routing_available:routes.length>0,
      payout_rate_bps_configured_in_dashboard:30,
      wallet_transactions_enabled:false,
      note:"Quote validation does not execute a swap or confirm commission payouts."
    });
  } catch(error) {
    const code=String(error?.code||"");
    if(code.toLowerCase().includes("setup") || code.toLowerCase().includes("credential") || String(error?.message||"").includes("is not connected")){
      return res.status(412).json({
        connected:false,
        message:"Configure a new rotated THORChain partner API key in Hatchable Setup."
      });
    }
    return res.status(502).json({
      connected:false,
      message:"Partner API could not be verified. Review the account's API key and service status."
    });
  }
}