# Input

A standard customizable text input field component.

## Overview

The job of the `Input` component is to collect single-line text or value inputs (such as names, emails, passwords, and numbers) from users. It handles consistent borders, heights, focus rings, placeholders, and error state indicators. It is NOT responsible for multiline text areas (use `Textarea` if available), input grouping overlays (use `InputGroup` to attach buttons or prefixes), or form validation logic.

## Props

The `Input` component accepts all standard HTML attributes for a native `<input>` element (such as `required`, `pattern`, or `maxlength`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `InputType` | `'text'` | The behavior type of input (e.g. `'text'`, `'email'`, `'password'`, `'number'`, `'tel'`). |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size modifier determining height, padding, and font size. |
| `variant` | `'outline' \| 'solid'` | `'outline'` | The visual border and background styling variant. |
| `disabled` | `boolean` | `false` | Disables interaction and dims opacity (inherited from `ControlComponentProps`). |
| `readonly` | `boolean` | `false` | Marks the input as read-only, preventing edits but maintaining form submissions (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights input borders red to denote validation failure (inherited from `ControlComponentProps`). |
| `placeholder` | `string` | `undefined` | Dim placeholder text displayed when the input is empty (inherited from `ControlComponentProps`). |
| `value` | `string` | `undefined` | The initial or current text value of the input field (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | Input name submitted with form data (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `outline`: Default style with a thin border (`--border--0`) and light grey background (`--layer--2`).
  - `solid`: Borderless variant with a darker background (`--layer--3`), recommended for secondary parameters.
- **Sizes**:
  - `sm`: Height of 30px, 12px font size. Recommended for dense grids or filters.
  - `md`: Height of 38px, 13px font size. The default size.
  - `lg`: Height of 46px, 15px font size. Recommended for primary login fields.

## Usage

### Basic

```astro
---
import Input from "@/design/controls/input/Input.astro";
---

<Input name="username" placeholder="Username" />
```

### Common Patterns

#### Password Input
Utilizes the standard type modifier to mask character inputs:

```astro
---
import Input from "@/design/controls/input/Input.astro";
---

<Input type="password" name="password" placeholder="••••••••" required />
```

#### Read-Only Key Display
Displaying static keys or tokens that can be copied but not edited:

```astro
---
import Input from "@/design/controls/input/Input.astro";
---

<Input name="api-key" value="ds_live_51HnB..." readonly />
```

#### Invalid state indicator
Binds custom validation states to highlight input errors:

```astro
---
import Input from "@/design/controls/input/Input.astro";
---

<Input type="email" name="email" value="invalid-email" invalid />
```

## Accessibility

- **Native Accessibility**: Uses a native `<input>` element directly, which natively handles assistive technologies, screen reader announcements, autofill options, and keyboard focus routing.
- **Form Labels**: Ensure the input is associated with a label (using a `<label>` tag with a matching `for` attribute) to keep it screen reader friendly.
- **ARIA States**: Adds `aria-invalid="true"` when the `invalid` prop is enabled to notify assistive technology of validation errors.

## CSS Architecture

- **Transitions**: Smoothly animates border colors and focus box-shadows using transitions (`transition: all var(--td-fast) var(--te-in-out)`).
- **Focus Rings**: Employs focus indicators via box-shadow rings (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused.
- **Read-Only / Disabled Backdrops**: When read-only or disabled, sets background-color to `--layer--1` to visually separate input controls from editable fields.

## Related Components

- **InputGroup**: Layout container to join inputs with adjacent buttons or text prefixes.
- **Select**: Dropdown selection menu matching text input field proportions.
