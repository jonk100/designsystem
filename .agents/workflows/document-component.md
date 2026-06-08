---
description: creates documentation for a component
---

## Your Task

Generate a markdown documentation file for the **{COMPONENT_NAME}** component. The file should be named `{component-name}.md` and placed at `src/design/{category}/{component-name}/{component-name}.md`.

---

## CONTEXT

Understand the full contents of the following files:

- `src/design/COMPONENT_TEMPLATE.md`
- `src/design/AGENTS.md`
- `{ComponentName}.astro` (or `{ComponentName}Region.astro` if the component is Type C - see below)
- `{ComponentName}.css`
- `vars.css`
- `tokens.css`
- `*.ts` (if they exist - *.consts.ts, *.types.ts, *.functions.ts, *.maps.ts, etc.)
- Any files that the above files import
- Any additional files in the same directory `src/design/{category}/{component-name}/` (`actions.ts`, `README.md`, etc.)

---

## The Format to Follow

Use the two existing category docs (typography.md and semantics.md) as structural reference. At the component level, the file is narrower — one component, full depth. Model your structure on this:

```
# ComponentName

One-paragraph description of what this component is, what category it belongs to, and the core problem it solves. Focus on its purpose. Emphasize the *why* — not "it renders a spinner" but "it communicates ongoing work to the user without blocking the UI."

## Overview

Two to four sentences expanding on the mental model. What is this component's *job* in the system? What is it NOT responsible for? What makes it distinct from similar components?

## Props

A markdown table with columns: `Prop`, `Type`, `Default`, `Description`.
- Every prop in the `Props` interface, including inherited ones from `BaseComponentProps` that are actively used (animate, effects, bg, style, class).
- For union types, list accepted values inline: e.g. `'xs' | 'sm' | 'md' | 'lg'`.
- For boolean props, note the boolean type and what enabling it does.

## Variants / Sizes (if applicable)

If the component has a visual scale (`size`, `variant`, `elevation`, `tone`, etc.), document each value and what it communicates visually or semantically. A short table or bullet list is fine here.

## Usage

### Basic

A minimal code example — the simplest possible usage.

### Common Patterns

Two to four additional examples covering real-world usage patterns. These should reflect *how developers actually reach for this component*, not just prop combinations for the sake of it.

## Logic (Conditional — include only if applicable)

Include this section ONLY if the component has any of the following:

1. **An external `.ts` controller file** (e.g. `contextMenu.ts`, `commandPalette.ts`) — document its exported API with JSDoc-style descriptions and usage examples.
2. **An inline `<script>` block with non-trivial behavior** — summarize what the script does (event registration, DOM manipulation, state management) without reproducing the full source.
3. **A `Region` component** (e.g. `CommandPaletteRegion.astro`) — explain the mount-point pattern: where Region goes in the layout, how the controller targets it, and why they're separate.
4. **Custom event communication** — list every custom event dispatched or listened for (`command-palette:open`, `context-menu:register`, etc.) and describe the payload.
5. **Global state via `window.__*`** — note what is stored, why it's on `window`, and how it's consumed.

If none of these apply, omit the `## Logic` section entirely. Do not write "N/A" or "This component has no logic."

## Accessibility

Two to three sentences about ARIA roles, keyboard behavior, screen reader support, or any `sr-only` patterns used. If the component delegates accessibility entirely to native HTML semantics, say so explicitly.

## CSS Architecture

One to two sentences about the BEM class structure, any CSS custom property locals used (e.g. `--local-fs`, `--local-fw`), token sources (e.g. `--overlay-bg`, `--layer--1`), and whether animation classes are applied via `mergeClasses`.

## Related Components

A short list of components that are commonly composed with this one, or that share a similar responsibility.
```

## Detection Rules (Read These Carefully)

Before writing, examine the component files and classify it (internally) as one of the following. Do not refer to the component as a certain type in the documentation. The classification is for your own reference:

**Type A — Pure Prop-Driven** (e.g. Spinner, Paper)
- No `<script>` block in the `.astro` file
- No `.ts` controller file
- No Region component
- → Omit the `## Logic` section entirely

**Type B — Inline Script** (e.g. ContextMenu)
- Has a `<script>` block in the `.astro` file with real behavior
- Has a small `.ts` file that is primarily registration/helper sugar (not a full controller)
- → Include `## Logic`, document the `.ts` API and summarize what the script manages (event listeners, DOM construction, `window.__*` state)
- → Note that the logic lives in the component itself, not in a separate controller

**Type C — Region + External Controller** (e.g. CommandPalette)
- Has a `Region.astro` file as the actual mount point
- The primary `.astro` may be empty or a stub
- Has a `.ts` controller that dispatches custom events the Region listens for
- → Include `## Logic`, document the controller API fully, explain the Region mount-point pattern, and list all custom events with payloads

---

## Rules

1. Write for a developer who is new to the system but a novice frontend developer. A student, perhaps.
2. Do not use the classification label in the documentation. It won't make sense to the reader.
3. The **Overview** section must draw a clear line: what this component IS responsible for vs. what it is NOT. This mental boundary is the most valuable thing the docs can establish. `AGENTS.md` might help here.
4. Usage examples must use Astro `.astro` syntax with frontmatter fences (`---`). Import from the correct `@/design/...` alias path as seen in the source files.
5. Never reproduce the full source of a `<script>` block. Summarize behavior; show the public API.
6. If a prop is passed through to the underlying HTML element via `{...rest}`, note that the component accepts all standard HTML attributes for its root element.
7. Do not invent props or behavior not present in the source files.
8. Tone is technical but readable. No marketing language.