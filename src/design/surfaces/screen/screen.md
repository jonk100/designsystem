# Screen

The outermost surface component, representing the entire viewport or page canvas.

## Overview

The `Screen` component defines the fundamental visual environment for the application. It acts as the base layer, establishing the page's background color (typically `--layer--0`) and ensuring that the content takes up at least the full viewport height (`100dvh`). It serves as the foundational stacking context for all other UI elements. The `Screen` component is purely environmental and does not dictate layout or structure; its primary role is to provide a consistent and complete canvas for the rest of the application's UI. It is *not* a layout component and should not be used for structuring content within the page.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `keyof HTMLElementTagNameMap` | `div` | The HTML tag to use for the component's root element. |
| `layer` | `number` | `0` | Sets the elevation layer for the screen. Typically corresponds to `--layer--0`, indicating the base background. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `boolean` | `false` | Enables animation effects for the component. |
| `onScroll` | `function` | | Callback function to execute on scroll events. |

In addition to the above, the `Screen` component accepts all standard HTML attributes for its root element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Screen from '@/design/surfaces/screen/Screen.astro';
---

<Screen>
  <!-- Your page content goes here -->
  <h1>Welcome</h1>
  <p>This is the main content of the page.</p>
</Screen>
```

### Common Patterns

```astro
---
import Screen from '@/design/surfaces/screen/Screen.astro';
import Panel from '@/design/surfaces/panel/Panel.astro';
---

<!-- Example of using Screen with a sidebar Panel -->
<Screen>
  <Panel position="left" layer={1}>
    <nav>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
      </ul>
    </nav>
  </Panel>
  <main>
    <!-- Main content area -->
    <h2>Main Content Area</h2>
    <p>This is the primary content of the page, positioned next to the sidebar.</p>
  </main>
</Screen>
```

## Accessibility

The `Screen` component itself does not introduce specific ARIA roles, as it represents the base canvas. Accessibility concerns are primarily related to the content placed within the `Screen`. Ensure that the overall page structure, including headings, landmarks, and interactive elements, is accessible.

## CSS Architecture

The `Screen` component uses the `screen-component` class and applies a `surface-layer--0` class to establish the base background and elevation. It leverages CSS custom properties defined in `surfaces.css` for the background color and ensures a minimum viewport height. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Panel`](/docs/components/panel)
- [`Card`](/docs/components/card)
- [`Paper`](/docs/components/paper)
