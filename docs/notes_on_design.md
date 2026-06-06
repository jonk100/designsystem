# Architectural Design Decisions

This document tracks the reasoning behind the major architectural and organizational choices made in the Design System.

## 1. Global System & Shared Resources

### CSS Variable Decoupling
**Decision:** All global design tokens (e.g., Z-Index, Shadows, Border Radii, Transitions, Opacities) are strictly maintained in `src/design/vars.css` and `src/design/tokens.css`, rather than being defined inside category-specific files (like `typography/vars.css`).
**Reasoning:** Category-specific CSS files should only contain tokens and rules strictly required by that category. Mixing global tokens into category files creates a "hidden global brain" that makes the system fragile and hard to audit.

### Shared Type Extraction
**Decision:** Universal types (`FontSize`, `TextTone`, `XAlign`, `LineHeight`, etc.) are centralized in `src/design/shared/types.ts`.
**Reasoning:** When multiple categories (like `typography` and `semantics`) rely on the same foundational design types, storing them in one category forces the other to import across category boundaries, implying a false hierarchy. Centralizing them in `shared` creates a clean, unidirectional dependency flow.

## 2. Typography (UI Text)

### The UI Text Boundary
**Decision:** The `src/design/typography/` category is strictly reserved for **Functional UI Text** (`Text`, `Caption`, `Label`, `Code`, `Kbd`, `Link`).
**Reasoning:** UI components are granular. They don't care about "flow," "paragraphs," or "document outlines"—they are used inside buttons, cards, form fields, and data tables. Isolating them prevents them from becoming bloated with long-form reading props (like `maxWidth`).

### Boolean Styling Props
**Decision:** Implemented standard boolean props (`bold`, `italic`, `underline`, `strikethrough`) across all typography components, powered internally by `mergeStyles`.
**Reasoning:** Replaces clunky string union types (e.g., `style="italic"` or `decoration="underline"`). Booleans provide a much cleaner, more ergonomic DX when composing UIs (e.g., `<Text bold italic>...</Text>`).

## 3. Semantics (Document & Content)

### The Content/Editorial Split
**Decision:** Created the `src/design/semantics/` category to house components dedicated to long-form reading and document flow (`Prose`, `Heading`, `Quote`).
**Reasoning:** Mixing UI primitives with Document primitives confuses developers. If they are in the same folder, developers might try to use `Prose` to wrap a group of UI buttons, or add `truncate={true}` to a `Blockquote`. Splitting them establishes a hard mental boundary:
- **"I am building a UI component"** → reach into `Typography`.
- **"I am laying out an article or document outline"** → reach into `Semantics`.

### Prose as a Layout Primitive
**Decision:** `Prose` enforces the "measure" (maximum line length, usually 60–75ch) of its children.
**Reasoning:** Typeface, size, and line height are meaningless if lines run 200 characters wide. `Prose` is the typographic equivalent of a `ScrollContainer`—a layout primitive that ensures body text remains highly readable.

### Heading over Headline
**Decision:** Naming the structural titling component `Heading` rather than `Headline`.
**Reasoning:** `Headline` implies an editorial/journalistic role. `Heading` is inherently structural and maps directly to the HTML standard (`<h1>` – `<h6>`). It reminds developers they are making a semantic choice for screen readers and SEO, not just a visual size choice.

### Quote Component Consolidation
**Decision:** Merged `Blockquote` and `Quote` into a single `Quote` component with a `variant="block | inline | pull"` prop.
**Reasoning:** Reduces the total component surface area. The component dynamically handles rendering the correct semantic HTML wrapper (`<blockquote>` for block/pull, `<q>` for inline) based on the variant, rather than forcing the developer to choose between two different Astro components for what is fundamentally the same semantic concept.
