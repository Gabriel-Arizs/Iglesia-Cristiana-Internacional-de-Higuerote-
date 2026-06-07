# AGENTS.md — ICIH Web

## Project structure

```
Client/   → React SPA (active)
Server/   → empty, no backend yet
```

## Commands (run from `Client/`)

| Command | Action |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | **Run first** → `tsc && vite build` |
| `npm run preview` | Preview production build |
| `npm run deploy` | `npm run build` then `gh-pages -d dist` |
| `npx prettier --check .` | Check formatting |
| `npx eslint .` | Lint |

Order matters: `prettier --check .` → `eslint .` → `npm run build` (tsc is part of build).

## Architecture

- **Routing**: `createHashRouter` (required for GitHub Pages SPA — do not switch to browser router)
- **Base path**: `/Iglesia-Cristiana-Internacional-de-Higuerote-/` in `vite.config.ts` — must match the GitHub Pages repo name
- **Lazy loading**: Page components **must** export both a named function and `export { Page as Component }` (see `src/pages/Home.tsx` for the pattern)
- **State / data**: Uses `@tanstack/react-query` + `axios` for data fetching; `@heroui/react` for UI components; `framer-motion` for animations
- **Styling**: Tailwind CSS v4 with `@tailwindcss/vite` plugin. Custom theme colors in `@theme` block in `index.css`. Dark mode via `.dark` class using `@variant dark`
- **Code style**: Prettier (no semi, no trailing commas, singleQuote: false) enforced as ESLint errors. ESLint config ends with `prettierConfig` to override style rules
- **SPA**: No SSR, no Next.js — pure client-side Vite + React

## Conventions

- **Language**: Spanish (UI text, commit messages, types)
- **Imports**: `verbatimModuleSyntax` enabled — use `import type` for type-only imports
- **TypeScript**: strict mode, `noUnusedLocals`/`noUnusedParameters` enabled, prefix unused params with `_`
- **Testing**: No test framework found — do not add tests without asking

## Boundaries

- `src/components/` — shared UI components
- `src/pages/` — page-level components (lazy-loaded via router)
- `src/types/` — TypeScript interfaces/types
- `src/api/` & `src/services/` & `src/hooks/` — directories exist but are empty
- `src/mocks/` — mock data for leadership/ministry content
