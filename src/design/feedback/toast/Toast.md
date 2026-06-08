# Toast

The `Toast` system manages temporary, non-blocking notification messages that slide onto the screen from the bottom-right corner and auto-dismiss after a duration.

## Overview

The job of the `Toast` system is to communicate non-blocking application events (like "Settings saved" or "Connection failed") as they occur. It is NOT responsible for blocking user workflows (use `AlertDialog`), displaying contextual inline messages (use `Alert`), or presenting top-of-page notifications (use `Banner`).

## Props

The `Toast` system uses a programmatic client-side trigger model. The `ToastRegion.astro` mount component itself does not accept configuration props.

The parameters accepted by the `toast` methods (like `toast.success()`) are:

| Prop | Type | Default | Description |
|---|---|---|---|
| `description` | `string` | **Required** | The primary notification description message. |
| `title` | `string` | `undefined` | Optional header title displayed above the description. |
| `duration` | `number` | `4000` | Display duration in milliseconds before auto-dismissing (use `0` for persistent). |
| `severity` | `'success' \| 'error' \| 'info' \| 'warning'` | `'info'` | Color scheme severity tone (passed inline to the generic `toast.show` function). |

---

## Usage

### Basic

Trigger a standard informational toast notification from any client-side handler:

```typescript
import { toast } from "@/design/feedback/toast/toast";

const handleCopy = () => {
  toast.success("Link copied to clipboard.", "Copied");
};
```

### Common Patterns

#### Handling API Errors
Triggering a persistent error toast with custom duration:

```typescript
import { toast } from "@/design/feedback/toast/toast";

async function saveProfile() {
  try {
    await submitProfileData();
    toast.success("Profile settings synchronized successfully.", "Sync Saved");
  } catch (err) {
    toast.error("Failed to reach profile services. Please retry.", "Save Failure", 5000);
  }
}
```

---

## Logic

The `Toast` system utilizes a decoupled, event-driven Region and Controller architecture:

### 1. The Controller (`toast.ts`)
A lightweight, client-side utility module that exposes the following methods:
* `toast.show({ severity, title, description, duration })`
* `toast.success(description, title?, duration?)`
* `toast.error(description, title?, duration?)`
* `toast.info(description, title?, duration?)`
* `toast.warning(description, title?, duration?)`

When invoked, it dispatches a custom `toast:show` event on the `window` object containing the notification configuration details.

### 2. The Region Mount Point (`ToastRegion.astro`)
A layout-level mounting point that is dropped once in the global layout before the closing `</body>` tag:
* Renders a fixed container element `<div class="toast-container">`.
* Listens for the `toast:show` event on the `window` object.
* Dynamically constructs individual toast DOM nodes (`.toast-component`), inserts SVGs matching the severity, sanitizes header and body content using `.textContent` (preventing XSS), and appends them to the container.
* Manages auto-dismiss timers. Hovering over a toast (`mouseenter`) pauses the dismiss timer, and leaving it (`mouseleave`) restarts it at `1500ms`.
* Attaches close button listeners to dismiss notifications immediately.

### 3. Custom Event Payload

#### `toast:show`
* **Triggered by**: `toast.ts`
* **Payload**:
  ```typescript
  {
    severity: 'success' | 'error' | 'info' | 'warning';
    title?: string;
    description: string;
    duration?: number;
  }
  ```

---

## Accessibility

- **Roles**: The container element has `role="status"` and `aria-live="polite"` configured in the server Astro layout. Because the live region is rendered on page load, screen readers correctly announce dynamically injected toasts.
- **Actions**: Close buttons feature an explicit `aria-label="Close notification"` for screen reader scan compliance.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.toast-component`, `.toast__icon-container`, `.toast__content`, `.toast__title`, `.toast__description`, `.toast__close-btn`, `.toast-container`).
- **Severity Mapping**: Reuses the shared feedback classes (`feedback-success`, `feedback-solid`, `feedback-md`) to inherit borders, text colors, and shadows.
- **Exit Motion**: The `.is-leaving` class collapses height, margins, and vertical padding to 0, causing other toasts to slide up smoothly.
- **Motion Reduction**: All slide-in and exit animations are disabled under `@media (prefers-reduced-motion: reduce)`.

## Related Components

- **AlertDialogRegion / alertDialog**: For blocking, modal overlay prompts.
- **Alert**: For static, inline status callouts.
- **Banner**: For page-level status warnings.
