# CommandPalette

The `CommandPalette` is a keyboard-driven command center component that provides a unified, distraction-free search and trigger portal for global navigation, actions, and settings. Inspired by modern developer tools, it solves the problem of UI clutter by collapsing complex workflows into a single search input triggered anywhere via the `⌘K` or `Ctrl+K` global shortcut.

## Overview

The `CommandPalette` uses a **Region + External Controller** pattern. Its **responsibility** is to mount a single global region (`CommandPaletteRegion.astro`) in the root document layout, receive dynamic action registrations from individual pages, and handle global shortcuts to display, filter, and trigger actions.

It is **NOT responsible** for:
- Managing inline page content or presenting complex interactive forms (use [Modal](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/Modal.md) instead).
- Displaying contextual, click-scoped actions (use [ContextMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/context-menu/context-menu.md) instead).

## Props

The global mount component `CommandPaletteRegion.astro` accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `class` | `string` | `undefined` | Optional CSS class applied to the root dialog element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the dialog container. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `id`, `data-*`) for the underlying `dialog` element.

## Usage

### Basic

1. Mount the **CommandPaletteRegion** in your global layout (usually handled once at the layout level):

```astro
---
// src/layouts/Layout.astro
import CommandPaletteRegion from "@/design/overlays/command-palette/CommandPaletteRegion.astro";
---
<!doctype html>
<html>
  <body>
    <!-- Main page content -->
    <slot />
    
    <!-- Global Command Palette Mount -->
    <CommandPaletteRegion />
  </body>
</html>
```

2. Register commands and trigger the palette in your page scripts:

```astro
---
// src/pages/index.astro
---
<button id="open-palette-btn">Open Commands (⌘K)</button>

<script>
  import { commandPalette } from "@/design/overlays/command-palette/commandPalette";

  // Open programmatically
  document.getElementById("open-palette-btn")?.addEventListener("click", () => {
    commandPalette.open();
  });

  // Register page-specific commands
  commandPalette.register([
    {
      label: "Reload Page",
      description: "Perform a hard refresh of the sandbox",
      group: "System",
      action: () => window.location.reload()
    }
  ]);
</script>
```

### Common Patterns

#### Grouping and Categorization

Organize commands into distinct categories (like "Navigation", "Toasts", or "Modals") using the `group` prop:

```typescript
import { commandPalette } from "@/design/overlays/command-palette/commandPalette";
import { toast } from "@/design/feedback/toast/toast";
import { modal } from "@/design/overlays/modal/modal";

commandPalette.register([
  {
    label: "Show Workspace Details",
    description: "Inspect active configuration mapping",
    group: "Drawers",
    action: () => window.dispatchEvent(new CustomEvent("drawer:open", { detail: { id: "showcase-drawer" } }))
  },
  {
    label: "Trigger Success Toast",
    description: "Launch a success confirmation notification",
    group: "Toasts",
    action: () => toast.success("Fired from Command Palette!")
  },
  {
    label: "Reset Sandbox",
    description: "Clear environment local storage tokens",
    group: "Danger Zone",
    action: () => {
      localStorage.clear();
      toast.warning("LocalStorage wiped clean!");
    }
  }
]);
```

## Logic

The component is made up of a few pieces. These pieces communicate through custom events.

### The Registry Controller (`commandPalette.ts`)

The helper [commandPalette.ts](file:///home/jk/Code/DesignSystem/src/design/overlays/command-palette/commandPalette.ts) acts as the public API to trigger and populate the palette:

```typescript
export const commandPalette = {
  /**
   * Dispatches the custom open event to the region.
   */
  open(),

  /**
   * Appends custom actions to the global command palette registry.
   * @param items - Commands to add
   */
  register(items: CommandPaletteItem[])
}
```

Registered items are saved to the global buffer `window.__command_palette_registry`. When the region component initializes, it loads these buffered commands, avoiding registration race conditions across view transitions.

### Mount-Point Event Communication

The controller and region communicate asynchronously using the following custom events dispatched on `window`:

| Event | Dispatched By | Payload | Description |
| :--- | :--- | :--- | :--- |
| `command-palette:open` | `commandPalette.open()` or Shortcut | `null` | Tells the mounted region to display the modal. |
| `command-palette:register` | `commandPalette.register(...)` | `{ items: CommandPaletteItem[] }` | Notifies the region that new actions have been registered. |

### The Region Script (`CommandPaletteRegion.astro`)

The mounted region script manages the user interface lifecycle:
- **Shortcut Listener**: Attaches a window-level keydown handler for `(e.metaKey || e.ctrlKey) && e.key === "k"`. It runs `e.preventDefault()` and opens the palette.
- **Synchronous Focus**: On open, it runs `dialog.showModal()` and immediately focuses the search field synchronously using `input.focus({ preventScroll: true })` to prevent the browser from scrolling the background layout.
- **Search Filtering**: Compiles standard built-in actions (like "Scroll to Top", "Close Palette") with the registered dynamic array, performing case-insensitive substring matching on the query.
- **Keyboard Navigation**: Listens to keydown events. It uses `ArrowDown` and `ArrowUp` to cycles the `.is-selected` active item index (scrolling it into view via `.scrollIntoView({ block: "nearest" })`), `Enter` to run the active command, and `Escape` to close the dialog.

## Accessibility

The command palette uses a native `<dialog>` element providing standard keyboard focus trapping and ARIA defaults:
- The dialog container uses `role="dialog"` with an explicit `aria-label="Command Palette"`.
- Results list uses `role="listbox"`, and individual commands use `role="option"`. Selected items toggle `aria-selected="true/false"` dynamically.
- Focusing the search input uses `{ preventScroll: true }` to keep assistive scroll positions intact.

## CSS Architecture

The visual presentation is styled in [CommandPalette.css](file:///home/jk/Code/DesignSystem/src/design/overlays/command-palette/CommandPalette.css):
- `.command-palette-region`: The container is positioned out of layout flow via `position: fixed; top: 10vh; left: 50%; margin: 0; transform: translate(-50%, -20px);` to avoid document height recalculations that trigger scrollbars on open.
- Entrance animations use `@starting-style` to transition from `translate(-50%, -20px)` and `opacity: 0` to `translate(-50%, 0)` and `opacity: 1`.
- Backdrop blurs are styled via `::backdrop` leveraging `--overlay-backdrop-bg` and `--overlay-backdrop-blur` tokens.
- `.command-palette__results` handles scrolling overflow via `overflow-y: auto;` constrained by the `--overlay-cmd-max-height` token.

## Related Components

- **Modal**: For complex, form-driven overlay dialogs.
- **Drawer**: For slide-in sidebar forms or details panels.
- **ContextMenu**: For right-click action panels scoped to specific elements.
