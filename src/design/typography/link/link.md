# Link

Represents a navigational link within the Design System, primarily for text-based navigation.

## Overview

The Link component is a fundamental building block for navigation, offering a semantic `<a>` tag with enhanced styling capabilities. It is responsible for handling both internal and external links, applying consistent typography, and providing visual cues such as an external link indicator. It is *not* responsible for complex routing logic or interactive navigation menus, delegating those concerns to higher-level components or routing libraries.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | `undefined` | The URL the link points to. |
| `external` | `boolean` | `false` | If `true`, the link will open in a new tab and display an external link icon. Sets `target="_blank"` and `rel="noopener noreferrer"`. |
| `target` | `string` | `_blank` (if `external`) | Specifies where to open the linked document. Defaults to `_blank` for external links. |
| `rel` | `string` | `noopener noreferrer` (if `external`) | Specifies the relationship between the current document and the linked document. Defaults for external links. |
| `fs` | `TextSize` (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'`) | | Sets the font size using predefined design tokens. |
| `tone` | `TextTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'`) | `primary` | Applies a semantic color tone to the text. |
| `fw` | `FontWeight` (`'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'`) | `medium` | Sets the font weight. |
| `bold` | `boolean` | `false` | Applies a bold text style. |
| `italic` | `boolean` | `false` | Applies an italic text style. |
| `underline` | `boolean` | `false` | Applies an underline text decoration. |
| `strikethrough` | `boolean` | `false` | Applies a strikethrough text decoration. |
| `uppercase` | `boolean` | `false` | Transforms the text to uppercase. |
| `lowercase` | `boolean` | `false` | Transforms the text to lowercase. |
| `ws` | `Whitespace` (`'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces'`) | | Controls how whitespace is handled within the element. |
| `ff` | `FontFamily` (`'sans' | 'serif' | 'mono'`) | | Sets the font family. |
| `wrap` | `boolean` | `false` | If `true`, enables word breaking for long words. |

In addition to the above, the `Link` component accepts all standard HTML attributes for the `<a>` element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Link from '@/design/typography/link/Link.astro';
---

<Link href="#">Basic Link</Link>
```

### Common Patterns

```astro
---
import Link from '@/design/typography/link/Link.astro';
---

<!-- External Link with Custom Tone and Weight -->
<Link href="https://www.google.com" external tone="secondary" fw="semibold">
  Search with Google
</Link>

<!-- Link with custom font size and underline -->
<Link href="/about" fs="lg" underline>
  About Us
</Link>

<!-- Link with custom class for additional styling -->
<Link href="/contact" class="my-custom-link-style">
  Contact Support
</Link>
```

## Accessibility

The `Link` component utilizes native HTML `<a>` semantics for accessibility. When `external` is `true`, an `aria-hidden="true"` span with a visual indicator (`↗`) is included to inform screen reader users about the external nature of the link without redundant announcements, as the `target="_blank"` and `rel="noopener noreferrer"` attributes already convey this information. Keyboard navigation is inherently supported by the browser's default link behavior.

## CSS Architecture

The `Link` component uses a `link-component` class for its base styling. It applies utility classes for typography props (e.g., `whitespace-nowrap`, `font-sans`) and includes a `link--external` modifier class when the `external` prop is `true`. Design tokens from `typography.css` and `tokens.css` are referenced for consistent styling (e.g., `--fs-md`, `--text--primary`). Font style props are combined into a CSS string using `combineFontStyleProps` and passed as inline styles. Global props like `class` and `class:list` are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Text`](/docs/components/text)
- [`Button`](/docs/components/button)
- [`Icon`](/docs/components/icon)
