# Typography

Typography is the foundational system for setting, arranging, and formatting text within the design system. It ensures readability, accessibility, and visual hierarchy across the application. 

This document serves as a guide for developers and designers working with text elements. It outlines how typography is treated not just as visual styling, but as a system of layout primitives (e.g., managing measure, tracking, and leading at the block level) and semantic role wrappers.

**Major Areas Documented:**
- **Primitives vs. Role-based Components**: Distinguishing between foundational containers that manage text flow and specific semantic wrappers.
- **Typographic Scale & Tokens**: Standardized approaches to size, tone, and weight.
- **Boolean Styling Pattern**: The standardized application of common text styles (`bold`, `italic`, `underline`, `strikethrough`) via inline CSS rather than class pollution.

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **Text** | Primitive | `size`, `tone`, `weight`, `bold`, `italic`,... | `as`, `align`, `valign`, `transform`, `leading`, `tracking`, `truncate`, `clamp` |
| **Caption** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `as`, `align` |
| **Label** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `required`, `disabled`, `for` |
| **Code** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `block`, `language` |
| **Link** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | `href`, `external`, `target`, `rel` |
| **Kbd** | Role-based | `size`, `tone`, `weight`, `bold`, `italic`,... | (none) |

*(Note: "Shared Props" includes `bold`, `italic`, `underline`, and `strikethrough` across all components.)*

---

### Text

`src/design/typography/text/Text.astro`

#### Low-level Text Formatting Primitive

The `Text` component is the lowest-level primitive for inline text formatting. It exposes a vast API for granular text control (transforms, clamping, varying alignments) that solves the problem of needing one-off utility classes for highly specific text adjustments.

#### Foundational Inline Bedrock

It acts as the bedrock for inline spans and paragraphs. It is similar to `Prose` but intended for distinct strings rather than large blocks of formatted copy.

#### Dynamic HTML Tag Rendering

Uses dynamic HTML tag rendering via the `as` prop. Relies heavily on the category-level `typography.maps.ts` to map its extensive props to specific utility classes.



---

### Caption

`src/design/typography/caption/Caption.astro`

#### Media Content Contextual Wrapper

A contextual wrapper used to describe media content. Eliminates the need for designers/developers to remember the specific muted, smaller scale tokens required for supplementary text.

#### Supplementary Aside Role

Belongs to the "Aside" family of Role Components (alongside Blockquote, Label, Byline). 

---

### Label

`src/design/typography/label/Label.astro`

#### Accessible Form Input Binding

Specifically designed for form accessibility. It binds to inputs via the `for` attribute and programmatically controls the rendering of required indicators (`*`) and disabled states.

#### Interactive Form Control Wrapper

An interactive Aside role component. Relates directly to form controls.



---

### Code & Kbd

`src/design/typography/code/Code.astro`  
`src/design/typography/kbd/Kbd.astro`

#### Monospaced Technical Formatting

These components render monospaced font stacks. `Code` handles both inline snippets and block-level pre-formatted text (with language context), while `Kbd` specifically styles user input keystrokes.

#### Syntax and Keystroke Highlight Roles

Technical and documentation-focused role components.

---

### Link

`src/design/typography/link/Link.astro`

#### Secure External Navigation Primitive

A navigation primitive. It centralizes the logic for external links, automatically applying `_blank` targets, `noopener noreferrer` security attributes, and injecting external icon indicators when the `external` flag is thrown.

#### Interactive Inline Anchors

An interactive text role component, often nested inside `Text` or `Prose`.
