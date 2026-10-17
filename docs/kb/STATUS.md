# Status

Last updated: 2026-10-18
Summary: Journey timeline is live; photo slot built and waiting for the photo; next are project screenshots and a cleaner domain.

## Done (working and checked)
- Hero: code-drawn network canvas, name + "Software engineer · backend systems & machine learning" on the first screen (Ayush's pick, 2026-10-17), pinned scroll 400% (was 700%), reduced-motion support
- Page still works if the GSAP CDN fails or hangs (static mode, `GOTCHAS.md` #1)
- Journey timeline (`#journey`), Years 1–4 with 16 entries, nav link added; sources in `NUMBERS.md`
- CGPA 8.74 in About and Education
- NIDS card rewritten with numbers from the public NIDS repo (see `NUMBERS.md`)
- Skills updated (TypeScript, FastAPI, Express.js, Spring Boot, XGBoost, PyTorch, SQLite, GitHub Actions)
- "More projects": Focus and Configurable CPU Cache Simulator cards, claims checked against their repos
- Nav glide capped at 4 s desktop / 2.5 s phone
- Tea assets, `index2.5.html`, `index3.5.html`, `MASTER-PROMPT.md` removed; README rewritten
- Checked in a browser at 1440 px and 390 px (normal, CDN blocked, CDN hanging): no page errors
- Knowledge base created (`docs/kb/`, `CLAUDE.md`, `AGENTS.md`)

## In progress
- Content refresh, asking Ayush one question at a time. Q1 (roles) and Q2 (timeline) answered. Still to confirm on the timeline: the years for projects taken from GitHub dates (EventSphere, Campus Buzz, Interview Speaking Trainer, CODEBASE, EDM paper), and whether VoteChain face authentication is finished.
- Professional photo: slot built in About on branch `photo-slot` (not on `main`). Waiting on Ayush: send the photo, or OK to put the empty placeholder live.

## Next up (most important first)
1. Professional photo: rebase `photo-slot` on `main` (it predates the timeline), then merge once the photo arrives (instructions are in the HTML comment above `.about-photo`)
2. Real screenshots on project cards (e.g. the Focus dashboard, NIDS output), next to or instead of the drawn canvases (idea from a friend's portfolio; Ayush agreed 2026-10-17)
3. Cleaner domain: free (e.g. `ayush-singh.vercel.app`) or a paid custom domain; Ayush to choose
4. Tech news chatbot as a project (NewsAPI + Gemini API, later fine-tuned Pegasus, Streamlit UI): needs repo link, dataset, any ROUGE score
5. Rewrite About: lead with what he builds and the role he wants (SDE first, ML second), one personal line at the end
6. Download-resume button (hero + contact): needs the PDF, with numbers matching `NUMBERS.md`
7. Specific achievements (what, event, year) instead of "participated" / "presented"
8. Link-preview tags (Open Graph) with a preview image (the professional photo could be it)

## Blocked / waiting on
- Ayush: the professional photo, answers to the content questions, the resume PDF, the chatbot repo link

## Open questions for Ayush
- Resume vs NIDS repo numbers conflict (99.99% vs 99.88%, 28.3% vs 27.57/28.53%, 260+ vs 69 tests, port-scan 99.5/0.5/99.8% not found). Is there newer unpushed NIDS code, or should the resume change?
- IronForge card says "session authentication", but the repo uses JWT (see `NUMBERS.md`). Change the card to JWT?
- Are the other IronForge and Hand Gesture card claims accurate? (not fully checked)
- Add some of the newer repos (EventSphere, Interview Speaking Trainer, CODEBASE) as cards under "More projects"?
- LeetCode "150+": still the right number?
- Keep the phone number public on the site?
