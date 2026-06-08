# Modal

The `Modal` component provides a centered overlay card that captures user focus and blocks background page interactions. Utilizing the native HTML5 `<dialog>` element, it provides native focus trapping, keyboard dismissals (`Escape`), and backdrop management. It solves the problem of displaying critical information, forms, or confirmation dialogs while ensuring a secure user context and preventing cross-site scripting (XSS) through slot-driven composition.

## Overview

The `Modal` acts as an interactive dialog overlay. Its **responsibility** is to block access to page content, trap keyboard focus within its card boundary, and allow programmers to open/close the container programmatically.

It is **NOT responsible** for:
- Displaying non-blocking side layouts or persistent sidebar panels (use [Drawer](file:///home/jk/Code/DesignSystem/src/design/overlays/drawer/drawer.md) or [Sheet](file:///home/jk/Code/DesignSystem/src/design/overlays/sheet/sheet.md) instead).
- Presenting contextual actions next to trigger buttons (use [DropdownMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/dropdown-menu/dropdown-menu.md) or [Popover](file:///home/jk/Code/DesignSystem/src/design/overlays/popover/popover.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | *Required* | A unique identifier that binds the modal to event triggers. |
| `title` | `string` | `undefined` | Optional title text rendered in the modal header. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | The maximum width size scale of the modal card. |
| `variant` | `'default' \| 'centered' \| 'bottom'` | `'default'` | Visual layout alignment of the modal on the screen. |
| `closeOnBackdrop` | `boolean` | `true` | Whether clicking on the backdrop closes the modal automatically. |
| `class` | `string` | `undefined` | Optional CSS class applied to the root `<dialog>` element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the dialog container. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `data-*`) for the underlying `dialog` element.

## Usage

### Basic

Declare the modal inside your Astro template and import the programmatic `modal` controller to trigger it:

```astro
---
import Modal from "@/design/overlays/modal/Modal.astro";
import Button from "@/design/controls/button/Button.astro";
---

<Button variant="primary" id="open-modal-btn">Open Dialog</Button>

<Modal id="confirm-delete-modal" title="Delete Account" size="sm">
  <p>Are you sure you want to permanently delete your profile?</p>
  
  <div slot="actions">
    <Button variant="ghost" data-modal-close="confirm-delete-modal">Cancel</Button>
    <Button variant="danger" id="confirm-delete-btn">Delete Profile</Button>
  </div>
</Modal>

<script>
  import { modal } from "@/design/overlays/modal/modal";

  document.getElementById("open-modal-btn")?.addEventListener("click", () => {
    modal.open("confirm-delete-modal");
  });
</script>
```

### Common Patterns

#### Form Editing Modal

Incorporate input elements inside the modal body:

```astro
---
import Modal from "@/design/overlays/modal/Modal.astro";
import Button from "@/design/controls/button/Button.astro";
import Stack from "@/design/layout/stack/Stack.astro";
import Input from "@/design/controls/input/Input.astro";
---

<Modal id="edit-profile-modal" title="Edit Workspace Profile" size="md">
  <Stack gap="md">
    <Input label="Workspace Name" placeholder="My Projects" />
    <Input label="Environment URL" placeholder="https://dev.sandbox" />
  </Stack>
  
  <div slot="actions">
    <Button variant="ghost" data-modal-close="edit-profile-modal">Cancel</Button>
    <Button variant="primary" data-modal-close="edit-profile-modal">Save Workspace</Button>
  </div>
</Modal>
```

## Logic

The `Modal` component manages its modal lifecycle using a programmatic controller and native client-side events.

### Programmatic Controller (`modal.ts`)

The helper [modal.ts](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/modal.ts) exposes methods to open and close dialogs from any script:

```typescript
export const modal = {
  /**
   * Opens the modal identified by ID.
   */
  open(id: string),

  /**
   * Closes the modal identified by ID.
   */
  close(id: string)
}
```

These methods dispatch `modal:open` and `modal:close` custom events on `window`.

### Region Event Handlers

The script block in `Modal.astro` sets up event listeners on load:
- **Global Open/Close**: Listens to `modal:open` and `modal:close` on `window`. If the target ID matches the modal, it runs the native `dialog.showModal()` or `dialog.close()` methods.
- **Close Button Delegate**: Finds all child elements with the `data-modal-close="${id}"` attribute and binds click listeners to close the dialog.
- **Backdrop Dismissal**: If `closeOnBackdrop` is active, it calculates the bounding rectangle of the dialog card. If a click targets the modal backdrop (outside the card), the modal closes.

## Accessibility

The modal is fully accessible natively:
- `dialog.showModal()` traps focus inside the modal block and prevents interaction with background page elements.
- The browser handles the `Escape` key automatically to close the dialog.
- The modal root uses `role="dialog"` (which is the native semantic for `<dialog>`), and includes close buttons labeled with `aria-label="Close modal"`.

## CSS Architecture

Styles are defined in [Modal.css](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/Modal.css):
- `.modal-component`: Anchored to browser user-agent dialog styles. Centering is achieved by applying `margin: auto;` or `margin: 10vh auto auto auto;` based on position variants.
- Backdrop overlays are styled via `::backdrop` leveraging `--overlay-backdrop-bg` and `--overlay-backdrop-blur` variables.
- Animations use `@starting-style` to transition from `scale(0.95)` and `opacity: 0` to `scale(1)` and `opacity: 1` when opened.

## Related Components

- **Drawer**: For non-centered sidebar panels that slide in from viewport edges.
- **AlertDialog**: For high-priority confirmation prompts that require explicit user buttons to close.
