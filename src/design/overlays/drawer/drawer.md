# Drawer

The `Drawer` component provides an off-screen panel that slides in from any side of the viewport (left, right, top, or bottom). Using the native `<dialog>` element, it supports both a modal drawer (which blocks background page clicks and dims context with a backdrop) and a non-blocking persistent side panel (often called a sheet). It solves the problem of displaying inspectors, settings panels, or navigation trees alongside the main content area.

## Overview

The `Drawer` acts as a slide-in side panel. Its **responsibility** is to slide smoothly into view from a configured edge, handle dismissals via close buttons or backdrop clicks, and trap keyboard focus when configured as a modal.

It is **NOT responsible** for:
- Displaying centered confirmation dialogs or alerts (use [Modal](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/modal.md) or [AlertDialog](file:///home/jk/Code/DesignSystem/src/design/feedback/alert-dialog/AlertDialogRegion.astro) instead).
- Presenting small, hover-triggered informational messages (use [Tooltip](file:///home/jk/Code/DesignSystem/src/design/overlays/tooltip/tooltip.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | *Required* | A unique identifier that binds the drawer to event triggers. |
| `title` | `string` | `undefined` | Optional title text rendered in the drawer header. |
| `side` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | The viewport edge from which the drawer slides into view. |
| `backdrop` | `boolean` | `true` | Whether to display a blocking backdrop overlay that dims background content. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | The width (or height for top/bottom drawers) size modifier. |
| `closeOnBackdrop` | `boolean` | `true` | Whether clicking on the backdrop closes the drawer automatically. |
| `class` | `string` | `undefined` | Optional CSS class applied to the root `<dialog>` element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the container. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `data-*`) for the underlying `dialog` element.

## Usage

### Basic

Declare the drawer inside your Astro template and import the programmatic `drawer` controller to slide it in:

```astro
---
import Drawer from "@/design/overlays/drawer/Drawer.astro";
import Button from "@/design/controls/button/Button.astro";
---

<Button variant="secondary" id="open-drawer-btn">Inspect Settings</Button>

<Drawer id="settings-drawer" title="Drawer Settings" side="right" size="sm">
  <p>Configure project properties and options here.</p>
  
  <div slot="actions">
    <Button variant="primary" data-drawer-close="settings-drawer">Done</Button>
  </div>
</Drawer>

<script>
  import { drawer } from "@/design/overlays/drawer/drawer";

  document.getElementById("open-drawer-btn")?.addEventListener("click", () => {
    drawer.open("settings-drawer");
  });
</script>
```

### Common Patterns

#### Persistent Sheet Panel

Configure the drawer to slide in from the left edge without a backdrop, allowing the user to click page elements in the background:

```astro
---
import Drawer from "@/design/overlays/drawer/Drawer.astro";
---

<Drawer id="nav-sheet" title="Navigation" side="left" size="xs" backdrop={false}>
  <nav class="side-nav">
    <a href="/dashboard">Dashboard</a>
    <a href="/projects">Projects</a>
    <a href="/settings">Settings</a>
  </nav>
</Drawer>
```

## Logic

The `Drawer` component manages its opening behavior using a programmatic controller and native client-side events.

### Programmatic Controller (`drawer.ts`)

The helper [drawer.ts](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/drawer.ts) exposes methods to slide the panel in and out:

```typescript
export const drawer = {
  /**
   * Opens the drawer identified by ID.
   */
  open(id: string),

  /**
   * Closes the drawer identified by ID.
   */
  close(id: string)
}
```

These methods dispatch `drawer:open` and `drawer:close` custom events on `window`.

### Region Event Handlers

The script block in `Drawer.astro` registers events on load:
- **Polymorphic Open**: Listens to `drawer:open` on `window`. If `backdrop` is `true`, it opens the panel as a modal using `dialog.showModal()`. If `backdrop` is `false`, it opens it as a non-blocking panel using `dialog.show()`, enabling background interactions.
- **Close Button Delegate**: Finds all buttons inside with `data-drawer-close="${id}"` and attaches click events to close the panel.
- **Backdrop Dismissal**: If a backdrop is active and `closeOnBackdrop` is `true`, clicking outside the drawer card bounds automatically closes the panel.

## Accessibility

The drawer provides native accessibility:
- When opened as a modal, `dialog.showModal()` traps keyboard focus and prevents access to background content. When opened with `backdrop={false}`, background focus remains accessible.
- Pressing `Escape` automatically dismisses modal drawers.
- The root uses `role="dialog"` with close buttons labeled via `aria-label="Close drawer"`.

## CSS Architecture

Styles are defined in [Drawer.css](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/Drawer.css):
- `.drawer-component`: Positioned fixed along viewport edges based on side classes (`.drawer-left`, `.drawer-right`, etc.). Dimensions are bound to `--overlay-drawer-width` and `--overlay-drawer-height` tokens.
- **Backdrop and Anim**: Backdrops are styled via `::backdrop` with transitions. Opening uses `@starting-style` to animate translate offsets (e.g. `transform: translateX(100%)` to `transform: translateX(0)`) depending on the edge.

## Related Components

- **Sheet**: A dedicated wrapper component that presets `backdrop={false}` for persistent panels.
- **Modal**: For centered, card-based dialog screens.
