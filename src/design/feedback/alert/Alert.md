# Alert

The `Alert` component is an inline messaging element used to communicate status states, contextual feedback, warnings, and success messages to users. It integrates directly into the page flow without blocking user interaction, providing timely feedback close to the action.

## Overview

The job of the `Alert` component is to present contextual, inline status feedback within a page or layout area. It is NOT responsible for page-level header notices (which should use `Banner`), blocking overlays (which should use `AlertDialog`), or ephemeral stack notifications (which should use `Toast`).

## Props

The `Alert` component accepts all standard HTML attributes for its root element (`div` by default), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `severity` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | The severity tone of the alert, mapping to standard design tokens and ARIA roles. |
| `variant` | `'solid' \| 'outline' \| 'soft' \| 'subtle'` | `'soft'` | Visual variant style defining background contrast and borders. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size scale of the alert, adjusting padding and icon sizing. |
| `title` | `string` | `undefined` | Optional bold header title displayed above the description block. |
| `dismissible` | `boolean` | `true` | Whether the alert can be closed by the user via a close button. |
| `as` | `HTMLTag` | `'div'` | The underlying HTML tag to render for the root element. |
| `animate` | `string` | `undefined` | Entry motion animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or drop shadow tokens (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `soft`: Low contrast background tint with matching border. Recommended for typical inline status messages.
  - `solid`: High-contrast filled block. Recommended for critical alerts that require immediate scanning.
  - `outline`: Border-only outline with no background fill. Recommended for clean, minimal layouts.
  - `subtle`: Minimal background tint with no borders.
- **Sizes**:
  - `sm`: Compact layout utilizing `--alert-padding-sm` and small icons.
  - `md`: Standard layout using `--alert-padding-md`.
  - `lg`: Large layout with wide paddings and larger font sizing.

## Usage

### Basic

```astro
---
import Alert from "@/design/feedback/alert/Alert.astro";
---

<Alert severity="success">
  Your changes have been saved successfully.
</Alert>
```

### Common Patterns

#### Critical Error Alert
A solid variant used to draw strong attention to high-risk validation or system failures:

```astro
---
import Alert from "@/design/feedback/alert/Alert.astro";
---

<Alert severity="error" variant="solid" title="Authentication Failed" dismissible={false}>
  Please check your credentials or contact administrator support.
</Alert>
```

#### Warn Dismissible Callout
An inline warning with a title and close button enabled:

```astro
---
import Alert from "@/design/feedback/alert/Alert.astro";
---

<Alert severity="warning" variant="outline" title="Pending Configurations">
  Some environment values are unassigned. Make sure to update before building.
</Alert>
```

## Logic

The `Alert` component contains an inline client-side `<script>` block that manages the dismiss action:

1. **Event Registration**: It queries for all `.alert-component` elements and binds click listeners to their close buttons (`.alert__close-btn`).
2. **Listener Guarding**: Sets a `data-has-listener="true"` attribute on the close button to prevent duplicate listeners on Astro page loads (`astro:page-load`) or HMR updates.
3. **Exit Transition**: On close click, adds the `.is-leaving` CSS class (triggering an opacity and scale scale-down transition) and removes the component node from the DOM once the transition (`animationend`) completes. A fallback timer removes the node after 300ms if no animation triggers.

## Accessibility

- **Roles**: Dynamically resolves the `role` attribute using `FEEDBACK_SEVERITY_ARIA_ROLE_MAP`. Warning and error alerts receive `role="alert"` (for immediate assertive announcement), while info, success, and neutral alerts receive `role="status"` (polite announcements).
- **Keyboard & Screen Readers**: The close button features an explicit `aria-label="Close alert"` so screen readers read its function rather than a generic icon name.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.alert-component`, `.alert__icon-container`, `.alert__content`, `.alert__title`, `.alert__description`, `.alert__close-btn`).
- **Severity & Size Classes**: Uses shared utility classes from `feedback.css` (e.g., `feedback-info`, `feedback-sm`, `feedback-solid`) mapped via TypeScript.
- **Animation States**: Combines with `.is-dismissing` style rules to fade and scale down on close.

## Related Components

- **Banner**: For page-level alerts that span full widths instead of inline layouts.
- **ToastRegion**: For non-intrusive notification overlays in the corner of the screen.
- **Button**: Composes the close button icon triggers.
