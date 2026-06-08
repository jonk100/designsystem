# Multiselect

A searchable, multi-value combobox input field used for selecting multiple options from a list.

## Overview

The job of the `Multiselect` component is to allow users to select multiple options from a dropdown menu, showing selected items as dismissible visual chips inside the text field. It includes a live filtering search bar for navigating large lists of choices and synchronizes selections with a hidden multiple `<select>` element to support native forms. It is NOT responsible for single option selection (use `Select` for that) or handling form-level validation.

## Props

The `Multiselect` component accepts all standard HTML attributes for its root `div` container element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `Array<{ value: string; label: string } \| string>` | `[]` | List of options to choose from (either string values or custom label/value objects). |
| `selected` | `string[]` | `[]` | Array of initially selected values. |
| `placeholder` | `string` | `'Search...'` | Placeholder text displayed inside the text input when no options are selected. |
| `label` | `string` | `undefined` | A text label displayed above the control. |
| `name` | `string` | `undefined` | Input name submitted with form data. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Selection Chips**: Selected options are rendered as interactive, dismissible `Chip` elements (using size `sm` and variant `primary`).
- **Interactive States**: Displays a custom border and a gold focus shadow (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused or clicked.
- **Dropdown List**: Opens an overlay panel directly beneath the trigger, with options highlighted on hover or checkmarked when selected.

## Usage

### Basic

Provide a name and an array of options:

```astro
---
import Multiselect from "@/design/controls/multiselect/Multiselect.astro";
---

<Multiselect
  name="technologies"
  options={["Astro", "React", "Vue", "Svelte", "Angular"]}
  placeholder="Select technologies..."
/>
```

### Common Patterns

#### Initial Value Selection
To render the component with pre-selected options:

```astro
---
import Multiselect from "@/design/controls/multiselect/Multiselect.astro";
---

<Multiselect
  name="countries"
  label="Country Selection"
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "mx", label: "Mexico" }
  ]}
  selected={["us", "ca"]}
/>
```

## Logic

The `Multiselect` component contains an inline script that manages the dropdown state, search logic, and chip management:

1. **Dropdown Overlay**: Toggles visibility of the `.multiselect__dropdown` panel when the trigger element is clicked, closing it automatically on clicks outside the component container.
2. **Keystroke Search Filter**: Captures keyboard input on `.multiselect__input` to filter dropdown list elements in real-time. Displays a "No results found" message if no list option matches the query.
3. **Form Synchronization**: Toggling items in the dropdown list automatically selects or deselects matching `<option>` elements in the hidden multiple `<select>` element, dispatching standard `change` events.
4. **Dynamic Chip Building**: Clears and regenerates inline `Chip` components inside `.multiselect__chips-wrap` to match current native selections. Includes event listeners on the chips to let users dismiss selections by clicking the chip close action.
5. **Keyboard Support**: Listens to `Space`, `Enter`, or `ArrowDown` keys on the combobox trigger to open the options panel, and `Escape` to close it.
6. **Transitions Support**: Re-executes container scripts on `astro:page-load` to keep dropdowns functional during view transitions.

## Accessibility

- **ARIA Attributes**: The trigger utilizes `role="combobox"`, `aria-haspopup="listbox"`, and `aria-expanded` states. The dropdown container applies `role="listbox"`, and options use `role="option"` with `aria-selected` to provide screen readers with context.
- **Native Form Integration**: Uses a hidden `<select multiple>` element to ensure selections are processed correctly by standard HTML `<form>` submissions and browser autofill.
- **Keyboard Navigation**: Focuses the input element when opening, allowing keyboard users to type queries, dismiss selections, and toggle options.

## CSS Architecture

- **BEM Class Structure**: Built with clear modifier selectors (`.multiselect`, `.multiselect__trigger`, `.multiselect__dropdown`, `.multiselect__option`, `.multiselect__check`).
- **Overlay Elevation**: The dropdown uses `position: absolute` with a high index (`z-index: var(--z-dropdown)`) and shadow rules (`box-shadow: var(--sh-m)`) to overlap pages.
- **Chevron Rotation**: The chevron icon `.multiselect__chevron` rotates 180 degrees using CSS transitions when the parent element is `.is-open`.

## Related Components

- **Select**: Dropdown component designed for single options.
- **Chip**: Component used to represent selected options inside the trigger.
- **Icon**: Renders checkmarks and down arrow glyphs.
