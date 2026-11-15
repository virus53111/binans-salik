const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'dist');
const html=p=>fs.readFileSync(path.join(root,p),'utf8');
const expected=[
 ['index.html','https://murdilimax-swap.com/','en'],
 ['ru/index.html','https://murdilimax-swap.com/ru/','ru'],
 ['guides/how-cross-chain-swaps-work/index.html','https://murdilimax-swap.com/guides/how-cross-chain-swaps-work/','en'],
 ['ru/guides/how-cross-chain-swaps-work/index.html','https://murdilimax-swap.com/ru/guides/how-cross-chain-swaps-work/','ru'],
 ['guides/crypto-swap-fees-and-risks/index.html','https://murdilimax-swap.com/guides/crypto-swap-fees-and-risks/','en'],
 ['ru/guides/crypto-swap-fees-and-risks/index.html','https://murdilimax-swap.com/ru/guides/crypto-swap-fees-and-risks/','ru'],
];
for(const [file,url,lang] of expected){
 const page=html(file);
 assert.match(page,/<h1\b/i,'Missing h1 '+file);
 assert.match(page,new RegExp('<html lang="'+lang+'"'),'Wrong html language '+file);
 assert(page.includes('rel="canonical" href="'+url+'"'),'Wrong canonical '+file);
 assert(/<meta name="description" content="[^"]{65,220}"/.test(page),'Missing useful description '+file);
 assert(!/<meta name="robots" content="noindex/.test(page),'Noindex in live page '+file);
 assert(page.includes('<meta property="og:url" content="'+url+'"'),'Wrong social canonical '+file);
}
const map=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const [,url] of expected)assert(map.includes('<loc>'+url+'</loc>'),'Missing sitemap '+url);
assert.equal((map.match(/<loc>/g)||[]).length,expected.length,'Sitemap contains unknown or repeated URLs');
const robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');
assert(robots.includes('Sitemap: https://murdilimax-swap.com/sitemap.xml'));
assert(!/Disallow:\s*\//.test(robots));
const homepage=html('index.html');
assert(homepage.includes('/guides/crypto-swap-fees-and-risks/'),'Homepage does not link to risk guide');
for(const name of ['widget.js','i18n.js','config.js'])assert(fs.existsSync(path.join(root,name)),name+' missing');
assert(html('index.html').includes('src="./widget.js"'),'Existing widget hook was changed');
console.log('PASS: 6 indexable SEO pages, internal links, crawler directives, sitemap, and original widget assets.');
