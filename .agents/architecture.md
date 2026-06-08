# Architectural Decisions

## 2026-06-08

The follow component directories are grouped by category:

- Typography components live in `src/design/typography/`
- Semantics live in `src/design/semantics/`
- Surfaces live in `src/design/surfaces/`
- Display components live in `src/design/display/`
- Media components live in `src/design/media/`
- Navigation components live in `src/design/nav/`
- Analysis components live in `src/design/analysis/`
- Records components live in `src/design/records/`
- Animation components live in `src/design/animation/`
- Controls live in `src/design/controls/`
- Feedback components live in `src/design/feedback`
- Layout components live in `src/design/layout`
- Overlays live in `src/design/overlays`

Shared logic and styles are applied in the following order:

- Shared types, interfaces, constants, functions, maps, icons, etc. live in `src/design/shared`
- Shared css files live in `src/design/*.css` and `src/styles/*.css`
- Category-specific logic and styles are in `src/design/{category}/*.ts` and `src/design/{category}/*.css`

Typescript files are broken down as follows:

- `{ComponentName}.consts.ts`: component-specific constants (e.g. `const BUTTON_VARIANTS = ['primary', 'secondary'] as const;`)
- `{ComponentName}.types.ts`: component-specific types (e.g. `type ButtonVariants = typeof BUTTON_VARIANTS[number];`)
- `{ComponentName}.maps.ts`: component-specific maps (e.g. `



