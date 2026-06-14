# Code

A component for displaying inline code snippets or blocks of pre-formatted code, supporting syntax highlighting.

## Overview

The Code component is designed to render programmatic code consistently within the Design System. It intelligently switches between inline `<code>` and block `<pre><code>` elements based on the `block` prop, ensuring proper semantic structure. It is responsible for applying monospaced fonts, appropriate styling, and providing a hook for syntax highlighting via the `language` prop. It is *not* responsible for the actual syntax highlighting implementation (e.g., integrating a library like Prism.js or Shiki); it merely provides the necessary structure and context for such an integration.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `block` | `boolean` | `false` | If `true`, the code will be rendered within a `<pre><code>` block; otherwise, it will be an inline `<code>` element. |
| `language` | `string` | `undefined` | Specifies the programming language of the code, primarily used to provide context for syntax highlighting (e.g., `javascript`, `html`, `css`). |
| `fs` | `TextSize` (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'`) | | Sets the font size using predefined design tokens. |
| `tone` | `TextTone` (`'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'`) | `primary` | Applies a semantic color tone to the text. |
| `fw` | `FontWeight` (`'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'`) | | Sets the font weight. |
| `bold` | `boolean` | `false` | Applies a bold text style. |
| `italic` | `boolean` | `false` | Applies an italic text style. |
| `underline` | `boolean` | `false` | Applies an underline text decoration. |
| `strikethrough` | `boolean` | `false` | Applies a strikethrough text decoration. |
| `uppercase` | `boolean` | `false` | Transforms the text to uppercase. |
| `lowercase` | `boolean` | `false` | Transforms the text to lowercase. |
| `ws` | `Whitespace` (`'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces'`) | | Controls how whitespace is handled within the element. |
| `ff` | `FontFamily` (`'sans' | 'serif' | 'mono'`) | `mono` | Sets the font family. This component defaults to a monospaced font. |
| `wrap` | `boolean` | `false` | If `true`, enables word breaking for long words within a block of code. |

In addition to the above, the `Code` component accepts all standard HTML attributes for the `<code>` and `<pre>` elements, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Code from '@/design/typography/code/Code.astro';
---

<p>To declare a variable, use <Code>const</Code> or <Code>let</Code>.</p>
```

### Common Patterns

```astro
---
import Code from '@/design/typography/code/Code.astro';
---

<!-- Block of JavaScript code -->
<Code block language="javascript">
  const greeting = "Hello, World!";
  console.log(greeting);
</Code>

<!-- Inline code with custom tone -->
<p>The <Code tone="success">status</Code> variable indicates the operation's result.</p>

<!-- Block code with word wrapping -->
<Code block wrap language="css">
  .some-very-long-class-name-that-might-overflow-if-not-wrapped {
    white-space: pre-wrap;
    word-break: break-all;
  }
</Code>
```

## Accessibility

The `Code` component leverages the semantic meaning of the native `<code>` and `<pre>` HTML elements, which are inherently understood by assistive technologies. When used for blocks of code, `<pre>` preserves whitespace and line breaks, which is crucial for code readability. The `language` prop adds a `data-language` attribute, which can be used by client-side scripts to apply syntax highlighting, making the code more readable for sighted users. The component ensures that the code content remains accessible to screen readers regardless of its visual presentation.

## CSS Architecture

The `Code` component uses a `code-component` class for its base styling, applying a monospaced font by default. When the `block` prop is `true`, it adds the `code--block` modifier class. The `language` prop adds a `language-{language}` class (e.g., `language-javascript`) and a `data-language` attribute to the `<code>` or `<pre>` element, providing hooks for external syntax highlighting libraries. Typography-related CSS custom properties (e.g., `--fs-md`, `--text--primary`) are sourced from `typography.css` and `tokens.css`. Font style props are handled by `combineFontStyleProps` for inline styling. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Kbd`](/docs/components/kbd)
- [`Text`](/docs/components/text)
- [`Prose`](/docs/components/prose) (Hypothetical, for rendering rich text content with code blocks)
