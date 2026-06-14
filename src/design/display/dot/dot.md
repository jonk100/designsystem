# Dot

A micro-indicator for online status or unread notifications; a simple circular dot.

## Overview

The component renders a small circular dot that can convey status via color variant and size. It is purely presentational and does not handle state management.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | DisplayVariant | "primary" | Dot color variant (maps to background color). |
| size | DisplaySize | "md" | Dot size. |
| as | Tag | "span" | Custom element to render (e.g., `span`, `div`). |
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
| `variant` | `primary`, `secondary`, `success`, `warning`, `error`, `neutral` | Sets the background color of the dot. |
| `size` | `sm`, `md`, `lg`, `xl` | Controls the physical diameter of the dot. |

## Usage

### Simple dot

```astro
---
import Dot from '@/design/display/dot/Dot.astro';
---
<Dot variant="success" size="sm" />
```

### Status indicator in a list

```astro
---
import Dot from '@/design/display/dot/Dot.astro';
---
<ul>
  <li><Dot variant="primary" size="md" /> John Doe</li>
  <li><Dot variant="error" size="sm" /> Alice</li>
</ul>
```

## Logic

*Omitted* (no script or external controller).

## Accessibility

The component renders a `<span>` with `aria-hidden="true"`, making it decorative. Provide a label via `aria-label` on the parent if needed.

## CSS Architecture

* Root class: `dot`.
* Size modifier: `display-size--${size}`.
* Variant modifier: `display-variant--${variant}`.

## Related Components

* `Avatar` – often paired with a `Dot` to show online status.
* `Icon` – can be combined with `Dot` for status icons.
* `Button` – may include a `Dot` as a visual indicator.