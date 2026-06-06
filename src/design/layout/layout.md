# Layout

Layout components are the invisible backbone of the design system. They are responsible for the structural arrangement of elements on the page, handling everything from responsive grid systems and macro page containers down to micro-level spacing and flexbox alignments.

This document serves as a guide for developers working with layout primitives. It outlines how layout is treated systematically, abstracting away complex CSS (like CSS Grid or flexbox axis-flipping) into intuitive, composable Astro components.

**Major Areas Documented:**
- **Primitives vs. Utility Components**: Distinguishing between structural containers (like Grid/Stack) and visual spacing utilities (like Spacer/Separator).
- **The X/Y Alignment API**: The standardized approach to layout alignment that replaces confusing `justify-content` and `align-items` axes with intuitive `x` (horizontal) and `y` (vertical) properties.
- **Responsive Foundations**: How containers handle responsive scaling, wrapping, and gaps automatically via shared tokens.

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **Box** | Primitive | `as` | `display` |
| **Stack** | Primitive | `as`, `gap` | `x`, `y` |
| **Inline** | Primitive | `as`, `gap` | `x`, `y`, `wrap` |
| **Grid** | Primitive | `as`, `gap` | `columns`, `minWidth` |
| **Spacer** | Primitive | `as` | `size`, `direction` |
| **Container** | Primitive | `as` | `size` |
| **Separator** | Primitive | (none) | `orientation`, `decorative` |
| **Columns** | Primitive | `as`, `gap` | `count`, `width`, `rule` |
| **Center** | Primitive | `as` | `inline`, `height`, `width`, `text` |
| **AspectRatio**| Primitive | `as` | `ratio` |
| **ScrollArea** | Primitive | `as` | `x`, `y`, `scrollbar` |

*(Note: All layout components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `animate`, and `onScroll`.)*

---

### Stack

`src/design/layout/stack/Stack.astro`

#### Vertical Flexbox Container

`Stack` is the primary layout primitive for arranging elements vertically in a column. It enforces a strict `flex-direction: column` and leverages the design system's spacing scale for consistent gaps between elements.

#### Intuitive X/Y Alignment

`Stack` utilizes the standardized `x` and `y` alignment API. Under the hood, it intelligently maps `x` to `align-items` (horizontal cross-axis) and `y` to `justify-content` (vertical main-axis). This completely removes the cognitive overhead of flexbox axis-flipping.

---

### Inline

`src/design/layout/inline/Inline.astro`

#### Horizontal Flexbox Container

`Inline` is the counterpart to `Stack`, used for arranging elements horizontally in a row. It is ideal for button groups, tag lists, or horizontal navigation menus. 

#### Wrapping and Alignment

Like `Stack`, `Inline` uses the `x` and `y` alignment API, mapping `x` to `justify-content` (horizontal main-axis) and `y` to `align-items` (vertical cross-axis). It also supports a `wrap` boolean to seamlessly handle overflowing child elements.

---

### Grid

`src/design/layout/grid/Grid.astro`

#### CSS Grid Abstraction

`Grid` provides a simplified API over CSS Grid. It is designed to create highly responsive, multi-column layouts without writing custom media queries.

#### Auto-fit vs. Explicit Columns

By default, `Grid` uses a fluid `auto-fit` strategy based on the `minWidth` property, automatically wrapping elements to new rows as the viewport shrinks. Alternatively, passing an explicit integer to the `columns` prop will enforce a rigid grid structure.

---

### Box

`src/design/layout/box/Box.astro`

#### Polymorphic Base Container

`Box` is the most fundamental layout primitive. It renders a simple semantic tag (defaulting to `<div>`) and is generally used when standard layout components (`Stack`, `Grid`) are too opinionated, or when custom CSS layout logic needs to be applied.

#### Display Control

Exposes a straightforward `display` prop (block, inline, inline-block, contents) to override default block-level behaviors while retaining access to `BaseComponentProps`.

---

### Spacer

`src/design/layout/spacer/Spacer.astro`

#### Declarative Visual Spacing

`Spacer` is a utility primitive used to inject specific amounts of whitespace between components without relying on ad-hoc margins or padding. It directly consumes the global `SpacingScale` tokens.

#### Directional Awareness

Supports explicit sizing in `horizontal`, `vertical`, or `both` directions, ensuring that spacing remains rigid and isn't collapsed by parent flex/grid containers (`flex-shrink: 0`).

---

### Container

`src/design/layout/container/Container.astro`

#### Max-Width Content Constraining

`Container` is a macro-layout component designed to limit the maximum horizontal width of page layouts, preventing text lines from becoming too wide to read comfortably on large monitors.

#### Safe Margins and Horizontal Centering

It automatically centers itself within the viewport using auto-margins and enforces standard responsive side padding to ensure content never touches the screen edges on mobile devices.

---

### Separator

`src/design/layout/separator/Separator.astro`

#### Visual and Accessible Content Dividers
The `Separator` component visually divides sections of content horizontally or vertically. It is built as a semantic extension over `<hr>` and encapsulates visual styling from custom border design tokens.

#### Dynamic ARIA Integration
To guarantee accessibility conformance out-of-the-box, the component automatically determines the correct ARIA semantics. If `decorative` is true, it renders with `role="none"` so assistive technologies ignore the structural break. If not decorative, it applies `role="separator"` and bindings for `aria-orientation`.

---

### Columns

`src/design/layout/columns/Columns.astro`

#### Multi-Column Fluid Grid Formatting
The `Columns` component arranges children and long-form prose across multiple columns using native CSS Multi-column layout model. It allows multi-column newspapers, masonry grids, or textual streams.

#### Configurable Rules and Responsive Widths
Supports custom minimum columns widths to allow fluid grid wrapping and dynamic vertical separating rule lines via the `rule` prop (mapping to `column-rule`).

---

### Center

`src/design/layout/center/Center.astro`

#### Absolute Content Centering Utility
The `Center` component centers its children along both the horizontal cross-axis and vertical main-axis using standard flexbox alignments (`align-items: center; justify-content: center;`).

#### Custom Layout Constraint Settings
Exposes `inline` for inline-flex rendering, custom `height`/`width` bounds, and a `text` boolean setting to easily center text alignment inside child components.

---

### AspectRatio

`src/design/layout/aspect-ratio/AspectRatio.astro`

#### Strict Dimension Constraints
The `AspectRatio` component restricts child visual structures (videos, images, icons, card cards, frames) to a strict dimension ratio using modern CSS `aspect-ratio` properties.

#### Prevent Layout Shift (CLS)
Protects against Cumulative Layout Shifts by reserving correct container space before images or iframes load, automatically normalising ratio formats like numbers, fractions (`16/9`), or colon notation (`4:3`).

---

### ScrollArea

`src/design/layout/scroll-area/ScrollArea.astro`

#### Overflow Content Container
The `ScrollArea` component wraps overflow layout content and exposes clean props to handle horizontal and vertical scrolling behavior independently (`overflow-x`, `overflow-y`).

#### Custom Thin Scrollbar Themes
Replaces browser-default thick scrollbars with custom, low-opacity scrollbar styling (thin scrollbar models or completely hidden scrollbars) to maintain sleek design system aesthetics on desktop environments.

