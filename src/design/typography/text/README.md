# Text Component

A flexible and type-safe text primitive component that wraps any content with comprehensive typography controls.

## Features

- **Type-safe props** based on typography types
- **Flexible rendering** - can render as different HTML elements
- **Comprehensive styling** - font size, color, alignment, weight, and more
- **Text utilities** - truncation, line clamping, transforms
- **Accessibility** - semantic HTML elements

## Basic Usage

```astro
---
import Text from '@/design/typography/text/Text.astro';
---

<!-- Simple text -->
<Text>Hello World</Text>

<!-- With size and tone -->
<Text size="lg" tone="primary">
  Important message
</Text>

<!-- As a paragraph -->
<Text as="p" size="md" tone="muted">
  This is a paragraph with muted text.
</Text>
```

## Props

### Element Type

- `as` - HTML element to render (default: `'span'`)
  - Options: `'span'`, `'p'`, `'div'`, `'label'`, `'strong'`, `'em'`, `'small'`, `'mark'`, `'del'`, `'ins'`, `'sub'`, `'sup'`

### Typography

- `size` - Font size
  - Numeric: `'0'` to `'11'`
  - Named: `'xxs'`, `'xs'`, `'sm'`, `'md'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`, `'5xl'`, `'6xl'`

- `tone` - Text color
  - Numeric: `'0'` to `'5'`
  - Semantic: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'success'`
  - Neutral: `'default'`, `'muted'`, `'subtle'`, `'white'`, `'black'`
  - Special: `'currentColor'`, `'inherit'`

- `weight` - Font weight
  - Options: `'thin'`, `'extralight'`, `'light'`, `'normal'`, `'medium'`, `'semibold'`, `'bold'`, `'extrabold'`, `'black'`

### Alignment

- `align` - Horizontal text alignment
  - Options: `'left'`, `'center'`, `'right'`, `'justify'`, `'start'`, `'end'`

- `valign` - Vertical text alignment
  - Options: `'super'`, `'top'`, `'text-top'`, `'baseline'`, `'middle'`, `'bottom'`, `'text-bottom'`, `'sub'`

### Styling

- `italic` - Italic text (boolean)
- `underline` - Underlined text (boolean)
- `lineThrough` - Strike-through text (boolean)

### Text Transform

- `uppercase` - Transform to uppercase (boolean)
- `lowercase` - Transform to lowercase (boolean)
- `capitalize` - Capitalize first letter (boolean)

### Text Overflow

- `truncate` - Truncate with ellipsis (boolean)
- `lineClamp` - Limit to specific number of lines (number: 1-6)
- `nowrap` - Prevent text wrapping (boolean)

### Spacing

- `tracking` - Letter spacing
  - Options: `'tighter'`, `'tight'`, `'normal'`, `'wide'`, `'wider'`, `'widest'`

- `leading` - Line height
  - Options: `'none'`, `'tight'`, `'snug'`, `'normal'`, `'relaxed'`, `'loose'`

## Examples

### Headings

```astro
<Text as="h1" size="6xl" weight="bold" tone="primary">
  Main Heading
</Text>

<Text as="h2" size="4xl" weight="semibold" tone="secondary">
  Subheading
</Text>
```

### Body Text

```astro
<Text as="p" size="md" leading="relaxed">
  This is a paragraph with relaxed line height for better readability.
</Text>

<Text as="p" size="sm" tone="muted">
  Secondary information in smaller, muted text.
</Text>
```

### Inline Text

```astro
<Text as="span" weight="bold">Bold text</Text>
<Text as="em" italic>Italic text</Text>
<Text as="strong" weight="bold" tone="danger">Important warning</Text>
```

### Text Utilities

```astro
<!-- Truncated text -->
<Text truncate style="max-width: 200px;">
  This is a very long text that will be truncated with an ellipsis
</Text>

<!-- Line clamping -->
<Text as="p" lineClamp={3}>
  This text will be limited to 3 lines and then truncated with an ellipsis.
  Any additional content beyond three lines will be hidden.
</Text>

<!-- Text transforms -->
<Text uppercase>uppercase text</Text>
<Text capitalize>capitalize first letter</Text>
```

### Alignment

```astro
<Text as="p" align="center" size="lg">
  Centered text
</Text>

<Text as="p" align="right" tone="muted">
  Right-aligned text
</Text>

<Text as="p" align="justify">
  Justified text that will stretch to fill the full width of its container.
</Text>
```

### Combining Props

```astro
<Text
  as="p"
  size="lg"
  weight="semibold"
  tone="primary"
  align="center"
  leading="relaxed"
  tracking="wide"
>
  Fully styled text with multiple properties
</Text>
```

### With Custom Classes

```astro
<Text class="custom-class" size="md" tone="primary">
  Text with custom classes
</Text>
```

### Semantic Elements

```astro
<!-- Labels -->
<Text as="label" size="sm" weight="medium">
  Form Label
</Text>

<!-- Code -->
<Text as="code" size="sm" tone="accent">
  const value = 42;
</Text>

<!-- Keyboard shortcuts -->
<Text as="kbd" size="xs">
  Ctrl+C
</Text>

<!-- Marked text -->
<Text as="mark" tone="accent">
  Highlighted text
</Text>

<!-- Deleted/Inserted -->
<Text as="del" lineThrough>
  Old text
</Text>
<Text as="ins" underline>
  New text
</Text>

<!-- Subscript/Superscript -->
<Text as="sub">subscript</Text>
<Text as="sup">superscript</Text>
```

## Accessibility

The Text component supports all standard HTML attributes, including ARIA attributes:

```astro
<Text
  as="p"
  role="status"
  aria-live="polite"
  size="md"
  tone="success"
>
  Operation completed successfully
</Text>
```

## CSS Custom Properties

The component uses CSS custom properties for colors, allowing easy theming:

```css
:root {
  --color-primary: hsl(220 90% 56%);
  --color-secondary: hsl(280 70% 60%);
  --color-accent: hsl(340 80% 58%);
  --color-danger: hsl(0 84% 60%);
  --color-success: hsl(142 76% 36%);
  --color-text-default: currentColor;
  --color-text-muted: hsl(0 0% 50%);
  --color-text-subtle: hsl(0 0% 70%);
}
```

## TypeScript Support

The component is fully typed with TypeScript, providing autocomplete and type checking for all props:

```astro
---
import Text from '@/design/typography/text/Text.astro';
import type { FontSize, TextTone } from '@/design/typography/typography.types';

const size: FontSize = 'lg';
const tone: TextTone = 'primary';
---

<Text {size} {tone}>
  Type-safe text
</Text>