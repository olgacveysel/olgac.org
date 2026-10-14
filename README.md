# olgac.org

Static site (plain HTML/CSS/JS, no build step) for Cloudflare Pages.

- Pages: `index.html`, `systopsy.html`, `nobet.html`, `oneglass.html`, `libercast.html`, `404.html`
- Styles: `assets/styles.css` (light/dark themes via CSS variables)
- Theme toggle: `assets/site.js` (follows the OS setting until the visitor picks one; the choice is remembered)
- Product logos: `assets/products/<product>/`
- Social preview image: `assets/og.png` (1200×630)

## Privacy & security

- Fonts (Inter, JetBrains Mono) are self-hosted in `assets/fonts/` (SIL Open Font License). The site makes no requests to third-party servers, so no visitor data goes to Google or anyone else.
- `_headers` sets a strict Content Security Policy plus HSTS, nosniff, frame and referrer protections.
- The CSP allows exactly one inline script: the small theme snippet in each page's `<head>`, pinned by its SHA-256 hash. **If you change that snippet or add another inline script, update the hash in `_headers`**, or the browser will block it. External scripts are only allowed from Cloudflare Web Analytics.

## Brand

- Wordmark: `[olgac]` in JetBrains Mono ExtraBold (800); brackets in teal (`#0d8a7f` on light, `#4fd1c5` on dark), the name in the normal text colour. It's live text in the header and footer, not an image.
- Icon: `assets/brand/olgac-icon.svg` (brackets with a teal status block on a dark tile), also exported as PNG at 180, 512 and 1024 px. `favicon.ico` (16/32/48) is in the site root.
- Use `olgac-icon-512.png` as the GitHub profile/organization avatar.

Open `index.html` directly in a browser to preview locally.

## Deploy to Cloudflare Pages (free)

1. Push this folder to a GitHub repo, e.g. `github.com/olgacveysel/olgac.org`.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: framework preset **None**, build command **empty**, output directory **/**.
4. Deploy. You get `<project>.pages.dev`.
5. Custom domains → add `olgac.org` and `www.olgac.org`.

Without Git: `npx wrangler pages deploy . --project-name olgac-org`

## Free extras

- **Email:** Cloudflare Email Routing → forward `veysel@olgac.org` to your inbox.
- **Analytics:** Cloudflare Web Analytics (cookie-free; enable in the Pages project).
- `_headers` sets basic security headers; `404.html` is served automatically for unknown paths.
