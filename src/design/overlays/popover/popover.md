# Popover

The `Popover` component provides a floating container for detailed preview cards, interactive templates, or utility tools. Utilizing the native HTML Popover API (`popover="auto"`), it allows developers to display rich, secondary content anchored to a trigger button that breaks out of normal layouts (using the browser's top layer) and supports native click-outside dismissals without requiring heavy libraries.

## Overview

The `Popover` acts as a declarative floating overlay. Its **responsibility** is to anchor itself to a trigger button, calculate coordinates on open to remain in viewport limits, and dismiss itself when clicking outside or pressing Escape.

It is **NOT responsible** for:
- Blocking page interactions or trapping focus in a heavy dialog (use [Modal](file:///home/jk/Code/DesignSystem/src/design/overlays/modal/Modal.md) instead).
- Displaying simple action links or text tooltips (use [DropdownMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/dropdown-menu/dropdown-menu.md) or [Tooltip](file:///home/jk/Code/DesignSystem/src/design/overlays/tooltip/tooltip.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | *Required* | A unique ID that matches the trigger's `popovertarget` attribute. |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Positioning behavior relative to the trigger. |
| `width` | `string` | `undefined` | Optional width override (e.g. `'240px'`). |
| `class` | `string` | `undefined` | Optional CSS class applied to the root element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the root element. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied directly to the container. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `data-*`) for the root container element.

## Usage

### Basic

Connect a trigger button to a `<Popover>` using matching `popovertarget` and `id` properties:

```astro
---
import Popover from "@/design/overlays/popover/Popover.astro";
import Button from "@/design/controls/button/Button.astro";
import Text from "@/design/typography/text/Text.astro";
---

<Button variant="secondary" popovertarget="simple-popover">
  Toggle Card
</Button>

<Popover id="simple-popover" position="bottom" width="280px">
  <Text bold>Account Details</Text>
  <Text tone="muted">Configure profile preferences here.</Text>
</Popover>
```

### Common Patterns

#### Forms and Actions

Add interactive components inside the popover layout:

```astro
---
import Popover from "@/design/overlays/popover/Popover.astro";
import Button from "@/design/controls/button/Button.astro";
import Text from "@/design/typography/text/Text.astro";
import Stack from "@/design/layout/stack/Stack.astro";
---

<Button variant="primary" popovertarget="settings-popover">
  Adjust Margins
</Button>

<Popover id="settings-popover" position="top">
  <Stack gap="sm">
    <Text bold>Margin Editor</Text>
    <!-- Add form selectors or buttons -->
    <Button size="sm" variant="secondary">Reset to Default</Button>
  </Stack>
</Popover>
```

## Logic

The `Popover` component manages its floating layout and alignments using an inline script.

### Opening and Positioning

- **State Detection**: Listens for the native `toggle` event on `.popover-component`.
- **Anchor Resolution**: When opened, it queries the trigger button using `[popovertarget="${id}"]` and calculates coordinates relative to the trigger.
- **Collision Flipping**: It checks if the preferred placement (e.g. `"bottom"`) overflows the viewport boundaries. If it overflows, it calculates the coordinates for the opposite side (e.g. `"top"`) using the `getOppositePlacement` helper. If neither fits, it picks the side with the most available space and clamps the position using `adjustPositionForViewport`.
- **Style Assignment**: Applies the coordinates dynamically using inline `top` and `left` properties.

### Scroll and Resize Tracking

While the popover is active, the script attaches window-level event listeners for `scroll` (using `{ capture: true }` to listen on all nested scroll portals) and `resize`. When fired, the script recalculates coordinates in real time so the popover follows the trigger button. The scroll/resize listeners are automatically removed when the popover closes.

## Accessibility

The popover provides accessibility natively:
- Toggling the popover manages visibility states and exposes focus to assistive technologies.
- Clicking outside the popover card or pressing `Escape` closes the container natively.

## CSS Architecture

Styles are defined in [Popover.css](file:///home/jk/Code/DesignSystem/src/design/overlays/popover/Popover.css):
- `.popover-component`: Uses browser native styling. It sets `margin: 0` inside `.popover-component:popover-open` to override the browser's default center-viewport auto margins, allowing fixed inline positioning coordinates to take control.
- Entrance animations use `@starting-style` to transition from `translateY(10px) scale(0.98)` and `opacity: 0` to `translateY(0) scale(1)` and `opacity: 1`.

## Related Components

- **DropdownMenu**: For simple action selections triggered on click.
- **Tooltip**: For brief, non-interactive visual text alerts triggered on hover.
- **Modal**: For heavy, modal dialog blocks that block page interactions.
