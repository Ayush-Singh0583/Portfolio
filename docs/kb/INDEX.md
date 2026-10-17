# Knowledge base — index

Last updated: 2026-10-17

This folder holds everything a new session needs to work on Ayush's portfolio site without re-explaining.

## Read order

1. `STATUS.md` — where things stand right now (loaded automatically through `CLAUDE.md`)
2. `OVERVIEW.md` — what the site is, who it's for, live URL, stack
3. `ARCHITECTURE.md` — how `public/index.html` is organised, key functions, where to edit what
4. `SETUP.md` — run locally, check, deploy
5. Then as needed:
   - `NUMBERS.md` — every number shown on the site and where it was verified. **Read before adding or changing any metric.**
   - `GOTCHAS.md` — traps and fragile parts
   - `DECISIONS.md` — why things are the way they are
   - `CHANGELOG.md` — what happened in each session

## What each file holds

| File | Holds |
| :--- | :--- |
| `STATUS.md` | Done / in progress / next / blocked / open questions |
| `OVERVIEW.md` | Purpose, audience, live URL, stack, history |
| `ARCHITECTURE.md` | File map, page sections, script flow, function reference |
| `SETUP.md` | Install, run, manual checks, deploy, screenshots in a sandbox |
| `DECISIONS.md` | Dated decisions with reasons and alternatives |
| `NUMBERS.md` | Metrics with sources and VERIFIED / UNVERIFIED / CONFLICT tags |
| `GOTCHAS.md` | Known traps, fragile code, how past breakages were fixed |
| `CHANGELOG.md` | Session log, newest first |

## Keeping it alive

At the end of every session: update `STATUS.md`, add a `CHANGELOG.md` entry, and record decisions, numbers and gotchas in their files. Commit these together with the code.
