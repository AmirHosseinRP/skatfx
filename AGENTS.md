# AGENTS.md

## Tech Stack

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Biome** for linting and formatting (no ESLint, no Prettier)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **shadcn/ui** (new-york style) in `src/shadcn/`
- **i18next** for i18n (en/fr, localStorage detection)
- **pnpm** package manager
- **React Compiler** enabled in `next.config.ts`

## Commands

| Task | Command |
|------|---------|
| Dev server (port 4000) | `pnpm dev` |
| Build | `pnpm build` |
| Lint (auto-fix) | `pnpm lint` |
| Format | `pnpm format` |

No test suite exists.

## Path Alias

`~/` maps to `src/` (configured in `tsconfig.json`).

## Code Structure

```
src/
  app/          # Next.js App Router (layout, page, manifest)
  components/   # Atomic design: atoms/, molecules/
  shadcn/       # shadcn/ui components and lib/utils.ts
  shared/       # i18n, locales, styles, libs (icons, images, routes)
  views/        # Page-level view components (Header, Hero, ReviewCountBox)
```

## Code Style (Biome)

- 2-space indent, 120 char line width, LF endings
- Double quotes, semicolons always, ES5 trailing commas
- `arrowParentheses: "asNeeded"`
- Organize imports on save
- `noConsole: warn`, `useExhaustiveDependencies: off`

## Git Hooks (Husky)

- **pre-commit**: runs `pnpm lint`
- **commit-msg**: enforces conventional commits via commitlint
- **pre-push**: enforces branch naming — must match `feat/`, `fix/`, `chore/`, `release/`, `hotfix/`, `refactor/`, `test/` prefixes, or be `main`, `release`, `sandbox`, `develop`

## Conventions

- shadcn components install to `src/shadcn/components/ui/` with `cn()` utility at `src/shadcn/lib/utils.ts`
- i18n keys live in `src/shared/locales/{en,fr}/common.json`, default namespace is `common`
- Views go in `src/views/`, small reusable pieces in `src/components/atoms/` or `molecules/`
