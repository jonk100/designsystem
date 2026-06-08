# AlertDialog

The `AlertDialog` component manages modal confirm prompts programmatically. It leverages native browser dialog controls to halt work flows (e.g., destructive actions) and returns a promise resolving to the user's action.

## Overview

The job of the `AlertDialog` system is to prompt the user for confirmation on critical actions (like deleting a resource). It is NOT responsible for non-blocking notifications (use `Toast`), static inline callouts (use `Alert`), or page-level information headers (use `Banner`).

## Props

The `AlertDialog` system uses a programmatically-triggered flow where configuration option values are passed to `alertDialog.confirm()`. The `AlertDialogRegion.astro` element itself does not accept layout props.

The option properties accepted by `alertDialog.confirm()` are:

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `undefined` | Optional dialog header title. If omitted, the title element is hidden. |
| `description` | `string` | **Required** | The primary confirmation description text detailing the decision consequences. |
| `confirmLabel` | `string` | `'Confirm'` | Label text displayed on the positive action confirmation button. |
| `cancelLabel` | `string` | `'Cancel'` | Label text displayed on the negative dismissal button. |

## Usage

### Basic

Trigger a simple confirmation prompt within any click handler or async block:

```typescript
import { alertDialog } from "@/design/feedback/alert-dialog/alertDialog";

const handleDelete = async () => {
  const confirmed = await alertDialog.confirm({
    description: "Are you sure you want to delete this configuration?",
  });

  if (confirmed) {
    // Proceed with deletion logic
  }
};
```

### Common Patterns

#### Destructive Action Flow
Using customized action labels and headers to prompt the user before deleting a resource:

```typescript
import { alertDialog } from "@/design/feedback/alert-dialog/alertDialog";
import { toast } from "@/design/feedback/toast/toast";

async function destroyWorkspace() {
  const confirmed = await alertDialog.confirm({
    title: "Delete Workspace",
    description: "Are you sure you want to permanently delete this workspace? This operation cannot be undone.",
    confirmLabel: "Delete Workspace",
    cancelLabel: "Keep Workspace",
  });

  if (confirmed) {
    toast.success("Workspace deleted successfully.", "Workspace Deleted");
  } else {
    toast.info("Deletion canceled.", "Canceled");
  }
}
```

---

## Logic

The `AlertDialog` system uses a decoupled, promise-based Region and Controller architecture:

### 1. The Controller (`alertDialog.ts`)
Exposes `alertDialog.confirm(options)`. When invoked, it:
* Creates a unique random ID for the transaction request.
* Dispatches a custom `alert-dialog:show` event on `window` carrying the ID and prompt text.
* Returns a Promise that resolves when a matching custom `alert-dialog:resolve` event is received.

### 2. The Region Mount Point (`AlertDialogRegion.astro`)
Dropped once in the global layout layout component:
* Renders a native `<dialog class="alert-dialog-modal">` wrapping cancel and confirm action triggers.
* Listens to the `alert-dialog:show` window event, updates the text content, and calls `dialog.showModal()`.
* Listens to click events on confirm/cancel buttons and dispatches an `alert-dialog:resolve` event carrying the resolution result (`true` or `false`) and the transaction ID.

### 3. Custom Event Payloads

#### `alert-dialog:show`
* **Triggered by**: `alertDialog.ts`
* **Payload**:
  ```typescript
  {
    id: string;
    title?: string;
    description: string;
    confirmLabel: string;
    cancelLabel: string;
  }
  ```

#### `alert-dialog:resolve`
* **Triggered by**: `AlertDialogRegion.astro`
* **Payload**:
  ```typescript
  {
    id: string;
    result: boolean;
  }
  ```

---

## Accessibility

- **Native Modal Support**: Renders a native `<dialog>` element, ensuring the browser automatically traps keyboard focus, handles Esc key cancellations (which resolves as `false`), and blocks background page interactions.
- **Backdrop Clicks**: Click listeners check the bounding rect coordinates of click events; clicking outside the modal box boundary resolves the prompt as `false` and closes the dialog safely.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.alert-dialog-modal`, `.alert-dialog__card`, `.alert-dialog__body`, `.alert-dialog__title`, `.alert-dialog__description`, `.alert-dialog__actions`).
- **Visual Styling**: Uses standard local tokens (e.g. `var(--border--1)`, `var(--layer--1)`) for background and border colors, and applies a `backdrop-filter: blur(6px)` and background color treatment to the overlay `::backdrop`.

## Related Components

- **ToastRegion / toast**: Commonly triggered in response to resolved dialog operations (e.g. showing a success notification once a dialog is confirmed).
- **Button**: Renders the cancel and confirm button controllers within the layout.
