# Semantics

Semantics is the foundational system for long-form reading, document flow, and structural outlines within the design system. Unlike Typography (which focuses on Functional UI Text), Semantics components care deeply about vertical rhythm, measure, semantic HTML document outlines, and editorial reading experiences.

This document serves as a guide for developers and designers building articles, landing pages, and content blocks. It establishes the hard mental boundary between UI primitives and Document primitives.

**Major Areas Documented:**
- **Primitives vs. Role-based Components**: Distinguishing between foundational containers that manage text flow and specific semantic wrappers.
- **The UI vs. Editorial Boundary**: Ensuring developers use Semantic elements for document outlines rather than UI Text.
- **Boolean Styling Pattern**: The standardized application of common text styles (`bold`, `italic`, `underline`, `strikethrough`) via inline CSS rather than class pollution.

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **Prose** | Primitive | `size`, `tone`, `bold`, `italic`,... | `as`, `maxWidth` |
| **Heading** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `as`, `align`, `truncate`, `tracking`, `leading` |
| **Quote** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `variant`, `align`, `cite`, `author` |

*(Note: "Shared Props" includes `bold`, `italic`, `underline`, and `strikethrough` across all components.)*

---

### Prose

`src/design/semantics/prose/Prose.astro`

#### Text Block Layout Primitive

`Prose` acts as a layout primitive. Typeface, size, and line height are meaningless if lines run 200 characters wide. `Prose` enforces the "measure" (maximum line length, usually 60–75ch) to ensure body copy remains highly readable.

#### Typographic ScrollContainer Equivalent

It functions as a typographic `ScrollContainer`—a layout wrapper that makes everything inside it flow correctly and maintains vertical rhythm.

#### Measure Enforcement via Max Width

Accepts a `maxWidth` prop mapped to specific character counts (`ProseMaxWidth`) to ensure optimal reading length.

---

### Heading

`src/design/semantics/heading/Heading.astro`

#### Semantic Hierarchy & Visual Decoupling

A semantic role wrapper that outputs correct `<h1-h6>` elements while allowing visual decoupling (e.g., rendering an `<h1>` that looks like an `h3` using the `size` prop). This ensures that developers can build a strict document outline for SEO and screen readers without compromising the visual design.

#### Core Document Section Titling

A core Role Component. Used primarily for section titling, structural outlines, and hierarchy.

#### Granular Tracking and Leading Control

Exposes `tracking` and `leading` props explicitly, as these are often overridden on large display text.

---

### Quote

`src/design/semantics/quote/Quote.astro`

#### Semantic External Citation Wrapping

`Quote` semantically wraps cited text and solves the UI pattern of attributing quotes. By consolidating block, inline, and pull quotes into a single component, it eliminates cognitive overhead for developers.

#### Dynamic Block vs. Inline Rendering

Dynamically handles rendering the correct HTML element (`<blockquote>` for block/pull variants, `<q>` for inline variants) based on the `variant` prop. For block and pull variants, it automatically structures the `author` and `<cite>` tags correctly in a footer.
