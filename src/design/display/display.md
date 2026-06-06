# Display

The Display category encompasses all atomic, visual indicator components used to present small pieces of data, status, or identity. These components are critical for conveying state (like unread counts or online status) and categorizing information (like tags and badges) across the application.

This document serves as a guide for developers and designers working with visual indicators. It outlines the shared architectural pattern that governs most display components, ensuring a cohesive aesthetic without redundant CSS.

**Major Areas Documented:**
- **The Shared Display Component Pattern**: How elements like Badge, Chip, and Tag inherit background colors, borders, and hover states systematically.
- **Primitives vs. Role-based Components**: Distinguishing between foundational indicators (like Dot or Badge) and specific semantic wrappers (like Avatar).
- **Global Effects System**: How display components (and the wider system) consume global visual modifiers like glassmorphism and shimmer effects.

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **Badge** | Primitive | `size`, `variant`, `as` | `icon` |
| **Tag** | Primitive | `size`, `variant`, `as` | `icon` |
| **Chip** | Primitive | `size`, `variant`, `as` | `icon`, `dismissible`, `active` |
| **Dot** | Primitive | `size`, `variant`, `as` | (none) |
| **Counter** | Primitive | `size`, `variant`, `as` | (none) |
| **Icon** | Primitive | `size` | `name`, `tone` |
| **Indicator** | Role-based | `as` | `position`, `offset` |
| **Avatar** | Role-based | `size`, `as` | `src`, `alt`, `initials`, `shape` |

*(Note: All display components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `class:list`, `animate`, `onScroll`, and `effects`.)*

---

### Badge

`src/design/display/badge/Badge.astro`

#### Atomic Status Indicator

The `Badge` component is the quintessential primitive for highlighting short pieces of information, such as status (e.g., "Active", "Pending") or categories. It relies heavily on the `variant` prop to visually distinguish intent.

#### Shared Token Architecture

`Badge` is a prime example of the Shared Display Component Pattern. Its CSS only defines component-specific structural behaviors, while its aesthetic styling (backgrounds, text colors, radii) is dynamically applied via global `.display-variant--*` and `.display-size--*` utility classes defined in `tokens.css`.

---

### Tag

`src/design/display/tag/Tag.astro`

#### Data Categorization Primitive

Visually similar to Badges, `Tag` is intended for categorizing metadata and user-generated filters. It serves as a foundational categorization indicator that utilizes the same shared variant and size classes.

---

### Chip

`src/design/display/chip/Chip.astro`

#### Interactive Selection Token

`Chip` extends the concept of a `Tag` with interactivity in mind. It handles complex interactive states such as being `active` or `dismissible` (which programmatically renders an X button for removal), making it ideal for filter selections or dynamic input arrays.

---

### Dot

`src/design/display/dot/Dot.astro`

#### Micro-Indicator

`Dot` is a minimalistic, textless indicator used to show unread states or online availability. It enforces a perfect circle shape and scales its dimensions dynamically based on the inherited `size` token.

---

### Counter

`src/design/display/counter/Counter.astro`

#### Numerical State Visualization

`Counter` is an extension of the indicator concept that explicitly renders numerical values (like "3" unread messages). It adheres strictly to the shared variant and size class system to maintain visual parity with badges and dots.

---

### Icon

`src/design/display/icon/Icon.astro`

#### Type-Safe SVG Renderer

The `Icon` component acts as a primitive wrapper to dynamically load and render Astro SVG components. It enforces a strict 1:1 aspect ratio and consumes an auto-generated SVG registry for absolute type-safety regarding available system icons via the `name` prop.

---

### Indicator

`src/design/display/indicator/Indicator.astro`

#### Positional Status Wrapper

The `Indicator` is a role-based wrapper component. Instead of rendering independently, it wraps around other components (typically an `Avatar` or a button) and intelligently positions a slot-injected component (like a `Dot` or `Counter`) relative to its bounds using the `position` and semantic `offset` props.

---

### Avatar

`src/design/display/avatar/Avatar.astro`

#### Identity Representation Wrapper

The `Avatar` component manages the visual identity of users or entities. It abstracts away complex UI fallback systems—displaying an image if a `src` is provided, but automatically falling back to an elegant colored container rendering `initials` if the image is missing or fails to load. It supports varying shapes (`circle`, `square`, `rounded`).
