# DatePicker

A styled date picker input wrapper for native browser calendar fields.

## Overview

The job of the `DatePicker` component is to collect calendar date selections (such as booking dates or birthdays) from users. It wraps a native browser `<input type="date">` to maintain native system calendars, keyboards, and browser validation, while styling consistent borders, backgrounds, and muted WebKit indicators. It is NOT responsible for custom modal dropdown calendars or date range selections (selecting start/end ranges).

## Props

The `DatePicker` component accepts all standard HTML attributes for a native date input element (such as `required`, `min`, or `max`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size modifier determining height, padding, and font size. |
| `variant` | `'outline' \| 'solid'` | `'outline'` | The visual border and background styling variant. |
| `disabled` | `boolean` | `false` | Disables interaction and dims opacity (inherited from `ControlComponentProps`). |
| `readonly` | `boolean` | `false` | Marks the input as read-only, preventing edits but maintaining form submissions (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights input borders red to denote validation failure (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | Input name submitted with form data (inherited from `ControlComponentProps`). |
| `value` | `string` | `undefined` | The initial or current date value (formatted as `YYYY-MM-DD`) of the input field (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `outline`: Default style with a thin border (`--border--0`) and light grey background (`--layer--2`).
  - `solid`: Borderless variant with a darker background (`--layer--3`), recommended for secondary parameters.
- **Sizes**:
  - `sm`: Height of 30px, 12px font size. Recommended for dense grids or filters.
  - `md`: Height of 38px, 13px font size. The default size.
  - `lg`: Height of 46px, 15px font size. Recommended for prominent input forms.

## Usage

### Basic

```astro
---
import DatePicker from "@/design/controls/date-picker/DatePicker.astro";
---

<DatePicker name="event-date" />
```

### Common Patterns

#### Pre-selected Value
To initialize the component with a specific date:

```astro
---
import DatePicker from "@/design/controls/date-picker/DatePicker.astro";
---

<DatePicker name="booking-start" value="2026-06-08" />
```

#### Min/Max Date Bounds
Attributes limiting range selections are passed directly to the native input element:

```astro
---
import DatePicker from "@/design/controls/date-picker/DatePicker.astro";
---

<DatePicker name="vacation" min="2026-06-01" max="2026-06-30" required />
```

## Accessibility

- **Native Calendar Semantics**: Employs a browser-native date input directly, which guarantees default browser keyboard accessibility, screen reader announcements, and native calendar overlays (particularly crucial on mobile touchscreen interfaces).
- **ARIA States**: Adds `aria-invalid="true"` when the `invalid` prop is enabled to notify assistive technology of validation errors.
- **Focus Rings**: Displays focus indicators via box-shadow rings (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused.

## CSS Architecture

- **Calendar Indicator Styling**: Overrides default WebKit picker indicator styling (`::-webkit-calendar-picker-indicator`) using CSS filter inverting (`filter: invert(0.6)`) to match custom themes, shifting to `invert(0.8)` on hover.
- **Transitions**: Smoothly animates border colors and indicator filters using transitions (`transition: all var(--td-fast) var(--te-in-out)`).
- **Read-Only / Disabled Backdrops**: When read-only or disabled, sets background-color to `--layer--1` to visually separate input controls from editable fields.

## Related Components

- **Input**: Standard text input field matching the DatePicker design token heights.
- **Select**: Dropdown selection menu matching text input field proportions.
