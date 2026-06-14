# Label

A component for rendering accessible and semantically correct labels for form elements.

## Overview

The Label component provides a flexible way to associate text with form controls, enhancing usability and accessibility. It's responsible for displaying text with various typographical styles (size, tone, weight, etc.) and indicating required or optional fields, as well as a disabled state. The Label is *not* responsible for the form control itself, nor does it handle form validation logic; it solely focuses on the labeling aspect.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `required` | `boolean` | `false` | If `true`, a `*` indicator is displayed to denote a required field. |
| `optional` | `boolean` | `false` | If `true`, an `(optional)` indicator is displayed. |
| `disabled` | `boolean` | `false` | If `true`, the label text will appear visually disabled. |
| `for` | `string` | `undefined` | The `id` of the form input the label is associated with. |
| `fs` | `TextSize` (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'`) | | Sets the font size using predefined design tokens. |
| `tone` | `TextTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'`) | `primary` | Applies a semantic color tone to the text. |
| `fw` | `FontWeight` (`'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'`) | `medium` | Sets the font weight. |
| `bold` | `boolean` | `false` | Applies a bold text style. |
| `italic` | `boolean` | `false` | Applies an italic text style. |
| `underline` | `boolean` | `false` | Applies an underline text decoration. |
| `strikethrough` | `boolean` | `false` | Applies a strikethrough text decoration. |
| `uppercase` | `boolean` | `false` | Transforms the text to uppercase. |
| `lowercase` | `false` | `false` | Transforms the text to lowercase. |
| `ws` | `Whitespace` (`'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces'`) | | Controls how whitespace is handled within the element. |
| `ff` | `FontFamily` (`'sans' | 'serif' | 'mono'`) | | Sets the font family. |
| `wrap` | `boolean` | `false` | If `true`, enables word breaking for long words. |

In addition to the above, the `Label` component accepts all standard HTML attributes for the `<label>` element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Label from '@/design/typography/label/Label.astro';
---

<Label for="my-input">My Field</Label>
<input id="my-input" type="text" />
```

### Common Patterns

```astro
---
import Label from '@/design/typography/label/Label.astro';
---

<!-- Required Field Label -->
<Label for="username" required>
  Username
</Label>
<input id="username" type="text" />

<!-- Optional Field Label with different tone -->
<Label for="email" optional tone="secondary">
  Email Address
</Label>
<input id="email" type="email" />

<!-- Disabled Label -->
<Label for="disabled-input" disabled>
  Disabled Input
</Label>
<input id="disabled-input" type="text" disabled />
```

## Accessibility

The `Label` component is designed with accessibility in mind, utilizing the native HTML `<label>` element. The `for` prop correctly associates the label with its corresponding form control, allowing assistive technologies like screen readers to announce the label when the control is focused. Required and optional indicators (`*` and `(optional)`) are included in `<span>` elements with appropriate `aria-label` attributes to provide clear context for screen reader users. The `label--disabled` class visually indicates a disabled state, complementing the `disabled` attribute on the associated input.

## CSS Architecture

The `Label` component uses a `label-component` class for its base styling. It applies utility classes for typography (e.g., `whitespace-nowrap`, `font-sans`) and includes modifier classes like `label--required` and `label--disabled` based on prop values. Design tokens from `typography.css` and `tokens.css` are referenced for consistent styling (e.g., `--fs-md`, `--text--primary`). Font style props are combined into a CSS string using `combineFontStyleProps` and passed as inline styles. Global props like `class` and `class:list` are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Input`](/docs/components/input) (Hypothetical, as this is a common association)
- [`Text`](/docs/components/text)
- [`Fieldset`](/docs/components/fieldset) (Hypothetical, for grouping related form controls)
