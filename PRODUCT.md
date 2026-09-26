# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Leandro and classmates in the ADS (Análise e Desenvolvimento de Sistemas) course, reviewing for provas (currently NPC1-style exams) in specific matérias. They study on their own time, often close to an exam, from a shared GitHub Pages link — on desktop or mobile, no login.

## Product Purpose

Turn a professor's lecture notes/PDF into an interactive apostila per matéria: chapters with in-page navigation, an exam-prep page, a spaced-repetition quiz (simulado), and a spaced-repetition flashcard deck — so the material studied surfaces again in the form of practice and quick recall, not just re-reading.

## Positioning

Neither piece alone beats the original PDF: a subject you can navigate by concept anchor instead of scrolling a PDF, paired with a simulado and a flashcard deck whose SM-2 schedulers each resurface what a student personally forgets — together they're a study loop a static document can't offer.

## Operating Context

Each matéria traces back to real class material and credits its source, with the original PDF linked from the page (see each subject's `credit` block in `src/data/subjects.js`). Deployed to GitHub Pages via `main` → GitHub Actions, no backend, no accounts. Progress persists only in the visiting browser's `localStorage`, in two separate decks/keys — quiz (`simulado-srs-v1`) and flashcards (`flashcards-srs-v1`) — each per-device and per-student, never shared or synced between classmates or across a student's own devices.

## Capabilities and Constraints

- Static site only: Vite build → `dist/` → GitHub Pages. No server, no database, no auth.
- Adding a matéria touches `src/data/subjects.js`, `src/data/quizBank/<subject>.js` and `src/data/flashcardBank/<subject>.js` (+ their registrations), per-subject page components mirrored in `src/App.jsx`'s routes, and `scripts/verify-katex.mjs`'s hardcoded page list — all in tandem (see `CLAUDE.md`).
- LaTeX (`$...$` inline or `math="..."` props) must pass `npm run verify:katex`.
- Currently two matérias exist: Matemática Aplicada II (Geometria Analítica I — matrizes, determinantes, sistemas lineares) and Interação Humano-Computador (IHC). Adding another requires equivalent source class notes first — content is not invented.

## Product Principles

1. Content must trace back to real class material, never invented facts — each matéria credits its source and links the original PDF.
2. Every matéria follows the same shape (chapters → exam-prep → simulado, plus a flashcard deck) so a classmate who's learned one can navigate any other the same way.
3. Review priority is personal and local: the SM-2 scheduler (shared by the quiz and the flashcard deck, as two independent decks) surfaces what an individual student forgets, not a shared/group signal, and per-student progress is never synced.
4. Static-site simplicity is a constraint to protect, not a limitation to fix — no backend/accounts, so any classmate can open the GitHub Pages link and use it immediately.

## Accessibility & Inclusion

Dark mode supported (off-white / `#121212` palette) via `ThemeToggle.jsx`. No further accessibility requirement established yet.
