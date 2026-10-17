# Decisions

Newest first. Format: date — decision. Why. Alternatives considered.

## 2026-10-17 — Hero role line: "Software engineer · backend systems & machine learning"
Why: Ayush is applying for SDE roles first and ML engineer roles second; he picked this line. The degree line under it already says "Class of 2027", so the role line doesn't need to say "student". The `<meta name="description">` and README were updated to match.
Alternatives: "I build backend APIs and machine learning models"; the old line with the order flipped ("Backend systems & machine learning").

## 2026-10-17 — No-animation fallback (static mode) when GSAP fails
Why: a failed CDN load used to leave the loader up forever, so a recruiter on bad Wi-Fi saw a blank page. Static mode keeps the CDN setup and the no-build-step workflow.
Alternatives: self-host GSAP and Lenis in `public/` (removes the CDN dependency; can still be done later).

## 2026-10-17 — Professional photo goes in About, above the CGPA cards
Why: About is where visitors look for the person; the hero stays the network animation. On phones (single column) the photo and the two number cards come before the bio. Kept on branch `photo-slot` rather than `main` until Ayush decides whether an empty placeholder may show on the live site.
Alternatives: photo in the hero next to the name (would crowd the animation and touch fragile hero code).

## 2026-10-16 — Knowledge base in `docs/kb/`, loaded through `CLAUDE.md`
Why: every new AI session was starting from zero. `CLAUDE.md` imports only `STATUS.md` so each session stays cheap; the rest is read when needed.
Alternatives: one big notes file (too costly to load every time).

## 2026-10-16 — Commits are authored as Ayush Singh, without AI co-author lines
Why: Ayush's request; it's his site and repo.
Alternatives: commits authored by the AI assistant (rejected by Ayush).

## 2026-10-16 — Changes go straight to `main`
Why: Ayush chose it; the site is static and easy to roll back with git.
Alternatives: pull request with a Vercel preview (note: previews sit behind Vercel login).

## 2026-10-16 — Replace the tea film with a code-drawn network hero
Why: the hero was a tea-brand video (left over from the TEA template). Visitors scrolled through about seven screens of tea before seeing anything about Ayush. A network-traffic animation matches his ML-security and backend work, needs no image files and is ~33 MB lighter.
Alternatives: keep the tea film but shorten it; keep it as it was.

## 2026-10-16 — Shorter hero (700% → 400%) and faster nav (≤ 4 s)
Why: without a film to scrub, a long pinned hero only delays the content; the About link took 10 s.

## 2026-10-16 — Site numbers come only from sources a visitor can open
Why: the NIDS card links to the public NIDS repo, and the resume's numbers don't match that repo. Showing numbers the repo can't back would hurt in interviews.
Alternatives: use the resume numbers (rejected until verified).

## 2026-10-16 — CGPA shown as 8.74
Why: Ayush confirmed 8.74 is current; the site said 8.71.

## 2026-10-16 — Focus and cache simulator as short cards, not full case studies
Why: shows more of his range without five long canvas cards; the three existing case studies already carry the visual weight.

## 2026-10-16 — Use the public Vercel URL in applications
Why: branch URLs redirect to the Vercel login page; the repo homepage URL is public.

## 2026-08-14 — Turn the TEA template into the portfolio (v2.0) and deploy on Vercel
From git history ("release: Portfolio v2.0 - updated about bio and smooth scrolling", "Deploy portfolio to Vercel"). Reasons not recorded.
