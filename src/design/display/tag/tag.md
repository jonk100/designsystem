# Tag

An interactive data categorization indicator that visually groups or labels content. It is similar to a badge but intended for selection, filtering, or status indication.

## Overview

The component renders a small inline element (default `<span>`) that can optionally include an icon and a status dot. It uses shared variant classes for background and border styling, making it easy to apply consistent visual states across the design system.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | SvgName \| string | – | Optional leading icon name from shared icons or raw emoji/string. |
| variant | DisplayVariant \| 'amber' \| 'teal' \| 'coral' \| 'purple' | "default" | Visual variant that sets background and border colors. |
| size | DisplaySize | "md" | Size token controlling padding and font size. |
| dot | boolean | false | When true, renders a small status dot using the `Dot` component. |
| as | Tag | "span" | Custom HTML element to render (e.g., `div`, `span`). |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string \| Record<string,string> | – | Inline style. |
| animate | string | – | Animation class/name (inherited). |
| onScroll | string | – | Scroll handler (inherited). |
| HTML attributes | any | – | Any standard HTML attributes (e.g., `id`, `data-*`). |

*All props from `BaseComponentProps` and standard HTML attributes are supported.*

## Variants / Sizes

| Prop | Values | Effect |
|------|--------|--------|
| `variant` | `default`, `amber`, `teal`, `coral`, `purple` (plus any `DisplayVariant` from the shared system) | Sets background and border colors. |
| `size` | `sm`, `md`, `lg`, `xl` | Controls padding and font size via `display-size--*` classes. |
| `dot` | boolean | When true, shows a small status dot sized `2xs` and colored according to the variant. |

## Usage

### Basic

```astro
---
import Tag from '@/design/display/tag/Tag.astro';
---
<Tag>Primary</Tag>
```

### With icon

```astro
---
import Tag from '@/design/display/tag/Tag.astro';
---
<Tag icon="check" variant="success" size="sm">Approved</Tag>
```

### With status dot

```astro
---
import Tag from '@/design/display/tag/Tag.astro';
---
<Tag variant="error" size="sm" dot>Unread</Tag>
```

### Custom element

```astro
---
import Tag from '@/design/display/tag/Tag.astro';
---
<Tag as="div" variant="amber" size="lg">Notification</Tag>
```

## Logic

*Omitted* – the component contains no script or external controller.

## Accessibility

The component renders a `<span>` (or custom element) with `aria-hidden="true"` on the optional icon. Provide accessible text via the default slot. If the tag conveys meaning without visible text, add an `aria-label` attribute.

## CSS Architecture

* Root class: `tag-component`.
* Size modifier: `display-size--${size}`.
* Variant modifier: `display-variant--${variant}`.
* Optional dot class: `tag__dot` (applied to the `Dot` component).

## Related Components

* `Badge` – similar visual style but non‑interactive.
* `Chip` – more interactive, often dismissible.
* `Dot` – standalone status indicator used by `Tag`.
* `Icon` – can be used as the leading icon.
* `Button` – often paired with tags for actions.