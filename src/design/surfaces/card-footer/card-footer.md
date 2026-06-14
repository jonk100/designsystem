# CardFooter

The footer section of a `Card` component, typically used for actions or metadata.

## Overview

The `CardFooter` component is the designated area at the bottom of a `Card`, intended for grouping actions, secondary information, or metadata related to the card's content. It inherits padding from its parent `Card` via CSS variables, ensuring its content aligns with the card's internal spacing. It is designed to work seamlessly with `CardHeader` and `CardContent` to create well-structured cards. It is *not* responsible for the card's overall layout, header, content, or external spacing; its focus is solely on the footer area.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `default` | Sets the internal padding of the footer area. When used within a `Card`, this value primarily influences the `--surface-pad` CSS variable, ensuring alignment with other card sections. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `CardFooter` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import CardFooter from '@/design/surfaces/card-footer/CardFooter.astro';
---

<CardFooter>
  <button>Action Button</button>
</CardFooter>
```

### Common Patterns

```astro
---
import Card from '@/design/surfaces/card/Card.astro';
import CardHeader from '@/design/surfaces/card-header/CardHeader.astro';
import CardContent from '@/design/surfaces/card-content/CardContent.astro';
import CardFooter from '@/design/surfaces/card-footer/CardFooter.astro';
---

<!-- CardFooter with multiple actions -->
<Card>
  <CardHeader>Card Title</CardHeader>
  <CardContent>Some descriptive text.</CardContent>
  <CardFooter>
    <button>Primary Action</button>
    <button variant="secondary">Secondary Action</button>
  </CardFooter>
</Card>

<!-- CardFooter with metadata -->
<Card>
  <CardHeader>Update Details</CardHeader>
  <CardContent>User profile information.</CardContent>
  <CardFooter>
    <span>Last updated: 2 hours ago</span>
    <span>Status: Pending</span>
  </CardFooter>
</Card>
```

## Accessibility

The `CardFooter` component, as a container for actions or metadata, should ensure that its content is accessible. If the footer contains interactive elements like buttons, they must have clear focus indicators and be operable via keyboard. If the footer provides metadata, ensure it is presented in a readable and understandable format for all users, including those using assistive technologies.

## CSS Architecture

The `CardFooter` component uses the `card-footer-component` class for its base styling. It applies padding classes (e.g., `surface-padding--md`) based on the `padding` prop. When `padding` is set, it also sets the `--surface-pad` CSS variable, which is utilized by parent `Card` components to manage consistent spacing and alignment across card sections. Styling is derived from `CardFooter.css` and `surfaces.css`. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`CardHeader`](/docs/components/card-header)
- [`CardContent`](/docs/components/card-content)
