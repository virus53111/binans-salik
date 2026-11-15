# Murdilimax Swap — standalone static hosting

A static-only version of the existing visual site for deployment **separately**
from murdilimax.com and cenaradar.online.

## Render Static Site (free)

- GitHub repository: `https://github.com/virus53111/binans-salik`
- Branch: `main`
- **Build command:** `node swap/build.cjs`
- **Publish directory:** `swap/dist`
- Environment variable: `THORCHAIN_AFFILIATE_KEY` (set in the Render dashboard,
  **not** in GitHub).

This site is designed for Render Static Sites and their included free tier (subject
to usage limits). The key is baked into the browser widget's configuration on build,
because THORChain's own official widget requires a client-side `apiKey`.
It must be treated as a **public/reusable affiliate client identifier**, not as
a confidential signing credential. Prefer a dedicated, rotated/restricted key.
Never put a seed phrase, wallet private key, or other credential in this variable.

## Product behavior

The single **Swap crypto** action opens the officially hosted THORChain swap
widget. Quotes and wallet signing happen inside that widget. The user's own
wallet authorizes all transfers; this website never requests a seed phrase.
The 0.3% fee is configured separately in the THORChain affiliate dashboard,
and routes/payouts must be verified with the provider before commercial launch.

The static landing page does not call the old Hatchable `/api/quote` endpoint
and has no server-side transaction handling. Do not add unverified deposit
addresses, transaction memos, or pretend swap completion without chain proof.

## Project isolation

This site is in `swap/`. Nothing in `dogizen` (murdilimax.com) or
`Salik` (cenaradar.online) is modified.
