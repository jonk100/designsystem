# InputGroup

A layout container component used to group text fields, select menus, buttons, or text addons into a single horizontal segment.

## Overview

The job of the `InputGroup` component is to manage adjacent input additions (like prepended web protocols, appended search buttons, or inline select filters). It collapses the inner border-radiuses of adjacent child controls so they merge into a single visual block. It is NOT responsible for managing input states, click listener callbacks, or validation styles (which remain the responsibility of individual children).

## Props

The `InputGroup` component accepts all standard HTML attributes for its root `div` element, and inherits base options like animations:

| Prop | Type | Default | Description |
|---|---|---|---|
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Visual Addons**: You can append or prepend non-interactive text elements inside the group using standard tags (like `span` or `div`) styled with the class `.input-group__addon`.
- **Focus Rings**: When any child component within the group receives focus, its borders are brought to the foreground (`z-index: 1`) to ensure focus rings are fully drawn over neighbors.

## Usage

### Basic

Combining a text input and action button:

```astro
---
import InputGroup from "@/design/controls/input-group/InputGroup.astro";
import Input from "@/design/controls/input/Input.astro";
import Button from "@/design/controls/button/Button.astro";
---

<InputGroup>
  <Input name="search" placeholder="Search system database..." />
  <Button variant="primary">Search</Button>
</InputGroup>
```

### Common Patterns

#### Pre-pended Text Addon
Render prepended domain protocols or symbols:

```astro
---
import InputGroup from "@/design/controls/input-group/InputGroup.astro";
import Input from "@/design/controls/input/Input.astro";
---

<InputGroup>
  <span class="input-group__addon">https://</span>
  <Input name="url" placeholder="example.com" />
</InputGroup>
```

#### Currency Input
Combining text labels, input fields, and selectors:

```astro
---
import InputGroup from "@/design/controls/input-group/InputGroup.astro";
import Input from "@/design/controls/input/Input.astro";
import Select from "@/design/controls/select/Select.astro";
---

<InputGroup>
  <span class="input-group__addon">$</span>
  <Input type="number" name="amount" placeholder="0.00" />
  <Select name="currency" style="max-width: 90px;">
    <option value="usd">USD</option>
    <option value="cad">CAD</option>
  </Select>
</InputGroup>
```

## Accessibility

- **Keyboard Focus Management**: Sibling inputs and buttons inside the group support natural tab orders because they are adjacent in the DOM structure.
- **Labels**: Addons with the `.input-group__addon` class are read as plain text. Ensure input elements are still correctly associated with descriptive parent labels or `aria-label` tags for screen readers.

## CSS Architecture

- **Border-Radius Collapsing**: Sets the border-radius of all child components to `0 !important`, restoring the system radius (`var(--rad-md)`) only on the left corners of the first child, and the right corners of the last child.
- **Flex Layout**: Arranges elements horizontally (`display: flex`) with children filling remaining space (`flex: 1 1 auto`). Button overrides are configured so buttons do not grow or stretch (`flex-grow: 0`).
- **Overlap Borders**: Offsets siblings using `margin-left: -0.5px` to overlap adjacent border boundaries.
- **Z-Index Layering**: Hovered, focused-within, or focused child components are given `z-index: 1` dynamically, ensuring focus rings draw over sibling borders.

## Related Components

- **Input**: The text fields grouped inside this container.
- **Select**: The dropdown selectors grouped inside this container.
- **Button**: The triggers grouped inside this container.
- **ButtonGroup**: A similar layout group container restricted to buttons.
