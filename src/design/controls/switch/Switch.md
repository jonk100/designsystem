# Switch

A binary toggle switch component used for toggling instant settings on or off.

## Overview

The job of the `Switch` component is to allow users to toggle binary, immediate options (such as activating dark mode or muting audio). It focuses on high accessibility by wrapping a native `<button>` element with `role="switch"` and standard keyboard navigation capabilities. It is NOT responsible for storing checked states internally (it is a stateless wrapper; click triggers and value updates must be handled by parent state systems) or managing mutually exclusive groups.

## Props

The `Switch` component accepts all standard HTML attributes for its root `<button>` element, in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Sets whether the switch is visually toggled on. |
| `disabled` | `boolean` | `false` | Disables interaction and dims visual contrast (inherited from `BaseComponentProps`). |
| `name` | `string` | `undefined` | Common input name assigned to the control container. |
| `value` | `string` | `undefined` | Common input value submitted with form data. |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Checked State**: When checked (`.is-checked`), the track background shifts to gold (`--color-gold`) and translates the thumb slider horizontally (`transform: translateX(20px)`).
- **Disabled State**: When disabled (`.is-disabled`), visual opacity is reduced, cursor changes to `not-allowed`, and pointer events are blocked.

## Usage

### Basic

```astro
---
import Switch from "@/design/controls/switch/Switch.astro";
---

<Switch checked name="newsletter" />
```

### Common Patterns

#### State-controlled Client Interaction
Because the component is stateless, click event listeners must toggle the `.is-checked` class and `aria-checked` attribute:

```astro
---
import Switch from "@/design/controls/switch/Switch.astro";
---

<Switch id="audio-toggle" aria-label="Toggle Audio" />

<script>
  const toggleBtn = document.getElementById("audio-toggle");
  toggleBtn?.addEventListener("click", () => {
    const isChecked = toggleBtn.getAttribute("aria-checked") === "true";
    toggleBtn.setAttribute("aria-checked", String(!isChecked));
    toggleBtn.classList.toggle("is-checked", !isChecked);
  });
</script>
```

## Accessibility

- **Semantic Role**: Configures the root button with `role="switch"` and `aria-checked` attributes, signaling binary toggle options correctly to screen readers.
- **Keyboard Navigation**: As a native `<button>`, it automatically supports standard focus states, keyboard tab order, and triggers action clicks when the user presses `Space` or `Enter`.
- **Focus Indicators**: Focus rings are rendered around the switch track border (`.switch-component:focus-visible .switch-component__track`).

## CSS Architecture

- **BEM Class Structure**: Uses BEM classes for modifiers (`.switch-component`, `.switch-component__track`, `.switch-component__thumb`).
- **Thumb Slide Translation**: Shifts the thumb horizontally using CSS transforms (`transform: translateX(20px)`) and changes the background color of both thumb and track dynamically when the parent has the `.is-checked` modifier.
- **Transitions**: Smoothly animates backgrounds, borders, and transforms using `--td-fast` duration and `--te-in-out` easing.

## Related Components

- **Checkbox**: Similar control for toggling binary values, recommended inside forms that require a submit button.
- **Radio**: For mutually exclusive choices.
