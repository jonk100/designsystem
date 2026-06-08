# Select

A styled dropdown select control that wraps a native HTML `<select>` element.

## Overview

The job of the `Select` component is to allow users to pick a single choice from a drop-down menu of options. It wraps a native browser select element to maintain native form capabilities and accessibility, while styling borders, backgrounds, and overlaying a custom chevron icon. It is NOT responsible for multiple selections (use `Multiselect` instead) or custom searchable menus.

## Props

The `Select` component wraps a native `<select>` element, forwarding all standard HTML select attributes (such as `required`, `autofocus`, or `multiple`) to the native element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `placeholder` | `string` | `undefined` | Optional text displayed as a pre-selected placeholder option when no value is chosen. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size modifier determining height, padding, and font size. |
| `variant` | `'outline' \| 'solid'` | `'outline'` | The visual border and background styling variant. |
| `disabled` | `boolean` | `false` | Disables interaction and dims opacity (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights input borders red to denote validation error (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | Input name submitted with form data (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `outline`: Default style with a thin border (`--border--0`) and light grey background (`--layer--2`).
  - `solid`: Borderless variant with a darker background (`--layer--3`), recommended for secondary settings columns.
- **Sizes**:
  - `sm`: Height of 30px, 12px font size. Requires right padding of 28px for the chevron.
  - `md`: Height of 38px, 13px font size. Requires right padding of 36px for the chevron.
  - `lg`: Height of 46px, 15px font size. Requires right padding of 44px for the chevron.

## Usage

### Basic

Place native `<option>` elements inside the component:

```astro
---
import Select from "@/design/controls/select/Select.astro";
---

<Select name="options">
  <option value="1">Option One</option>
  <option value="2">Option Two</option>
  <option value="3">Option Three</option>
</Select>
```

### Common Patterns

#### Select with Placeholder
Renders a disabled, selected placeholder option that is hidden from the choice list:

```astro
---
import Select from "@/design/controls/select/Select.astro";
---

<Select name="categories" placeholder="Select a category...">
  <option value="tech">Technology</option>
  <option value="health">Healthcare</option>
  <option value="finance">Finance</option>
</Select>
```

#### Size Variants
Adjusting the select field height to align with adjacent actions:

```astro
---
import Select from "@/design/controls/select/Select.astro";
---

<Select size="sm" name="filter-sort">
  <option value="newest">Newest</option>
  <option value="oldest">Oldest</option>
</Select>
```

## Accessibility

- **Native Select Semantics**: Uses the native HTML `<select>` element directly, which guarantees default browser keyboard accessibility (arrow key adjustments), screen reader reading nodes, and native dropdown modal drawers on mobile devices.
- **ARIA States**: Incorporates `aria-invalid="true"` automatically when `invalid` is enabled to alert screen readers of validation issues.
- **Visual Focus**: Retains visible focus outlines (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused via keyboard navigation.

## CSS Architecture

- **Visual Chevron Override**: Disables default browser dropdown chevron indicators using `appearance: none`, replacing them with an absolute positioned SVG `.select-wrapper__chevron` placed on the right side.
- **Overlap Padding**: Restructures right-hand padding depending on the size modifier (`padding-right: 28px | 36px | 44px`) to ensure option text never overlaps the absolute chevron.
- **Disabled State**: Dims the wrapper opacity to `0.5` and blocks pointer events (`cursor: not-allowed`) when the component is disabled.

## Related Components

- **Multiselect**: Combobox component designed for multi-option selection.
- **Input**: Standard text input field matching the select component's design token heights.
