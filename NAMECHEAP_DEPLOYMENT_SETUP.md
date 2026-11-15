# Website deployments

| Public site | Source | Namecheap document root, relative to the hosting home | Workflow |
| --- | --- | --- | --- |
| [Murdilimax Swap](https://murdilimax-swap.com/) | [binans-salik/swap](https://github.com/virus53111/binans-salik/tree/main/swap) | public_html | [Swap Actions](https://github.com/virus53111/binans-salik/actions/workflows/namecheap-swap-deploy.yml) |
| [CenaRadar](https://cenaradar.online/) | [Salik](https://github.com/virus53111/Salik) | cenaradar.online | [CenaRadar Actions](https://github.com/virus53111/Salik/actions/workflows/namecheap-deploy.yml) |
| [Murdilimax — The Answer Atlas](https://murdilimax.com/) | [dogizen](https://github.com/virus53111/dogizen) | murdilimax.com | [Atlas Actions](https://github.com/virus53111/dogizen/actions/workflows/namecheap-deploy.yml) |

Namecheap Stellar Plus hosts the sites in separate cPanel roots. The public Atlas hostname remains on GitHub Pages while the registrar transfer is pending. The Atlas copy can be checked at [the preview](https://atlas-preview.murdilimax-swap.com/). Keep the existing Pages and Render services available for rollback. Murdilimax Forms is a separate legacy project.

## Build and publish

- Swap runs `node swap/build.cjs` and uploads `swap/dist`. Production requires the THORChain affiliate widget key in GitHub Actions Secrets. The key is intentionally embedded in the browser widget configuration, so handle it as a client identifier and keep it out of source control and logs.
- CenaRadar runs `node scripts/build-namecheap.mjs` and uploads the static build, including the custom 404 and analytics consent code.
- Atlas runs the repository's Node.js 22 build and publishes the static output. The GitHub Pages workflow continues while the public domain uses Pages.

Each repository has its own SSH key and the pinned server public key in Actions Secrets. The hosting server forces a site-specific command; the deploy key cannot start a shell or select another site's location. Manual `test` runs write to a private preview folder under `~/.namecheap-automation/previews`. The job verifies the destination identity and SHA-256 of the transferred home page. A push to `main` can publish to the public directory once the repository variable `NAMECHEAP_DEPLOY_ENABLED` is `true` and the corresponding server flag exists. The server checks the document-root marker for the same domain.

## Backups and rollback

The server creates an archive of the current root under `~/.namecheap-automation/backups` before applying a production release. Uploads preserve server-managed files and do not delete absent files. For rollback, pause deployment for the affected site, identify the previous archive, verify its contents and document root, and restore the affected site. Use the saved DNS values and the previous hosting service if the rollback involves DNS. Check HTTPS, representative paths, and the site's primary function after restoration.

Atlas production should be enabled only after checking the registered domain, adding it in cPanel with its correct root, and verifying DNS and TLS. Existing domains, DNS records, and hosting services are managed separately from the workflows.
