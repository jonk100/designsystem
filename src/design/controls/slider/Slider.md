# Slider

A single-handle range slider used for selecting a single numeric value.

## Overview

The job of the `Slider` component is to allow users to select a single value from a range of bounds (such as volume levels or sizing dimensions). It dynamically updates a gold track progress fill, displays the current value, and handles standard range constraints. It is NOT responsible for range interval selections (use `RangeSlider` for low/high dual values).

## Props

The `Slider` component accepts all standard HTML attributes for its root `div` container element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | The text label displayed above the slider. |
| `value` | `number` | `50` | The initial value of the slider. |
| `min` | `number` | `0` | The minimum bounds value. |
| `max` | `number` | `100` | The maximum bounds value. |
| `step` | `number` | `1` | The increment step size for slider modifications. |
| `name` | `string` | `undefined` | Common input name assigned to the native input element. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Progress Fill**: The selected visual range is displayed using a gold track fill `.slider__fill` whose width is computed dynamically based on the current selection.
- **Bound Display**: Displays the minimum and maximum selectable bounds at the left and right edges of the slider track.

## Usage

### Basic

```astro
---
import Slider from "@/design/controls/slider/Slider.astro";
---

<Slider label="Volume" min={0} max={100} value={50} />
```

### Common Patterns

#### Custom Step Increments
Using step values to align choices with discrete intervals:

```astro
---
import Slider from "@/design/controls/slider/Slider.astro";
---

<Slider label="Grid Column Count" min={4} max={64} value={16} step={4} name="columns" />
```

## Logic

The `Slider` component contains an inline script that manages the progress fill and value display updates:

1. **Dynamic Progress Fill**: Computes the percentage of the current slider handle relative to bounds, and updates the width of the gold track fill `.slider__fill` dynamically.
2. **Display Value Update**: Updates the text content of the slider value label (e.g., `50`) in real-time as the slider input changes.
3. **Transitions Hook**: Re-executes setup functions on `astro:page-load` to support view transitions.

## Accessibility

- **Native Controls**: Leverages native range input elements, ensuring standard keyboard accessibility (using arrow keys to adjust values) and compatibility with screen readers.
- **Focus Rings**: Employs focus outlines (`box-shadow: 0 0 0 3px var(--color-gold-focus)`) on the range thumb when focused via keyboard.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes for layout modifiers (`.slider`, `.slider__fill`, `.slider__input`).
- **Custom Progress Track**: Hides browser default tracks using transparent background colors, overlaying the custom gold track progress fill `.slider__fill` beneath the thumb.
- **Thumb States**: Customizes standard Webkit and Firefox thumbs with grab cursors, shifting to `grabbing` and scaling up thumb sizes (`transform: scale(1.1)`) when active.

## Related Components

- **RangeSlider**: Dual-handle slider component designed for selecting numeric value intervals.
- **Input**: Standard numerical input fields.
