# Skeleton

The `Skeleton` component is a layout placeholder used to mimic the shape and structure of content while it is loading. It displays a subtle shimmer animation to indicate that content is loading, reducing perceived loading times.

## Overview

The job of the `Skeleton` component is to provide structural placeholders during async data fetching. It is NOT responsible for showing completion progress (use `Progress`), representing active processes (use `Spinner`), or displaying alerts (use `Alert`).

## Props

The `Skeleton` component accepts all standard HTML attributes for its root element (`div`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `string` | `undefined` | Optional width style override (e.g. `'100px'`, `'60%'`). |
| `height` | `string` | `undefined` | Optional height style override (e.g. `'16px'`, `'48px'`). |
| `shape` | `'rect' \| 'line' \| 'circle'` | `'rect'` | The geometric shape of the skeleton layout placeholder. |
| `lines` | `number` | `1` | Number of placeholder text lines to render as a stacked group. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Shapes**:
  - `rect`: A rectangular block with rounded corners (`--rad-md`). Recommended for loading cards, images, or major content areas.
  - `line`: A thin bar with minor rounded corners (`--rad-sm`) representing text.
  - `circle`: A circular element (`--rad-full`) representing avatars, status badges, or round buttons.
- **Stacked Lines**:
  - When `lines > 1` is passed, the component automatically generates multiple lines in a stacked `.skeleton-group` layout container, with the last line slightly shortened (80% width) to mimic standard paragraph blocks.

## Usage

### Basic

```astro
---
import Skeleton from "@/design/feedback/skeleton/Skeleton.astro";
---

<Skeleton shape="rect" width="100%" height="150px" />
```

### Common Patterns

#### Loading Avatar & Text Header
Using a circle shape alongside a paragraph layout block:

```astro
---
import Skeleton from "@/design/feedback/skeleton/Skeleton.astro";
import Inline from "@/design/layout/inline/Inline.astro";
import Stack from "@/design/layout/stack/Stack.astro";
---

<Inline gap="md" y="center">
  <Skeleton shape="circle" width="48px" height="48px" />
  <Stack gap="2xs" style="flex-grow: 1;">
    <Skeleton shape="line" width="120px" height="16px" />
    <Skeleton shape="line" width="200px" height="12px" />
  </Stack>
</Inline>
```

#### Multi-line Paragraph Placeholder
Generates a block of three lines:

```astro
---
import Skeleton from "@/design/feedback/skeleton/Skeleton.astro";
---

<Skeleton shape="line" lines={3} width="100%" />
```

## Accessibility

- **Native Semantics**: The component delegates accessibility to native HTML semantics. Skeletons are decorative visual elements and do not require interactive keyboard focus.
- **Screen Reader Announcements**: Skeletons should be placed inside a container wrapped in an `aria-busy="true"` attribute to announce loading states to assistive technologies.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.skeleton-component`, `.skeleton-shape--*`, `.skeleton-group`).
- **Shimmer Animation**: Uses keyframes (`@keyframes skeleton-shimmer`) on the `::after` pseudo-element to slide a semi-transparent linear gradient across the component.
- **Motion Controls**: The keyframe animation is disabled if the user has enabled `@media (prefers-reduced-motion: reduce)`.

## Related Components

- **Spinner**: For loading circular wheels that represent generic active work.
- **Progress**: For tracking progress values or indeterminate status lines.
- **Paper**: Card containers that hold loading skeletons.
