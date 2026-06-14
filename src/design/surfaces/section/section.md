# Section

A component representing a distinct, named region within a page, establishing its own background context and internal spacing.

## Overview

The `Section` component is a fundamental building block for structuring page content into logical, thematic groupings. It provides a semantic wrapper for content, defaulting to a transparent background but allowing for an optional `layer` prop to apply an elevated background color (e.g., `--layer--1`). It manages its internal spacing through the `padding` prop, ensuring consistent visual separation between the section's content and its boundaries. The `Section` is *not* responsible for defining the page's overall layout, managing responsive behavior beyond its intrinsic content, or directly controlling the visibility of its content; these concerns are typically handled by higher-level layout components or the content placed within the section.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `section` | The HTML tag to use for the component's root element. Defaults to `<section>` for semantic relevance. |
| `layer` | `number` | `undefined` | Controls the background elevation level of the section. When set, it applies a background color token (e.g., `--layer--1`). |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `xl` | Sets the internal padding around the section's content. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Section` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Layer

The `layer` prop allows you to visually elevate the section, applying a distinct background color based on design tokens. For example, `layer={1}` would typically apply `--layer--1` for a subtle background. When `layer` is `undefined`, the section is transparent.

### Padding

- `default`: Default internal padding.
- `sm`: Small internal padding.
- `md`: Medium internal padding.
- `lg`: Large internal padding.
- `xl`: Extra large internal padding.

## Usage

### Basic

```astro
---
import Section from '@/design/surfaces/section/Section.astro';
---

<Section>
  <h2>About Us</h2>
  <p>Our company's mission and values.</p>
</Section>
```

### Common Patterns

```astro
---
import Section from '@/design/surfaces/section/Section.astro';
import Card from '@/design/surfaces/card/Card.astro';
---

<!-- Section with a background layer and custom padding -->
<Section layer={1} padding="lg">
  <h3>Featured Products</h3>
  <p>Explore our latest offerings.</p>
</Section>

<!-- Section containing multiple cards -->
<Section as="div" padding="xl" class="product-grid">
  <Card>
    <Card.Header>Product A</Card.Header>
    <Card.Content>Description for product A.</Card.Content>
  </Card>
  <Card>
    <Card.Header>Product B</Card.Header>
    <Card.Content>Description for product B.</Card.Content>
  </Card>
</Section>
```

## Accessibility

The `Section` component, when used with the default `as="section"` tag, provides a semantic landmark for assistive technologies, helping users navigate complex pages. Ensure that each section has a meaningful heading (e.g., `<h2>` within the section) to describe its content. If `as` is set to a generic `div`, its semantic value is reduced, so careful consideration should be given to providing alternative accessibility cues if necessary.

## CSS Architecture

The `Section` component uses the `section-component` class for its base styling. It applies modifier classes for `layer` (e.g., `surface-layer--1`) and `padding` (e.g., `surface-padding--lg`). These classes reference CSS custom properties for background colors and spacing defined in `surfaces.css` and `surfaces.maps.ts`. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Screen`](/docs/components/screen)
- [`Panel`](/docs/components/panel)
- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
