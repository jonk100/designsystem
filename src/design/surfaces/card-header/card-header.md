# CardHeader

The header section of a `Card` component, typically used for titles, subtitles, or icons.

## Overview

The `CardHeader` component is the designated area at the top of a `Card`, intended for introductory or identifying information such as titles, subtitles, icons, or even brief summaries. It inherits padding from its parent `Card` via CSS variables (`--surface-pad`), ensuring its content aligns with the card's internal spacing, while also applying its own specific top, left, and right padding, and a slightly reduced bottom padding to create visual separation from the card's content. It can also support custom background colors and an optional bottom border for further definition. It is *not* responsible for the card's overall layout, content, footer, or external spacing; its focus is solely on the header area.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `default` | Sets the internal padding of the header area. When used within a `Card`, this value primarily influences the `--surface-pad` CSS variable, ensuring alignment with other card sections. |
| `bg` | `BackgroundTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'transparent' | 'subtle' | 'hover' | 'outline'`) | | Applies a background color tone to the header area. |
| `borderBottom` | `boolean` | `false` | If `true`, a bottom border is applied to the header for visual separation. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `CardHeader` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import CardHeader from '@/design/surfaces/card-header/CardHeader.astro';
---

<CardHeader>
  <h3>Card Title</h3>
</CardHeader>
```

### Common Patterns

```astro
---
import Card from '@/design/surfaces/card/Card.astro';
import CardHeader from '@/design/surfaces/card-header/CardHeader.astro';
import CardContent from '@/design/surfaces/card-content/CardContent.astro';
import CardFooter from '@/design/surfaces/card-footer/CardFooter.astro';
---

<!-- CardHeader with a subtitle and bottom border -->
<Card>
  <CardHeader borderBottom>
    <h4>Card Title</h4>
    <p>A brief subtitle explaining the card.</p>
  </CardHeader>
  <CardContent>Card content goes here.</CardContent>
</Card>

<!-- CardHeader with a different background color -->
<Card>
  <CardHeader bg="primary" padding="lg">
    <h2>Important Information</h2>
  </CardHeader>
  <CardContent>Details about the important information.</CardContent>
</Card>
```

## Accessibility

The `CardHeader` component, when used for titles, should ideally contain heading elements (e.g., `h1`, `h2`) to provide semantic structure for assistive technologies. Ensure that the information presented in the header is clear and concise. If interactive elements are included in the header, they must adhere to accessibility best practices, including keyboard operability and focus management.

## CSS Architecture

The `CardHeader` component uses the `card-header-component` class for its base styling. It applies padding classes (e.g., `surface-padding--md`) based on the `padding` prop, and background tone classes (e.g., `bg-primary`) based on the `bg` prop. The `card-header--border-bottom` modifier class is applied when the `borderBottom` prop is `true`. These classes utilize CSS custom properties for spacing and colors defined in `surfaces.css` and shared maps. When `padding` is set, it also sets the `--surface-pad` CSS variable, which is utilized by parent `Card` components for consistent spacing and alignment. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`CardContent`](/docs/components/card-content)
- [`CardFooter`](/docs/components/card-footer)
