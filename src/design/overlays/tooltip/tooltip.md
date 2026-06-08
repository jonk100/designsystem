# Tooltip

The `Tooltip` component provides a small help banner that appears when a user hovers over or focuses a child element. Formatted as a pure CSS utility, it solves the problem of displaying supplementary inline explanations (such as icon labels, button summaries, or short context hints) without requiring JavaScript calculations or cluttering page content.

## Overview

The `Tooltip` acts as a pure layout decorator wrapper. Its **responsibility** is to wrap an interactive child element, detect mouse hover or focus, and display a styled text bubble positioned relative to the child.

It is **NOT responsible** for:
- Wrapping complex HTML structures, interactive menus, or forms (use [Popover](file:///home/jk/Code/DesignSystem/src/design/overlays/popover/popover.md) instead).
- Providing actions or click-based options (use [DropdownMenu](file:///home/jk/Code/DesignSystem/src/design/overlays/dropdown-menu/dropdown-menu.md) instead).

## Props

The component accepts the following props:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `string` | *Required* | The help text content displayed inside the tooltip bubble. |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Placement location relative to the wrapped child. |
| `delay` | `'short' \| 'medium' \| 'long'` | `'medium'` | Transition delay duration before the tooltip appears. |
| `class` | `string` | `undefined` | Optional CSS class applied to the outer wrapper element. |
| `class:list` | `Record<string, boolean> \| any[]` | `undefined` | Optional class list utility array/object merged onto the outer wrapper. |
| `style` | `string \| Record<string, string>` | `undefined` | Optional inline styles applied to the wrapper. |

Since the component forwards excess properties via `{...rest}`, it accepts all standard HTML attributes (e.g. `id`, `data-*`) for the outer `span` wrapper.

## Usage

### Basic

Wrap any element with the `<Tooltip>` component and set the descriptive `content` text:

```astro
---
import Tooltip from "@/design/overlays/tooltip/Tooltip.astro";
---

<Tooltip content="Permanently remove item">
  <button type="button">Delete</button>
</Tooltip>
```

### Common Patterns

#### Configurable Placement

Position the tooltip bubble relative to the item (default is top):

```astro
---
import Tooltip from "@/design/overlays/tooltip/Tooltip.astro";
import Icon from "@/design/display/icon/Icon.astro";
---

<Tooltip content="Tooltip on Right" position="right">
  <Icon name="help" />
</Tooltip>

<Tooltip content="Tooltip on Bottom" position="bottom" delay="short">
  <span class="badge">Fast Reveal</span>
</Tooltip>
```

## Accessibility

The tooltip uses standard semantic practices:
- The tooltip bubble container uses `role="tooltip"` and has an `aria-label` attribute populated with the content text.
- Tooltips display on both mouse hover (`:hover`) and keyboard focus (`:focus-within`) to ensure assistive users navigating via keyboard can access the helper text.

## CSS Architecture

The visual presentation is styled in [Tooltip.css](file:///home/jk/Code/DesignSystem/src/design/overlays/tooltip/Tooltip.css):
- `.tooltip-container`: The outer `span` wrapper set to `position: relative` and `display: inline-block` to anchor the helper text.
- `.tooltip-bubble`: Positioned using `position: absolute` with coordinate positions matching `.tooltip--top`, `.tooltip--bottom`, `.tooltip--left`, and `.tooltip--right`.
- **Transitions and Delay**: Toggles visibility using `opacity` and CSS transitions. It maps the `delay` prop to a local CSS variable (`--tooltip-delay`) to control hover reveal times.

## Related Components

- **Popover**: For displaying interactive forms, detailed descriptions, or multi-line layouts.
- **DropdownMenu**: For presenting action selections or navigation links on click.
