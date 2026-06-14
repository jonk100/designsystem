# Badge

An atomic status indicator that can display an optional icon and uses shared variant classes for background and border styling.

## Overview

The component renders a small inline element (default `<span>`) that visually conveys status or categorization. It is purely presentational and does not manage interaction.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | SvgName \| string | – | Icon name from shared icons or raw emoji/string displayed before the text. |
| variant | DisplayVariant | "default" | Visual variant controlling background and border colors. |
| size | DisplaySize | "md" | Size token affecting padding and font size. |
| as | Tag | "span" | HTML element to render (e.g., `div`, `span`). |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string \| Record<string,string> | – | Inline style. |
| animate | string | – | Animation class/name (inherited). |
| effects | string[] | – | Visual effects (inherited). |
| HTML attributes | any | – | Any standard HTML attributes. |

*All props from `BaseComponentProps` and standard HTML attributes are supported.*

## Variants / Sizes

| Variant | Visual effect |
|---------|---------------|
| `default` | Neutral background. |
| other `DisplayVariant` values (e.g., `primary`, `success`, `warning`) | Apply corresponding background and border colors. |
| `size` | Controls padding and font size via `display-size--*` classes. |

## Usage

### Basic

```astro
---
import Badge from '@/design/display/badge/Badge.astro';
---
<Badge variant="success" size="sm">Approved</Badge>
```

### With icon (SVG)

```astro
---
import Badge from '@/design/display/badge/Badge.astro';
---
<Badge icon="check" variant="success">Approved</Badge>
```

### With custom element

```astro
---
import Badge from '@/design/display/badge/Badge.astro';
---
<Badge as="div" variant="warning" size="lg">Warning</Badge>
```

## Logic

*Omitted* – the component contains no script or external controller.

## Accessibility

The component renders an inline element with `aria-hidden` on the optional icon. Provide meaningful text inside the badge for screen readers. No additional ARIA roles are required.

## CSS Architecture

* Root class: `badge-component`.
* Size modifier: `display-size--${size}`.
* Variant modifier: `display-variant--${variant}`.
* Optional icon wrapped in `.badge--icon`.

## Related Components

* `Tag` – similar visual style but interactive.
* `Chip` – more interactive version with dismiss support.
* `Dot` – minimal status indicator.