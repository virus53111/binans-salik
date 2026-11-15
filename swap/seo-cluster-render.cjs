/* Hand-authored educational cluster. Only generates static pages, never touches the wallet widget.
 * Do not replace provider quote with simulated exchange rates or fake availability.
 */
const fs=require('node:fs'),path=require('node:path');
const added=[
 ...require('./seo-pairs-a.cjs'),
 ...require('./seo-pairs-b.cjs'),
 ...require('./seo-howto.cjs'),
 ...require('./seo-safety.cjs')
];
const base='https://murdilimax-swap.com';
const existing=[
 {slug:'how-cross-chain-swaps-work',category:'howto',
  en:{h1:'How cross-chain crypto swaps work',description:'Understand cross-chain swaps, wallet authorization, fees and settlement before using an external provider.'},
  ru:{h1:'Как работает кроссчейн-обмен криптовалют',description:'Выбор сети, котировка, комиссии, подтверждение в кошельке и получение криптовалюты.'}},
 {slug:'crypto-swap-fees-and-risks',category:'safety',
  en:{h1:'Crypto swap fees, slippage and wallet safety',description:'Understand network fees, liquidity costs and the main wallet risks before swapping.'},
  ru:{h1:'Комиссии, проскальзывание и безопасность обмена',description:'Какие комиссии бывают при обмене криптовалют и как защитить кошелёк.'}}
];
const all=[...existing,...added];
if(added.length!==13||all.length!==15||new Set(all.map(x=>x.slug)).size!==15)throw Error('Expected exactly 15 non-duplicated topics');
const words={
 en:{home:'Swap interface',hub:'All 15 guides',pair:'Swap directions',howto:'Instructions',safety:'Fees and safety',
  title:'Crypto Swap Guides: BTC, ETH, USDT, USDC | Murdilimax',
  intro:'15 practical crypto swap guides: routes, wallet approvals, network fees, chain selection and ways to identify a delayed transaction.',
  lead:'Learn before sending. Live quotes, rates and the availability of each swap route are determined by the external provider, not these articles.',
  cta:'Check the live swap quote',route:'Illustrative route only; availability is not guaranteed.',
  research:'Official sources',steps:'Checklist before swapping',faq:'Frequently asked questions',related:'Related reading',
  date:'Updated 15 November 2026',disclose:'Murdilimax is an independent interface for an externally hosted THORChain swap widget. The external provider handles rates, wallet connection and execution. This content is educational, not financial advice. Funds can be lost and routes can be unavailable. Never share your seed phrase.',
  note:'The examples here are educational, not live executable quotes.',
  footer:'Browse the guide library',trade:'Open the swap interface'},
 ru:{home:'Обмен криптовалют',hub:'Все 15 статей',pair:'Направления обмена',howto:'Инструкции',safety:'Комиссии и безопасность',
  title:'Инструкции по обмену BTC, ETH, USDT, USDC | Murdilimax',
  intro:'15 полезных инструкций по обмену криптовалют: направления, кошельки, комиссии сетей, выбор токена и проверка задержанных переводов.',
  lead:'Разберитесь до отправки монет. Текущий курс и доступность каждого маршрута показывает внешний поставщик, а не эти статьи.',
  cta:'Проверить актуальный обмен',route:'Направление приведено как пример. Его текущая доступность не гарантируется.',
  research:'Официальные источники',steps:'Что проверить перед обменом',faq:'Частые вопросы',related:'Похожие материалы',
  date:'Обновлено 15 ноября 2026 года',disclose:'Murdilimax — независимый интерфейс к внешнему виджету THORChain. Курс, подключение кошелька и выполнение транзакций обеспечивает внешний поставщик. Материал справочный и не является инвестиционной рекомендацией. Возможны потери и недоступность маршрутов. Никому не передавайте seed-фразу.',
  note:'Статьи объясняют обмен, но не заменяют реальную котировку.',
  footer:'Все инструкции',trade:'Перейти к обмену'}
};
const assetFlows={
 'swap-btc-to-eth':['BTC · Bitcoin','ETH · Ethereum'],
 'swap-eth-to-btc':['ETH · Ethereum','BTC · Bitcoin'],
 'swap-btc-to-usdc-ethereum':['BTC · Bitcoin','USDC · Ethereum'],
 'swap-usdc-ethereum-to-btc':['USDC · Ethereum','BTC · Bitcoin'],
 'swap-eth-to-usdt-ethereum':['ETH · Ethereum','USDT · Ethereum'],
 'swap-usdt-ethereum-to-eth':['USDT · Ethereum','ETH · Ethereum']
};
const css='*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(ellipse 65% 500px at 40% 0,#27215c 0,transparent 80%),#080918;color:#eff3ff;font:16px/1.75 system-ui,Arial,sans-serif}a{color:#90ceff;text-underline-offset:3px}a:hover{color:#fff}a:focus-visible{outline:2px solid #7fdbff;outline-offset:3px}.wrap{max-width:1060px;margin:auto;padding:0 22px}.top{border-bottom:1px solid #3b4667;background:#0c1026}.nav{display:flex;align-items:center;gap:20px;flex-wrap:wrap;min-height:66px}.brand{color:#fff;font-weight:800;letter-spacing:.03em;margin-right:auto;text-decoration:none}.nav a:not(.brand){color:#c4d4f7;text-decoration:none}.eyebrow{font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.15em;color:#9fdcf3}h1{font-size:clamp(32px,5vw,53px);line-height:1.16;letter-spacing:-.04em;margin:12px 0 20px}h2{font-size:clamp(22px,3vw,27px);line-height:1.3;margin:37px 0 13px}h3{font-size:18px;line-height:1.35;margin:5px 0}p{color:#c6d0e9}.intro{font-size:19px;color:#e3e9fa;max-width:770px}.hero{padding:44px 0 26px}.button{display:inline-block;padding:12px 22px;border-radius:12px;font-weight:750;text-decoration:none;color:#fff;background:linear-gradient(110deg,#366de4,#8461d9)}.button:hover{color:#fff;filter:brightness(1.1)}.quiet{color:#a4b2d1;font-size:13px}.note{background:#151d3b;border-left:3px solid #7bcbff;border-radius:0 11px 11px 0;padding:11px 16px;margin:18px 0 25px;color:#d4ddf2;font-size:14px}.flow{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:22px 0 7px}.pill{padding:9px 14px;background:#181f41;border:1px solid #586c99;border-radius:12px;font-weight:750}.arrow{font-size:24px;color:#91cfff}.article{max-width:850px;margin:auto;padding:0 22px 65px}.article section p{line-height:1.85;font-size:17px}.divider{padding-top:16px;border-top:1px solid #3c4567;margin-top:38px}.checks{list-style:none;counter-reset:check;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,235px),1fr));gap:12px}.checks li{counter-increment:check;padding:16px;border:1px solid #424e73;border-radius:12px;background:#151a35}.checks li:before{content:counter(check,decimal-leading-zero);display:block;color:#93cfff;font-weight:800;margin-bottom:8px}.faqbox{border:1px solid #404b6f;background:#13182f;border-radius:12px;padding:18px;margin:12px 0}.faqbox p{margin:3px 0}.refs li{margin:9px 0;overflow-wrap:anywhere}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,265px),1fr));gap:15px;margin:18px 0 40px}.card{text-decoration:none;padding:19px 21px;border:1px solid #465176;border-radius:15px;background:#141a35;display:block}.card:hover{background:#1b2247;border-color:#a7b9ff}.card strong{display:block;font-size:17px;line-height:1.4;color:#f3f6ff}.card span{font-size:11px;color:#a8cfff;text-transform:uppercase;letter-spacing:.12em}.card p{font-size:14px;margin:8px 0 0}.panel{border:1px solid #6578a6;background:linear-gradient(110deg,#1b2146,#131b34);border-radius:17px;padding:22px;margin:45px 0}.panel h2{margin:0 0 12px}.hub{max-width:1080px;margin:auto;padding:0 22px 70px}.hubsection{border-top:1px solid #3c4567;margin:44px 0}footer{border-top:1px solid #3b4667;padding:20px 0;font-size:13px}footer p{font-size:13px;color:#a4b2d1}@media(max-width:590px){.nav{gap:13px;padding:15px 0}.brand{width:100%;font-size:14px}.intro{font-size:17px}.hero{padding-top:30px}.article section p{font-size:16px}}';
const escape=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const url=(lang,slug)=>'/'+(lang==='ru'?'ru/':'')+'guides/'+(slug?slug+'/':'');
const full=(lang,slug)=>base+url(lang,slug);
const cat=(lang,category)=>category==='pairs'?words[lang].pair:category==='howto'?words[lang].howto:words[lang].safety;
function meta(lang,title,description,route,kind){
 const en=base+route.replace(/^\/ru\//,'/'),ru=base+(route.startsWith('/ru/')?route:'/ru'+route);
 const schema={'@context':'https://schema.org','@type':kind==='article'?'Article':'CollectionPage',name:title,headline:title,description,url:base+route,inLanguage:lang,
 ...(kind==='article'?{datePublished:'2026-11-15',dateModified:'2026-11-15',author:{'@type':'Organization',name:'Murdilimax Swap'}}:{}),isPartOf:{'@type':'WebSite',name:'Murdilimax Swap',url:base+'/'}};
 return '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#080918">'+
 '<title>'+escape(title)+'</title><meta name="description" content="'+escape(description)+'"><meta name="robots" content="index,follow,max-image-preview:large">'+
 '<link rel="canonical" href="'+escape(base+route)+'"><link rel="alternate" hreflang="en" href="'+escape(en)+'"><link rel="alternate" hreflang="ru" href="'+escape(ru)+'"><link rel="alternate" hreflang="x-default" href="'+escape(en)+'">'+
 '<meta property="og:type" content="'+(kind==='article'?'article':'website')+'"><meta property="og:site_name" content="Murdilimax Swap"><meta property="og:title" content="'+escape(title)+'"><meta property="og:description" content="'+escape(description)+'"><meta property="og:url" content="'+escape(base+route)+'"><meta name="twitter:card" content="summary">'+
 '<script type="application/ld+json">'+JSON.stringify(schema).replace(/</g,'\\u003c')+'</script><style>'+css+'</style>';
}
function shell(lang,title,description,route,body,kind){
 const l=words[lang],other=lang==='ru'?'en':'ru',otherUrl=route.startsWith('/ru/')?route.replace(/^\/ru/,''):'/ru'+route;
 return '<!doctype html><html lang="'+lang+'"><head>'+meta(lang,title,description,route,kind)+'</head><body>'+
 '<header class="top"><nav class="wrap nav" aria-label="Site navigation"><a class="brand" href="/">◈ MURDILIMAX SWAP</a>'+
 '<a href="/#swap-widget">'+escape(l.home)+'</a><a href="'+url(lang)+'">'+escape(l.hub)+'</a><a href="'+otherUrl+'" hreflang="'+other+'">'+(lang==='ru'?'English':'Русский')+'</a></nav></header>'+
 body+'<footer><div class="wrap"><p>'+escape(l.disclose)+'</p><a href="'+url(lang)+'">'+escape(l.footer)+'</a> · <a href="/#swap-widget">'+escape(l.trade)+'</a></div></footer></body></html>';
}
function card(lang,g){
 const d=g[lang];
 return '<a class="card" href="'+url(lang,g.slug)+'"><span>'+escape(cat(lang,g.category))+'</span><strong>'+escape(d.h1)+'</strong><p>'+escape(d.description)+'</p></a>';
}
function article(lang,g){
 const d=g[lang],l=words[lang],asset=assetFlows[g.slug];
 const flow=asset?'<div class="flow"><span class="pill">'+escape(asset[0])+'</span><span class="arrow" aria-hidden="true">→</span><span class="pill">'+escape(asset[1])+'</span></div><p class="quiet">'+escape(l.route)+'</p>':'';
 const secs=d.sections.map(p=>'<section><h2>'+escape(p[0])+'</h2><p>'+escape(p[1])+'</p></section>').join('');
 const checks='<section class="divider"><h2>'+escape(l.steps)+'</h2><ol class="checks">'+d.checks.map(x=>'<li>'+escape(x)+'</li>').join('')+'</ol></section>';
 const faq='<section class="divider"><h2>'+escape(l.faq)+'</h2>'+d.faq.map(p=>'<div class="faqbox"><h3>'+escape(p[0])+'</h3><p>'+escape(p[1])+'</p></div>').join('')+'</section>';
 const refs='<section class="divider"><h2>'+escape(l.research)+'</h2><ul class="refs">'+g.sources.map(p=>'<li><a target="_blank" rel="noopener noreferrer" href="'+escape(p[1])+'">'+escape(p[0])+'</a></li>').join('')+'</ul></section>';
 const relatives=all.filter(x=>x.slug!==g.slug&&x.category===g.category).slice(0,4);
 const related='<section class="divider"><h2>'+escape(l.related)+'</h2><div class="cards">'+relatives.map(x=>card(lang,x)).join('')+'</div><p><a href="'+url(lang)+'">'+escape(l.hub)+'</a></p></section>';
 const hero='<header class="hero"><p class="eyebrow">'+escape(cat(lang,g.category))+' · '+escape(l.date)+'</p><h1>'+escape(d.h1)+'</h1><p class="intro">'+escape(d.lead)+'</p>'+flow+'<a class="button" href="/#swap-widget">'+escape(l.cta)+'</a><p class="quiet">'+escape(l.note)+'</p></header>';
 const closing='<aside class="panel"><h2>'+escape(l.trade)+'</h2><p>'+escape(l.disclose)+'</p><a class="button" href="/#swap-widget">'+escape(l.cta)+'</a></aside>';
 const body='<main class="article">'+hero+secs+checks+faq+refs+closing+related+'</main>';
 return shell(lang,d.title,d.description,url(lang,g.slug),body,'article');
}
function hub(lang){
 const l=words[lang];
 const body='<main class="hub"><header class="hero"><p class="eyebrow">MURDILIMAX SWAP · '+escape(l.date)+'</p><h1>'+escape(l.intro)+'</h1>'+
 '<p class="intro">'+escape(l.lead)+'</p><p class="note">'+escape(l.disclose)+'</p><a class="button" href="/#swap-widget">'+escape(l.cta)+'</a></header>'+
 ['pairs','howto','safety'].map(g=>'<section class="hubsection"><h2>'+escape(cat(lang,g))+'</h2><div class="cards">'+all.filter(x=>x.category===g).map(x=>card(lang,x)).join('')+'</div></section>').join('')+
 '<aside class="panel"><h2>'+escape(l.trade)+'</h2><p>'+escape(l.disclose)+'</p><a class="button" href="/#swap-widget">'+escape(l.cta)+'</a></aside></main>';
 return shell(lang,l.title,l.intro,url(lang),body,'collection');
}
function writeSEOCluster(outputDir){
 const write=(rel,content)=>{const dest=path.join(outputDir,rel);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,content,'utf8')};
 for(const lang of ['en','ru']){
  const prefix=lang==='ru'?'ru/':'';
  write(prefix+'guides/index.html',hub(lang));
  for(const g of added)write(prefix+'guides/'+g.slug+'/index.html',article(lang,g));
 }
 // The root English page and Russian overview already exist in the previous build step.
 const entries=['/','/ru/','/guides/','/ru/guides/'];
 for(const g of all)entries.push(url('en',g.slug),url('ru',g.slug));
 if(entries.length!==34||new Set(entries).size!==34)throw Error('Duplicate canonical URLs');
 const xml=s=>escape(s);
 const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+
 entries.map(route=>{
  const en=route.startsWith('/ru/')?route.replace(/^\/ru/,''):route,ru=en==='/'?'/ru/':'/ru'+en;
  return '<url><loc>'+xml(base+route)+'</loc><lastmod>2026-11-15</lastmod>'+
  '<xhtml:link rel="alternate" hreflang="en" href="'+xml(base+en)+'"/>'+
  '<xhtml:link rel="alternate" hreflang="ru" href="'+xml(base+ru)+'"/>'+
  '<xhtml:link rel="alternate" hreflang="x-default" href="'+xml(base+en)+'"/></url>';
 }).join('\n')+'\n</urlset>\n';
 write('sitemap.xml',sitemap);
 write('robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n');
 console.log('SEO CLUSTER: 15 topics in both languages, 2 hubs, 34 canonical URLs');
}
module.exports={writeSEOCluster,added,all};
