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

## Not yet checked

| Claim on site | Tag | Note |
| :--- | :--- | :--- |
| IronForge card (session auth, PostgreSQL schema, CRUD) | UNVERIFIED | Repo `Workout_Tracker` not checked |
| Hand gesture card ("21 landmarks", clicks, scrolling, "ultra-low latency") | UNVERIFIED | Repo `ML_GESTURE` not checked; "ultra-low latency" has no measurement |
| 150+ LeetCode problems | UNVERIFIED | Profile `leetcode.com/u/Ayush_Learning` not checked |
| `project_documentation.md`: "Lighthouse near 100" | UNVERIFIED | No Lighthouse run recorded |
