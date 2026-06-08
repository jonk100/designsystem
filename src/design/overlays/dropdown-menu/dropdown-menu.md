# DropdownMenu

The `DropdownMenu` component provides a lightweight, togglable list of action links or buttons. Built on top of the browser's native `<details>` and `<summary>` elements, it enables developers to offer contextual choice menus (like action selections, navigation lists, or user settings) that automatically close when an item is chosen or when a user clicks outside the menu boundaries.

## Overview

The `DropdownMenu` operates as a declarative list widget. Its **responsibility** is to toggle the visibility of custom action buttons or links on click, automatically close on click-outside, and dynamically flip vertically to prevent screen overflow.

It is **NOT responsible** for:
- Gathering complex user input forms or displaying heavy layouts (use [Popover](file:///home/jk/Code/DesignSystem/src/design/overlays/popover/popover.md) or [Modal](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/Modal.md) instead).
- Suppressing and replacing native mouse right-click menus (use [ContextMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/context-menu/context-menu.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | *Required* | The text label displayed inside the summary button trigger. |
| `position` | `'bottom-start' \| 'bottom-end' \| 'top-start' \| 'top-end'` | `'bottom-start'` | Positioning alignment behavior relative to the trigger. |
| `class` | `string` | `undefined` | Optional CSS class applied to the root `<details>` element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the details wrapper. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `id`, `data-*`) for the root `<details>` element.

## Usage

### Basic

Declare the component and pass menu item buttons or links inside the default slot. To make items auto-close the menu when clicked, add the `data-close-on-click` attribute:

```astro
---
import DropdownMenu from "@/design/overlays/dropdown-menu/DropdownMenu.astro";
---

<DropdownMenu label="Choose Option">
  <button type="button" data-close-on-click>Edit File</button>
  <button type="button" data-close-on-click>Duplicate</button>
  <div class="dropdown-divider"></div>
  <button type="button" data-close-on-click>Delete</button>
</DropdownMenu>
```

### Common Patterns

#### Custom Content Alignment

Position the dropdown to open upwards and align to the right edge:

```astro
---
import DropdownMenu from "@/design/overlays/dropdown-menu/DropdownMenu.astro";
---

<DropdownMenu label="Workspace Actions" position="top-end">
  <a href="/settings" data-close-on-click>Settings</a>
  <a href="/logs" data-close-on-click>Activity Logs</a>
</DropdownMenu>
```

## Logic

The `DropdownMenu` component manages its interactive state using inline client-side scripts.

### Document-Level Event Delegation

The component uses document-level click delegation to manage toggles:
- **Click-Outside Detection**: Listens to clicks on `document`. If a click occurs outside an open `.dropdown-menu-component`, the script removes the `open` attribute from the `<details>` element, closing it automatically.
- **Auto-Close Selection**: Listens to clicks on elements with the `data-close-on-click` attribute. If triggered, it automatically finds the parent dropdown and removes the `open` attribute. Because these are delegated on `document`, the behavior survives page swaps and transitions.

### Collision Flipping

The script listens for the native non-bubbling `toggle` event in the **capturing phase** on `document`:
- When a details element is opened, it measures the viewport position of the dropdown list container (`.dropdown-menu__content`) via `getBoundingClientRect()`.
- If the menu overflows the bottom of the screen (or the top when opening upwards), the script dynamically swaps the modifier class (e.g., from `dropdown--bottom-start` to `dropdown--top-start`), forcing the browser to natively reposition the menu via CSS layout.
- The original placement class is restored when the dropdown is closed.

## Accessibility

The component relies on native semantic HTML:
- The `<details>` and `<summary>` tags provide native keyboard accessibility. Pressing `Space` or `Enter` toggles the menu open and closed.
- The summary trigger element has `aria-haspopup="menu"`, and the content container has `role="menu"` to identify it as a menu structure.
- The script manages keyboard closing by shutting the menu when `Escape` is pressed.

## CSS Architecture

Styles are defined in [DropdownMenu.css](file:///home/jk/Code/DesignSystem/src/design/overlays/dropdown-menu/DropdownMenu.css):
- `.dropdown-menu-component`: Set to `position: relative` and `display: inline-block` to establish the containing block for absolute positioning.
- `.dropdown-menu__content`: Set to `position: absolute` with absolute offset classes (`.dropdown--bottom-start`, etc.) controlling alignment.
- `.dropdown-menu__caret`: Toggles its rotation by 180 degrees using CSS transitions when the parent element has the `[open]` attribute.

## Related Components

- **Popover**: For floating cards that contain rich formatting, interactive forms, or custom layouts.
- **ContextMenu**: For right-click action panels positioned at the mouse cursor.
