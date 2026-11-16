/* Build static files for a free Render Static Site. Never commit API keys to GitHub.
   The THORChain official widget exposes the partner key to the browser by design.
   It is NOT a secret at runtime; use a dedicated, restricted/rotated widget key. */
const fs = require("node:fs");
const path = require("node:path");

const sourceDir = __dirname;
const outputDir = path.join(sourceDir, "dist");
const partnerKey = String(process.env.THORCHAIN_AFFILIATE_KEY || "").trim();

if (!/^[0-9a-f]{64}$/i.test(partnerKey)) {
  console.error("Missing THORCHAIN_AFFILIATE_KEY: configure it in Render's Static Site environment settings.");
  process.exit(1);
}
fs.mkdirSync(outputDir, { recursive: true });
for (const name of ["index.html", "widget.js", "i18n.js", "yandex_1aa9b2313e300d52.html"]) {
  fs.copyFileSync(path.join(sourceDir, name), path.join(outputDir, name));
}
fs.writeFileSync(
  path.join(outputDir, "config.js"),
  "window.MURDILIMAX_AFFILIATE_KEY = " + JSON.stringify(partnerKey) + ";\n"
);
fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");
// Generate the sitemap, robots.txt and real bilingual informational pages.
require("./seo-pages.cjs").writeSEOPages(outputDir);
// Expand the original two guides into a 15-topic bilingual library with source links.
require("./seo-cluster-render.cjs").writeSEOCluster(outputDir);
console.log("Murdilimax Swap static bundle generated (API key masked).");
