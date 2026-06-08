# Overlays

The Overlays category encompasses components that float above the standard page document flow to present temporary interfaces, contextual options, data displays, or focus-trapped tools. These components solve critical space-saving and flow-management problems by keeping secondary controls and information hidden until requested by user actions, keeping the main canvas minimal and focused.

This category includes both declarative prop-driven overlays and dynamic, client-side, event-driven overlay regions governed by imperative TypeScript controllers.

**Major Areas Documented:**
- **Decoupled Region Architectures**: Implementing global overlays like command palettes and context menus via single layout mount points (`*Region.astro`) triggered programmatically via client-side scripts.
- **Accessible Focus Management**: Leveraging native `<dialog>` browser behaviors for Modals, Drawers, and Sheets to trap focus automatically, block parent page click interaction, and listen to standard Esc key dismissals.
- **Anchor-Based Positioning**: Managing contextual dropdown menus, tooltips, and popovers relative to triggering anchor element coordinates.

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **Modal** | Role-based | `id` | `title`, `size`, `closeOnBackdrop` |
| **Drawer** | Role-based | `id` | `title`, `side`, `backdrop`, `size`, `closeOnBackdrop` |
| **Sheet** | Role-based | `id` | `title`, `side`, `size`, `closeOnBackdrop` |
| **DropdownMenu** | Role-based | (none) | `label`, `position` |
| **Popover** | Role-based | `id` | `position`, `width` |
| **Tooltip** | Role-based | (none) | `content`, `position` |
| **CommandPaletteRegion** | Dynamic (Region) | N/A (utility-driven) | Fired programmatically via `commandPalette` API |
| **ContextMenuRegion** | Dynamic (Region) | N/A (utility-driven) | Fired programmatically via `contextMenu` API |

*(Note: All overlay components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `class:list`, `animate`, `onScroll`, and `effects`.)*

---

## Logic

The overlays category uses programmatic TypeScript controllers and global event-driven listeners to toggle display states without direct DOM references in developer code:

### 1. Modals & Drawers Controllers (`modal.ts`, `drawer.ts`)
Modals and Drawers use declarative markup in page code but are opened/closed programmatically via event dispatchers:
- `modal.open(id)` and `modal.close(id)` dispatch `modal:open` and `modal:close` events.
- `drawer.open(id)` and `drawer.close(id)` dispatch `drawer:open` and `drawer:close` events.
- Individual `<dialog>` elements bind listeners to these events and toggle their state using native `.showModal()`, `.show()`, or `.close()` methods.

```typescript
import { modal } from "@/design/overlays/modal/modal";

// Open the workspace creation modal
modal.open("create-workspace-modal");
```

### 2. Command Palette & Context Menu Regions
Global systems like command palettes and context menus are decoupled using the Region Pattern:
- **`CommandPaletteRegion.astro`**: Renders the global command palette interface at the page root, listening to `command-palette:open` and `command-palette:register` events.
- **`ContextMenuRegion.astro`**: Renders the floating custom right-click context menu container, matching trigger keys via the `window.__context_menus` registry.
- **Controllers (`commandPalette.ts`, `contextMenu.ts`)**: Expose dynamic registers to bind actions programmatically from any page component.

```typescript
import { commandPalette } from "@/design/overlays/command-palette/commandPalette";

// Register custom commands dynamically
commandPalette.register([
  {
    label: "Synchronize Workspace",
    description: "Forces a local cache reload",
    action: () => reloadCache(),
  }
]);
```

### 3. Anchor Positioning (`overlays.functions.ts`)
Floating overlays (Popovers and Tooltips) compute their absolute positions dynamically relative to their trigger elements:
- `calculateOverlayPosition(triggerRect, overlayRect, position)` calculates optimal pixel offsets.
- `fitsInViewport(coords, overlaySize)` checks if the placement clips boundaries.
- `getOppositePlacement(position)` flips the popover (e.g. top to bottom) if there is insufficient space in the preferred direction.

---

## Components

### Modal

`src/design/overlays/modal/Modal.astro`

#### Focus-Trapped Action Card
The `Modal` component is a dialog card that blocks page interaction, forcing the user to resolve a critical task or configuration flow. It uses the native `<dialog>` element to handle tab focus traps and backdrop masking, and is controlled programmatically via the `modal` helper utility.

---

### Drawer

`src/design/overlays/drawer/Drawer.astro`

#### Sliding Utility Panel
`Drawer` is a sliding panel overlay that enters from any side of the screen (`left`, `right`, `top`, `bottom`). It is intended for hosting contextual side settings, metadata panels, or complex lists that require high vertical height without fully blocking the main page flow.

---

### Sheet

`src/design/overlays/sheet/Sheet.astro`

#### Non-Blocking Split Inspector
The `Sheet` component is a variant of the Drawer that forces `backdrop={false}`, allowing users to inspect code or details side-by-side while continuing to interact with the main page body. It slides in from any side and is commonly used for developer control boxes or debug panels.

---

### Dropdown Menu

`src/design/overlays/dropdown-menu/DropdownMenu.astro`

#### Contextual Action List
`DropdownMenu` is a lightweight action menu utilizing native `<details>` and `<summary>` elements. It features document-level click listeners to automatically collapse the menu on outside clicks, close on option selections, and flip its vertical position dynamically if it overflows the viewport boundary.

---

### Popover

`src/design/overlays/popover/Popover.astro`

#### Rich-Content Floating Card
The `Popover` component utilizes the native HTML Popover API (`popover="auto"`) to render non-blocking rich cards containing complex layouts, settings forms, or menus. It leverages dynamic coordinates positioning, automatically adjusting top and left styles on scroll or resize events.

---

### Tooltip

`src/design/overlays/tooltip/Tooltip.astro`

#### Informational Hover Callout
`Tooltip` is a micro-overlay that appears on mouse hover or keyboard focus to describe trigger items (e.g. icon buttons). It relies on position calculation helpers to center itself relative to the anchor trigger.
