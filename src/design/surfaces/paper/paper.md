# Paper

A surface component that provides a subtly elevated container, reminiscent of a sheet of paper.

## Overview

The `Paper` component is designed to create distinct areas within an application, visually separated from the background by a slight elevation. It functions as a container for content that needs to stand out, such as main content areas, editor canvases, or forms. Unlike a `Card`, which often represents a discrete object with clear boundaries and actions, `Paper` acts more as a distinct region or zone. It manages its own internal padding and elevation, providing a clean and consistent surface for content.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `elevation` | `'none' | 'sm' | 'md' | 'lg' | 'xl'` | `sm` | Controls the visual elevation of the paper surface, affecting its shadow and perceived depth. 'none' removes the shadow. |
| `padding` | `SpacingScale` (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`) | `sm` | Sets the internal padding around the paper's content. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Paper` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Elevation

- `none`: No shadow, appears flush with the background.
- `sm`: Small shadow, indicating slight lift.
- `md`: Medium shadow, indicating moderate lift.
- `lg`: Large shadow, indicating significant lift.
- `xl`: Extra large shadow, providing the most pronounced lift.

### Padding

- `xs`: Extra small internal padding.
- `sm`: Small internal padding.
- `md`: Medium internal padding.
- `lg`: Large internal padding.
- `xl`: Extra large internal padding.
- `2xl`: Extra extra large internal padding.
- `3xl`: Extra extra extra large internal padding.

## Usage

### Basic

```astro
---
import Paper from '@/design/surfaces/paper/Paper.astro';
---

<Paper>
  <p>This content sits on a paper surface.</p>
</Paper>
```

### Common Patterns

```astro
---
import Paper from '@/design/surfaces/paper/Paper.astro';
import Card from '@/design/surfaces/card/Card.astro'; // Example of composing Paper with Card
---

<!-- Paper with medium elevation and large padding -->
<Paper elevation="md" padding="lg">
  <h2>Section Title</h2>
  <p>Content that requires distinct visual separation.</p>
</Paper>

<!-- Paper used as a container for a Card -->
<Paper elevation="lg" padding="xl">
  <Card>
    <Card.Header>Card Inside Paper</Card.Header>
    <Card.Content>This card is placed on an elevated paper surface.</Card.Content>
  </Card>
</Paper>
```

## Accessibility

The `Paper` component primarily affects visual presentation and does not introduce specific ARIA roles unless its `as` prop is set to a more semantic element. Ensure that the content placed within the `Paper` surface is accessible by using appropriate semantic HTML elements and providing necessary ARIA attributes if the content forms an interactive component or landmark.

## CSS Architecture

The `Paper` component uses the `paper-component` class for its base styling. It applies modifier classes for `elevation` (e.g., `paper-elevation--md`) and `padding` (e.g., `paper-padding--lg`). These classes reference CSS custom properties defined in `Paper.css` and `surfaces.css` for shadows and spacing. The elevation classes correspond to z-index and box-shadow definitions. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`Panel`](/docs/components/panel)
- [`Backdrop`](/docs/components/backdrop)
