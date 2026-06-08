# Progress

The `Progress` component is a linear indicator showing the completion status of an ongoing operation, such as file uploads, build tasks, or installation processes.

## Overview

The job of the `Progress` component is to visualize status progression. It is NOT responsible for presenting a rotating indicator for indeterminate loading loops (use `Spinner`), showing structural card placeholders (use `Skeleton`), or throwing alert notices (use `Alert`).

## Props

The `Progress` component accepts all standard HTML attributes for its root element (`div`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | `undefined` | The current value (from 0 to `max`). If omitted, the progress enters an indeterminate loop. |
| `max` | `number` | `100` | The maximum value limit. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height dimensions of the progress bar track. |
| `variant` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | Color variant of the progress fill, mapping to standard feedback color tokens. |
| `label` | `string` | `undefined` | Optional title label displayed above the progress bar. |
| `showValue` | `boolean` | `false` | Whether to display completion percentage numbers. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Sizes**:
  - `sm`: Track height of 6px.
  - `md`: Track height of 10px.
  - `lg`: Track height of 14px.
- **Variants**:
  - `info`: Blue indicator track fill (`var(--color-feedback-info)`).
  - `success`: Green indicator track fill (`var(--color-feedback-success)`).
  - `warning`: Yellow indicator track fill (`var(--color-feedback-warning)`).
  - `error`: Red indicator track fill (`var(--color-feedback-error)`).
  - `neutral`: Muted grey indicator track fill (`var(--color-feedback-neutral)`).
- **Indeterminate State**:
  - Omitting the `value` prop transitions the progress bar into an indeterminate loading line. A 33%-width segment slides continuously across the track.

## Usage

### Basic

```astro
---
import Progress from "@/design/feedback/progress/Progress.astro";
---

<Progress value={60} max={100} />
```

### Common Patterns

#### Determinate Upload Progress
Showing progress with title labels and completion percentages:

```astro
---
import Progress from "@/design/feedback/progress/Progress.astro";
---

<Progress
  value={45}
  max={100}
  label="Syncing local database..."
  showValue={true}
  variant="success"
  size="sm"
/>
```

#### Indeterminate Build Track
Displaying a sliding progress bar during long-running background tasks of unknown duration:

```astro
---
import Progress from "@/design/feedback/progress/Progress.astro";
---

<Progress
  label="Configuring environment workspace..."
  variant="info"
  size="md"
/>
```

## Accessibility

- **Roles & Attributes**: Exposes `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, and `aria-valuemax`.
- **Descriptive Text**: Integrates `aria-label` mapped to the `label` prop, so assistive screen readers describe what the progress represents.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.progress-component`, `.progress__header`, `.progress__label`, `.progress__value`, `.progress__track`, `.progress__bar`).
- **Dynamic Widths**: In determinate state, uses the CSS custom property `--progress-value` in the template to update the bar width dynamically (`width: var(--progress-value, 0%)`).
- **Sliding Keyframes**: Utilizes `@keyframes progress-indeterminate` to slide the loader block from left-to-right.
- **Motion Reduction**: Disables the indeterminate slide animation under `@media (prefers-reduced-motion: reduce)`.

## Related Components

- **Spinner**: For circular active work loaders.
- **Skeleton**: For card content layout loaders.
