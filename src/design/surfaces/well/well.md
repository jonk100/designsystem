# Well

A recessed surface component that visually sinks into the page, providing a subtle visual distinction from its surroundings.

## Overview

The `Well` component serves as a container for content that needs to be visually set apart, often indicating a secondary or nested context. Unlike a `Card` that typically lifts above the surface, a `Well` recedes into the page, creating a sense of containment. It is commonly used for code blocks, embedded examples, read-only fields, or areas requiring a distinct background. It supports various background layers (`layer`), internal padding (`padding`), and background color tones (`bg`). The `Well` is *not* responsible for the layout of its internal content, or any complex interactive behaviors; it is a purely presentational surface.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `layer` | `number` | `1` | Controls the background elevation level of the well, typically corresponding to a `--layer--1` or similar token for a subtle recessed background. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `md` | Sets the internal padding around the well's content. |
| `bg` | `BackgroundTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'transparent' | 'subtle' | 'hover' | 'outline'`) | | Applies a background color tone to the well. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Well` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Layer

The `layer` prop controls the background elevation, affecting the well's background color. For example, `layer={1}` would typically apply `--layer--1` for a distinct recessed background.

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
import Well from '@/design/surfaces/well/Well.astro';
---

<Well>
  <p>This content is inside a well.</p>
</Well>
```

### Common Patterns

```astro
---
import Well from '@/design/surfaces/well/Well.astro';
import Code from '@/design/typography/code/Code.astro';
---

<!-- Well containing a code block with a custom background -->
<Well layer={1} padding="lg" bg="subtle">
  <Code block language="javascript">
    function greet() {
      console.log("Hello from the well!");
    }
    greet();
  </Code>
</Well>

<!-- Well used for nested content -->
<Well as="section" padding="xl">
  <h3>Nested Section</h3>
  <p>This content is visually nested within a well.</p>
</Well>
```

## Accessibility

The `Well` component is a presentational container. Its accessibility depends on the semantic correctness of the content it holds. If the well contains interactive elements, ensure they are focusable and keyboard-operable. For read-only fields, ensure the content is clearly presented and can be understood by assistive technologies.

## CSS Architecture

The `Well` component uses the `well-component` class for its base styling, which creates the recessed visual effect. It applies modifier classes for `layer` (e.g., `surface-layer--1`), `padding` (e.g., `surface-padding--md`), and `bg` (e.g., `bg-subtle`). These classes reference CSS custom properties for background colors and spacing defined in `Well.css`, `surfaces.css`, and shared maps. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
- [`Code`](/docs/components/code)
