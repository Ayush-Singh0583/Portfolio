# Gotchas

Last updated: 2026-10-16

1. **Blank page if the GSAP CDN fails.** GSAP, ScrollTrigger and Lenis load from cdnjs / jsDelivr. If GSAP doesn't load, `buildScroll()` throws inside `init()`'s promise and the loader never hides. Not fixed yet. Fix idea: if `!window.gsap`, hide `#loader`, show `#ov1`, and skip the scroll animations.

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
