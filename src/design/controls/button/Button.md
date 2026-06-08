# Button

A customizable button control for user interactions. It handles hover, active, pressed, and focus visual states, and can dynamically render as either a native HTML button or an anchor element.

## Overview

The job of the `Button` component is to trigger immediate user actions (like submitting forms or opening dialogs) or navigate to other URLs. It is NOT responsible for grouping multiple actions (use `ButtonGroup` for that), displaying complex dropdown menus (use `Select` or a custom popover), or managing form-level state.

## Props

The `Button` component accepts all standard HTML attributes for either a `<button>` or an `<a>` element (depending on whether `href` is provided), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'gold' \| 'danger'` | `'secondary'` | The visual style theme variant of the button. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size modifier determining the height, padding, and font size. |
| `iconOnly` | `boolean` | `false` | When true, applies equal square dimensions optimized for single-icon contents. |
| `toggle` | `boolean` | `false` | When true, enables toggle button behavior, adding click event handlers to track pressed state. |
| `active` | `boolean` | `false` | Sets the initial or current active pressed state for toggle buttons. |
| `href` | `string` | `undefined` | An optional destination URL. If provided, the component renders as an `<a>` anchor tag instead of a `<button>`. |
| `disabled` | `boolean` | `false` | Disables user interaction and applies visual disabled styling (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Marks the control as invalid (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `primary`: Uses the theme's gold color (`--color-gold`) for maximum visual emphasis. Recommended for primary call-to-actions.
  - `secondary`: Uses a dark layer background (`--layer--2`) with a subtle border. Suitable for most general actions.
  - `ghost`: Transparent background and borders. Becomes styled on hover. Used for lower emphasis or toolbars.
  - `gold`: Tinted gold background and text for themed secondary actions.
  - `danger`: Red text and border indicating a destructive action.
- **Sizes**:
  - `sm`: Height of 30px, 12px font size. Recommended for dense layouts.
  - `md`: Height of 38px, 14px font size. The default size.
  - `lg`: Height of 46px, 16px font size. Recommended for prominent hero actions.

## Usage

### Basic

```astro
---
import Button from "@/design/controls/button/Button.astro";
---

<Button>Click Me</Button>
```

### Common Patterns

#### Primary Form Submission
To submit a form with a strong visual cue:

```astro
---
import Button from "@/design/controls/button/Button.astro";
---

<Button variant="primary" type="submit">
  Submit Order
</Button>
```

#### Navigation Link
Renders as an `<a>` element visually styled as a button:

```astro
---
import Button from "@/design/controls/button/Button.astro";
---

<Button href="/dashboard" variant="ghost">
  Return to Dashboard
</Button>
```

#### Icon Only
Optimized square button container for standalone icon triggers:

```astro
---
import Button from "@/design/controls/button/Button.astro";
import Icon from "@/design/display/icon/Icon.astro";
---

<Button iconOnly variant="ghost" aria-label="Settings">
  <Icon name="settings" size="sm" />
</Button>
```

#### Toggle Button
A button that retains its pressed/active state:

```astro
---
import Button from "@/design/controls/button/Button.astro";
import Icon from "@/design/display/icon/Icon.astro";
---

<Button toggle active aria-label="Mute Audio">
  <Icon name="volume-mute" size="sm" />
</Button>
```

## Logic

The `Button` component contains an inline script that automatically manages the state of toggle buttons:

1. **State Management**: When a button is configured with `toggle={true}`, it receives the class `.toggle-btn` and tracks its active state via the `aria-pressed` attribute.
2. **Event Listeners**: The script attaches click listeners to all toggle buttons to invert their state (`aria-pressed="true" | "false"`) and toggle the `.is-pressed` CSS class.
3. **View Transitions**: It automatically re-runs setup on page load (`astro:page-load`) to support single-page navigation without losing event registration.

## Accessibility

- **Semantic Tags**: Renders as a native `<button>` by default, or an `<a>` tag when a destination `href` is supplied, ensuring natural screen reader and keyboard compatibility.
- **ARIA Attributes**: For toggle buttons, updates `aria-pressed` dynamically to inform assistive technologies of the current state.
- **Icon-Only Labeling**: When rendering an icon-only button, ensure that a descriptive label is supplied using `aria-label` or inner `.sr-only` content to keep the trigger accessible.
- **Keyboard Support**: Fully supports standard focus states (`:focus-visible` ring) and keyboard trigger inputs (`Space` / `Enter`).

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes for modifiers (`.btn`, `.btn--primary`, `.btn--sm`, `.icon-btn`, `.toggle-btn`).
- **Focus Rings**: Applies consistent outline rings using the global variables `--focus-ring` and `--focus-ring-offset`.
- **Transitions**: Animates borders, backgrounds, and transforms smoothly using `--td-fast` duration and `--te-in-out` easing.

## Related Components

- **ButtonGroup**: Organizes multiple related buttons into a unified container.
- **Icon**: Commonly placed inside buttons to provide visual context.
