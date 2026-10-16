# Status

Last updated: 2026-10-16
Summary: Tea template fully removed and core content corrected; now collecting Ayush's answers to turn the site into a showcase of his four years of engineering.

## Done (working and checked)
- Hero replaced: code-drawn network canvas, name + "Machine learning & backend systems" on the first screen, pinned scroll 400% (was 700%), reduced-motion support
- CGPA 8.74 in About and Education
- NIDS card rewritten with numbers from the public NIDS repo (see `NUMBERS.md`)
- Skills updated (TypeScript, FastAPI, Express.js, Spring Boot, XGBoost, PyTorch, SQLite, GitHub Actions)
- "More projects": Focus and Configurable CPU Cache Simulator cards, claims checked against their repos
- Nav glide capped at 4 s desktop / 2.5 s phone
- Tea assets, `index2.5.html`, `index3.5.html`, `MASTER-PROMPT.md` removed; README rewritten
- Checked in a browser at 1440 px and 390 px: no console errors
- Knowledge base created (`docs/kb/`, `CLAUDE.md`, `AGENTS.md`)

## In progress
- Content refresh, asking Ayush one question at a time. Question 1 (hero one-liner + which roles he's applying for) asked, no answer yet.

## Next up (most important first)
1. Hero one-liner and target roles (Question 1)
2. "My 4 years" timeline section, year by year (2023–2027)
3. Tech news chatbot as a project (NewsAPI + Gemini API, later fine-tuned Pegasus, Streamlit UI): needs repo link, dataset, any ROUGE score
4. Rewrite About: lead with what he builds and the role he wants, one personal line at the end
5. Download-resume button (hero + contact): needs the PDF, with numbers matching `NUMBERS.md`
6. Specific achievements (what, event, year) instead of "participated" / "presented"
7. Link-preview tags (Open Graph) with a preview image
8. Make the page still load if the GSAP CDN fails (see `GOTCHAS.md` #1)

## Blocked / waiting on
- Ayush: answers to the content questions, the resume PDF, the chatbot repo link

## Open questions for Ayush
- Resume vs NIDS repo numbers conflict (99.99% vs 99.88%, 28.3% vs 27.57/28.53%, 260+ vs 69 tests, port-scan 99.5/0.5/99.8% not found). Is there newer unpushed NIDS code, or should the resume change?
- Are the IronForge and Hand Gesture card claims accurate? (not checked against their repos)
- LeetCode "150+": still the right number?
- Keep the phone number public on the site?
- Add a cleaner Vercel domain (e.g. `ayush-singh.vercel.app`)?
