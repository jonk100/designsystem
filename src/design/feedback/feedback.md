# Feedback

The Feedback category encompasses components used to communicate system state changes, task progress, user validation results, and important notifications. These components help users maintain context, understand background operations, and confirm or cancel critical decisions. By separating static, server-rendered components from dynamic, client-side dynamic regions, the category ensures a responsive, accessible, and high-performance user experience throughout the design system.

**Major Areas Documented:**
- **Asynchronous Overlay Regions**: Programmatically triggered popups (Toasts and Alert Dialogs) that rely on a single global layout mount point and a simple client-side event bus.
- **Shared Visual Severity**: Consistency in styling across info, success, warning, error, and neutral states, ensuring intuitive semantic visual cues.
- **Accessible State Mapping**: Automatic allocation of semantic ARIA roles and labels (such as `role="alert"` for high-severity warnings and `role="status"` for progress or spinners) to support screen readers.

## Components

| Component | Type | Shared Props | Solo Props |
| :--- | :--- | :--- | :--- |
| [Alert](file:///home/jk/Code/DesignSystem/src/design/feedback/alert/Alert.astro) | Role-based | `severity`, `variant`, `size` | `title`, `dismissible` |
| [Banner](file:///home/jk/Code/DesignSystem/src/design/feedback/banner/Banner.astro) | Role-based | `severity`, `variant` | `title`, `dismissible` |
| [Progress](file:///home/jk/Code/DesignSystem/src/design/feedback/progress/Progress.astro) | Primitive | `variant` (severity), `size` | `value`, `max`, `label`, `showValue` |
| [Skeleton](file:///home/jk/Code/DesignSystem/src/design/feedback/skeleton/Skeleton.astro) | Primitive | (none) | `width`, `height`, `shape`, `lines` |
| [Spinner](file:///home/jk/Code/DesignSystem/src/design/feedback/spinner/Spinner.astro) | Primitive | `variant` (severity), `size` | `label` |
| [ToastRegion](file:///home/jk/Code/DesignSystem/src/design/feedback/toast/ToastRegion.astro) | Role-based | (none) | Fired programmatically via `toast` API |
| [AlertDialogRegion](file:///home/jk/Code/DesignSystem/src/design/feedback/alert-dialog/AlertDialogRegion.astro) | Role-based | (none) | Fired programmatically via `alertDialog` API |

*(Note: All feedback components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `class:list`, `animate`, `onScroll`, and `effects`.)*

---

## Logic

The Feedback category relies on dynamic, event-driven orchestration to trigger toast notifications and confirmation dialogs programmatically from client-side scripts without forcing layout nesting or heavy JavaScript bundles on page load.

### Controller Files and Roles

- [toast.ts](file:///home/jk/Code/DesignSystem/src/design/feedback/toast/toast.ts): Exposes a helper object containing severity-specific trigger functions (`toast.success()`, `toast.error()`, `toast.info()`, and `toast.warning()`). It dispatches custom DOM events targeted at the global toast container.
- [alertDialog.ts](file:///home/jk/Code/DesignSystem/src/design/feedback/alert-dialog/alertDialog.ts): Exposes the `alertDialog.confirm()` function. It handles unique ID generation, dispatches events to prompt the modal dialog, and returns a promise that resolves upon confirm or cancel clicks.

### Controller Pattern and Communication

These controllers use a custom event-driven delegation pattern:
1. Invoking a controller method (e.g., `toast.success()`) constructs a custom payload event (like `toast:show` or `alert-dialog:show`) containing options (title, description, duration) and dispatches it globally on the `window` object.
2. The active region listening to that event captures the payload and dynamically instantiates or updates the DOM representation.
3. For the alert dialog, resolution is achieved by listening for `alert-dialog:resolve` containing the matching ID, allowing a fully asynchronous `Promise` flow.

### Region Component Mount Points

To enable event dispatching, layout mount points must be present in the main page or document skeleton:
- [ToastRegion](file:///home/jk/Code/DesignSystem/src/design/feedback/toast/ToastRegion.astro): Must be placed once in the global layout. It listens for `toast:show` events, dynamically creates HTML toast containers with appropriate severity classes, implements auto-dismiss timers, and pauses timelines on mouse hover.
- [AlertDialogRegion](file:///home/jk/Code/DesignSystem/src/design/feedback/alert-dialog/AlertDialogRegion.astro): A single mount point rendering a native `<dialog>` element. It captures the title, description, and action label inputs, coordinates focus traps and backdrop clicks, and emits resolution events.

### Usage Example

```astro
---
// Page.astro
import ToastRegion from "@/design/feedback/toast/ToastRegion.astro";
import AlertDialogRegion from "@/design/feedback/alert-dialog/AlertDialogRegion.astro";
import Button from "@/design/controls/button/Button.astro";
---

<Layout>
  <!-- Mount points placed at layout root -->
  <ToastRegion />
  <AlertDialogRegion />

  <Button id="trigger-action">Perform Action</Button>

  <script>
    import { toast } from "@/design/feedback/toast/toast";
    import { alertDialog } from "@/design/feedback/alert-dialog/alertDialog";

    const btn = document.getElementById("trigger-action");
    btn?.addEventListener("click", async () => {
      // Prompt confirmation alert dialog
      const confirmed = await alertDialog.confirm({
        title: "Delete Account",
        description: "Are you sure you want to permanently delete your account? This action cannot be undone.",
        confirmLabel: "Delete Permanently",
        cancelLabel: "Cancel"
      });

      if (confirmed) {
        // Trigger success toast notification
        toast.success("Account deleted successfully.", "Success");
      } else {
        toast.info("Action cancelled.", "Cancelled");
      }
    });
  </script>
</Layout>
```

---

## Component Details

### Alert

Path: [Alert.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/alert/Alert.astro)

#### Inline Contextual Feedback
The `Alert` component delivers persistent, inline status updates to the user within specific content sections or page layouts. Rather than interrupting user workflows with modal dialogs, it provides critical visual callouts that help users understand successes, warnings, errors, or informational details relative to the surrounding context.

#### User-Controlled Dismissal
When users acknowledge a notification, they need a clean way to remove it from view. The `Alert` integrates an inline action button that triggers a sliding collapse animation, programmatically removing the alert element from the DOM to restore vertical screen space.

---

### Banner

Path: [Banner.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/banner/Banner.astro)

#### System-Wide Announcements
The `Banner` component communicates high-priority, system-level announcements that demand immediate developer or user awareness. By spanning the entire viewport width or stretching edge-to-edge in layout columns without round borders, it clearly signals information that affects the application globally (e.g., service disruptions or global maintenance alerts).

#### Non-Intrusive Global Communication
It keeps users updated on systemic operations without blocking interaction with the main page. This lets the application convey global state changes (like offline mode or billing issues) while preserving access to standard application workflows.

---

### Progress

Path: [Progress.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/progress/Progress.astro)

#### Async Task Transparency
Long-running asynchronous tasks (such as uploads or calculations) can lead to user confusion if progress is not visible. The `Progress` component provides a linear, high-visibility visual scale that reassures users that the system is actively working, thereby decreasing perceived loading latency.

#### State-Responsive Tracks
Tasks often alternate between knowing their exact completion state and being in an indeterminate state. By supporting both percentage-based fills and sliding loading animations when a value is omitted, it maintains a consistent feedback mechanism across different stages of asynchronous work.

---

### Skeleton

Path: [Skeleton.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/skeleton/Skeleton.astro)

#### High-Fidelity Loading Mockups
Blank screens or abrupt content layout shifts during data fetching create a jarring, low-performance user experience. `Skeleton` provides custom structural placeholders matching lines, circles, or cards, reducing layout thrashing by reserving exact layout boxes before components resolve.

#### Perceived Performance Optimization
By using continuous pulsing or wave shimmer animations, it draws the user's eye and suggests active progress. This keeps the user engaged during server-side renders or client-side fetch requests, making the page load feel significantly faster.

---

### Spinner

Path: [Spinner.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/spinner/Spinner.astro)

#### Micro-Task Load Indicators
Small, targeted actions like button clicks or inline actions do not require full-page skeleton loaders. The `Spinner` acts as a compact, animated circular loading wheel indicating that a localized process is currently loading, keeping UI states responsive without overwhelming the visual layout.

#### Semantic Accessibility Guidance
Sighted users immediately recognize visual rotation, but screen readers need explicit notifications. The `Spinner` automatically encapsulates visually hidden, readable labels, ensuring assistive technologies are properly updated on background operations.

---

### ToastRegion

Path: [ToastRegion.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/toast/ToastRegion.astro)

#### Global Notification Queue
Toasts must stack cleanly and appear consistently, regardless of where they are triggered in the viewport. `ToastRegion` acts as a centralized layout container that listens for events, handles spacing, prevents layout overlaps, and manages toast lifecycles.

#### Decoupled Client Interactions
Triggering temporary messages should not require nesting toast components inside every clickable action. By listening for events on the `window` object, the region enables clean, decoupled, script-based trigger capabilities across all page islands and components.

---

### AlertDialogRegion

Path: [AlertDialogRegion.astro](file:///home/jk/Code/DesignSystem/src/design/feedback/alert-dialog/AlertDialogRegion.astro)

#### Interruption-Safe Prompts
Destructive or critical user actions require absolute verification before execution. `AlertDialogRegion` traps keyboard focus and forces explicit confirmation or cancellation using a native `<dialog>` container, preventing accidental background clicks from resolving.

#### Asynchronous User Input
Coordinating modal inputs programmatically in standard scripts usually requires complex event listeners. The region coordinates with the controller helper to return standard JavaScript Promises, allowing developers to write clean, linear `async/await` verification scripts.
