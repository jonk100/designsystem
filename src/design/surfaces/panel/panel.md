# Panel

A surface component designed for persistent UI elements like sidebars, inspector panes, or toolbars that are anchored to the application shell.

## Overview

The `Panel` component provides a distinct surface that is attached to the main application window, rather than floating as an overlay or scrolling with the main content. It is typically used for navigation drawers, sidebars, or context-specific panes that remain visible. Panels are styled with elevation levels (`layer`) and can be positioned relative to the viewport edges (`position`). They utilize CSS custom properties for background colors and padding, ensuring consistency with other surface components. The `Panel` is *not* responsible for managing the visibility state of its content (e.g., opening/closing a sidebar), nor does it handle complex layout or interactions within its content area; these are typically managed by parent components or the content placed inside.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `aside` | The HTML tag to use for the component's root element. Defaults to `<aside>` for semantic relevance. |
| `layer` | `number` | `2` | Controls the elevation level of the panel, influencing its z-index and shadow. Typically `--layer--2` or `--layer--3`. |
| `position` | `'left' | 'right' | 'top' | 'bottom' | 'none'` | `none` | Defines the panel's anchoring position relative to the viewport edges. `'none'` implies it doesn't have a default anchored position. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `default` | Sets the internal padding of the panel content area. |
| `bg` | `BackgroundTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'transparent' | 'subtle' | 'hover' | 'outline'`) | | Applies a background color tone to the panel. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Panel` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Position

- `left`: Anchored to the left side of the screen.
- `right`: Anchored to the right side of the screen.
- `top`: Anchored to the top of the screen.
- `bottom`: Anchored to the bottom of the screen.
- `none`: No default anchored position; typically used when the panel's position is controlled by custom styling or JavaScript.

### Layer

The `layer` prop corresponds to elevation levels, affecting the panel's visual depth and z-index. Common values are `2` and `3`, corresponding to CSS variables like `--layer--2` and `--layer--3`.

## Usage

### Basic

```astro
---
import Panel from '@/design/surfaces/panel/Panel.astro';
---

<Panel>
  <p>This is a panel.</p>
</Panel>
```

### Common Patterns

```astro
---
import Panel from '@/design/surfaces/panel/Panel.astro';
---

<!-- Left-aligned panel with a higher layer and custom background -->
<Panel position="left" layer={3} bg="primary" padding="lg">
  <h3>Navigation</h3>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul>
</Panel>

<!-- Bottom-anchored panel for a status bar -->
<Panel position="bottom" bg="subtle" padding="sm">
  <span>Status: All systems nominal.</span>
</Panel>
```

## Accessibility

When used for navigation or as a sidebar, `Panel` components should be implemented with accessibility in mind. If a panel contains navigation links, ensure they are properly focusable and keyboard-operable. For panels that reveal or hide content (like a collapsible sidebar), manage focus appropriately when the panel opens and closes. Using the `aside` tag semantically indicates that the panel contains content tangentially related to the main document. Ensure sufficient contrast for text and interactive elements within the panel.

## CSS Architecture

The `Panel` component uses the `panel-component` class for its base styling, establishing its attached nature and z-index context. It applies modifier classes for `position` (e.g., `panel-position--left`), `layer` (e.g., `surface-layer--3`), `padding` (e.g., `surface-padding--md`), and `bg` (e.g., `bg-primary`). These classes reference CSS custom properties defined in `surfaces.css`, `surfaces.css`, and shared maps for elevation, spacing, and colors. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
- [`Backdrop`](/docs/components/backdrop)
