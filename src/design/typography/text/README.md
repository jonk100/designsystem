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
<Text fs="lg" tone="primary">
  Important message
</Text>

<!-- As a paragraph -->
<Text as="p" fs="md" tone="muted">
  This is a paragraph with muted text.
</Text>
```

## Props

### Element Type

- `as` - HTML element to render (default: `'span'`)
  - Options: `'span'`, `'p'`, `'div'`, `'label'`, `'strong'`, `'em'`, `'small'`, `'mark'`, `'del'`, `'ins'`, `'sub'`, `'sup'`

### Typography

- `fs` - Font size
  - Numeric: `'0'` to `'11'`
  - Named: `'2xs'`, `'xs'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`, `'5xl'`, `'6xl'`

- `tone` - Text color
  - Numeric: `'0'` to `'5'`
  - Semantic: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'warning'`, `'success'`, `'info'`
  - Neutral: `'default'`, `'muted'`, `'subtle'`, `'white'`, `'black'`
  - Special: `'currentColor'`, `'inherit'`

- `fw` - Font weight
  - Options: `'thin'`, `'extralight'`, `'light'`, `'normal'`, `'medium'`, `'semibold'`, `'bold'`, `'extrabold'`, `'black'`

### Alignment

- `xa` - Horizontal text alignment (X-Align)
  - Options: `'left'`, `'center'`, `'right'`, `'justify'`, `'start'`, `'end'`

- `ya` - Vertical text alignment (Y-Align)
  - Options: `'super'`, `'top'`, `'text-top'`, `'baseline'`, `'middle'`, `'bottom'`, `'text-bottom'`, `'sub'`

### Styling

- `italic` - Italic text (boolean)
- `underline` - Underlined text (boolean)
- `strikethrough` - Strike-through text (boolean)

### Text Transform

- `uppercase` - Transform to uppercase (boolean)
- `lowercase` - Transform to lowercase (boolean)

### Text Overflow & Wrapping

- `truncate` - Truncate with ellipsis (boolean)
- `clamp` - Limit to specific number of lines (number)
- `wrap` - Allow word breaking/wrapping (boolean)
- `ws` - White space handling (`'normal'`, `'nowrap'`, `'pre'`, `'pre-line'`, `'pre-wrap'`, `'break-spaces'`)

### Spacing

- `ls` - Letter spacing (tracking)
  - Options: `'tighter'`, `'tight'`, `'normal'`, `'wide'`, `'wider'`, `'widest'`

- `lh` - Line height (leading)
  - Options: `'none'`, `'tight'`, `'snug'`, `'normal'`, `'relaxed'`, `'loose'`

## Examples

### Headings

```astro
<Text as="h1" fs="6xl" fw="bold" tone="primary">
  Main Heading
</Text>

<Text as="h2" fs="4xl" fw="semibold" tone="secondary">
  Subheading
</Text>
```

### Body Text

```astro
<Text as="p" fs="md" lh="relaxed">
  This is a paragraph with relaxed line height for better readability.
</Text>

<Text as="p" fs="sm" tone="muted">
  Secondary information in smaller, muted text.
</Text>
```

### Inline Text

```astro
<Text as="span" bold>Bold text</Text>
<Text as="em" italic>Italic text</Text>
<Text as="strong" bold tone="danger">Important warning</Text>
```

### Text Utilities

```astro
<!-- Truncated text -->
<Text truncate style="max-width: 200px;">
  This is a very long text that will be truncated with an ellipsis
</Text>

<!-- Line clamping -->
<Text as="p" clamp={3}>
  This text will be limited to 3 lines and then truncated with an ellipsis.
  Any additional content beyond three lines will be hidden.
</Text>

<!-- Text transforms -->
<Text uppercase>uppercase text</Text>
```

### Alignment

```astro
<Text as="p" xa="center" fs="lg">
  Centered text
</Text>

<Text as="p" xa="right" tone="muted">
  Right-aligned text
</Text>

<Text as="p" xa="justify">
  Justified text that will stretch to fill the full width of its container.
</Text>
```

### Combining Props

```astro
<Text
  as="p"
  fs="lg"
  fw="semibold"
  tone="primary"
  xa="center"
  lh="relaxed"
  ls="wide"
>
  Fully styled text with multiple properties
</Text>
```

### With Custom Classes

```astro
<Text class="custom-class" fs="md" tone="primary">
  Text with custom classes
</Text>
```

### Semantic Elements

```astro
<!-- Labels -->
<Text as="label" fs="sm" fw="medium">
  Form Label
</Text>

<!-- Code -->
<Text as="code" fs="sm" tone="accent">
  const value = 42;
</Text>

<!-- Keyboard shortcuts -->
<Text as="kbd" fs="2xs">
  Ctrl+C
</Text>

<!-- Marked text -->
<Text as="mark" tone="accent">
  Highlighted text
</Text>

<!-- Deleted/Inserted -->
<Text as="del" strikethrough>
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
  fs="md"
  tone="success"
>
  Operation completed successfully
</Text>
```

## CSS Custom Properties

The component uses local CSS custom properties for styling. These are set dynamically based on the component's props, providing high performance and PurgeCSS safety.

```css
.text-component {
  font-size: var(--local-fs, inherit);
  font-weight: var(--local-fw, inherit);
  line-height: var(--local-lh, inherit);
  letter-spacing: var(--local-ls, inherit);
  color: var(--local-color, inherit);
}
```

## TypeScript Support

The component is fully typed with TypeScript, providing autocomplete and type checking for all props:

```astro
---
import Text from '@/design/typography/text/Text.astro';
import type { FontSize, TextTone } from '@/design/shared/types';

const size: FontSize = 'lg';
const tone: TextTone = 'primary';
---

<Text fs={size} tone={tone}>
  Type-safe text
</Text>
```