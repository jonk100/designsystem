# Surfaces

Surfaces are the spatial foundations of the design system. They establish the z-axis elevation and background context for content, providing distinct boundaries and visual hierarchy.

## The Layer Stack

Surfaces primarily define elevation using the `--layer--*` variables.
- `--layer--0`: The page floor (`Screen`).
- `--layer--1`: Subtly lifted regions and page-level zones (`Paper`, `Section`, `Well`).
- `--layer--2`: Discrete, self-contained objects (`Card`, `Bento`, `Panel`, `Tile`).
- `--layer--3` to `--layer--5`: Floating dynamic surfaces, which belong in the `overlays` category (Modals, Popovers, Tooltips), not `surfaces`.

## Current Components

### `Screen`
The outermost surface. Represents the full viewport or page canvas at `--layer--0`. It is not a layout component; it purely establishes the base background and stacking context for everything inside.

### `Paper`
A barely-lifted surface at `--layer--1`. Acts as a document or sheet sitting just above the page floor. Used for page-level content areas, editor canvases, or main content regions. Distinct from `Card` in that it represents a zone, not a discrete object.

### `Card`
A discrete, self-contained object at `--layer--2`. The workhorse of the surface system. The `Card` family (`Card`, `CardHeader`, `CardContent`, `CardFooter`) uses a composition pattern enforcing consistent internal structure.
**Padding Pattern:** When a `<Card>` is given a `padding` prop (e.g. `padding="sm"`), it maps to a surface class (e.g. `.surface-padding--sm`) that defines CSS variables (`--surface-pad` and `--surface-pad-half`). If the `Card` contains compound children (`CardHeader`, etc.), it automatically removes its own padding using a `:has()` selector, and the children inherit and consume the CSS variables to apply their specific directional padding. This allows inner borders (like a header's bottom border) to run edge-to-edge seamlessly.

### `Section`
A named region within a page. Its primary job is establishing a background context for its content region. Often operates at `--layer--1` or transparently.

### `BentoGrid` & `BentoCell`
Specialized variants for dense, grid-based layouts.

### `Panel`
An in-between surface (`--layer--2` or `--layer--3`) like a sidebar, inspector pane, or persistent drawer. It is anchored to the shell and doesn't float like an overlay or scroll like a paper.

### `Well`
A recessed surface (the visual inverse of a card). Sinks into the page rather than lifting above it. Used for code blocks, nested content, and read-only fields.

### `Backdrop`
The semi-transparent dark layer behind a modal covering the Screen. It utilizes the semantic `--backdrop-color` token.

### `Tile`
A flush, borderless variant of a card meant for grids where the grid lines provide separation rather than the individual borders.

## Misplaced Components

- **`Frame`**: This component enforces aspect ratios and acts as a visual boundary for media. Because it constrains content rather than grouping arbitrary UI elements, it belongs in the `display` category, not `surfaces`.
