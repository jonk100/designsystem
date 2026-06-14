# Avatar

A visual identity representation for users or entities, with fallback to a colored container displaying initials when no image is provided.

## Overview

The component displays an image if a `src` prop is provided, otherwise falls back to a container showing initials. It handles sizing, shape, and basic accessibility.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | – | URL of the image. |
| alt | string | "" | Accessibility text for the image. |
| initials | string | – | Fallback initials to display if image is missing. |
| size | DisplaySize | "md" | Avatar size. |
| shape | 'circle' \| 'square' \| 'rounded' | "circle" | Shape of the avatar container. |
| as | Tag | "div" | Custom tag to render (e.g., "span"). |
| class | string | – | Additional CSS class. |
| class:list | Record<string, boolean> | – | List of conditional classes. |
| style | string \| Record<string,string> | – | Inline style. |
| animate | string | – | Animation class/name (inherited). |
| effects | string[] | – | Visual effects (inherited). |
| HTML attributes | any | – | Any standard HTML attributes (e.g., `id`, `data-*`). |

*All props from `BaseComponentProps` and standard HTML attributes are supported.*

## Variants / Sizes

| Prop | Values | Effect |
|------|--------|--------|
| `size` | `sm`, `md`, `lg`, `xl` | Controls the physical dimensions of the avatar. |
| `shape` | `circle`, `square`, `rounded` | Determines the container shape. |

## Usage

### Basic with image

```astro
---
import Avatar from '@/design/display/avatar/Avatar.astro';
---
<Avatar src="/images/profile.jpg" alt="John Doe" size="lg" />
```

### Fallback with initials

```astro
---
import Avatar from '@/design/display/avatar/Avatar.astro';
---
<Avatar initials="JD" size="md" shape="square" />
```

### Custom tag and shape

```astro
---
import Avatar from '@/design/display/avatar/Avatar.astro';
---
<Avatar as="span" shape="rounded" size="xs" initials="AB" />
```

## Logic

*Omitted* (no script or external controller).

## Accessibility

The `img` element includes the `alt` attribute for screen readers. The fallback `span` provides accessible text via its content. No additional ARIA roles are required.

## CSS Architecture

* Root class: `avatar`.
* Size modifier: `display-size--${size}`.
* Shape modifier: `avatar-shape--${shape}`.
* Fallback modifier: `avatar--fallback` when `src` is falsy.

## Related Components

* `Image` – visual media component.
* `Frame` – container with ratio and border.
* `Dot` – status indicator.
* `Button` – often paired with avatar for user profiles.