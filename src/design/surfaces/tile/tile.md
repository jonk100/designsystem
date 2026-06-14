# Tile

A flush, borderless, and radiusless surface component, typically used in grid layouts where grid lines provide the visual separation.

## Overview

The `Tile` component serves as a simple, unadorned container for content, designed to seamlessly integrate into grid-based layouts. Unlike a `Card`, `Tile` intentionally foregoes borders and rounded corners, allowing the underlying grid structure to define the visual separation between individual tiles. It supports various background layers (`layer`), internal padding (`padding`), and background color tones (`bg`) to differentiate content. The `Tile` is *not* responsible for establishing the grid layout itself, managing external spacing between tiles, or providing any complex interactive behaviors; these concerns are handled by parent grid components.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `layer` | `number` | `2` | Controls the background elevation level of the tile, typically corresponding to a `--layer--2` or similar token for a subtle background. |
| `padding` | `'default' | 'sm' | 'md' | 'lg' | 'xl'` | `default` | Sets the internal padding around the tile's content. |
| `bg` | `BackgroundTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'transparent' | 'subtle' | 'hover' | 'outline'`) | | Applies a background color tone to the tile. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Tile` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Variants / Sizes

### Layer

The `layer` prop controls the background elevation, affecting the tile's background color. For example, `layer={2}` would typically apply `--layer--2` for a distinct background.

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
import Tile from '@/design/surfaces/tile/Tile.astro';
---

<Tile>
  <h3>Item Title</h3>
  <p>Some brief content.</p>
</Tile>
```

### Common Patterns

```astro
---
import Tile from '@/design/surfaces/tile/Tile.astro';
import BentoGrid from '@/design/surfaces/bento-grid/BentoGrid.astro'; // Example with BentoGrid
import BentoCell from '@/design/surfaces/bento-cell/BentoCell.astro';
---

<!-- Tiles within a BentoGrid -->
<BentoGrid columns={3} gap="md">
  <BentoCell>
    <Tile layer={1} padding="md">
      <h4>Product 1</h4>
      <p>Description for product 1.</p>
    </Tile>
  </BentoCell>
  <BentoCell>
    <Tile layer={1} padding="md" bg="subtle">
      <h4>Product 2</h4>
      <p>Description for product 2 with a subtle background.</p>
    </Tile>
  </BentoCell>
  <BentoCell>
    <Tile layer={1} padding="md">
      <h4>Product 3</h4>
      <p>Description for product 3.</p>
    </Tile>
  </BentoCell>
</BentoGrid>

<!-- Standalone Tile with custom tag -->
<Tile as="article" bg="primary" padding="lg">
  <h2>Featured Article</h2>
  <p>This article is presented as a prominent tile.</p>
</Tile>
```

## Accessibility

The `Tile` component itself is a generic container. Its accessibility largely depends on the content it houses. If a tile functions as a clickable element (e.g., to navigate or trigger an action), it should be wrapped in an interactive element like a `<button>` or `<a>` with appropriate ARIA roles and keyboard support. Ensure that textual content within the tile has sufficient color contrast.

## CSS Architecture

The `Tile` component uses the `tile-component` class for its base styling, which ensures it is flush, borderless, and has no rounded corners. It applies modifier classes for `layer` (e.g., `surface-layer--2`), `padding` (e.g., `surface-padding--md`), and `bg` (e.g., `bg-subtle`). These classes reference CSS custom properties for background colors and spacing defined in `Tile.css`, `surfaces.css`, and shared maps. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`BentoCell`](/docs/components/bento-cell)
- [`BentoGrid`](/docs/components/bento-grid)
- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
