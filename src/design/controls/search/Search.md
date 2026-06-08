# Search

A styled search field input component featuring a left-aligned inline search icon.

## Overview

The job of the `Search` component is to collect search query inputs from users. It wraps a native search input element with consistent layouts, focus states, and inline search icon formatting. It is NOT responsible for filtering search results directly or performing query execution (which should be triggered via parent forms or change event handlers).

## Props

The `Search` component accepts all standard HTML attributes for a native `<input type="search">` element (such as `required`, `pattern`, or `autofocus`), in addition to the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size modifier determining height, padding, and font size. |
| `variant` | `'outline' \| 'solid'` | `'outline'` | The visual border and background styling variant. |
| `disabled` | `boolean` | `false` | Disables interaction and dims opacity (inherited from `ControlComponentProps`). |
| `readonly` | `boolean` | `false` | Marks the input as read-only, preventing edits but maintaining form submissions (inherited from `ControlComponentProps`). |
| `invalid` | `boolean` | `false` | Highlights input borders red to denote validation failure (inherited from `ControlComponentProps`). |
| `placeholder` | `string` | `'Search...'` | Dim placeholder text displayed when the input is empty (inherited from `ControlComponentProps`). |
| `value` | `string` | `undefined` | The initial or current text value of the input field (inherited from `ControlComponentProps`). |
| `name` | `string` | `undefined` | Input name submitted with form data (inherited from `ControlComponentProps`). |
| `animate` | `string` | `undefined` | Entry animation classes (inherited from `BaseComponentProps`). |
| `effects` | `string[]` | `undefined` | Decorative filters or shadows (inherited from `BaseComponentProps`). |

## Variants / Sizes

- **Variants**:
  - `outline`: Default style with a thin border (`--border--0`) and light grey background (`--layer--2`).
  - `solid`: Borderless variant with a darker background (`--layer--3`), recommended for secondary parameters.
- **Sizes**:
  - `sm`: Height of 30px, 12px font size. Requires left padding of 28px for the search icon.
  - `md`: Height of 38px, 13px font size. Requires left padding of 36px for the search icon.
  - `lg`: Height of 46px, 15px font size. Requires left padding of 44px for the search icon.

## Usage

### Basic

```astro
---
import Search from "@/design/controls/search/Search.astro";
---

<Search name="q" />
```

### Common Patterns

#### Custom Placeholders
Customizing the help text for context-specific databases:

```astro
---
import Search from "@/design/controls/search/Search.astro";
---

<Search name="users-search" placeholder="Search users by name or email..." />
```

#### Dense Filter Bars
Adjusting heights to fit inside filter panels:

```astro
---
import Search from "@/design/controls/search/Search.astro";
---

<Search size="sm" name="table-filter" placeholder="Filter table..." />
```

## Accessibility

- **Native Search Semantics**: Employs a native browser search input directly, which guarantees default browser keyboard accessibility, screen reader announcements, and native input clear controls.
- **ARIA States**: Adds `aria-invalid="true"` when the `invalid` prop is enabled to notify assistive technology of validation errors.
- **Focus Indicators**: Displays focus outlines (`box-shadow: 0 0 0 2px var(--color-gold-focus)`) when focused.

## CSS Architecture

- **Inline Icon Layout**: Places the search icon absolutely inside a wrapper (`.search-wrapper__icon`), adjusting the left-hand padding of the input depending on the size modifier (`padding-left: 28px | 36px | 44px`) to ensure input text never overlaps the icon.
- **Disabled State**: Dims the wrapper opacity to `0.5` and blocks pointer events (`cursor: not-allowed`) on the input, as well as dimming the icon when disabled.
- **Transitions**: Smoothly animates border colors and focus box-shadows using transitions (`transition: all var(--td-fast) var(--te-in-out)`).

## Related Components

- **Input**: Standard text input field matching the search component's design token heights.
- **Icon**: Renders the inline search icon graphic.
- **InputGroup**: Layout container to join search inputs with adjacent search submit buttons.
