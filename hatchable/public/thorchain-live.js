/* Murdilimax live quote overlay — no custody, signing, memo or deposits. */
(function(){
  'use strict';
  const send=document.getElementById('send-currency');
  const receive=document.getElementById('receive-currency');
  const amount=document.getElementById('send-amount');
  const result=document.getElementById('receive-amount');
  const feeLine=document.querySelector('.fee-line');
  const button=document.querySelector('.swap-submit');
  if(!send||!receive||!amount||!result||!feeLine||!button) return;
  const feeTitle=feeLine.querySelector('span');
  const feeValue=feeLine.querySelector('strong');
  if(feeTitle) feeTitle.firstChild.textContent='Affiliate fee quoted ';
  if(feeValue) feeValue.textContent='0.3% (30 bps)';
  const info=document.createElement('div');
  info.id='real-quote-information';
  info.setAttribute('role','status');
  info.setAttribute('aria-live','polite');
  info.innerHTML='<div class="quote-indicator"><span class="quote-pulse"></span><span id="quote-live-status">Connecting to THORChain…</span></div><div class="quote-details" id="quote-live-details"></div><div class="quote-caption">Live quotes include a 0.3% Murdilimax affiliate fee, but <strong>commission is not collected here</strong>. The external THORChain swap link does not carry this affiliate fee. No funds or wallet signatures are requested on this site.</div>';
  feeLine.insertAdjacentElement('afterend',info);
  const style=document.createElement('style');
  style.textContent='#real-quote-information{border:1px solid rgba(88,181,255,.27);border-radius:13px;padding:14px 15px;margin:8px 0 14px;background:linear-gradient(120deg,rgba(40,75,155,.15),rgba(112,56,160,.09));font-size:12px;color:#cdd6ed}.quote-indicator{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:800;color:#a0ddff}.quote-pulse{width:8px;height:8px;border-radius:100%;background:#75d6fd;box-shadow:0 0 11px #4ab1ff;flex:0 0 8px}.quote-details{font-family:inherit;font-size:12px;line-height:1.6;margin-top:8px;white-space:pre-line}.quote-caption{font-size:10px;line-height:1.5;color:#b5bad2;margin-top:7px}.quote-fail .quote-pulse{background:#ffa16b;box-shadow:0 0 10px #ff9d78}.quote-fail .quote-indicator{color:#ffcbac}.quote-live .quote-pulse{background:#65f5d0;box-shadow:0 0 12px #2afac0}.quote-live .quote-indicator{color:#8fffe0}';
  document.head.appendChild(style);
  const status=document.getElementById('quote-live-status');
  const details=document.getElementById('quote-live-details');
  button.textContent='Continue to THORChain ↗';
  button.title='Opens external THORChain Swap. Murdilimax affiliate configuration does not carry over to that site.';
  let seq=0, timer=null, latest=null;
  const assets={
    BTC:'BTC.BTC',ETH:'ETH.ETH',
    USDT:'ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7',
    USDC:'ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48',
    BNB:'BSC.BNB',SOL:'SOL.SOL'
  };
  function state(text,kind){
    info.className=kind||'';
    status.textContent=text;
  }
  function reset(){
    latest=null;
    result.textContent='—';
    details.textContent='';
  }
  async function getQuote(){
    const mine=++seq, input=amount.value.trim().replace(',','.');
    reset();
    if(send.value===receive.value) {state('Choose two different assets','quote-fail');return;}
    if(!/^\d{1,9}(?:\.\d{1,8})?$/.test(input)||Number(input)<=0){
      state('Enter a valid positive amount (max 8 decimals)','quote-fail');return;
    }
    state('Requesting live quote…','');
    try{
      const q=new URLSearchParams({from:send.value,to:receive.value,amount:input});
      const reply=await fetch('/api/quote?'+q.toString(),{headers:{Accept:'application/json'},cache:'no-store'});
      let data=await reply.json();
      if(mine!==seq) return;
      if(!reply.ok||data.status!=='live') throw new Error(data.error||'No live quote available');
      latest={...data,receivedAt:Date.now()};
      result.textContent=Number(data.received).toLocaleString('en-US',{maximumFractionDigits:8});
      const fee=data.outbound_fee===null?'Unavailable':data.outbound_fee+' '+data.to;
      details.textContent='Est. received (after affiliate fee): '+data.received+' '+data.to+'\n0.3% affiliate fee (estimated): '+(data.affiliate_fee??'n/a')+' '+data.to+'\nNetwork outbound fee (estimate): '+fee+'\nLiquidity fee (estimate): '+(data.liquidity_fee??'n/a')+' '+data.to;
      state((data.affiliate_fee_in_quote?'Live quote including 0.3% fee':'Live quote; affiliate fee not verified')+' • '+new Date(data.quoted_at).toLocaleTimeString(),data.affiliate_fee_in_quote?'quote-live':'quote-fail');
    }catch(error){
      if(mine!==seq) return;
      reset();
      state(String(error.message||'THORChain temporarily unavailable').slice(0,180),'quote-fail');
    }
  }
  function refresh(){
    seq++;
    clearTimeout(timer);
    reset();
    state('Updating quote…','');
    timer=setTimeout(getQuote,1250);
  }
  [send,receive].forEach(el=>el.addEventListener('change',refresh));
  amount.addEventListener('input',refresh);
  document.getElementById('swap-reverse').addEventListener('click',refresh);
  document.querySelectorAll('[data-asset]').forEach(el=>el.addEventListener('click',refresh));
  // Capture before the previous preview modal click listener. Never request user funds here.
  button.addEventListener('click',function(event){
    event.preventDefault();event.stopImmediatePropagation();
    if(!latest||Date.now()-latest.receivedAt>90000){
      refresh();window.alert('The quote is missing or expired. Please review the updated quote first.');return;
    }
    const yes=window.confirm('You will leave Murdilimax Swap and open the official THORChain Swap service. That site will recalculate the quote and handle wallet signing. No 0.3% Murdilimax affiliate commission is active yet. Continue?');
    if(!yes)return;
    const link='https://swap.thorchain.org/sell-'+encodeURIComponent(assets[send.value])+'-buy-'+encodeURIComponent(assets[receive.value]);
    window.location.assign(link);
  },true);
  refresh();
})();