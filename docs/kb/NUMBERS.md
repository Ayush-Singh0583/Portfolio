# Numbers and claims

Every number or factual claim on the site, with where it was checked. Rule: don't add or change a number on the site unless it's VERIFIED here.

Tags: **VERIFIED** (checked against code or data, source given) · **UNVERIFIED** (stated by Ayush or copied, not checked) · **CONFLICT** (sources disagree).

## About / Education

| Claim on site | Tag | Source / note | Checked |
| :--- | :--- | :--- | :--- |
| CGPA 8.74 | UNVERIFIED | Stated by Ayush; matches his resume. Site said 8.71 before. No transcript seen. | 2026-10-16 |
| Class XII 84.4%, Class X 87.4% (CBSE, SJS Public School) | UNVERIFIED | Stated by Ayush / resume | 2026-10-16 |
| B.E. ISE, RVITM Bengaluru, 2023–2027 | UNVERIFIED | Stated by Ayush | 2026-10-16 |

## NIDS card (repo `Ayush-Singh0583/ML-Network-Intrusion-Detection-System`, commit `96e8769`, 2026-09-29)

| Claim on site | Tag | Source |
| :--- | :--- | :--- |
| Trained Mon–Thu, tested on Friday; DDoS, PortScan, Bot appear only on Friday | VERIFIED | `README.md`, "Measured Results" → Protocol |
| Random split scored 99.88% accuracy (leakage) | VERIFIED | `wiki/Data-Leakage-Audit.md`, `wiki/Index.md` |
| XGBoost: 61.93% of DDoS caught at 0.14% observed false alarms | VERIFIED | `README.md`, XGBoost table, 0.1% budget row |
| Random Forest: 26.68% DDoS at 0.09% | VERIFIED | `README.md`, Random Forest table, 0.1% budget row |
| Port-scan tracker: 60 s window, 100 ports or 50 hosts per source | VERIFIED | `backend/live/scan_tracker.py`: `WINDOW_SECONDS`, `VERTICAL_PORT_THRESHOLD`, `HORIZONTAL_HOST_THRESHOLD` |
| 69 pytest tests | VERIFIED | Count of `def test_` in `tests/` (5 files), counted 2026-10-16 |
| Stack: Scapy, FastAPI, SQLite, React, XGBoost, scikit-learn, PyTorch | VERIFIED | `README.md` (badges and XGBoost results); `import torch` in `src/models.py`, `src/engine.py` |

## Resume vs NIDS repo — CONFLICT (not on the site; resolve before using anywhere)

| Resume says | Repo says | Tag |
| :--- | :--- | :--- |
| XGBoost caught 99.99% of attacks on a random split | 99.88% accuracy on a random split | CONFLICT |
| 28.3% on an unseen day at 1% false alarms | 27.57% (0.1% budget) / 28.53% (1% budget, 4.38% observed) | CONFLICT |
| 260+ pytest tests | 69 test functions | CONFLICT |
| Port scans 99.5% seen / 0.5% held out; counter covers 99.8% | Not found in the public repo | UNVERIFIED |
| 2.83M flows, 14 attack classes | Not checked | UNVERIFIED |

## More projects

| Claim on site | Tag | Source |
| :--- | :--- | :--- |
| Focus: timers and subtasks | VERIFIED | Focus `a7c204b` (2026-04-01): `focusly/backend/src/models/Task.js` (`subtasks`, `timerLogs`) |
| Focus: kanban, calendar, analytics views | VERIFIED | `focusly/frontend/src/App.jsx` routes |
| Focus: 7-day chart, 30-day completion trend, 52-week heatmap | VERIFIED | `pages/AnalyticsPage.jsx`; `backend/src/controllers/analytics.js` (`getTrend` loops 30 days, `getHeatmap`) |
| Focus: JWT in HTTP-only cookie, bcrypt, Helmet, rate limiting | VERIFIED | `backend/src/middleware/auth.js`, `httpOnly: true`, `bcrypt.hash(…, 12)`, `server.js` (`helmet`, `express-rate-limit`) |
| Cache simulator: C++17, CMake, multi-level caches, trace endpoint, React + TypeScript | VERIFIED | CacheSimulatorV2-c-17- `a69b0da` (2026-09-06): `cache-vision/backend/CMakeLists.txt`, `src/MultiLevelCache.cpp`, `POST /api/trace` in `src/main.cpp`, `frontend/src/**/*.tsx` |

## Journey timeline (`#journey`, added 2026-10-18)

Which year each project sits in is Ayush's own account (confirmed in chat 2026-10-18), so it is UNVERIFIED by definition: GitHub can only show when code was uploaded, not when it was built. He started using GitHub in 2026; earlier work was built locally, which the note under the timeline says. Tech lists are VERIFIED from each repo's dependency files unless marked otherwise.

| Item | Year shown | Year source | GitHub (first → last commit) | Tech source |
| :--- | :--- | :--- | :--- | :--- |
| Started B.E. ISE at RVITM, learned fundamentals | 1 (2023–24) | Ayush: "year one I didn't build anything" | – | – |
| Focus | 2 (2024–25) | Ayush | `Focus` 2026-03-21 → 04-01; first commit already 51 files with the full backend | VERIFIED: `focusly/backend/package.json` (express, mongoose), `frontend/package.json` (react) |
| IronForge | 2 | Ayush (his second answer; first answer said Year 3) | `Workout_Tracker` 2026-04-20 → 04-24; Prisma migration dated 2026-04-20 | VERIFIED: `Frontend/package.json` (next), `Backend/package.json` (@nestjs/*), `schema.prisma` provider postgresql |
| Tech news chatbot | 2 | Ayush | No repo found | UNVERIFIED (stated): NewsAPI, Gemini API, later Pegasus |
| CPU cache simulator | 3 (2025–26) | Ayush (second answer; first said Year 4) | `CacheSimulatorV2-c-17-` 2026-09-06; `CPU-Cache-Simulator` is empty | VERIFIED (see More projects) |
| VoIP app | 3 | Ayush: "VoIP in Java" | No repo found | UNVERIFIED (stated): Java |
| Hand gesture control | 3 | GitHub date; Ayush didn't object | `ML_GESTURE` 2026-04-14 → 05-03 | VERIFIED: `requirements.txt` (mediapipe, opencv-python) |
| EventSphere | 3 | GitHub date (6th sem); not yet confirmed by Ayush | `FSD_PROJECT` 2026-04-18 | VERIFIED: `client/package.json` (react), `server/package.json` (express, mongoose); README "MERN" |
| Campus Buzz | 3 | GitHub date; not yet confirmed | `campus` 2026-04-07 (GitHub description says "nothing"; README calls it Campus Buzz) | VERIFIED: `frontend/package.json` (react), `backend/package.json` (express, pg, sequelize) |
| Started IDS and banking API in 6th sem | 3 | Ayush | IDS repo starts 2026-06-27 | – |
| ML intrusion detection system + paper in progress | 4 (2026–now) | Ayush (he is preparing a paper from it) | `ML-Network-Intrusion-Detection-System` 2026-06-27 → 10-05 | VERIFIED (see NIDS card) |
| Banking API, in progress | 4 | Ayush | No public repo found | UNVERIFIED (stated): Spring Boot, PostgreSQL, JWT |
| EDM tool-wear research paper (team) | 4 | GitHub date; not yet confirmed | `NTM` 2026-10-10 → 10-11; README lists authors Adithya D, Billava Srujan Macha, Ayush Singh, Dr. Shanthala Kollur | VERIFIED: `requirements.txt` (scikit-learn, xgboost) |
| Blockchain e-voting (team): voting UI, face authentication in progress | 4 | Ayush (7th-sem team project) | `Evoting-System` 2026-05-05 → 07-28; 12 commits by "siddu", 1 by Ayush ("improved ui/ux", 2026-05-06, frontend components) | VERIFIED: `smart-contract/contracts/Voting.sol`, `hardhat.config.ts`, React frontend. Face authentication: UNVERIFIED (stated, not in this repo) |
| Interview Speaking Trainer | 4 | GitHub date; not yet confirmed | `Interview-Speaking-Trainer` 2026-08-03 | VERIFIED: `backend/requirements.txt` (fastapi), README (SQLite), `frontend/package.json` (react) |
| CODEBASE | 4 | GitHub date; not yet confirmed | `CODEBASE` 2026-08-05 (2 commits, 459 files) | VERIFIED: `backend/package.json` (express, prisma), `schema.prisma` postgresql, `frontend/package.json` (react), `core/` C++ with CMake |
| Unload | 4 | GitHub date | `Unload` 2026-10-17 | VERIFIED: `sorter.py` imports `google.genai`, `pydantic` |

Repos left off the timeline: `Ayush-Singh0583` (profile README), `Portfolio` (this site), `CPU-Cache-Simulator` (empty).

## Not yet checked

| Claim on site | Tag | Note |
| :--- | :--- | :--- |
| IronForge card: "session authentication" | CONFLICT | `Workout_Tracker` uses JWT (`@nestjs/jwt`, `passport-jwt` in `Backend/package.json`), not sessions. Ask Ayush before changing the card |
| IronForge card: PostgreSQL schema, CRUD | UNVERIFIED | `schema.prisma` provider is postgresql (checked 2026-10-18); CRUD not checked |
| Hand gesture card ("21 landmarks", clicks, scrolling, "ultra-low latency") | UNVERIFIED | Repo `ML_GESTURE` not checked; "ultra-low latency" has no measurement |
| 150+ LeetCode problems | UNVERIFIED | Profile `leetcode.com/u/Ayush_Learning` not checked |
| `project_documentation.md`: "Lighthouse near 100" | UNVERIFIED | No Lighthouse run recorded |
