# Website hosting and deployment

Status recorded 2026-11-15. The workflow changes in this branch validate builds. Production deployment remains disabled pending the SSH and staging tests.

| Website | Source of truth | Public serving destination | Namecheap document root relative to hosting account |
| --- | --- | --- | --- |
| [Murdilimax — The Answer Atlas](https://murdilimax.com/) | [dogizen](https://github.com/virus53111/dogizen), main | GitHub Pages while registrar transfer is pending | `murdilimax.com/` |
| [CenaRadar](https://cenaradar.online/) | [Salik](https://github.com/virus53111/Salik), main | Namecheap, with the Render publication retained during verification and for rollback | `cenaradar.online/` |
| [Murdilimax Swap](https://murdilimax-swap.com/) | [binans-salik](https://github.com/virus53111/binans-salik), main, `swap/` | Namecheap, with the Render publication retained for rollback | `public_html/` |

Murdilimax Forms on Hatchable is a separate application. Never select it as the source for Answer Atlas.

## Workflow entry points

- [Answer Atlas](https://github.com/virus53111/dogizen/actions/workflows/namecheap-deploy.yml) builds `dist/` using Node.js 22 and `npm run build`. Keep the GitHub Pages workflow and current DNS through cutover.
- [CenaRadar](https://github.com/virus53111/Salik/actions/workflows/namecheap-deploy.yml) builds `dist/` with the tracked site files, the existing analytics consent code, and the custom 404. The previous Render publication was built by `dogizen:price-aggregator-mvp` from pinned Salik source.
- [Swap](https://github.com/virus53111/binans-salik/actions/workflows/namecheap-swap-deploy.yml) builds `swap/dist/` using `node swap/build.cjs`. The validation job uses synthetic client configuration. Production reads the existing `THORCHAIN_AFFILIATE_KEY` from an Actions secret. The client value becomes visible to visitors by design. Keep wallet and signing credentials out of this workflow.

## Activation and rollback

1. Resolve the intended account and target document root in cPanel. Keep archived release files and DNS snapshots outside the web roots.
2. Confirm each target and scope before authorizing dedicated SSH deployment access. Establish the server fingerprint independently and pin it in known_hosts.
3. Run a manual deployment to a separate test destination and verify the served release. Validate target-specific constraints on the server before granting production access.
4. Add a `.deploy-domain` marker with exactly the expected domain to each verified production directory. Set `NAMECHEAP_SSH_HOST`, `NAMECHEAP_SSH_USER`, `NAMECHEAP_SSH_PORT`, `NAMECHEAP_SSH_KEY`, `NAMECHEAP_SSH_KNOWN_HOSTS`, and `NAMECHEAP_SITE_DIR` only in the respective repository's Actions settings. Keep confidential values out of source and logs.
5. Set the repository variable `NAMECHEAP_DEPLOY_ENABLED` only after the deployment test and recovery check. Production runs on main. Uploads retain destination files and delay replacing files until transmission finishes. DNS and certificates are managed separately.
6. For a bad release, restore the saved files for that site. If DNS was changed during migration, retain the previous hosting service and use the saved records to restore its routing.

The Hatchable Forms projects, the Hatchable CenaRadar and Swap projects, and the Render design previews are distinct from the three public sites. Check their domains, APIs, stored data, and references before any archival or deletion.
