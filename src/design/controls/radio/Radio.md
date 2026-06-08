# Radio

A custom-styled radio button component used for selecting a single option from a mutually exclusive list.

## Overview

The job of the `Radio` component is to present a single choice in a group of mutually exclusive options. It wraps a visually hidden native input for robust accessibility while presenting a styled round indicator dot. It is NOT responsible for laying out multiple options, mapping group-level name attributes, or managing collective alignment (use `RadioGroup` for that).

## Props

The `Radio` component renders a root `<label>` element. Standard HTML attributes passed to the component (such as `required`, `autofocus`, or `form`) are forwarded to the underlying native `<input type="radio">` element.

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | The current checked state of the radio option. |
| `disabled` | `boolean` | `false` | Disables interaction and dims visual contrast (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights the indicator border red to denote validation failure (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | The name of the input control submitted with form data (inherited from `ControlComponentProps`). |
| `value` | `string` | `undefined` | The value attribute submitted when selected (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Checked State**: When selected, the inner dot scales up and fades in using a spring curve animation. The border color changes to gold (`--color-gold`).
- **Disabled State**: When disabled, visual opacity is reduced, pointer events are blocked, and the indicator receives a darker background (`--layer--1`).
- **Invalid State**: When invalid, the indicator border changes to the red danger border (`--color-danger-border`).

## Usage

### Basic

The label text is supplied using the component's default slot:

```astro
---
import Radio from "@/design/controls/radio/Radio.astro";
---

<Radio name="theme" value="light">
  Light Mode
</Radio>
```

### Common Patterns

#### Pre-selected Option
To mark an option as selected by default:

```astro
---
import Radio from "@/design/controls/radio/Radio.astro";
---

<Radio name="option" value="default" checked>
  Standard Option (Recommended)
</Radio>
```

#### Disabled State
Displaying choices that are currently unavailable to the user:

```astro
---
import Radio from "@/design/controls/radio/Radio.astro";
---

<Radio name="delivery" value="drone" disabled>
  Drone Delivery (Out of service)
</Radio>
```

## Accessibility

- **Implicit Association**: The root element is a semantic `<label>`, which automatically binds the slotted text label with the underlying native radio input.
- **Focus Management**: The native `<input>` is visually hidden but remains fully focusable. When navigating via keyboard, focusing the native radio input triggers a visible outline ring surrounding the custom indicator circle.
- **ARIA States**: Adds `aria-invalid="true"` when the `invalid` prop is enabled to notify assistive technology of validation errors.
- **Keyboard Navigation**: Standard browser keyboard interactions (arrow keys to move selection within a group) are fully supported natively.

## CSS Architecture

- **Visual Hiding**: Uses absolute positioning and clip paths (`.radio-component__native`) to hide the native input without removing it from screen readers or keyboard tab order.
- **Spring Indicator Dot**: The inner dot `.radio-component__dot` is scaled down (`transform: scale(0.6)`) and hidden (`opacity: 0`) by default. When the native input matches the `:checked` state, it animates to full size using `--te-spring` transition timing.
- **Cursor Indicators**: Changes cursor states to `pointer` on hover, and `not-allowed` when disabled.

## Related Components

- **RadioGroup**: Layout container to organize, spacing, and label a collection of related radio options.
- **Checkbox**: Similar control for toggling binary, non-mutually exclusive choices.
