# Gotchas

Last updated: 2026-10-17

1. **CDN failures → static mode (fixed 2026-10-17).** GSAP, ScrollTrigger and Lenis load from cdnjs / jsDelivr. Before the fix, a failed GSAP load left the loader up forever (blank page). Now `init()` checks for `gsap` and `ScrollTrigger`; if either is missing, or `buildScroll()` throws, it calls `showStatic()`. A safety script right after `#loader` switches to static mode after 8 s if the page never became ready (CDN hanging, script error). In static mode the hero isn't pinned, `#ov2`–`#ov5` stay hidden, and every section shows without reveal animations. If you add new elements that start hidden in CSS and are revealed by GSAP, also make them visible under `html.static-mode`. Lenis missing alone is fine: nav falls back to `window.scrollTo`.

2. **Vercel branch and preview URLs need a login.** `portfolio-git-main-…vercel.app` and `portfolio-<hash>-…vercel.app` redirect to `vercel.com/login` (HTTP 302) for visitors. Only share https://portfolio-ten-sandy-31hdz6ywb8.vercel.app.

3. **Hero text timing is in timeline units, not pixels.** The master timeline always runs 0→100 over the pinned length (`end: '+=400%'`). Changing the hero length doesn't require moving the text moments; changing their positions (6, 18, 38, 60, 82) does change when they show.

4. **Edit hero text in the HTML.** `[data-split]` lines are split into `.word` spans when the page loads. Text changed later from JS won't be split or animated.

5. **Reduced motion.** With `prefers-reduced-motion`, CSS forces `.word`, `.title-text`, `.hero-sub`, `.hero-meta`, `.scroll-hint` visible, and the hero loop never runs (one static frame per scroll update). Any new animated text needs the same treatment.

6. **Two places for the CGPA.** About (`.metric-value`) and Education (`.edu-grade-pill`). They disagreed once (8.71 vs the resume's 8.74).

7. **Skill counts are typed by hand.** Each `.skill-cat-count` must be updated when badges are added or removed.

8. **Only `public/` is deployed.** `server.js` is for local runs; Vercel serves `public/` directly (`vercel.json`). Anything outside `public/` is not on the live site.

9. **Numbers drift between resume, README and site.** It already happened with the NIDS numbers and the CGPA. Check `NUMBERS.md` before writing any number.

10. **Card claims must match the linked repo.** Recruiters can click through. On 2026-10-16 a quick search missed the Focus heatmap (the search output was cut short) and the card was briefly changed by mistake. Check the actual page or controller before changing a claim.

11. **Old tea content is still in git history.** The first commits are the TEA template (video frames and images, ~33 MB). They're gone from the current tree but stay in history; that's fine, just don't be surprised by the early commit messages.

12. **Cloud sandbox can't reach the CDNs.** See `SETUP.md`, "Screenshots from a cloud sandbox".

13. **`pkill -f "node server.js"` can kill your own shell** when the same text is in the running command line. Use `pkill -f '^node server'`.

14. **The hero role line is two parts.** `.hero-sub` holds two `.hero-sub-part` spans with a `.hero-sub-sep` middot between them. Each part never wraps; on phones (≤ 768 px) they stack and the middot hides. `.ov1` has `width: 92%` on desktop; without it, the absolutely placed overlay only gets half the screen and the line breaks badly ("learning" alone on line two).

15. **Vercel can miss a push to `main`.** On 2026-10-17 a push to `main` got no Vercel build at all (no status on the commit), while a branch pushed seconds later did build. After pushing, check the commit's status (`gh api repos/Ayush-Singh0583/Portfolio/commits/<sha>/statuses` should show "Deployment has completed") or the live page. If nothing started after a couple of minutes, push an empty commit or press Redeploy in the Vercel dashboard.
