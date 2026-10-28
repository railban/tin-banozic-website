# tin-banozic.from.hr

Personal website for Tin Banozic, served by the Cloudflare Worker `tin-banozic`.

- `index.html`: the page
- `img/`: profile photo (`avatar.webp`) and site icons (`favicon.png`, `apple-touch-icon.jpg`)
- `worker.js`: serves the page and images
- `wrangler.jsonc`: Worker config with custom domains `tin-banozic.from.hr` and `www.tin-banozic.from.hr`

## Deploys

Automatic: Cloudflare Workers Builds is connected to this repo. Push or merge to `main` and Cloudflare runs `npx wrangler deploy`; the live site updates in about two minutes. Other branches get preview builds only.

## Cloudflare zone setup (same as bregly.com and marichoo.com)

- Redirect Rule "www to tin-banozic.from.hr": `https://www.*` → `https://${1}` (301, keeps query string)
- SSL: Full (strict), Always Use HTTPS, minimum TLS 1.2, Early Hints on
- Bot Fight Mode on
- Email Routing: `hello@tin-banozic.from.hr` → my personal Gmail, with MX/SPF/DKIM (added by Cloudflare) and a strict DMARC record
