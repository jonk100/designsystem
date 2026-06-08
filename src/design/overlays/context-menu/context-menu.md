# ContextMenu

The `ContextMenu` component is a declarative wrapper that enables custom right-click overlays for specific interactive elements in the design system. It allows developers to bind scoped action menus (such as "Rename," "Delete," or "Add to Favorites") to visual elements (like cards, tables, or item rows) to provide advanced, desktop-class user interactions without cluttering the primary user interface.

## Overview

In the design system, the `ContextMenu` acts as a scoped wrapper component. Its **responsibility** is to wrap a target element, monitor right-click events (`contextmenu`) inside that boundary, prevent the browser's default browser menu, and display a dynamically populated action list positioned at the mouse cursor.

It is **NOT responsible** for:
- Standard click actions or simple dropdown selections (use [DropdownMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/dropdown-menu/DropdownMenu.md) instead).
- Maintaining programmatic global application states or triggering confirmations directly (delegate to programmatic modals or global toasts via custom actions).

Unlike global overlays like Toast or AlertDialog, context menus are inherently scoped: their actions only make sense relative to the target item they wrapper.

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `menuId` | `string` | *Required* | A unique identifier that binds the trigger area to its registered actions in JavaScript. |
| `class` | `string` | `undefined` | Optional CSS class applied to the root wrapper element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the wrapper. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `id`, `data-*`) for the root `div` wrapper.

## Usage

### Basic

Wrap any target element in the `<ContextMenu>` and register its actions by using the `contextMenu` registry utility:

```astro
---
import ContextMenu from "@/design/overlays/context-menu/ContextMenu.astro";
---

<ContextMenu menuId="simple-text-menu">
  <div class="target-box">
    Right-click here to view actions.
  </div>
</ContextMenu>

<script>
  import { contextMenu } from "@/design/overlays/context-menu/contextMenu";

  contextMenu.register("simple-text-menu", [
    { label: "Alert Action", action: () => alert("Fired!") },
    { divider: true },
    { label: "Close Menu", action: () => {} }
  ]);
</script>
```

### Common Patterns

#### Wrapping Scoped Cards

Bind distinct right-click actions to card components to show item-specific choices:

```astro
---
import ContextMenu from "@/design/overlays/context-menu/ContextMenu.astro";
import Paper from "@/design/surfaces/paper/Paper.astro";
import Text from "@/design/typography/text/Text.astro";
---

<ContextMenu menuId="workspace-card-menu">
  <Paper class="workspace-card">
    <Text bold>Project Sandbox</Text>
    <Text tone="muted">Right-click for options.</Text>
  </Paper>
</ContextMenu>

<script>
  import { contextMenu } from "@/design/overlays/context-menu/contextMenu";
  import { toast } from "@/design/feedback/toast/toast";

  contextMenu.register("workspace-card-menu", [
    { 
      label: "Copy Path", 
      icon: `<svg>...</svg>`, 
      action: () => toast.success("Path copied to clipboard!") 
    },
    { 
      label: "Rename Sandbox", 
      action: () => toast.info("Rename requested") 
    },
    { divider: true },
    { 
      label: "Delete Sandbox", 
      action: () => toast.error("Cannot delete project") 
    }
  ]);
</script>
```

## Logic

ContextMenu's positioning, event capturing, and rendering logic live directly within the component's script tags rather than a global region.

### The Registry Controller (`contextMenu.ts`)

The helper [contextMenu.ts](file:///home/jk/Code/DesignSystem/src/design/overlays/context-menu/contextMenu.ts) acts as a registration interface to store menu actions:

```typescript
export const contextMenu = {
  /**
   * Registers a list of action items under a unique ID.
   * @param id - Identifies the context menu (matches menuId prop)
   * @param items - Array of menu items or dividers
   */
  register(id: string, items: ContextMenuItem[])
}
```

Registered items are stored in a global buffer on `window.__context_menus` (e.g. `window.__context_menus[menuId]`) to prevent registration race conditions before the DOM has loaded or during Astro view transitions.

### Client-Side Event Handlers

When the page loads, the inline script block executes the following tasks:
- **Event Scoping**: Listens for the `contextmenu` event on the `.context-menu-wrapper`. It intercepts the event, calls `e.preventDefault()` to block the standard browser context menu, and calls `e.stopPropagation()` to prevent nested menu collision.
- **Dynamic Render**: Reads the associated actions from `window.__context_menus[menuId]` and appends buttons (`.context-menu__item`) or dividers (`.context-menu__divider`) to the local `.context-menu-region`.
- **Viewport Adjustments**: Measures the menu's height and width synchronously. It calculates cursor offsets relative to the viewport, and calls `adjustPositionForViewport()` to ensure the menu flips or shifts so it is never cut off by viewport edges.
- **Auto-Dismissal**: Adds window-level capture listeners for page `scroll`, clicking outside (`click`), or pressing `Escape` to automatically hide the menu.

## Accessibility

The context menu complies with native ARIA patterns:
- The popup wrapper uses `role="menu"` and contains items with `role="menuitem"` for assistive technology.
- It manages `aria-hidden="true/false"` state changes dynamically to inform screen readers of visibility changes.
- Pressing the `Escape` key immediately closes the menu and returns focus.

## CSS Architecture

The component uses BEM selectors styled in [ContextMenu.css](file:///home/jk/Code/DesignSystem/src/design/overlays/context-menu/ContextMenu.css):
- `.context-menu-wrapper`: The relative wrapping boundary containing the trigger element and the floating region.
- `.context-menu-region`: The actual menu menu container. It uses `position: fixed` to escape overflow clipping contexts, and initializes `top: 0; left: 0;` to prevent layout shifts. It is elevated with `z-index: var(--overlay-z-tooltip, 1500) !important` to ensure visibility over other overlays.
- `.context-menu__item`: Flex layout item for action buttons with inner icon and label selectors.
- `.context-menu__divider`: Thin border line for separating action categories.

Animation values and transition scales are applied through the categories shared token files.

## Related Components

- **DropdownMenu**: For declarative, details/summary-based drop-down menus triggered on click.
- **Popover**: For larger, interactive floating preview cards anchored to buttons.
- **Tooltip**: For lightweight hover-triggered help snippets.
