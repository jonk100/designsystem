---
description: creates documentation for a category directory
---

You are generating a category-level documentation file for the design system. This file lives at the category level (e.g., `src/design/surfaces/surfaces.md`) and documents all components within that category.

## Your Task

Generate a markdown documentation file for the **{CATEGORY_NAME}** category. The file should be named `{category-name}.md` and placed in `src/design/{category-name}/`.

## The Format to Follow

1. **Intro paragraph**: Write 3–5 sentences describing what this category is, what it solves, and its role in the system.
2. **"Major Areas Documented" block**: 3–4 bullet points with bold labels and descriptions.
3. **Component table**: Columns are `Component`, `Type` (Primitive or Role-based), `Shared Props`, `Solo Props`.
4. **Per-component sections**:
   - `### ComponentName`
   - Path: `src/design/{category}/{component-name}/ComponentName.astro`
   - Two or three `####` subheadings — each is a **conceptual label** (not "Overview" or "Description"), followed by 2–4 sentences about *why* the component exists and *what problem it solves*.
   - Focus on the mental model, not the API.

## Logic Sections (Conditional)

If the category contains **TypeScript-driven behavior** (e.g., a `.ts` controller file, a `Region` component, a JS-managed state machine, or event delegation patterns), add a `## Logic` section after the component table and before the per-component sections.

This section should:
- List each `.ts` file and its role (e.g., `toast.ts`, `alertDialog.ts`, `modal.ts`, `drawer.ts`)
- Describe the controller pattern (e.g., "imperative open/close API", "custom events", "focus trapping", "region-based rendering")
- Explain the `Region` component convention if present (e.g., `ToastRegion.astro`, `AlertDialogRegion.astro`) — these are mount points that the TS controller targets
- Note any event delegation or DOM-registration patterns used
- Include a brief code example showing the intended usage pattern (e.g., `import { toast } from '...'`, `toast.push({ ... })`)

Only include the `## Logic` section if the category has this kind of imperative or controller-driven behavior. For pure prop-driven categories (layout, typography, surfaces), omit it entirely.

## Additional Context

- **Component Template**: `/home/jk/Code/DesignSystem/src/design/COMPONENT_TEMPLATE.md`
- **Tone**: Technical but readable. Write for a developer who is new to the system but not new to frontend development..