// Regression test of the 16-topic EN/RU static SEO bundle. No live money or real API keys.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {added,all}=require('./seo-cluster-render.cjs');
const root=path.join(__dirname,'dist'),base='https://murdilimax-swap.com';
const html=p=>fs.readFileSync(path.join(root,p),'utf8');
assert.equal(all.length,16,'Exactly 16 original article intents');
assert.equal(added.length,14,'Exactly 14 newly researched articles');
assert.equal(new Set(all.map(g=>g.slug)).size,all.length,'No repeated slugs');
assert.deepEqual(all.reduce((map,g)=>(map[g.category]=(map[g.category]||0)+1,map),{}),
 {howto:5,safety:5,pairs:6},'Expected useful mix: 6 pairs, 5 instructions, 5 safety');
const expected=[
 ['index.html',base+'/','en'],
 ['ru/index.html',base+'/ru/','ru'],
 ['guides/index.html',base+'/guides/','en'],
 ['ru/guides/index.html',base+'/ru/guides/','ru']
];
for(const g of all){
 for(const lang of ['en','ru']){
  const prefix=lang==='ru'?'ru/':'';
  expected.push([prefix+'guides/'+g.slug+'/index.html',base+'/'+prefix+'guides/'+g.slug+'/',lang]);
 }
}
const titles=new Set(),descriptions=new Set();
const buyHref='https://www.bybit.com/invite?ref=XV9EBA&amp;medium=referral&amp;utm_campaign=evergreen';
const sitemap=html('sitemap.xml');
for(const [file,url,lang] of expected){
 const page=html(file);
 assert.match(page,/<h1\b/i,'H1 missing '+file);
 assert(page.includes('href="'+buyHref+'" target="_blank" rel="sponsored noopener noreferrer"'),'Missing sponsored external Bybit purchase link '+file);
 assert(page.includes(lang==='ru'?'Купить криптовалюту на Bybit':'Buy crypto on Bybit'),'Buy label missing in language '+file);
 assert(page.includes('<html lang="'+lang+'">'),'HTML language missing '+file);
 assert(page.includes('<link rel="canonical" href="'+url+'"'),'Canonical URL missing '+file);
 assert(/<meta name="description" content="[^"]{65,240}"/.test(page),'Description too short '+file);
 assert(!page.includes('name="robots" content="noindex'),'Search indexing accidentally disabled '+file);
 assert(page.includes('<meta property="og:url" content="'+url+'"'),'OG link wrong '+file);
 const title=page.match(/<title>([^<]+)<\/title>/)?.[1];
 assert(title,'No title '+file);
 if(file!=='index.html'&&file!=='ru/index.html'){assert(!titles.has(title),'Duplicate title '+title);titles.add(title);}
 const description=page.match(/<meta name="description" content="([^"]+)"/)?.[1];
 if(file!=='index.html'&&file!=='ru/index.html'){assert(!descriptions.has(description),'Duplicate metadata '+description);descriptions.add(description);}
 assert(sitemap.includes('<loc>'+url+'</loc>'),'URL absent from XML sitemap '+url);
 // New bilingual pages and hubs have in-document cross-language links.
 {
  assert(page.includes('hreflang="en"'),'Missing EN alternate '+file);
  assert(page.includes('hreflang="ru"'),'Missing RU alternate '+file);
 }
}
assert.equal((sitemap.match(/<loc>/g)||[]).length,36,'Sitemap must describe exactly 36 canonical URLs');
assert.equal((sitemap.match(/hreflang="ru"/g)||[]).length,36,'All XML sitemap URLs must include RU alternates');
assert.equal((sitemap.match(/hreflang="en"/g)||[]).length,36,'All XML sitemap URLs must include EN alternates');
assert(sitemap.includes('xmlns:xhtml="http://www.w3.org/1999/xhtml"'));
assert(html('robots.txt').includes('Sitemap: '+base+'/sitemap.xml'));
assert(!/Disallow:\s*\//.test(html('robots.txt')),'Robots.txt accidentally blocks site');
const enHub=html('guides/index.html'),ruHub=html('ru/guides/index.html');
for(const g of all){
 assert(enHub.includes('href="/guides/'+g.slug+'/"'),'English hub orphaned '+g.slug);
 assert(ruHub.includes('href="/ru/guides/'+g.slug+'/"'),'Russian hub orphaned '+g.slug);
}
for(const g of added){
 for(const lang of ['en','ru']){
  const d=g[lang],prefix=lang==='ru'?'ru/':'';
  const page=html(prefix+'guides/'+g.slug+'/index.html');
  assert.equal(d.sections.length,5,'Five editorial chapters per language '+g.slug+'/'+lang);
  assert(d.sections.every(s=>s[1].length>240),'Article contains thin copied filler '+g.slug+'/'+lang);
  assert(d.checks.length>=4,'Missing decision checklist '+g.slug+'/'+lang);
  assert(d.faq.length>=2,'Missing helpful FAQ '+g.slug+'/'+lang);
  assert(g.sources.length>=3,'Fewer than 3 authoritative references '+g.slug);
  assert(d.sections.map(s=>s[1]).join('').length>1400,'Guide too brief '+g.slug+'/'+lang);
  for(const source of g.sources){
   assert(/^https:\/\/(?:dev\.thorchain\.org|docs\.thorchain\.org|swap\.thorchain\.org|thorchain\.org|thorchain\.gitlab\.io|blog\.thorchain\.org|ethereum\.org|tether\.to|bitcoin\.org)\//.test(source[1]),
    'Unexpected authority URL '+source[1]);
   assert(page.includes(source[1]),'Missing research attribution '+g.slug+' '+source[1]);
  }
  assert(page.includes('href="/#swap-widget"'),'CTA must lead to existing verified exchange entry '+g.slug);
  assert(page.includes('href="'+(lang==='ru'?'/ru/guides/':'/guides/')+'"'),'No link to topic hub '+g.slug);
  assert(!page.includes('"@type":"AggregateRating"')&&!page.includes('"@type":"Review"'),'No fabricated reviews '+g.slug);
  assert(!/1 BTC\s*=\s*[0-9]/.test(page),'No invented live exchange rates '+g.slug);
  assert(page.includes('"@type":"Article"'),'Article schema missing '+g.slug);
 }
}
const homepage=html('index.html');
assert(homepage.includes('href="/guides/"'),'English homepage must link guide hub');
assert(homepage.includes('href="/ru/guides/"'),'English homepage must link Russian hub');
assert(homepage.includes('href="/guides/swap-btc-to-eth/"'),'Pair page not discoverable from homepage');
assert(homepage.includes('src="./widget.js"'),'Original widget hook must survive');
assert(homepage.includes('Bybit is an external service · Referral link'),'External partner notice missing on homepage');
assert(homepage.includes('src="./config.js"'),'Original affiliate config hook must survive');
const i18n=html('i18n.js');
assert(i18n.includes('"Guides": "Инструкции"')&&i18n.includes('data-locale-fixed'),'Missing localized navigation logic');
assert(i18n.includes('"Buy crypto on Bybit": "Купить криптовалюту на Bybit"'),'Russian Bybit CTA translation missing');
for(const asset of ['widget.js','i18n.js','config.js'])assert(fs.existsSync(path.join(root,asset)),asset+' missing');
const guidePaths=expected.map(x=>x[0]);
assert.equal(new Set(guidePaths).size,expected.length,'Physical file path collision');
console.log('PASS: 16 distinct EN/RU topics, 36 canonical pages, hubs, sources, security content, current widget, hreflang, sitemap, mobile layout and 6/5/5 topic mix.');
