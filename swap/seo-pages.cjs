/* Original, multilingual SEO pages for Murdilimax Swap.
 * No remote content scraping, invented rates, guaranteed settlement, or fabricated reviews.
 * The only transaction entry point is the pre-existing THORChain widget on '/'.
 */
const fs = require('node:fs');
const path = require('node:path');

const base = 'https://murdilimax-swap.com';
const guidePaths = ['how-cross-chain-swaps-work','crypto-swap-fees-and-risks'];
const esc = text => String(text).replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const copy = {
  en: {
    site: 'Murdilimax Swap',
    home: 'Crypto swap interface',
    langSwitch: 'Русский',
    swap: 'Explore swap interface',
    buy:'Buy crypto on Bybit',
    buyNote:'External service · Referral link · Availability varies by location',
    learn: 'Learn before swapping',
    disclaimer: 'Murdilimax is an independent interface to an externally hosted THORChain widget. The external service handles quotes, wallet authorization and execution. This information is educational, not financial advice. Assets and routes may be unavailable, and losses are possible.',
    navigation: 'Guides and safety',
    links: ['How cross-chain swaps work','Crypto swap fees and risks'],
    index: {
      title:'Обмен криптовалют через THORChain | Murdilimax Swap',
      description:'Некастодиальный обмен криптовалют: как работают кроссчейн-свопы, комиссии и подтверждение операций в кошельке. Информация о Murdilimax Swap.',
    },
    guides:[
      {
        title:'How Do Cross-Chain Crypto Swaps Work? | Murdilimax Swap',
        h1:'How cross-chain crypto swaps work',
        description:'A practical guide to cross-chain swaps, wallet confirmation, transaction quotes and settlement. Understand the process before using Murdilimax Swap.',
        lead:'Cross-chain swaps allow a user to exchange supported digital assets across different blockchain networks. The practical details depend on which routes are currently available, the connected wallet, network conditions and the external swap service.',
        sections:[
          ['1. Choose the asset and network','Start by identifying the cryptocurrency you own and the asset you want to receive. The asset name alone may be insufficient: network versions and token contracts can differ. Use the asset and chain selectors in the actual swap widget rather than assuming that a token displayed in a marketing section is tradable at this moment.'],
          ['2. Examine the live quote','A swap quote estimates the received amount and may include provider, network and affiliate fees. Quotes can expire or change as liquidity and market prices move. Look at the minimum amount, route details, estimated output, fees and any warnings shown by the transaction provider. A design preview is not an executable quote.'],
          ['3. Approve using your own wallet','In a non-custodial flow, you control authorization through your wallet. A wallet may request a connection, a message signature or an on-chain approval depending on the route. Read the actual request and destination carefully. Never enter your recovery phrase or private key into a website, chat window or support form.'],
          ['4. Allow for blockchain settlement','After approval, transactions can require network confirmations and cross-chain processing. Settlement time is not guaranteed. Congestion, liquidity, chain halts or an unsuccessful route can affect what happens next. Keep the transaction hash and inspect the result with the provider and a trusted block explorer.'],
          ['5. Understand the role of Murdilimax','Murdilimax links to an externally hosted THORChain exchange widget. The widget and its underlying services provide quotes, wallet interaction and execution. Murdilimax is not a bank, does not accept seed phrases and does not independently guarantee execution. Read the widget’s actual terms and the risk disclosures before proceeding.'],
        ],
      },
      {
        title:'Crypto Swap Fees, Slippage & Wallet Risks | Murdilimax',
        h1:'Crypto swap fees, slippage and wallet safety',
        description:'Understand cross-chain swap quotes, network fees, slippage, wallet approvals and transaction risks before you exchange crypto through a third-party widget.',
        lead:'The amount you receive from a crypto swap may differ from a simple market-price calculation. Total cost can include transaction fees, liquidity conditions and price movement during processing.',
        sections:[
          ['What makes up the total swap cost?','A cross-chain exchange can involve source-network fees, destination-network fees, a liquidity or service charge and an affiliate fee where configured. Not every quote includes the same components. Confirm the complete estimated output in the live widget before you approve; do not infer the cost from marketing text or assume a zero-fee route.'],
          ['What is slippage?','Slippage is the difference between the expected exchange rate and the rate ultimately used when an order is processed. It can increase when markets move or available liquidity is limited. Quote tolerances and warnings vary by provider. If a change is larger than you are willing to accept, do not confirm the transaction.'],
          ['How to reduce wallet mistakes','Use the intended blockchain network and double-check any receiving address or wallet connection prompt. Confirm you are on the correct site, examine the domain of any external widget and keep your wallet software updated. Do not share recovery phrases, private signing keys or one-time authentication codes. Be suspicious of anyone offering to “unlock” a pending transfer for an extra payment.'],
          ['When can a swap be delayed or fail?','Blockchain congestion, route unavailability, insufficient balances to cover gas, changing liquidity and network disruptions can prevent execution or change timing. The interface cannot promise instant delivery. Save the transaction identifier and consult the actual provider’s status and support documentation if a route does not finish as expected.'],
          ['How Murdilimax fits into the process','Murdilimax provides an independent route into the THORChain widget. The site itself does not guarantee exchange rates, custody protection, regulatory coverage or successful settlement. Your wallet authorizes transactions within the underlying provider flow. Check the current quote and fee breakdown there before proceeding.'],
        ],
      },
    ]
  },
  ru: {
    site: 'Murdilimax Swap',
    home: 'Обмен криптовалют',
    langSwitch: 'English',
    swap: 'Перейти к обмену',
    buy:'Купить криптовалюту на Bybit',
    buyNote:'Сторонний сервис · Партнёрская ссылка · Доступность зависит от страны',
    learn: 'Разберитесь перед обменом',
    disclaimer: 'Murdilimax — независимый интерфейс к внешнему виджету THORChain. Котировки, подтверждение операций кошельком и выполнение обменов обеспечивает внешний сервис. Информация носит справочный характер и не является инвестиционной рекомендацией. Маршруты могут быть недоступны, а операции сопряжены с рисками.',
    navigation: 'Инструкции и безопасность',
    links: ['Как работает кроссчейн-обмен','Комиссии и риски обмена'],
    index: {
      title:'Обмен криптовалют через THORChain | Murdilimax Swap',
      description:'Узнайте, как устроен некастодиальный обмен криптовалют, какие бывают комиссии и как безопасно подтверждать операции через виджет THORChain.',
      h1:'Обмен криптовалют через Murdilimax Swap',
      lead:'Murdilimax предоставляет доступ к внешнему виджету THORChain для обмена поддерживаемых криптоактивов между блокчейнами. Вы выбираете активы, проверяете доступный маршрут, курс и комиссии, а затем самостоятельно подтверждаете операцию в кошельке.',
      sections:[
        ['Как работает обмен','Сначала выберите актив, который хотите отправить, и криптовалюту, которую хотите получить. Доступные пары и сети зависят от текущих маршрутов внешнего сервиса. Перед подтверждением внимательно проверьте размер операции, сеть, адрес получения, комиссии и ориентировочную итоговую сумму.'],
        ['Кто контролирует криптовалюту','Murdilimax не является кастодиальным кошельком и не запрашивает секретную фразу. Подключение кошелька и подтверждение операций происходят в интерфейсе внешнего поставщика. Никому не сообщайте seed-фразу и приватные ключи, даже если сообщение выглядит как просьба службы поддержки.'],
        ['Почему итоговая сумма может измениться','Расчётный курс зависит от доступной ликвидности, сетевых комиссий и рыночных условий. Время проведения кроссчейн-операции также не гарантируется. Не ориентируйтесь на рекламный текст вместо реальной котировки в виджете.'],
      ]
    },
    guides:[
      {
        title:'Как работает кроссчейн-обмен криптовалют | Murdilimax Swap',
        h1:'Как работает кроссчейн-обмен криптовалют',
        description:'Простое объяснение кроссчейн-свопов: выбор сети, котировка, комиссия, подтверждение в кошельке и получение криптовалюты.',
        lead:'Кроссчейн-обмен — это операция между активами из разных блокчейн-сетей. Пользователь выбирает маршрут и подписывает необходимые действия собственным кошельком, а проведение зависит от внешнего протокола и состояния сетей.',
        sections:[
          ['1. Выберите активы и нужную сеть','Укажите, какую криптовалюту отдаёте и что хотите получить. Не путайте активы с одинаковыми тикерами в разных блокчейнах: у них могут отличаться контракт, сеть и правила передачи. Доступность конкретной пары нужно проверять непосредственно в виджете обмена.'],
          ['2. Проверьте актуальную котировку','Перед обменом внешний сервис показывает предполагаемую сумму получения, комиссии и доступный маршрут. Курс может измениться из-за ликвидности и рыночных условий. Ознакомьтесь с предупреждениями, минимальной суммой и сетевыми комиссиями: оформление сайта само по себе не подтверждает реальную цену.'],
          ['3. Подтвердите операцию кошельком','В некастодиальной модели разрешение на операцию выдаёт пользователь через собственный кошелёк. В зависимости от сети требуется подключение, подпись сообщения или подтверждение блокчейн-транзакции. Проверьте детали запроса. Никогда не сообщайте seed-фразу, приватный ключ или код восстановления.'],
          ['4. Дождитесь обработки в блокчейнах','После подтверждения операция может проходить несколько сетевых этапов. Загруженность блокчейна, доступность маршрута и ликвидность влияют на время завершения. Мгновенное получение не гарантируется. Сохраните идентификатор операции, чтобы при необходимости проверить статус у поставщика и в блокчейн-обозревателе.'],
          ['5. За что отвечает Murdilimax','Murdilimax предоставляет доступ к внешнему виджету THORChain. Котировки, подключение кошелька и выполнение обмена осуществляются внешним сервисом. Сам сайт не гарантирует курс и время завершения и не должен запрашивать у вас секретную фразу. Перед операцией ознакомьтесь с условиями и рисками используемого сервиса.'],
        ],
      },
      {
        title:'Комиссии и риски обмена криптовалют | Murdilimax Swap',
        h1:'Комиссии, проскальзывание и безопасность обмена',
        description:'Какие комиссии бывают при обмене криптовалют между сетями, что такое проскальзывание и как безопасно подтверждать операции кошельком.',
        lead:'Итоговый результат криптовалютного обмена зависит не только от курса. В стоимость могут входить сетевые сборы, комиссия поставщика, условия ликвидности и изменение цены между расчётом и исполнением.',
        sections:[
          ['Из чего складывается комиссия','В зависимости от маршрута могут взиматься сборы исходной и целевой сети, плата за ликвидность, комиссия сервиса и партнёрское вознаграждение. Состав платежей различается. Смотрите полную ожидаемую сумму получения и детализацию непосредственно в виджете перед подтверждением, а не по общему описанию сайта.'],
          ['Что означает проскальзывание','Проскальзывание — разница между предполагаемой ценой обмена и ценой, по которой операция фактически будет исполнена. Оно связано с изменением рынка или ограниченной ликвидностью. Допустимое отклонение зависит от условий поставщика. Если результат вас не устраивает, не подтверждайте транзакцию.'],
          ['Безопасность кошелька и адреса','Тщательно проверяйте выбранную сеть, адрес получения, домен сервиса и запросы кошелька. Используйте актуальную версию кошелька. Никогда не вводите seed-фразу, приватные ключи или одноразовые коды на сайтах и в чатах. Предложения доплатить за «разблокировку» перевода требуют особой осторожности.'],
          ['Почему обмен может задержаться','Причинами задержки могут быть перегрузка сети, недоступность маршрута, недостаток средств для сетевой комиссии, резкое изменение ликвидности и перебои в работе блокчейна. Срок получения не гарантируется. Сохраняйте идентификатор транзакции и проверяйте её статус по официальным каналам поставщика.'],
          ['Роль сайта Murdilimax','Murdilimax — интерфейс перехода к внешнему виджету THORChain. Он не обеспечивает хранение клиентских средств, не обещает фиксированного курса и не гарантирует исполнение транзакций. Самостоятельно проверьте условия поставщика, комиссии и особенности сети до подтверждения обмена.'],
        ],
      },
    ]
  }
};
function document({lang,title,description,canonical,h1,lead,sections,links,guideIndex=-1}) {
 const other=lang==='en'?'ru':'en';
 const rel=canonical.slice(base.length);
 const otherRel=lang==='en'?'/ru'+rel:rel.replace(/^\/ru/,'');
 const alternate='<link rel="alternate" hreflang="'+other+'" href="'+base+otherRel+'">' +
  '<link rel="alternate" hreflang="'+lang+'" href="'+canonical+'">' +
  '<link rel="alternate" hreflang="x-default" href="'+(lang==='en'?canonical:base+otherRel)+'">';
 const c=copy[lang];
 const structured={
   '@context':'https://schema.org','@type':'WebPage',
   name:h1,description,inLanguage:lang,url:canonical,
   isPartOf:{'@type':'WebSite',name:'Murdilimax Swap',url:base+'/'}
 };
 const route=(locale,slug)=>'/' + (locale==='ru'?'ru/':'') + 'guides/' + slug + '/';
 const guideLinks=guidePaths.map((slug,i)=>'<a href="'+route(lang,slug)+'">'+esc(c.links[i])+'</a>').join('');
 const sectionMarkup=sections.map(s=>'<section><h2>'+esc(s[0])+'</h2><p>'+esc(s[1])+'</p></section>').join('\n');
 const alternateButton='<a href="'+(guideIndex<0?other==='ru'?'/ru/':'/':route(other,guidePaths[guideIndex]))+
  '" hreflang="'+other+'">'+esc(c.langSwitch)+'</a>';
 return '<!doctype html><html lang="'+lang+'"><head>'+
  '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+
  '<meta name="theme-color" content="#080916">'+
  '<title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'">'+
  '<meta name="robots" content="index,follow,max-image-preview:large">'+
  '<link rel="canonical" href="'+canonical+'">'+alternate+
  '<meta property="og:type" content="article"><meta property="og:site_name" content="Murdilimax Swap">'+
  '<meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(description)+'">'+
  '<meta property="og:url" content="'+canonical+'"><meta name="twitter:card" content="summary">'+
  '<script type="application/ld+json">'+JSON.stringify(structured).replace(/</g,'\\u003c')+'</script>'+
  '<style>*{box-sizing:border-box}body{margin:0;font:17px/1.75 system-ui,Arial,sans-serif;background:radial-gradient(ellipse at 40% 0,#1b1d49 0,transparent 55%),#080916;color:#eef3ff}a{color:#85d7ff}nav{max-width:1120px;margin:auto;padding:24px;display:flex;gap:24px;flex-wrap:wrap}nav a{color:#ceddff;text-decoration:none}nav a:hover{text-decoration:underline}main{max-width:840px;padding:24px 24px 84px;margin:auto}h1{font-size:clamp(2.2rem,5vw,3.5rem);line-height:1.15;letter-spacing:-.04em}h2{font-size:1.5rem;line-height:1.3;margin:35px 0 12px}p{color:#ccd3ee}.lead{font-size:1.16rem;color:#e1e7fc}.eyebrow{font-size:.8rem;color:#9be1fa;text-transform:uppercase;letter-spacing:.13em;font-weight:bold}.cta{display:inline-block;margin:18px 0;padding:12px 22px;background:linear-gradient(110deg,#2565d5,#8454d9);border-radius:12px;color:white;text-decoration:none;font-weight:700}.panel{margin-top:45px;padding:20px 24px;background:#161a36;border:1px solid #475481;border-radius:16px}.panel p{font-size:.9rem}.panel a{display:inline-block;margin:4px 18px 4px 0}footer{padding:24px;text-align:center;font-size:.9rem;border-top:1px solid #36405e;color:#bdc4db}</style>'+
  '</head><body><nav aria-label="Navigation"><a href="/"><strong>MURDILIMAX SWAP</strong></a>'+
  '<a href="/#swap-widget">'+esc(c.home)+'</a><a href="https://www.bybit.com/invite?ref=XV9EBA&amp;medium=referral&amp;utm_campaign=evergreen" target="_blank" rel="sponsored noopener noreferrer">'+esc(c.buy)+'</a>'+alternateButton+'</nav>'+
  '<main><p class="eyebrow">'+esc(c.learn)+'</p><h1>'+esc(h1)+'</h1>'+
  '<p class="lead">'+esc(lead)+'</p>'+
  '<a class="cta" href="/#swap-widget">'+esc(c.swap)+'</a> <a class="cta" href="https://www.bybit.com/invite?ref=XV9EBA&amp;medium=referral&amp;utm_campaign=evergreen" target="_blank" rel="sponsored noopener noreferrer">'+esc(c.buy)+' ↗</a><p>'+esc(c.buyNote)+'</p>'+
  sectionMarkup+
  '<aside class="panel"><h2>'+esc(c.navigation)+'</h2>'+guideLinks+'<p>'+esc(c.disclaimer)+'</p></aside>'+
  '</main><footer>© Murdilimax Swap · '+esc(c.disclaimer)+'</footer></body></html>';
}
function writeSEOPages(outputDir){
 const write=(relative,text)=>{const dest=path.join(outputDir,relative);
   fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,text,'utf8')};
 const urls=[base+'/'];
 for(const lang of ['en','ru']){
  const c=copy[lang];
  if(lang==='ru'){
   const d=c.index;
   write('ru/index.html',document({lang,title:d.title,description:d.description,canonical:base+'/ru/',
     h1:d.h1,lead:d.lead,sections:d.sections,guideIndex:-1}));
   urls.push(base+'/ru/');
  }
  c.guides.forEach((guide,i)=>{
    const rel=(lang==='ru'?'ru/':'')+'guides/'+guidePaths[i]+'/';
    write(rel+'index.html',document({lang,title:guide.title,description:guide.description,canonical:base+'/'+rel,
      h1:guide.h1,lead:guide.lead,sections:guide.sections,guideIndex:i}));
    urls.push(base+'/'+rel);
  });
 }
 write('robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n');
 const urlsXML=urls.map(u=>'<url><loc>'+esc(u)+'</loc></url>').join('\n');
 write('sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urlsXML+'\n</urlset>\n');
 console.log('SEO pages created: '+urls.length+' canonical URLs, robots.txt and sitemap.xml');
}
module.exports={writeSEOPages};
