# Icon

A primitive wrapper to dynamically load and render Astro SVG components. It enforces a 1:1 aspect ratio and inlines the SVG using Astro's native component support.

## Overview

The component's job is to render an SVG icon identified by a name, optionally applying size, tone, and spacing. It does not handle icon creation or asset loading; it simply mounts the provided SVG component with appropriate classes and styles.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | SvgName | – | The SVG component identifier (e.g., "home", "user"). |
| size | DisplaySize | "md" | Icon size preset. |
| tone | TextTone | "inherit" | Color tone for the icon. |
| padding | SpacingScale | "3xs" | Padding space around the icon. |
| rad | ComponentRadius | "xs" | Corner radius. |
| border | boolean | false | Whether to draw a border around the icon. |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string | Record<string,string> | – | Inline style. |
| animate | string | – | Animation class/name. |
| effects | string[] | – | Visual effects. |
| HTML attributes | any | – | Any standard HTML attributes applied to the underlying element. |

*All props from `BaseComponentProps` (animate, effects, class, class:list, style, etc.) and standard HTML attributes are supported.*

## Variants / Sizes

| Variant | Visual effect |
|---------|---------------|
| `size` | Controls the physical size of the icon (e.g., `sm`, `md`, `lg`). |
| `tone` | Controls the color tone (e.g., `primary`, `secondary`). |

## Usage

### Basic

```astro
---
import Icon from '@/design/display/icon/Icon.astro';
---
<Icon name="home" size="lg" tone="primary" />
```

### Common Patterns

**Icon with custom padding and radius**

```astro
---
import Icon from '@/design/display/icon/Icon.astro';
---
<Icon name="user" size="md" padding="xs" rad="sm" />
```

**Icon with border**

```astro
---
import Icon from '@/design/display/icon/Icon.astro';
---
<Icon name="warning" border={true} size="xs" />
```

## Logic

*Omitted* (no script or external controller).

## Accessibility

The component renders an SVG with `aria-hidden="true"`, making it decorative. If an accessible name is needed, provide an `aria-label` or `title` attribute via the `...rest` props.

## CSS Architecture

* BEM root class: `icon-component`.
* Modifier class: `text-tone--${tone}`.
* Additional classes for size, padding, radius, and border are generated from the component props.

## Related Components

* `Avatar` – visual identity representation.
* `Frame` – container with ratio and border.
* `Dot` – micro‑indicator.
* `Button` – often paired with icons for visual cues.