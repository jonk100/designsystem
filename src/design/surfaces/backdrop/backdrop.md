# Backdrop

A fixed, full-viewport scrim component used primarily behind overlays like modals, drawers, and sheets.

## Overview

The Backdrop component serves as a visual and interactive barrier, obscuring the content behind an overlay to draw focus to the foreground element. It covers the entire viewport, typically with a semi-transparent color derived from semantic design tokens. The Backdrop is responsible for creating a visual separation and optionally capturing click events to dismiss the overlay. It is *not* responsible for the overlay content itself, managing the open/close state of modals, or complex z-index management beyond its own layer; these concerns should be handled by orchestrating parent components.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `interactive` | `boolean` | `true` | If `true`, the backdrop will capture click events, which can be used to dismiss an overlay. If `false`, it will allow pointer events to pass through. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Backdrop` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Backdrop from '@/design/surfaces/backdrop/Backdrop.astro';
---

<Backdrop>
  <!-- Overlay content goes here -->
</Backdrop>
```

### Common Patterns

```astro
---
import Backdrop from '@/design/surfaces/backdrop/Backdrop.astro';
---

<!-- Non-interactive Backdrop (e.g., for a loading screen) -->
<Backdrop interactive={false}>
  <p>Loading data...</p>
</Backdrop>

<!-- Backdrop with custom HTML tag -->
<Backdrop as="section" class="custom-backdrop-style">
  <h2>Modal Content</h2>
</Backdrop>
```

## Accessibility

The `Backdrop` component is typically used in conjunction with accessible overlay patterns (e.g., modals with `aria-modal` and focus management). While the backdrop itself does not have a direct ARIA role, its role in obscuring content helps screen reader users understand that the main application content is temporarily inaccessible. When `interactive` is `true`, it can receive focus and be dismissible via click, contributing to a good user experience for all input methods.

## CSS Architecture

The `Backdrop` component uses the `backdrop-component` class for its base styling, applying fixed positioning and full-viewport coverage. It references the `--backdrop-color` semantic token for its background, allowing for consistent transparency across the design system. The `backdrop--non-interactive` modifier class is applied when the `interactive` prop is `false`, disabling pointer events. Global props like `class` and `class:list` are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Modal`](/docs/components/modal) (Hypothetical, as this is a common association)
- [`Drawer`](/docs/components/drawer) (Hypothetical, as this is a common association)
- [`Panel`](/docs/components/panel)
