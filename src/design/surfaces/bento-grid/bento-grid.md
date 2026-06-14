# BentoGrid

A specialized grid container designed for creating bento-box style layouts.

## Overview

The `BentoGrid` component acts as a parent container for `BentoCell` components, arranging them into a structured grid. Its primary responsibility is to define the grid's column structure and the external spacing (`gap`) between its child cells, leveraging CSS Grid for robust layout management. It enforces a visual separation between cells but expects individual `BentoCell` components to manage their internal padding. It is *not* responsible for the content within each cell, the internal padding of cells, or directly handling the responsiveness of cell content; those concerns are delegated to the `BentoCell` and the content within.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `columns` | `number` | `3` | Defines the number of columns in the bento layout. |
| `gap` | `'sm' | 'md' | 'lg' | 'xl'` | `lg` | Sets the external spacing (gap) between the `BentoCell` children. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `BentoGrid` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Columns

The `columns` prop accepts a number, defining the fixed number of columns for the grid. For example:

- `columns={2}`: A two-column grid.
- `columns={3}`: A three-column grid (default).
- `columns={4}`: A four-column grid.

### Gap

- `sm`: Small external gap between cells.
- `md`: Medium external gap between cells.
- `lg`: Large external gap between cells.
- `xl`: Extra large external gap between cells.

## Usage

### Basic

```astro
---
import BentoGrid from '@/design/surfaces/bento-grid/BentoGrid.astro';
import BentoCell from '@/design/surfaces/bento-cell/BentoCell.astro';
---

<BentoGrid>
  <BentoCell>Content 1</BentoCell>
  <BentoCell>Content 2</BentoCell>
  <BentoCell>Content 3</BentoCell>
</BentoGrid>
```

### Common Patterns

```astro
---
import BentoGrid from '@/design/surfaces/bento-grid/BentoGrid.astro';
import BentoCell from '@/design/surfaces/bento-cell/BentoCell.astro';
---

<!-- A two-column grid with a medium gap -->
<BentoGrid columns={2} gap="md">
  <BentoCell span={1}>Item A</BentoCell>
  <BentoCell span={1}>Item B</BentoCell>
  <BentoCell span={2}>Item C (Spans two columns)</BentoCell>
</BentoGrid>

<!-- Grid with custom HTML tag and classes -->
<BentoGrid as="section" columns={4} class="my-custom-grid">
  <BentoCell>Quarter 1</BentoCell>
  <BentoCell>Quarter 2</BentoCell>
  <BentoCell>Quarter 3</BentoCell>
  <BentoCell>Quarter 4</BentoCell>
</BentoGrid>
```

## Accessibility

As a layout container, the `BentoGrid` component enhances the visual presentation of content. It relies on the semantic structure of its `BentoCell` children and the content within them to ensure accessibility. For complex grid layouts, consider ARIA attributes if the visual order differs significantly from the DOM order, or if the grid functions as an interactive widget. However, for most presentational grids, the inherent semantics of the `div` and its children are sufficient.

## CSS Architecture

The `BentoGrid` component uses the `bento-grid-component` class, which applies CSS Grid properties to establish the column structure and define gaps. It dynamically generates modifier classes based on the `columns` prop (e.g., `bento-grid-columns--2`, `bento-grid-columns--3`) and the `gap` prop (e.g., `bento-grid-gap--md`, `bento-grid-gap--lg`). These classes leverage CSS custom properties for consistent spacing and grid definitions, found in `BentoGrid.css`. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`BentoCell`](/docs/components/bento-cell)
- [`Grid`](/docs/components/grid) (Hypothetical, for a more general-purpose grid layout)
- [`Section`](/docs/components/section)
