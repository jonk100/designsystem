# RangeSlider

A dual-handle range slider component used for selecting numeric value intervals (low and high bounds).

## Overview

The job of the `RangeSlider` component is to allow users to select a range of values (such as price intervals or age ranges). It synchronizes two overlapping native slider inputs, displays the current value interval, and renders a gold track fill between the low and high thumbs. It is NOT responsible for single-value selections (use `Slider` instead) or managing form state value submissions directly.

## Props

The `RangeSlider` component accepts all standard HTML attributes for its root `div` container element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | The text label displayed above the range slider. |
| `valLo` | `number` | `20` | The initial value of the lower slider handle. |
| `valHi` | `number` | `80` | The initial value of the upper slider handle. |
| `min` | `number` | `0` | The minimum range bound value. |
| `max` | `number` | `100` | The maximum range bound value. |
| `step` | `number` | `1` | The increment step size for slider modifications. |
| `prefix` | `string` | `""` | An optional display prefix string shown next to values (e.g. `$` or `£`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Dynamic Range Fill**: The selected visual range is displayed using a gold track fill `.range-slider__fill` whose horizontal dimensions and offsets are computed dynamically.
- **Bound Display**: Displays the minimum and maximum selectable bounds at the bottom edges of the slider component.

## Usage

### Basic

```astro
---
import RangeSlider from "@/design/controls/range-slider/RangeSlider.astro";
---

<RangeSlider label="Price Range" min={0} max={100} valLo={20} valHi={80} />
```

### Common Patterns

#### Currency Range
Using prefixes and custom step boundaries:

```astro
---
import RangeSlider from "@/design/controls/range-slider/RangeSlider.astro";
---

<RangeSlider
  label="Select Budget"
  min={100}
  max={1000}
  valLo={250}
  valHi={750}
  step={50}
  prefix="$"
/>
```

## Logic

The `RangeSlider` component contains an inline script that manages the dual-handle coordination:

1. **Overlap Prevention**: Restricts values on low and high inputs to prevent the low thumb from crossing over the high thumb. If the low value exceeds the high value, it resets the low input value to match the high input value, and vice-versa.
2. **Dynamic Progress Fill**: Computes the percentages of both slider handles relative to bounds, and updates the left-offset and width of the gold track fill `.range-slider__fill` dynamically.
3. **Display Text Update**: Updates the text content of the range display header (e.g. `"$20 - $80"`) in real-time as inputs change.
4. **Transitions Hook**: Re-executes setup functions on `astro:page-load` to support view transitions.

## Accessibility

- **Native Controls**: Leverages native range input elements for both low and high handles, ensuring standard keyboard accessibility (using arrow keys to adjust bounds) and compatibility with screen readers.
- **Focus Rings**: Employs focus outlines (`box-shadow: 0 0 0 3px var(--color-gold-focus)`) on the range thumbs when focused via keyboard.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes for layout modifiers (`.range-slider`, `.range-slider__track`, `.range-slider__fill`, `.range-slider__input`).
- **Overlapping Inputs**: Stacks inputs absolutely (`position: absolute; width: 100%`) within a shared track container. Disables default tracks using transparent background colors and disables pointer events (`pointer-events: none`) on the input wrappers, re-enabling them only on individual thumbs (`pointer-events: all`) so that both handles remain clickable and draggable.
- **Thumb States**: Customizes standard Webkit and Firefox thumbs with grab cursors, shifting to `grabbing` and scaling up thumb sizes (`transform: scale(1.1)`) when active.

## Related Components

- **Slider**: Single-handle slider component designed for picking single numeric values.
- **Input**: Standard numerical input fields.
