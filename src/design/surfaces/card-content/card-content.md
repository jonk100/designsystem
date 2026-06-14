# CardContent

The content area of a `Card` component, typically used for the main body of information.

## Overview

The `CardContent` component is designed to hold the primary content within a `Card`. It inherits padding settings from its parent `Card` component via CSS variables (`--surface-pad`), allowing its borders to align seamlessly with the card's edges. It can also accept its own padding and background color, offering flexibility in visual presentation. It is *not* responsible for the card's overall structure, header, footer, or external spacing; its sole purpose is to present the core content.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `default` | Sets the internal padding of the content area. Note that when used within a `Card`, this prop's value is primarily used to set the `--surface-pad` CSS variable for child elements, and the `CardContent` itself might have minimal padding to allow child borders to run edge-to-edge. |
| `bg` | `BackgroundTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'transparent' | 'subtle' | 'hover' | 'outline'`) | | Applies a background color tone to the content area. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `CardContent` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import CardContent from '@/design/surfaces/card-content/CardContent.astro';
---

<CardContent>
  <p>This is the main content of the card.</p>
</CardContent>
```

### Common Patterns

```astro
---
import Card from '@/design/surfaces/card/Card.astro';
import CardContent from '@/design/surfaces/card-content/CardContent.astro';
import CardHeader from '@/design/surfaces/card-header/CardHeader.astro';
import CardFooter from '@/design/surfaces/card-footer/CardFooter.astro';
---

<!-- CardContent with custom padding and background -->
<Card>
  <CardHeader>Content Header</CardHeader>
  <CardContent padding="md" bg="subtle">
    <p>This content area has medium padding and a subtle background.</p>
  </CardContent>
  <CardFooter>Content Footer</CardFooter>
</Card>

<!-- CardContent using its default padding -->
<Card>
  <CardHeader>Another Section</CardHeader>
  <CardContent>
    <p>This uses the default padding and background of the Card component.</p>
  </CardContent>
</Card>
```

## Accessibility

The `CardContent` component, as a container for content, relies on the semantic structure of its child elements for accessibility. When used within a `Card`, it contributes to the overall understanding of the grouped information. Ensure that the content placed within `CardContent` is semantically appropriate (e.g., using correct heading levels, lists, etc.) to provide a clear and accessible experience for all users.

## CSS Architecture

The `CardContent` component uses the `card-content-component` class for its base styling. It applies padding classes (e.g., `surface-padding--md`) and background tone classes (e.g., `bg-subtle`) based on the `padding` and `bg` props, respectively. These classes utilize CSS custom properties for spacing and colors defined in `surfaces.css` and shared maps. When `padding` is set, it also sets the `--surface-pad` CSS variable, which can be utilized by parent `Card` components or other related surface elements for consistent spacing. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`CardHeader`](/docs/components/card-header)
- [`CardFooter`](/docs/components/card-footer)
- [`Panel`](/docs/components/panel)
