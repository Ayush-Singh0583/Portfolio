# Architecture

Last updated: 2026-10-17. Line numbers drift; search by id, class or function name instead.

## File map

| Path | What it is |
| :--- | :--- |
| `public/index.html` | The whole site: `<style>` (~lines 21–1824), markup, then scripts (~2531–3341) |
| `server.js` | Express 5 static server for local runs; tries port 3000, then the next port, up to 8 times |
| `vercel.json` | Vercel config: no framework, no build, `outputDirectory: public` |
| `.vercelignore` | Keeps `node_modules`, `.git`, `server.js` out of the deploy |
| `package.json` | Name `ayush-portfolio`, v2.0.0, `npm start` → `node server.js`, dependency `express ^5.2.1` |
| `project_documentation.md` | Older function-by-function notes (updated 2026-10-16 for the new hero) |
| `README.md` | Public description of the site and how to run it |
| `docs/kb/` | This knowledge base |
| `CLAUDE.md`, `AGENTS.md` | Session entry files for AI assistants |

## Page structure (`public/index.html`)

| Block | Selector | Notes |
| :--- | :--- | :--- |
| Design tokens | `:root` | `--bg #030303`, `--amber #f59e0b`, `--border-card`, `--ease`, text colours |
| Loader | `#loader`, `#loaderFill` | Hidden once fonts are ready (capped at 2.5 s). Followed by a small safety script (8 s → static mode) |
| Static mode | `html.static-mode` rules, just before the reduced-motion block | Page without animations when GSAP fails |
| Header + nav | `#site-header`, `.header-nav`, `#mobileNavOverlay` | Links use `data-nav="<section id>"` |
| Scroll progress | `#progress-track`, `#progress-fill` | Right-edge bar driven by ScrollTrigger |
| Hero | `.hero#top`, `#hero-canvas`, `#ov1`–`#ov5`, `#scrollHint` | Pinned while scrolling |
| About | `#about`, `.about-metrics` | CGPA and degree cards |
| Projects | `#projects`, `.project-card` ×3, `.more-projects` | Canvases `#canvas-proj-ids`, `#canvas-proj-ironforge`, `#canvas-proj-gesture` |
| Skills | `#skills`, `.sk-card` | Each card has `.skill-cat-count`; keep it equal to its badge count |
| Achievements | `#achievements`, `.timeline-cinematic`, `.ach-card` | |
| Education | `#education`, `.edu-box`, `.edu-grade-pill`, `.course-list` | |
| Contact + CTA | `#contact`, `#final-cta-canvas`, `.site-footer` | Email, `tel:` link, GitHub, LinkedIn, LeetCode |

Hero text: `#ov1` (name, `.hero-sub`, `.hero-meta`) is visible on the first screen. `#ov2`–`#ov5` are `[data-split]` lines revealed word by word.

## Script flow

All page code lives in one IIFE in strict mode, after three CDN scripts (GSAP, ScrollTrigger, Lenis).

1. `init()` runs on `DOMContentLoaded`: `sizeCanvas()`, `splitWords()`, `initProjectVisuals()`, `render(0)`. If the safety timer already set `static-mode`, it calls `showStatic()` and stops there.
2. It waits for `document.fonts.ready`, capped at 2.5 s. If `gsap` and `ScrollTrigger` exist, it calls `buildScroll()` (inside try/catch), `startLoop()`, hides the loader, and fades in `#ov1` and `#scrollHint`. Otherwise, or if `buildScroll()` throws, it calls `showStatic()` (see `GOTCHAS.md` #1).
3. `buildScroll()` creates Lenis (hooked into `gsap.ticker` and `ScrollTrigger.update`) and a master timeline pinned to `.hero` with `end: '+=400%'`, `scrub: 0.6`. The timeline runs 0→100; hero progress 0→1 goes to `render(p)`; text moments sit at positions 6 (name out), 18, 38, 60 and 82. It also sets up the progress bar, header `scrolled` class, and section reveal animations.
4. Nav clicks (`[data-nav]`) call `lenis.scrollTo` with a duration that scales with distance: at most 4 s on desktop, 2.5 s on phones.

## Function reference

| Function | Purpose |
| :--- | :--- |
| `sizeCanvas()` | Sizes `#hero-canvas` to the window; device pixel ratio capped at 2 |
| `rand()` | Seeded random (seed 2027) so the hero layout is the same on every visit |
| `drawHero(dt)` | Draws the hero: background glow, drifting nodes, links within `LINK_DIST`, packets, and nodes flagged red once `progress >= node.flagAt` |
| `spawnPacket()` | Picks a node and a nearby neighbour and starts a packet between them |
| `loop(ts)`, `startLoop()` | `requestAnimationFrame` loop; runs only while the hero is visible and the tab is active; never runs with reduced motion |
| `render(p)`, `repaint()` | Set hero progress from scroll / redraw after resize |
| `splitWords()` | Wraps each word of `[data-split]` elements in `<span class="word">` |
| `initProjectVisuals()` | Starts the project canvases; uses `watchCanvas()` (IntersectionObserver + ResizeObserver) so they pause off screen |
| `drawIds()`, `drawForge()`, `drawGesture()`, `drawCta()` | The NIDS network, IronForge curve, MediaPipe hand and closing CTA animations |
| `buildScroll()` | Lenis, master timeline, ScrollTriggers (see above) |
| `showStatic()` | No-animation fallback: adds `html.static-mode`, unlocks scroll, removes the loader, sets `window.__portfolioReady` |
| `withWillChange(vars)` | Adds `will-change` only while a GSAP tween runs |
| `overlayIn()`, `overlayOut()` | Add hero text reveals and fades to the master timeline |
| `openMobileMenu()`, `closeMobileMenu()` | Mobile nav drawer |

Hero tuning constants (inside the script): `NODE_COUNT` (110 desktop / 56 phone), `LINK_DIST` (150 / 115 px), `MAX_PACKETS` (36 / 18), `spread = 1 + progress * 0.2`.

## Where to edit what

- Hero name and role line: `#ov1` markup. The role line is two `.hero-sub-part` spans (see `GOTCHAS.md` #14). Keep the `<meta name="description">` in `<head>` in line with it.
- Bio and CGPA card: `#about`. CGPA also appears in `.edu-grade-pill` in `#education`; change both.
- Project text: `.project-card` articles and `.mini-card` articles in `#projects`.
- Skills: `.skill-badge` items; update the `.skill-cat-count` beside them.
- Links: search for `github.com/Ayush-Singh0583`, `linkedin.com`, `leetcode.com`, `mailto:`, `tel:`.
