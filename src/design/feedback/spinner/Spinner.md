# Spinner

The `Spinner` component is an animated circular loading indicator used to signal that a background task, data load, or processing operation is currently underway.

## Overview

The job of the `Spinner` component is to communicate ongoing asynchronous work to the user without blocking the rest of the application layout. It is NOT responsible for showing work completion percentages (which should use `Progress`), indicating layout placeholder blocks (which should use `Skeleton`), or locking page-level interaction (which should use `AlertDialog`).

## Props

The `Spinner` component accepts all standard HTML attributes for its root element (`span` by default), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | The size scale of the circular loading ring. |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'neutral'` | Color severity variant mapping to standard feedback color tokens. |
| `label` | `string` | `'Loading...'` | Accessible text description announced to screen readers. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Sizes**:
  - `xs`: 12px diameter with a 1.5px border width. Recommended for inline text blocks or compact elements.
  - `sm`: 16px diameter with a 2px border width. Recommended for standard button icon replacements.
  - `md`: 24px diameter with a 2.5px border width. Recommended for card-level or section-level loading.
  - `lg`: 36px diameter with a 3.5px border width. Recommended for major content zones.
  - `xl`: Exposes a larger scale block (typically defined dynamically or via parent containers).
- **Variants**:
  - Maps directly to standard feedback colors (`--color-feedback-*`) via class selectors:
    - `.spinner-variant--neutral` (maps to neutral text color).
    - `.spinner-variant--info` (maps to info blue).
    - `.spinner-variant--success` (maps to success green).
    - `.spinner-variant--warning` (maps to warning yellow).
    - `.spinner-variant--error` (maps to error red).

## Usage

### Basic

```astro
---
import Spinner from "@/design/feedback/spinner/Spinner.astro";
---

<Spinner />
```

### Common Patterns

#### Embedded Button Loader
Showing a spinner inside an interactive button element to signal a loading state:

```astro
---
import Button from "@/design/controls/button/Button.astro";
import Spinner from "@/design/feedback/spinner/Spinner.astro";
---

<Button variant="primary" disabled>
  <Spinner size="sm" label="Saving settings..." />
  <span>Saving...</span>
</Button>
```

#### Section Loading Area
Displaying a large loading spinner in the center of a layout container:

```astro
---
import Spinner from "@/design/feedback/spinner/Spinner.astro";
import Center from "@/design/layout/center/Center.astro";
---

<Center style="min-height: 200px;">
  <Spinner size="lg" variant="info" label="Loading dashboard data..." />
</Center>
```

## Accessibility

- **Semantic Role**: The spinner exposes `role="status"` which automatically announces its presence to assistive technologies as a status indicator.
- **Accessible Descriptions**: Renders a child element with `.sr-only` class that holds the `label` string. Screen readers will read this label (e.g., "Loading...") when encountering the spinner.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.spinner-component`, `.spinner-size--*`, `.spinner-variant--*`).
- **Rotational Keyframes**: Uses CSS keyframe animations (`@keyframes spinner-spin`) to rotate the ring via `transform: rotate(360deg)` at a rate of 0.75s per spin.
- **Motion Optimization**: Animation is disabled or paused if the user has enabled `@media (prefers-reduced-motion: reduce)` on their device.

## Related Components

- **Progress**: For linear determinate or indeterminate progress tracking.
- **Skeleton**: For skeleton content layout shimmers.
- **Button**: Composes buttons that support loading indicators.
