# Collapsible

An interactive disclosure component used to toggle the visibility of detailed content.

## Overview

The job of the `Collapsible` component is to show or hide details under a summary header, saving vertical layout space. It is NOT responsible for enforcing accordion behaviors (mutually exclusive open states across multiple panels) or acting as a dropdown menu.

## Props

The `Collapsible` component accepts all standard HTML attributes for its root `<details>` element (any options like `id`, `name`, etc., are passed down), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | `undefined` | The label text displayed in the summary header (ignored if the summary slot is used). |
| `open` | `boolean` | `false` | The initial open state of the collapsible panel. |
| `gap` | `SpacingScale` | `undefined` | Space between the summary header and the expanded content, mapping to standard spacing scale tokens. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |
| `bg` | `BackgroundTone` | `undefined` | Background layer tone (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Spacing Gaps**: The space between the summary header and the body contents can be adjusted using the `gap` prop (e.g. `gap="md"` maps to `var(--sp-md)`). The default gap is `var(--sp-xs)` (0.25rem).
- **Chevron Transition**: The chevron icon `.collapsible__icon` automatically rotates 180 degrees when the component transitions to the `[open]` state.

## Usage

### Basic

Provide a header title and include the body content inside the default slot:

```astro
---
import Collapsible from "@/design/controls/collapsible/Collapsible.astro";
---

<Collapsible title="Frequently Asked Questions">
  This content is hidden by default and is only displayed when the summary header is clicked.
</Collapsible>
```

### Common Patterns

#### Custom Summary Header Slot
To render custom elements (such as badges, formatting, or description details) in the summary header, use the `summary` slot:

```astro
---
import Collapsible from "@/design/controls/collapsible/Collapsible.astro";
import Badge from "@/design/display/badge/Badge.astro";
import Text from "@/design/typography/text/Text.astro";
---

<Collapsible>
  <div slot="summary" style="display: flex; gap: 8px; align-items: center;">
    <Text as="span" bold>Advanced Configuration</Text>
    <Badge variant="warning">Beta</Badge>
  </div>

  <Text>Configure custom backend ports, database strings, and routing settings here.</Text>
</Collapsible>
```

#### Pre-expanded Panel
You can load the component in an expanded state by passing the `open` prop:

```astro
---
import Collapsible from "@/design/controls/collapsible/Collapsible.astro";
---

<Collapsible title="System Diagnostic Logs" open>
  <pre>System OK. All processes checked.</pre>
</Collapsible>
```

## Accessibility

- **Native disclosure semantics**: Built on the native HTML `<details>` and `<summary>` elements, giving screen readers and keyboard users complete native interaction support.
- **Keyboard Controls**: The summary header acts as a focusable button, automatically opening or closing the content when the user presses `Space` or `Enter`.
- **Screen Reader Announcements**: Screen readers natively announce the expanded/collapsed state of the details tag as state attributes change.

## CSS Architecture

- **Visual Backdrop Layer**: Wraps the details tree inside a `Paper` component (`.collapsible__summary-paper`), giving the collapsible block a standard background surface card, boundary border, and subtle padding.
- **Marker Reset**: Hides default browser disclosure arrows (chvrons/triangles) in both Chrome/Safari (`::-webkit-details-marker`) and Firefox (`list-style: none` on the summary).
- **Smooth Chevron Rotation**: Rotates the chevron down icon (`.collapsible__icon`) smoothly by `180deg` using CSS transitions (`transition: transform var(--td-normal) var(--te-out)`) when the `[open]` attribute is added.

## Related Components

- **Paper**: The surface card component used to wrap and style the Collapsible wrapper.
- **Icon**: Renders the chevron graphic used for the expand indicator.
