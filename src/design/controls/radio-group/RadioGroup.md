# RadioGroup

A layout container component used to group related radio buttons together and manage their layout, spacing, and name attributes.

## Overview

The job of the `RadioGroup` is to organize multiple related `Radio` components in a single container. It handles vertical or horizontal layouts, option spacing, and automatically distributes a single `name` prop down to all nested native radio inputs. It is NOT responsible for managing checked states, disabled states, or validation styling on individual options (that is the job of each nested `Radio` component).

## Props

The `RadioGroup` component accepts all standard HTML attributes for its root `div` element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'vertical'` | The visual alignment orientation of the radio choices. |
| `gap` | `string` | `'sm'` | The gap spacing token suffix (e.g. `'xs'`, `'sm'`, `'md'`) representing variables like `var(--sp-sm)`. |
| `name` | `string` | `undefined` | The common group name assigned to all nested native radios. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Orientations**:
  - `vertical`: Arranges radio options in a single column using flexbox column layout. Recommended for list layouts.
  - `horizontal`: Arranges radio options in a row with wrap safety (`flex-wrap: wrap`) for dense headers or settings panels.
- **Dynamic Spacing**: The spacing gap is defined using the `gap` prop suffix (e.g., `gap="md"` maps to `var(--sp-md)`), which is applied via a CSS custom property `--radio-group-gap` on the flex container.

## Usage

### Basic

```astro
---
import RadioGroup from "@/design/controls/radio-group/RadioGroup.astro";
import Radio from "@/design/controls/radio/Radio.astro";
---

<RadioGroup name="payment">
  <Radio value="card">Credit Card</Radio>
  <Radio value="paypal">PayPal</Radio>
</RadioGroup>
```

### Common Patterns

#### Horizontal Selection Bar
Arranging options horizontally with custom gaps:

```astro
---
import RadioGroup from "@/design/controls/radio-group/RadioGroup.astro";
import Radio from "@/design/controls/radio/Radio.astro";
---

<RadioGroup name="billing" orientation="horizontal" gap="md">
  <Radio value="monthly" checked>Monthly</Radio>
  <Radio value="yearly">Yearly (Save 20%)</Radio>
</RadioGroup>
```

## Logic

The `RadioGroup` component contains an inline script that automates the distribution of the group name to individual radio options:

1. **Input Name Auto-Propagation**: The script searches for all `.radio-group-component` containers that possess a `data-name` attribute (which matches the parent's `name` prop).
2. **Attribute Distribution**: For each group, it selects all nested native inputs with the class `.radio-component__native` and applies the same `name` attribute to them. This eliminates the need for developers to write the same `name` attribute on every single `<Radio>` option.
3. **View Transitions Hook**: Registers initialization functions on `astro:page-load` to support view transition navigations without failing to bind event scripts.

## Accessibility

- **Semantic Role**: The root element includes `role="radiogroup"`, signaling to screen readers that all nested controls belong to a single related set of options.
- **Form Association**: Automatically matching the name attribute across all nested native inputs enables correct browser-native radio group keyboard navigation (navigating through options using the keyboard arrow keys).

## CSS Architecture

- **Flexbox Layout**: Utilizes standard CSS flexbox layout (`display: flex`) with direction controlled by the orientation class modifier.
- **Spacing Custom Variables**: Employs a local custom property fallback (`--radio-group-gap, var(--sp-sm)`) to dynamically override gaps without using inline margins or styles on child components.

## Related Components

- **Radio**: The individual selectable radio button option components.
- **Checkbox**: For binary choices that do not require mutual exclusivity.
