# BentoCell

An individual cell component designed for use within a `BentoGrid` layout.

## Overview

The `BentoCell` component represents a single, self-contained unit within a `BentoGrid`. Its primary role is to house content and manage its own internal spacing via the `padding` prop, while its size and position within the grid are largely dictated by the parent `BentoGrid` and its `span` prop. It is designed to sit flush within the grid structure and adapt to the grid's external gaps. It is *not* responsible for defining the grid structure itself, the gaps between cells, or the overall layout of multiple cells; these concerns are handled by the `BentoGrid` component.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `span` | `1 | 2 | 3 | 'full'` | `1` | Defines how many columns the cell should span within the `BentoGrid`. 'full' indicates it spans all available columns. |
| `padding` | `'sm' | 'md' | 'lg' | 'xl'` | `xl` | Sets the internal padding around the cell's content. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `BentoCell` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Span

- `1`: The cell spans a single column.
- `2`: The cell spans two columns.
- `3`: The cell spans three columns.
- `full`: The cell spans all available columns in its row.

### Padding

- `sm`: Small internal padding.
- `md`: Medium internal padding.
- `lg`: Large internal padding.
- `xl`: Extra large internal padding.

## Usage

### Basic

```astro
---
import BentoCell from '@/design/surfaces/bento-cell/BentoCell.astro';
---

<BentoCell>
  <h3>Cell Content</h3>
  <p>Some information inside the cell.</p>
</BentoCell>
```

### Common Patterns

```astro
---
import BentoCell from '@/design/surfaces/bento-cell/BentoCell.astro';
---

<!-- Cell spanning two columns with medium padding -->
<BentoCell span={2} padding="md">
  <h3>Feature Highlight</h3>
  <p>This cell takes up more space to highlight important content.</p>
</BentoCell>

<!-- Full-width cell with custom tag and classes -->
<BentoCell as="article" span="full" class="my-custom-cell">
  <h2>Full-width Article</h2>
  <p>This article spans the entire width of the bento grid.</p>
</BentoCell>
```

## Accessibility

The `BentoCell` component, as a container for content, relies on the semantic correctness of its child elements for accessibility. It typically forms part of a larger `BentoGrid` structure, and the overall accessibility of the grid pattern should be considered. Ensure that the content within each `BentoCell` is logically structured and accessible independently.

## CSS Architecture

The `BentoCell` component utilizes the `bento-cell-component` class for its base styling. It dynamically applies modifier classes based on the `span` prop (e.g., `bento-cell-span--2`, `bento-cell-span--full`) and the `padding` prop (e.g., `bento-cell-padding--md`, `bento-cell-padding--xl`) to control its layout and internal spacing. Styling for these classes is defined in `BentoCell.css`, often leveraging CSS custom properties for spacing values. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`BentoGrid`](/docs/components/bento-grid)
- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
