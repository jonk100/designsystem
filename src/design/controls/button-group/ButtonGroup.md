# ButtonGroup

A container component used to group related buttons together into a single, cohesive visual segment.

## Overview

The job of the `ButtonGroup` is to manage the layout, spacing, and styling of adjacent button controls. It is NOT responsible for handling user interactions directly (that is the job of individual child `Button` components) or managing exclusive toggle states.

## Props

The `ButtonGroup` component accepts all standard HTML attributes for its root `div` element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `undefined` | Overrides the size of all child buttons inside the group to ensure alignment. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Unified Sizing**: If the `size` prop is set on the `ButtonGroup`, it overrides the sizes of all nested standard buttons (`.btn`), icon buttons (`.icon-btn`), and toggle buttons (`.toggle-btn`) using CSS `!important`.
  - `sm`: Forces children to a height of 30px and 12px font size.
  - `md`: Forces children to a height of 38px and 14px font size.
  - `lg`: Forces children to a height of 46px and 16px font size.
- **Icon Scaling**: Nested icon components (`.icon-component`) are scaled down to match the group size (`--local-size: var(--display-size-xs)` for `sm`, `--local-size: var(--display-size-sm)` for `md`, and `--local-size: var(--display-size-md)` for `lg`).

## Usage

### Basic

```astro
---
import ButtonGroup from "@/design/controls/button-group/ButtonGroup.astro";
import Button from "@/design/controls/button/Button.astro";
---

<ButtonGroup>
  <Button>Cancel</Button>
  <Button variant="primary">Confirm</Button>
</ButtonGroup>
```

### Common Patterns

#### Segmented Toggle Control
Creating a segmented control for mutually exclusive states:

```astro
---
import ButtonGroup from "@/design/controls/button-group/ButtonGroup.astro";
import Button from "@/design/controls/button/Button.astro";
---

<ButtonGroup size="sm">
  <Button toggle active aria-label="Align Left">Left</Button>
  <Button toggle aria-label="Align Center">Center</Button>
  <Button toggle aria-label="Align Right">Right</Button>
</ButtonGroup>
```

#### Mixed Button Types
Grouping standard buttons and icon triggers:

```astro
---
import ButtonGroup from "@/design/controls/button-group/ButtonGroup.astro";
import Button from "@/design/controls/button/Button.astro";
import Icon from "@/design/display/icon/Icon.astro";
---

<ButtonGroup>
  <Button variant="secondary">Edit File</Button>
  <Button iconOnly variant="ghost" aria-label="More Actions">
    <Icon name="more-horizontal" size="sm" />
  </Button>
</ButtonGroup>
```

## Accessibility

- **Keyboard Focus Management**: Individual children retain focus rings when navigating via keyboard. Since child buttons are next to each other in the DOM, they support natural tab order natively.
- **Roles & Labels**: If the button group represents a single cohesive tool (like a text formatting bar), developers should attach `role="group"` and an `aria-label` or `aria-labelledby` attribute to the container for assistive technologies.

## CSS Architecture

- **Visual Merging**: Sets the border-radius of all child elements to `0 !important` and restores the original radius (`var(--rad-md)`) only on the outer corners of the first and last children.
- **Overlap Borders**: Applies `margin-left: -0.5px` to overlapping borders between buttons to prevent doubling the border thickness.
- **Z-Index Layering**: Increases `z-index` to `1` dynamically when a child button is focused, hovered, or active. This ensures its borders overlay those of its neighbors.

## Related Components

- **Button**: The interactive elements grouped together inside this container.
