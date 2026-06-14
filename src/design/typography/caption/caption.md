# Caption

A typography component specifically designed to describe, label, or contextualize media content and other supporting information.

## Overview

The `Caption` component's job is to provide secondary metadata or descriptive text for elements like images, videos, or blocks of data. It is NOT intended for primary body copy or headings. By default, it renders as a semantic `<figcaption>`, making it the ideal companion for the `figure` element.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| as | `'figcaption' | 'span' | 'div' | 'p'` | `'figcaption'` | The semantic HTML element to render. |
| fs | `FontSize` | `'sm'` | The typography scale for the font size. |
| tone | `TextTone` | `'muted'` | The color tone of the text. |
| xa | `'start' | 'center' | 'end' | 'justify'` | – | Horizontal alignment of the text. |
| fw | `FontWeight` | – | Manual font weight override. |
| ff | `FontFamily` | – | Font family choice (e.g., 'sans', 'mono'). |
| bold | `boolean` | `false` | When true, applies bold styling. |
| italic | `boolean` | `false` | When true, applies italic styling. |
| underline | `boolean` | `false` | When true, applies underline styling. |
| strikethrough | `boolean` | `false` | When true, applies strikethrough styling. |
| uppercase | `boolean` | `false` | When true, forces text to uppercase. |
| lowercase | `boolean` | `false` | When true, forces text to lowercase. |
| wrap | `boolean` | `false` | When true, enables word wrapping (`break-words`). |
| ws | `WhiteSpace` | – | Controls white-space handling. |
| class | `string` | – | Additional CSS classes. |
| animate | `string` | – | Animation preset (e.g., `'fadeIn'`). |

*Inherits all standard HTML attributes for the underlying element.*

## Variants / Sizes

| Variant | Visual Effect |
|---------|---------------|
| `fs` | Scales the text size according to the system's typography tokens. |
| `tone` | Adjusts text color and emphasis (e.g., `primary`, `secondary`, `muted`). |

## Usage

### Basic

The simplest usage inside a `figure` element.

```astro
---
import Caption from '@/design/typography/caption/Caption.astro';
---
<figure>
  <img src="/path/to/image.jpg" alt="A beautiful landscape" />
  <Caption>A beautiful landscape in the mountains during sunset.</Caption>
</figure>
```

### Common Patterns

**Centered and Bolded**
Useful for captions that need more visual weight.

```astro
---
import Caption from '@/design/typography/caption/Caption.astro';
---
<Caption xa="center" bold tone="primary">
  Figure 1.1: Annual Growth Chart
</Caption>
```

**As a simple Span**
When you need the styling of a caption but without the semantic `figcaption` behavior.

```astro
---
import Caption from '@/design/typography/caption/Caption.astro';
---
<div class="card">
  <h3>Card Title</h3>
  <Caption as="span">Last updated 2 days ago</Caption>
</div>
```

## Accessibility

The `Caption` component defaults to `<figcaption>`, which is semantically linked to its parent `<figure>` element. This ensures that screen readers correctly associate the description with the media it describes. If you override the `as` prop to a non-semantic tag, ensure the parent-child relationship is still understandable via context or additional ARIA attributes if necessary.

## CSS Architecture

The component uses a BEM structure with the root class `.caption-component`. It leverages `STYLE_VAR_MAP` to apply typography tokens as CSS custom properties (`--local-fs`, `--local-fw`, `--local-tone`). Font style booleans are processed into CSS strings via the `combineFontStyleProps` utility.

## Related Components

* `Text` — The general-purpose typography primitive.
* `Heading` — For primary and secondary titles.
* `Image` / `Video` — Components that typically require a `Caption`.
