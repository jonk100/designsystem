# Banner

The `Banner` component is a full-width notification element positioned at the top of pages or major containers. It communicates system announcements, warnings, or success alerts.

## Overview

The job of the `Banner` component is to present high-visibility system-wide notices or warnings. It is NOT responsible for inline content callouts (use `Alert`), non-blocking stacked notifications (use `Toast`), or interactive destructive actions prompts (use `AlertDialog`).

## Props

The `Banner` component accepts all standard HTML attributes for its root element (`div`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `severity` | `'info' \| 'success' \| 'warning' \| 'error' \| 'neutral'` | `'info'` | Color severity tone, mapping to icons and semantic styles. |
| `variant` | `'solid' \| 'outline' \| 'soft' \| 'subtle'` | `'soft'` | Visual variant styling. |
| `title` | `string` | `undefined` | Bold title text displayed above the description block. |
| `dismissible` | `boolean` | `false` | Whether the banner shows a close button to let users dismiss it. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Visual filters or drop shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `soft`: Low contrast background with matching border. Recommended for typical notices.
  - `solid`: High contrast filled background block. Recommended for critical alerts.
  - `outline`: Border-only line with no background fill.
  - `subtle`: Minimal background fill with no borders.
- **Flat Edges Layout**:
  - Unlike `Alert`, the `Banner` has flat border-radius styling and zero side margins, ensuring it aligns perfectly with the outer boundaries of page headers or blocks.

## Usage

### Basic

```astro
---
import Banner from "@/design/feedback/banner/Banner.astro";
---

<Banner severity="info">
  System maintenance is scheduled for tonight at 11:00 PM UTC.
</Banner>
```

### Common Patterns

#### Sticky Global Announcement
Displaying a warning banner at the top of a shell layout:

```astro
---
import Banner from "@/design/feedback/banner/Banner.astro";
---

<header class="app-header">
  <Banner severity="warning" variant="solid" title="Trial Expiring" dismissible={true}>
    Your trial subscription ends in 3 days. Upgrade your account today.
  </Banner>
</header>
```

#### Dismissible Success Notice
An outline banner confirming a successful global update:

```astro
---
import Banner from "@/design/feedback/banner/Banner.astro";
---

<Banner severity="success" variant="outline" title="Update Completed" dismissible={true}>
  The workspace environment has been successfully upgraded.
</Banner>
```

## Logic

The `Banner` component contains an inline client-side `<script>` block that manages the dismiss action:

1. **Event Registration**: Queries for all `.banner-component` elements and binds click listeners to their close buttons (`.banner__close-btn`).
2. **Listener Guarding**: Sets a `data-has-listener="true"` attribute on the close button to prevent registering duplicate listeners on page load (`astro:page-load`) or HMR updates.
3. **Exit Transition**: Adding `.is-dismissing` toggles height, padding, and outer border transitions to `0`. The node is deleted from the DOM when the `animationend` transition event completes, with a 300ms fallback timer.

## Accessibility

- **Roles**: Dynamically resolves the element's `role` attribute using `FEEDBACK_SEVERITY_ARIA_ROLE_MAP`. Warning and error banners receive `role="alert"` (for immediate assertive announcement), while info, success, and neutral banners receive `role="status"` (polite announcements).
- **Control Labels**: Close button has `aria-label="Dismiss banner"` for assistive scan clarity.

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes (`.banner-component`, `.banner__container`, `.banner__icon-container`, `.banner__content`, `.banner__title`, `.banner__description`, `.banner__close-btn`).
- **Severity & Variant Classes**: Integrates standard feedback classes (`feedback-info`, `feedback-soft`) to map background, text, and border styling.
- **Dismiss Collapsing**: The `.is-dismissing` class transitions `opacity` to `0`, `transform` to translate upwards, and collapses `max-height` and padding to prevent gaps.

## Related Components

- **Alert**: For compact inline callouts.
- **ToastRegion**: For ephemeral screen notifications.
- **Button**: Renders the close icon trigger button.
