# Murdilimax Swap: Work handoff for Namecheap publication

Prepared on 2026-11-15. **This guide describes a future deployment; merging GitHub does not upload files to Namecheap.**

## Source of truth and expected output

- Domain: **https://murdilimax-swap.com/**
- GitHub repository: **virus53111/binans-salik**, branch **main**.
- Correct source: **swap/** (NOT the obsolete root-level preview, Hatchable Forms, or another website).
- Build: **node swap/build.cjs** with environment variable **THORCHAIN_AFFILIATE_KEY** taken from the project's secure Actions secret. Do not invent a value or substitute the 64-zero test identifier in production.
- Output: **swap/dist/**. It includes the current partner widget, `config.js`, English/Russian guides, `robots.txt`, `sitemap.xml`, and assets.
- Expected static SEO: 15 distinct guide topics × 2 languages, two language guide hubs, and the two homepages = **34 sitemap URLs**.
- Workflow validation: `.github/workflows/swap-seo-check.yml`, including `node swap/seo-test.cjs` and 15-topic content assertions.
- Current guarded production job: `.github/workflows/namecheap-swap-deploy.yml`. It deliberately skips unless the repository variable `NAMECHEAP_DEPLOY_ENABLED=true` and SSH/secrets are configured.

## Exact task for ChatGPT Work in connected browser

1. Inspect Namecheap cPanel to identify the actual **murdilimax-swap.com** document root and SSH account. **Do not assume `public_html` without checking the domain mapping.** Back up the existing production files and preserve the existing working widget.
2. Inspect GitHub repository Actions secrets/variables securely. If the source affiliate API key, authorized SSH key, verified host fingerprint, or target document root is missing, configure via GitHub settings and Namecheap cPanel as needed, with the user's authorization. Never paste private SSH keys, wallet seed phrases or API secrets into messages, public repos, logs or GitHub issues.
3. Verify the target belongs to the **swap** domain. The deployment workflow expects a remote `.deploy-domain` marker containing `murdilimax-swap.com`. Create it only in the independently verified document root. Existing workflow purposely rejects unverified targets.
4. Run a fresh build with the **correct real** affiliate API credential (never the dummy test identifier), confirm site files and `config.js` are generated, and verify the iframe source points to the actual official THORChain widget. The presence of a key in JS does not guarantee real affiliate payout; verify partner dashboard separately.
5. Deploy **only** `swap/dist/` to the verified root using the guarded workflow or a controlled equivalent. Preserve important server configuration and existing data. Do **not** touch `murdilimax.com` or `cenaradar.online`, and do not replace the swap site with the obsolete root preview. Do not use an unverified SSH host key or broad `rsync --delete`.
6. Confirm from the **public domain** (not just GitHub Actions) that `/`, `/ru/`, `/guides/`, `/ru/guides/`, `/sitemap.xml`, `/robots.txt`, `/guides/swap-btc-to-eth/`, and `/ru/guides/swap-btc-to-eth/` return 200 with correct canonical and visible content. Ensure the sitemap contains 34 URLs. Test mobile rendering and the visible swap button/iframe without risking actual funds.
7. Once the live files are confirmed accessible, submit `https://murdilimax-swap.com/sitemap.xml` to Google Search Console and Yandex Webmaster using the owner's verified properties. Publishing a sitemap assists discovery but does not guarantee indexing, rankings, or traffic.
8. Only enable automatic production deployments after the correct target, key, backup, rollback procedure, and secure credentials have all been verified. Keep tests and production operations separate. Report any missing access honestly.

## Compliance / content details

- Static SEO articles are educational. No fabricated exchange quotes, fixed fee promises, profitability claims or claims of complete anonymity.
- Routes and third-party widget functionality must be verified live when a user opens a quote.
- Existing articles use original English and Russian explanations. Their sources are official THORChain, Bitcoin, Ethereum, and Tether references.
- **Do not perform a real exchange using the owner's or anyone else's funds as a deployment test without explicit authorization.**

## Expected end-state

Visitors can discover 15 useful topics in their own language, navigate the 34 crawlable SEO URLs and move from a guide to the existing THORChain-powered swap interface. Owner's affiliate payouts, provider availability, and Google/Yandex indexation still require real-world checks.
