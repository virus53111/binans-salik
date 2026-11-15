/* Embedded official THORChain Swap affiliate widget.
   THORChain's widget client key is supplied in the iframe URL by design.
   Never place wallet seed phrases, signing keys, or private credentials here. */
(function(){
  "use strict";
  const affiliateWidgetKey="CONFIGURE_PARTNER_WIDGET_KEY";
  const assets={BTC:"BTC.BTC",ETH:"ETH.ETH",USDT:"ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7",USDC:"ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48",BNB:"BSC.BNB",SOL:"SOL.SOL"};
  const button=document.querySelector(".swap-submit");
  if(!button)return;
  button.innerHTML='<span class="swap-arrow">⇄</span> Trade with wallet <span aria-hidden="true">↗</span>';
  button.title="Open the official THORChain swap widget with Murdilimax partner configuration";
  const style=document.createElement("style");
  style.textContent='#murdilimax-widget-overlay{position:fixed;inset:0;z-index:2147483000;background:rgba(2,5,18,.89);backdrop-filter:blur(18px);display:none;align-items:center;justify-content:center;padding:16px}#murdilimax-widget-overlay.is-open{display:flex}#murdilimax-widget-panel{width:min(620px,100%);height:min(820px,96dvh);background:#101328;border:1px solid rgba(116,155,249,.48);border-radius:22px;box-shadow:0 30px 110px rgba(0,0,0,.7);display:flex;flex-direction:column;overflow:hidden}#murdilimax-widget-top{height:62px;min-height:62px;padding:10px 16px;display:flex;align-items:center;gap:14px;border-bottom:1px solid rgba(138,151,233,.2);background:#0e1127}#murdilimax-widget-top strong{font-size:14px;font-family:inherit}#murdilimax-widget-top span{font-size:10px;color:#9eaccf}#murdilimax-widget-top button{margin-left:auto;border:1px solid #4a527a;border-radius:11px;background:#1c2141;color:#fff;padding:8px 12px}#murdilimax-widget-panel iframe{width:100%;min-height:0;flex:1;border:none;background:#0d0d0d}#murdilimax-widget-footer{font-size:10px;color:#a5aeca;padding:10px 15px;line-height:1.5;border-top:1px solid rgba(138,151,233,.2)}#murdilimax-widget-footer a{color:#8cd6ff;text-decoration:underline}@media(max-width:550px){#murdilimax-widget-overlay{padding:0}#murdilimax-widget-panel{width:100%;height:100dvh;border-radius:0}#murdilimax-widget-top{height:55px;min-height:55px}}';
  document.head.appendChild(style);
  const overlay=document.createElement("div");
  overlay.id="murdilimax-widget-overlay";
  overlay.setAttribute("role","dialog");
  overlay.setAttribute("aria-label","Trade through THORChain");
  overlay.setAttribute("aria-modal","true");
  overlay.innerHTML='<div id="murdilimax-widget-panel"><div id="murdilimax-widget-top"><div><strong>◈ Murdilimax Swap</strong><div><span>Official THORChain wallet-powered exchange</span></div></div><button type="button" id="murdilimax-widget-close" aria-label="Close exchange">✕ Close</button></div><iframe id="murdilimax-widget-iframe" title="Official THORChain Swap widget" allow="clipboard-write"></iframe><div id="murdilimax-widget-footer">Powered by THORChain. Review rates, network fees and wallet permissions before signing. Provider availability and 0.3% affiliate payouts are subject to protocol execution. <a href="https://swap.thorchain.org/" target="_blank" rel="noopener noreferrer">Official site</a></div></div>';
  document.body.appendChild(overlay);
  let previousFocus=null;
  function close(){overlay.classList.remove("is-open");document.body.style.overflow="";document.getElementById("murdilimax-widget-iframe").src="about:blank";previousFocus?.focus();}
  function open(){
    const source=document.getElementById("send-currency")?.value||"BTC";
    const dest=document.getElementById("receive-currency")?.value||"ETH";
    if(!assets[source]||!assets[dest]||source===dest){window.alert("Choose different supported assets first.");return;}
    const params=new URLSearchParams({apiKey:affiliateWidgetKey,from:assets[source],to:assets[dest],theme:"dark"});
    previousFocus=document.activeElement;
    overlay.classList.add("is-open");
    document.body.style.overflow="hidden";
    document.getElementById("murdilimax-widget-iframe").src="https://swap.thorchain.org/widget?"+params.toString();
    document.getElementById("murdilimax-widget-close").focus();
  }
  document.addEventListener("click",function(ev){
    if(ev.target.closest&&ev.target.closest(".swap-submit, .btn-wallet")){ev.preventDefault();ev.stopPropagation();open();}
  },true);
  document.getElementById("murdilimax-widget-close").addEventListener("click",close);
  overlay.addEventListener("click",ev=>{if(ev.target===overlay)close();});
  document.addEventListener("keydown",ev=>{if(ev.key==="Escape"&&overlay.classList.contains("is-open"))close();});
})();