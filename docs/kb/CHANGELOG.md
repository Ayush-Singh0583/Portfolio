# Changelog

Newest first. One entry per working session.

## 2026-10-17 (night) — Hero line, blank-page fix, photo slot
- Question 1 answered: Ayush is applying for SDE (first) and ML engineer (second) roles. Hero role line is now "Software engineer · backend systems & machine learning" (his pick). Meta description and README updated to match. The line is split into two parts so it never leaves one word alone on a line; on phones the parts stack.
- Fixed `GOTCHAS.md` #1: if GSAP or ScrollTrigger doesn't load, the page now shows everything without animations instead of a stuck loader. An 8 s safety timer covers a hanging CDN or any script error.
- Built a professional-photo slot in About ("(MY ONE PROFESSIONAL IMAGE)" placeholder) on branch `photo-slot`, not merged: an empty placeholder would show on the live site.
- Checked at 1440 px and 390 px in three cases (normal, CDN blocked, CDN hanging): no page errors, no sideways scroll, page scrolls to the footer in all cases.
- Vercel skipped the first push to `main`; an empty commit triggered the deploy (`GOTCHAS.md` #15). Live site checked: new hero line shows.
- Added to the to-do list after a look at a friend's portfolio: real project screenshots, and a cleaner domain.

## 2026-10-16 (evening) — Knowledge base
- Added `docs/kb/` (INDEX, OVERVIEW, ARCHITECTURE, SETUP, STATUS, DECISIONS, NUMBERS, GOTCHAS, CHANGELOG), `CLAUDE.md` and `AGENTS.md`.
- Checked the Focus and cache simulator card claims against their repos; all hold (see `NUMBERS.md`). Rewrote the Focus card text to name exactly what the analytics page has: 7-day chart, 30-day completion trend, 52-week heatmap.
- Left: content questions for Ayush (see `STATUS.md`).

## 2026-10-16 (afternoon) — Tea removed, content corrected (commit `7791c8b`)
- Hero: 227-frame tea film replaced by a code-drawn network-traffic canvas; name and role on the first screen; pinned scroll 700% → 400%.
- CGPA 8.71 → 8.74. NIDS card rewritten from the public NIDS repo. Skills updated. Focus and cache simulator cards added. Nav glide capped at 4 s.
- Removed tea frames and images, `resourcess-assets/`, `index2.5.html`, `index3.5.html`, `MASTER-PROMPT.md`. Rewrote README, updated `project_documentation.md`, `server.js`, `.gitignore`, `.vercelignore`.
- Checked at 1440 px and 390 px in a browser: no console errors.
- Commit rewritten to Ayush's name on request (was `d57a88b`).
- Found: the shared branch URL needed a Vercel login; switched to the public URL.

## Earlier (from git history)
- 2026-08-14 — Mobile responsiveness, mobile nav drawer, touch layout (`f9cd6c3`); index.html edits (`c9fa21e`, `f8ca324`); deployed to Vercel (`59c65ca`); "Portfolio v2.0 - updated about bio and smooth scrolling" (`46112cd`); TEA scroll experience re-imported (`3bcb2e3`, `1f5e11a`).
- 2026-05-22 — Fixed mobile address-bar gap and desktop resize distortion (`a38659d`).
- 2026-05-21 — Initial TEA luxury scroll-driven site (`02d8b06`); `.vercelignore` added (`dfc607f`).
