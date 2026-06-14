# Frame

A container component that enforces aspect ratio and optional border styling for content.

## Overview

The component provides a wrapper that can enforce a specific ratio (e.g., 16:9) and border thickness, making it useful for layout components like cards, media frames, or responsive containers.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | '1:1' \| '4:3' \| '16:9' \| 'auto' | 'auto' | Aspect ratio preset. |
| border | 'none' \| 'thin' \| 'thick' | 'none' | Border thickness. |
| as | Tag | 'div' | Custom element to render (e.g., `section`, `article`). |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string \| Record<string,string> | – | Inline style. |
| animate | string | – | Animation class/name (inherited). |
| effects | string[] | – | Visual effects (inherited). |
| HTML attributes | any | – | Any standard HTML attributes. |

*All props from `BaseComponentProps` and standard HTML attributes are supported.*

## Variants / Sizes

| Prop | Values | Effect |
|------|--------|--------|
| `ratio` | `1:1`, `4:3`, `16:9`, `auto` | Sets the width‑height relationship of the wrapper. |
| `border` | `none`, `thin`, `thick` | Controls the visual thickness of the border. |

## Usage

### Basic

```astro
---
import Frame from '@/design/display/frame/Frame.astro';
---
<Frame>
  <slot />
</Frame>
```

### Custom ratio and border

```astro
---
import Frame from '@/design/display/frame/Frame.astro';
---
<Frame ratio="16:9" border="thick">
  <slot />
</Frame>
```

## Logic

*Omitted* (no script or external controller).

## Accessibility

The component renders a generic `<div>` (or custom tag) with a `slot` for inner content. It inherits standard HTML semantics; no additional ARIA roles are required.

## CSS Architecture

* Root class: `frame-component`.
* Ratio modifier: `frame-ratio--${ratio.replace(':', 'x')}`.
* Border modifier: `frame-border--${border}`.

## Related Components

* `Card` – often built using `Frame` for consistent spacing.
* `Panel` – similar container without ratio enforcement.
* `Button` – can be placed inside a `Frame` for focused UI elements.