# Card

A versatile container component used to group related content and actions, providing a clear visual boundary.

## Overview

The `Card` component acts as a fundamental organizational unit in a user interface, designed to encapsulate distinct pieces of information or functionality. It is responsible for providing consistent visual styling (such as borders, shadows, and background), managing its internal padding, and supporting various content alignments and visual variants. When used as a compound component (with `CardHeader`, `CardContent`, `CardFooter`), it intelligently broadcasts padding to its children while stripping its own, allowing child borders to extend edge-to-edge. The `Card` is *not* responsible for external spacing (margins), complex layout within its children (beyond alignment), or the logic of actions contained within it; those concerns are managed by parent components or the components placed inside the card.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `padding` | `'sm' | 'md' | 'lg' | 'xl'` | `xl` | Sets the internal padding of the card. When used with compound card components, this value is broadcasted as a CSS variable `--surface-pad` to its children. |
| `align` | `'left' | 'center' | 'right'` | `left` | Specifies the horizontal alignment of the content within the card. |
| `variant` | `'default' | 'stat'` | `default` | Defines the visual style of the card. The `stat` variant is optimized for displaying statistics or key metrics. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Card` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Padding

- `sm`: Small internal padding.
- `md`: Medium internal padding.
- `lg`: Large internal padding.
- `xl`: Extra large internal padding.

### Alignment

- `left`: Content is aligned to the left (default).
- `center`: Content is horizontally centered.
- `right`: Content is aligned to the right.

### Variant

- `default`: The standard visual presentation for a card.
- `stat`: A variant optimized for displaying statistics or key metrics, often with a more minimalist design.

## Usage

### Basic

```astro
---
import Card from '@/design/surfaces/card/Card.astro';
---

<Card>
  <h3>Card Title</h3>
  <p>This is some content inside a basic card.</p>
</Card>
```

### Common Patterns

```astro
---
import Card from '@/design/surfaces/card/Card.astro';
import CardHeader from '@/design/surfaces/card-header/CardHeader.astro';
import CardContent from '@/design/surfaces/card-content/CardContent.astro';
import CardFooter from '@/design/surfaces/card-footer/CardFooter.astro';
---

<!-- Card with Header, Content, and Footer -->
<Card padding="md">
  <CardHeader>Monthly Report</CardHeader>
  <CardContent>
    <p>Revenue increased by 15% this month.</p>
  </CardContent>
  <CardFooter>
    <button>View Details</button>
  </CardFooter>
</Card>

<!-- Centered Card with Stat Variant -->
<Card align="center" variant="stat" as="article">
  <h4>Users Online</h4>
  <h2>1,234</h2>
</Card>
```

## Accessibility

The `Card` component typically serves as a grouping mechanism for related content. Using semantic HTML tags for `as` (e.g., `article`, `section`) can enhance its accessibility by providing clearer structural meaning to assistive technologies. Ensure that the content within the card is well-structured with appropriate headings and landmarks. If the card itself is interactive, ensure it has a clear focus indicator and keyboard operability.

## CSS Architecture

The `Card` component uses the `card-component` class for its base styling, which establishes its background, borders, and shadows. It applies modifier classes for `padding` (e.g., `surface-padding--md`), `align` (e.g., `card-align--center`), and `variant` (e.g., `card-variant--stat`). When used with compound components, the `padding` prop sets the `--surface-pad` CSS variable. Styling is derived from `Card.css` and `surfaces.css`, referencing semantic tokens for colors and spacing. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`CardHeader`](/docs/components/card-header)
- [`CardContent`](/docs/components/card-content)
- [`CardFooter`](/docs/components/card-footer)
- [`Paper`](/docs/components/paper)
- [`Panel`](/docs/components/panel)
