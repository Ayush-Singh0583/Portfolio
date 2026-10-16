# Ayush Singh — Developer Portfolio

My personal portfolio: a single-page, scroll-driven site that introduces me and walks through my projects, skills, achievements and education.

I'm an Information Science & Engineering student at RV Institute of Technology and Management, Bengaluru (class of 2027), working on machine learning and backend systems.

---

## What's on the site

- **Hero** — a live network-traffic animation drawn on a `<canvas>`: hosts drift, packets move along the links between them, and a few hosts get flagged as you scroll, like an intrusion detection system would flag them. My name and role show on the first screen.
- **About** — who I am, CGPA and degree.
- **Projects** — three case studies, each with its own animated canvas:
  - ML-based Network Intrusion Detection System (Scapy, FastAPI, SQLite, React, XGBoost)
  - IronForge, a strength-tracking platform (PostgreSQL, REST APIs)
  - Vision-based hand gesture control (OpenCV, MediaPipe)
  - plus shorter cards for Focus (task and time tracker) and a configurable CPU cache simulator
- **Skills, Achievements, Education, Contact.**

---

## Tech stack

| Layer | Technology |
| :--- | :--- |
| Page | HTML5, CSS3, vanilla JavaScript (ES6+), all in `public/index.html` |
| Animation | GSAP 3.12.5 + ScrollTrigger |
| Smooth scroll | Lenis 1.1.20 |
| Graphics | HTML5 Canvas 2D, drawn in code (the site has no image or video assets) |
| Fonts | Cormorant Garamond, Inter, JetBrains Mono (Google Fonts) |
| Local server | Node.js + Express 5, with automatic port fallback |
| Hosting | Vercel (static, serves `public/`) |

There is no build step: the browser runs `public/index.html` directly.

---

## Project structure

```text
Portfolio/
├── public/
│   └── index.html            # The whole site: HTML, CSS and JS inline
├── server.js                 # Express static server for local development
├── vercel.json               # Vercel config, serves public/
├── project_documentation.md  # Function-by-function technical notes
├── docs/kb/                  # Project knowledge base (status, decisions, verified numbers)
├── CLAUDE.md                 # Entry file for AI coding sessions
└── package.json
```

---

## Run it locally

Needs Node.js 18 or newer.

```bash
npm install
npm start
```

Then open http://localhost:3000. If port 3000 is busy, the server tries 3001, 3002 and so on, and prints the port it used.

## Deploy

Vercel serves `public/` as a static site (see `vercel.json`), so pushing to `main` redeploys it.

---

## Contact

- Email: ayushsingh10580@gmail.com
- GitHub: [Ayush-Singh0583](https://github.com/Ayush-Singh0583)
- LinkedIn: [ayush-singh-47b446298](https://www.linkedin.com/in/ayush-singh-47b446298)
