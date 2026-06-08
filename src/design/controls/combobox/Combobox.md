# Combobox

A searchable single-value dropdown combobox component.

## Overview

The job of the `Combobox` component is to allow users to search and select a single option from a dropdown menu. It features a text search input that filters options in real-time, displays selected choices with checked markers, and synchronizes selection states with a hidden native `<select>` element to work with native forms. It is NOT responsible for multi-item selections (use `Multiselect` instead) or displaying multiple visual chips.

## Props

The `Combobox` component accepts all standard HTML attributes for its root `div` container element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `Array<{ value: string; label: string } \| string>` | `[]` | List of options to choose from (either string values or custom label/value objects). |
| `selected` | `string` | `""` | The value of the initially selected option. |
| `placeholder` | `string` | `'Select an option...'` | Placeholder text displayed inside the text input when no option is selected. |
| `name` | `string` | `undefined` | Input name submitted with form data (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Dropdown Overlay**: Opens an overlay panel directly beneath the trigger, with options highlighted on hover or checkmarked when selected.
- **Interactive States**: Displays a custom border and a gold focus shadow (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused or clicked.

## Usage

### Basic

```astro
---
import Combobox from "@/design/controls/combobox/Combobox.astro";
---

<Combobox
  name="framework"
  options={["Astro", "React", "Vue", "Angular"]}
  placeholder="Choose a framework..."
/>
```

### Common Patterns

#### Initial Value Selection
To render the component with a pre-selected option:

```astro
---
import Combobox from "@/design/controls/combobox/Combobox.astro";
---

<Combobox
  name="status"
  options={[
    { value: "open", label: "Open Action" },
    { value: "closed", label: "Closed/Archived" }
  ]}
  selected="open"
/>
```

## Logic

The `Combobox` component contains an inline script that manages the dropdown state, search logic, and value synchronization:

1. **Dropdown Overlay**: Toggles visibility of the `.combobox__dropdown` panel when the trigger element or input is clicked, closing it automatically on clicks outside the component container.
2. **Keystroke Search Filter**: Captures keyboard input on `.combobox__input` to filter dropdown list elements in real-time. Displays a "No results found" message if no list option matches the query.
3. **Form Synchronization**: Selecting a choice updates the value of the hidden native `<select>` element and triggers a browser `change` event.
4. **Text Recovery**: When closing the dropdown without making a selection, recovers the input field text to display the last selected option's label.
5. **Keyboard Support**: Focuses the input element when opening, and listens to `Space`, `Enter`, or `ArrowDown` keys on the trigger to open the options panel, and `Escape` to close it.
6. **Transitions Support**: Re-executes container scripts on `astro:page-load` to keep comboboxes functional during view transitions.

## Accessibility

- **ARIA Attributes**: The trigger utilizes `role="combobox"`, `aria-haspopup="listbox"`, and `aria-expanded` states. The dropdown container applies `role="listbox"`, and options use `role="option"` with `aria-selected` to provide screen readers with context.
- **Native Form Integration**: Uses a hidden native `<select>` element to ensure selections are processed correctly by standard HTML `<form>` submissions and browser autofill.
- **Keyboard Navigation**: Focuses the input element when opening, allowing keyboard users to type queries and navigate options.

## CSS Architecture

- **BEM Class Structure**: Built with clear modifier selectors (`.combobox`, `.combobox__trigger`, `.combobox__dropdown`, `.combobox__option`, `.combobox__check`).
- **Overlay Elevation**: The dropdown uses `position: absolute` with a high index (`z-index: var(--z-dropdown)`) and shadow rules (`box-shadow: var(--sh-m)`) to overlap pages.
- **Chevron Rotation**: The chevron icon `.combobox__chevron` rotates 180 degrees using CSS transitions when the parent element is `.is-open`.

## Related Components

- **Select**: Dropdown component designed for native browser single selections.
- **Multiselect**: Searchable multi-value combobox displaying selections as chips.
- **Icon**: Renders checkmarks and down arrow glyphs.
