# Setup, checks and deploy

Last updated: 2026-10-16

## Run locally

Needs Node.js 18 or newer (Express 5).

```bash
npm install
npm start          # node server.js
```

Open http://localhost:3000. If 3000 is busy, the server tries 3001, 3002 and so on (up to 8 tries) and prints the port. There is no build step: editing `public/index.html` and refreshing is enough.

Environment variables: none.

## Manual checks before pushing

There are no automated tests. Before every push:

1. Open the site locally with DevTools open: the Console must show no errors.
2. Scroll the whole page once: hero animation, text moments, every section reveal, footer.
3. Check phone width (DevTools device toolbar, 390 × 844): mobile menu opens and closes, cards stack, nothing scrolls sideways.
4. Click every nav link and check the scroll lands on the right section.
5. If you changed a number, check it against `docs/kb/NUMBERS.md`.

## Deploy

- Push to `main`. Vercel builds nothing and serves `public/` as a Production deployment (GitHub deployment environment "Production", seen 2026-10-16).
- Check the live site afterwards at https://portfolio-ten-sandy-31hdz6ywb8.vercel.app in a private/incognito window.
- Branch and preview URLs (`portfolio-git-main-…`, `portfolio-<hash>-…`) are behind Vercel login. Never put them in applications.

## Screenshots from a cloud sandbox (for AI sessions)

In Claude's cloud workspace, cdnjs, jsDelivr and Google Fonts are blocked, so the page won't animate there as-is. What worked on 2026-10-16:

1. `npm install gsap@3.12.5 lenis@1.1.20 @fontsource/cormorant-garamond @fontsource/inter @fontsource/jetbrains-mono` in a scratch folder.
2. Run the site with `node server.js`.
3. With Playwright (Python), intercept requests: serve `gsap.min.js`, `ScrollTrigger.min.js`, `lenis.min.js` from `node_modules`, answer `fonts.googleapis.com` with the concatenated `@fontsource` CSS, and serve the font files it points to.
4. Wait for `#loader` to hide, then scroll with `window.lenis.scrollTo(y, {immediate: true, force: true})` and wait ~1.8 s before each screenshot. Use 1440 × 900 and 390 × 844 (scale 2, `is_mobile`).
