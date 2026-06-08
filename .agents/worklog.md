
## 2026-06-08T09:23:22.752Z

Task completed

## 2026-06-08T11:36:00Z

### ComponentPreview — Interactive Prop Explorer

Created a reusable `ComponentPreview` component in `src/components/` that renders a live design system component in a tabbed Preview/Code interface with toggle button groups for cycling prop values in real time.

**Files created:**
- `src/components/ComponentPreview.css` — Styles using design system tokens
- `src/components/ComponentPreview.astro` — Main component with ~280 lines of client-side JS
- `src/pages/sandbox.astro` — Demo page at `/sandbox` with 5 live examples

**Supports 4 prop types:**
1. `class` — Swaps CSS classes by prefix (e.g. `display-variant--primary`)
2. `style` — Patches CSS custom properties (e.g. `--local-fs: var(--fs-md)`)
3. `bool` — Shows/hides child elements + toggles modifier classes
4. `text` — Updates textContent of targeted elements

**Features:** Smart code auto-generation, lightweight regex syntax tokenizer, copy-to-clipboard, auto-detection of display component props when no config is passed.

**Verified:** `pnpm astro check` — 0 errors, 0 warnings, 0 hints (216 files).

