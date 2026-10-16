# Overview

Last updated: 2026-10-16

## What it is

Ayush Singh's personal developer portfolio: a single-page, scroll-driven website that introduces him and walks through his projects, skills, achievements, education and contact details.

## Who it's for

Recruiters and interviewers for software engineering and machine learning internships. Ayush is a B.E. Information Science & Engineering student at RV Institute of Technology and Management (RVITM), Bengaluru, class of 2027. He pastes the live link into application forms.

## Where it lives

- **Live site (share this one):** https://portfolio-ten-sandy-31hdz6ywb8.vercel.app — it's the `homepage` of the GitHub repo and opens without a login (checked 2026-10-16).
- **Do not share:** `portfolio-git-main-ayush-singh0583s-projects.vercel.app` and `portfolio-ayush-singh0583s-projects.vercel.app`. Both redirect visitors to the Vercel login page (checked 2026-10-16).
- **Repo:** https://github.com/Ayush-Singh0583/Portfolio, branch `main`. Pushing to `main` creates a Vercel Production deployment.

## Tech stack

| Layer | What |
| :--- | :--- |
| Page | HTML, CSS and vanilla JavaScript, all inline in `public/index.html` (~3,340 lines) |
| Animation | GSAP 3.12.5 + ScrollTrigger, loaded from cdnjs |
| Smooth scroll | Lenis 1.1.20, loaded from jsDelivr |
| Graphics | HTML5 Canvas 2D drawn in code; the site ships no images or video |
| Fonts | Cormorant Garamond, Inter, JetBrains Mono (Google Fonts) |
| Local server | Node.js + Express 5 (`server.js`), only for local runs |
| Hosting | Vercel, static, serves `public/` (`vercel.json`) |

No build step, no framework, no automated tests. `package.json` version: 2.0.0.

## What's on the page (top to bottom)

1. **Hero** — live network-traffic canvas; name, "Machine learning & backend systems", degree line; four text moments while scrolling
2. **About** (`#about`) — bio, CGPA card, degree card
3. **Projects** (`#projects`) — three case studies with animated canvases (ML Network Intrusion Detection System, IronForge, Vision-Based Hand Gesture Control), then "More projects": Focus and Configurable CPU Cache Simulator
4. **Skills** (`#skills`) — six category cards
5. **Achievements** (`#achievements`) — LeetCode, SIH, Fantom Code, research poster, independent builder
6. **Education** (`#education`) — B.E., CBSE XII and X, coursework list
7. **Contact** (`#contact`) — email, phone, GitHub, LinkedIn, LeetCode; closing "KEEP BUILDING." banner; footer

## History in one paragraph

The repo started on 2026-05-21 as "TEA", a luxury tea-brand scroll site with a 227-frame video hero. On 2026-08-14 it was turned into Ayush's portfolio (v2.0) and deployed to Vercel, but the tea film, tea images and tea README stayed. On 2026-10-16 the tea content was removed, the hero was replaced with a code-drawn network animation, and the project, skills and CGPA content was corrected. See `CHANGELOG.md`.
