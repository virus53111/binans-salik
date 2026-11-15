# Namecheap deployment handoff — three isolated websites

Updated 2026-11-15. This file documents the **prepared but deliberately disabled** GitHub Actions deployments. No website has been migrated or changed by these workflows yet.

| Domain | Source repository | Deployment workflow | Source folder / build | Current publishing to keep until tested |
| --- | --- | --- | --- | --- |
| murdilimax.com | virus53111/dogizen | .github/workflows/namecheap-deploy.yml | npm run build → dist/ | GitHub Pages |
| cenaradar.online | virus53111/Salik | .github/workflows/namecheap-deploy.yml | tracked web content from repo root | Render (connection still needs verification) |
| murdilimax-swap.com | virus53111/binans-salik | .github/workflows/namecheap-swap-deploy.yml | node swap/build.cjs → swap/dist/ | Existing live destination must be verified |

Do **not** use the old Murdilimax Forms project for murdilimax.com.

## What is finished
- Three GitHub workflows exist, separated by repository/domain.
- Each runs after a push to main **only when** the repository variable `NAMECHEAP_DEPLOY_ENABLED` is set to `true`. It can also be started manually once enabled.
- Each checks the destination directory and demands a site-specific remote file `.deploy-domain` with exactly its domain name. This prevents accidental uploads into an unverified hosting folder.
- Uploads use SSH and rsync without `--delete` and do not update DNS.

## Connection requirements (not done yet)
1. Identify the correct domain's document root in Namecheap cPanel → Domains. Take backups before publishing.
2. Verify a Namecheap hosting package exists and SSH access is enabled (cPanel → Manage Shell; shared hosting port often 21098).
3. Set up a **dedicated deployment SSH key pair**. Authorize the public key in cPanel; put the private key only in GitHub Actions secrets. Never paste the private key, password, API key, or recovery codes into chat or a repository.
4. Obtain and independently verify the server's SSH host key fingerprint. Store the matching known_hosts line as an Actions secret (do not blindly trust an unverified ssh-keyscan output).
5. Place `.deploy-domain` containing only the domain name (e.g. `murdilimax.com`) in each correct document root.
6. In the **correct source repository** → Settings → Secrets and variables → Actions, add repository secrets:
   - `NAMECHEAP_SSH_HOST` — actual Namecheap server hostname
   - `NAMECHEAP_SSH_USER` — cPanel SSH username
   - `NAMECHEAP_SSH_PORT` — normally 21098 on shared hosting (confirm for plan)
   - `NAMECHEAP_SSH_KEY` — dedicated private SSH deploy key
   - `NAMECHEAP_SSH_KNOWN_HOSTS` — verified known_hosts entry for that hostname and port
   - `NAMECHEAP_SITE_DIR` — exact document root, e.g. /home/account/public_html/other-domain (no trailing slash)
   - For `binans-salik` only: `THORCHAIN_AFFILIATE_KEY` (the widget exposes this identifier client-side; never supply wallet private keys or signing secrets)
7. After verifying the target and taking a backup, add repository **variable** `NAMECHEAP_DEPLOY_ENABLED` = `true`; trigger the workflow manually once, verify the result, then ordinary pushes to main will deploy automatically.

Security: Do not copy account-wide or application signing credentials into GitHub. The SSH deploy key has broad cPanel access, so keep it restricted, stored only as a GitHub secret, and rotate if exposed. The workflows do not delete old remote files; obsolete pages may need careful cleanup after migration.

Registrar transfer vs hosting: Transferring a domain registration to Namecheap does **not** automatically move its DNS or files. Leave the current GitHub Pages / Render domain routing unchanged until the Namecheap copy is verified. DNS changes, SSL and redirects are separate cutover steps.
