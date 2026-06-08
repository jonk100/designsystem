# Sheet

The `Sheet` component provides a persistent, slide-in side panel that displays information without blocking background page interactions. Serving as a declarative wrapper around the [Drawer](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/drawer.md) component, it presets the backdrop option to `false` and operates as a non-blocking inspector, document sidebar, or persistent configuration menu.

## Overview

The `Sheet` acts as an inline sidebar panel. Its **responsibility** is to slide in from any screen edge, layout content slots, and allow the user to click and interact with main page content in the background concurrently.

It is **NOT responsible** for:
- Blocking background inputs or trapping focus in a modal context (use [Modal](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/modal.md) or a standard [Drawer](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/drawer.md) with `backdrop={true}` instead).
- Positioning itself relative to trigger buttons or hover triggers (use [Popover](file:///home/jk/Code/DesignSystem/src/design/overlays/popover/popover.md) or [Tooltip](file:///home/jk/Code/DesignSystem/src/design/overlays/tooltip/tooltip.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | *Required* | A unique identifier that binds the sheet to event triggers. |
| `title` | `string` | `undefined` | Optional title text rendered in the sheet header. |
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | The viewport edge from which the sheet slides into view. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | The width (or height for top/bottom sheets) size modifier. |
| `closeOnBackdrop` | `boolean` | `true` | Forwarded parameter for backdrop click behaviors (unused when backdrop is false). |
| `class` | `string` | `undefined` | Optional CSS class applied to the root element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the container. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `data-*`) for the underlying element.

## Usage

### Basic

Mount the sheet in your Astro template and trigger it programmatically using the `drawer` controller:

```astro
---
import Sheet from "@/design/overlays/sheet/Sheet.astro";
import Button from "@/design/controls/button/Button.astro";
---

<Button variant="secondary" id="open-sheet-btn">Open File Inspector</Button>

<Sheet id="file-inspector" title="File Properties" side="left" size="sm">
  <p>Modify file details. The page background remains fully clickable!</p>
  
  <div slot="actions">
    <Button variant="primary" data-drawer-close="file-inspector">Save Details</Button>
  </div>
</Sheet>

<script>
  import { drawer } from "@/design/overlays/drawer/drawer";

  document.getElementById("open-sheet-btn")?.addEventListener("click", () => {
    drawer.open("file-inspector");
  });
</script>
```

### Common Patterns

#### Scoped Sidebar Panels

Slide in a small layout helper from the bottom of the viewport:

```astro
---
import Sheet from "@/design/overlays/sheet/Sheet.astro";
import Text from "@/design/typography/text/Text.astro";
---

<Sheet id="bottom-console-sheet" title="Console Logs" side="bottom" size="sm">
  <div class="log-stream">
    <Text code>[12:04:12] Build compile success</Text>
    <Text code>[12:04:15] Watcher active on src/design</Text>
  </div>
</Sheet>
```

## Accessibility

The sheet preserves background accessibility:
- Because the backdrop is disabled, opening the sheet does not trap keyboard focus, allowing users to navigate and interact with background content using standard keyboard bindings.
- Close buttons utilize explicit `aria-label="Close drawer"` attributes.

## CSS Architecture

The visual presentation is styled in [Sheet.css](file:///home/jk/Code/DesignSystem/src/design/overlays/sheet/Sheet.css):
- Styles are inherited from [Drawer.css](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/Drawer.css) since `Sheet` operates as a wrapper forwarding props directly to the `Drawer` component.
- The `.drawer--no-backdrop` class removes default dialog outline rings and backdrop shadows, enabling a seamless layout integration alongside main content.

## Related Components

- **Drawer**: The underlying slide-in component supporting backdrop overlays.
- **Modal**: For centered, modal dialogs that require focal focus trapping.
