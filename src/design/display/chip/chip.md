# Chip

A compact, interactive tag for input selection, filtering, or choices. Supports an optional icon or avatar and can be dismissible.

## Overview

The component provides a small, interactive element that can be used for selection, filtering, or grouping. It can be dismissible and indicates an active state.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | DisplayVariant | "default" | Visual variant (background and border). |
| size | DisplaySize | "md" | Size token affecting padding and font size. |
| icon | SvgName | – | Optional icon name. |
| dismissible | boolean | false | Whether the chip can be closed. |
| active | boolean | false | Indicates active state. |
| as | Tag | "button" | Custom element to render (e.g., `button`, `span`). |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string \| Record<string,string> | – | Inline style. |
| HTML attributes | any | – | Any standard HTML attributes. |

*All props from `BaseComponentProps` and standard HTML attributes are supported.*

## Variants / Sizes

| Prop | Values | Effect |
|------|--------|--------|
| `variant` | `default`, `primary`, `secondary`, `success`, `warning`, `error`, `neutral` | Sets background and border colors. |
| `size` | `sm`, `md`, `lg`, `xl` | Controls padding and font size. |
| `active` | boolean | Adds `chip--active` styling. |
| `dismissible` | boolean | Adds `chip--dismissible` and a close button. |

## Usage

### Basic

```astro
---
import Chip from '@/design/display/chip/Chip.astro';
---
<Chip>Primary</Chip>
```

### Dismissible

```astro
---
import Chip from '@/design/display/chip/Chip.astro';
---
<Chip dismissible>Close me</Chip>
```

### Active state

```astro
---
import Chip from '@/design/display/chip/Chip.astro';
---
<Chip active>Selected</Chip>
```

## Logic

*Omitted* (no script or external controller).

## Accessibility

The component renders a `<button>` when `as="button"` (default) with `aria-pressed` reflecting the `active` prop. Dismissible chips include a close button with `role="button"` and `tabindex="0"` for keyboard accessibility. Provide an `aria-label` if no visible text is present.

## CSS Architecture

* Root class: `chip`.
* Size modifier: `display-size--${size}`.
* Variant modifier: `display-variant--${variant}`.
* Active modifier: `chip--active`.
* Dismissible modifier: `chip--dismissible`.
* Interactive modifier (when `as="button"`): `chip--interactive`.

## Related Components

* `Badge` – similar visual style but non‑interactive.
* `Tag` – interactive categorization indicator.
* `Button` – often paired with chips for actions.
* `Avatar` – can be used as the chip’s icon.