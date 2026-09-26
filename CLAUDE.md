# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Interactive study apostilas ("apostilas-ads") for an ADS (Análise e Desenvolvimento de Sistemas) course, in Portuguese. A React + Vite site organized by matéria (subject), each with chapter pages, an exam-prep page, and a spaced-repetition quiz simulado. Deployed to GitHub Pages.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run verify:katex` — renders every LaTeX snippet (quiz banks + hardcoded page list) through KaTeX headlessly and fails if any expression doesn't parse. Run this after adding/editing any `$...$` math or a `math="..."` prop.

There is no test suite and no linter configured. Playwright is installed as a devDependency and Chromium is verified working in this sandbox — for UI changes, start the dev server (`npm run dev`) and drive it headlessly with Playwright (check rendered content and console/page errors) in addition to `npm run build` and `npm run verify:katex`.

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `vite.config.js` uses `base: "./"` (relative paths) specifically so the same build works under any GitHub Pages subpath; `main.jsx` uses `HashRouter` for the same reason (no server-side rewrites needed for client routes).

## Architecture: adding a new matéria (subject)

`src/data/subjects.js` is the single source of truth for navigation. `SUBJECTS` is an array of subject objects, each with `slug`, `label`, `chapters` (each with `slug`, `label`, and `items` — anchor ids used for in-page nav), and an `exam` block (`slug`, `items`, and a nested `simulado` with its own `slug`/`title`). Path helpers (`chapterPath`, `examPath`, `simuladoPath`, `getActiveSubject`) all derive from this structure — routes, sidebar, and breadcrumbs read from it rather than being hardcoded per subject.

To add a subject, you must touch, in tandem:
1. `src/data/subjects.js` — add the entry to `SUBJECTS`.
2. `src/data/quizBank/<subject>.js` — export `QUIZ_BANK`, then register a dynamic import in `src/data/quizBank/index.js`'s `QUIZ_BANK_LOADERS` map under the subject's slug (each matéria's bank is its own chunk, only fetched when its simulado is opened).
3. `src/pages/<subject>/*.jsx` — one page component per chapter plus the exam page, mirrored under `src/App.jsx`'s `<Routes>` (nested under `SubjectLayout` for chapters, `ExamLayout` for the exam+simulado pair). Routing is not data-driven from `subjects.js`; new subjects need their own `<Route>` entries added by hand.
4. `scripts/verify-katex.mjs` — the `pages` array hardcodes which page files get scanned for `math="..."` props; add new page paths there or their LaTeX won't be checked.

`Simulado.jsx` is shared across all subjects — it resolves the active subject via `getActiveSubject(location.pathname)` and awaits `QUIZ_BANK_LOADERS[subject.slug]()`, so it needs no per-subject changes.

## Quiz bank format and spaced repetition

Each question in a `QUIZ_BANK` array: `{ id, topico, enunciado, opcoes: [{ texto, correta? }], explicacao }`. `id` must be stable and unique within the bank — it's the key for SRS state persisted in `localStorage` (`src/utils/srs.js`, key `simulado-srs-v1`). Text fields (`enunciado`, `opcoes[].texto`, `explicacao`) may inline LaTeX as `$...$`, split out and rendered by the local `RichText` component in `Simulado.jsx`.

`src/utils/srs.js` implements a simplified SM-2: each answer schedules the next `dueDate` from ease factor + interval; wrong answers reset `repetitions`/`interval` to 0 so the card resurfaces in the same session, right answers grow the interval. `Simulado.jsx`'s `buildRound()` composes each round by priority: overdue reviews first (most overdue first), then never-seen questions, then not-yet-due reviews — each group is a strict fallback for when the previous one doesn't fill `QUESTIONS_PER_ROUND` (8).

## Styling

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` — v4 is CSS-first, configured through `src/index.css`). Dark mode support exists (`dark:` variants throughout, off-white/`#121212` palette per recent history) with `ThemeToggle.jsx` driving it.
