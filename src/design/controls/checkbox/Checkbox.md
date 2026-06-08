# Checkbox

A custom-styled checkbox control representing a binary state (checked or unchecked) for form inputs.

## Overview

The job of the `Checkbox` component is to allow users to toggle binary choices (like subscribing to a newsletter or accepting terms). It wraps a visually hidden native input for robust accessibility while presenting a styled indicator box. It is NOT responsible for mutually exclusive choice groups (use `Radio` or `RadioGroup` for that) or displaying progress states.

## Props

The `Checkbox` component renders a root `<label>` element. Standard HTML attributes passed to the component (such as `required`, `autofocus`, or `form`) are forwarded to the underlying native `<input type="checkbox">` element.

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | The current checked state of the checkbox. |
| `disabled` | `boolean` | `false` | Disables interaction and dims visual contrast (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights the indicator border red to denote validation failure (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | The name of the input control submitted with form data (inherited from `ControlComponentProps`). |
| `value` | `string` | `undefined` | The value attribute submitted when checked (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Checked State**: When checked, the background changes to gold (`--color-gold`) and reveals the check icon with a pop animation.
- **Disabled State**: When disabled, the checkbox is translucent, pointer events are disabled, and it receives a darker grey background (`--layer--1`).
- **Invalid State**: When invalid, the indicator's border changes to the red danger border (`--color-danger-border`).

## Usage

### Basic

The label text is supplied using the component's default slot:

```astro
---
import Checkbox from "@/design/controls/checkbox/Checkbox.astro";
---

<Checkbox name="terms">
  I accept the terms and conditions
</Checkbox>
```

### Common Patterns

#### Pre-selected Disabled Input
Useful for displaying unmodifiable checked requirements:

```astro
---
import Checkbox from "@/design/controls/checkbox/Checkbox.astro";
---

<Checkbox name="terms" checked disabled>
  Acceptance of Core Policy (Required)
</Checkbox>
```

#### Invalid/Error State
Highlighting a checkbox that must be checked before proceeding:

```astro
---
import Checkbox from "@/design/controls/checkbox/Checkbox.astro";
---

<Checkbox name="marketing" invalid required>
  Confirm subscription options
</Checkbox>
```

## Accessibility

- **Implicit Association**: The root element is a semantic `<label>`. This automatically associates the label text with the native input element.
- **Focus Management**: The native `<input>` is visually hidden but remains fully focusable. When navigating via keyboard, focusing the native input triggers a visible outline ring surrounding the custom indicator box.
- **ARIA States**: Adds `aria-invalid="true"` when the `invalid` prop is enabled to notify assistive technology of error states.

## CSS Architecture

- **Visual Hiding**: Uses absolute positioning and clip paths (`.checkbox-component__native`) to hide the native input without removing it from screen readers or keyboard tab order.
- **Spring Checkmark**: The check icon is scaled down (`transform: scale(0.6)`) and hidden (`opacity: 0`) by default. When the native input matches the `:checked` state, it animates to full size using `--te-spring` transition timing.
- **Cursor Indicators**: Changes cursor states to `pointer` on hover, and `not-allowed` when disabled.

## Related Components

- **Icon**: Renders the checkmark graphic (`name="check"`) inside the indicator.
- **Switch**: An alternative control for toggling instant binary settings on and off.
