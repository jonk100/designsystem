# Kbd

A component for semantically representing keyboard input or shortcuts.

## Overview

The Kbd component is used to display keyboard keys or key combinations, making it easy to communicate shortcuts or command-line inputs to users. It renders its content within a `<code>` element, ensuring a consistent monospaced appearance. The component focuses on styling and semantic representation. It is *not* responsible for detecting keyboard events or executing actions based on key presses; it is purely a presentational component.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
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
| `ff` | `FontFamily` (`'sans' | 'serif' | 'mono'`) | `mono` | Sets the font family. This component defaults to a monospaced font. |
| `wrap` | `boolean` | `false` | If `true`, enables word breaking for long words. |

In addition to the above, the `Kbd` component accepts all standard HTML attributes for the `<kbd>` element, inherited via `BaseComponentProps`.

## Usage

### Basic

```astro
---
import Kbd from '@/design/typography/kbd/Kbd.astro';
---

<p>Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.</p>
```

### Common Patterns

```astro
---
import Kbd from '@/design/typography/kbd/Kbd.astro';
---

<!-- Keyboard shortcut with a custom font size -->
<p>To save, hit <Kbd fs="lg">⌘ S</Kbd>.</p>

<!-- Multiple keys in a sequence -->
<p>Follow the steps: <Kbd>Tab</Kbd> then <Kbd>Enter</Kbd>.</p>

<!-- Command-line input -->
<p>Run <Kbd>npm install</Kbd> to install dependencies.</p>
```

## Accessibility

The `Kbd` component utilizes the native HTML `<kbd>` element, which semantically identifies text as user input, typically from a keyboard. Screen readers will announce content within `<kbd>` tags as keyboard input, providing clear context to users. The component's styling enhances visual distinction without impairing accessibility for users of assistive technologies.

## CSS Architecture

The `Kbd` component uses a `kbd-component` class for its base styling, applying a monospaced font by default. Typography-related CSS custom properties (e.g., `--fs-md`, `--text--primary`) are sourced from `typography.css` and `tokens.css`. Font style props are handled by `combineFontStyleProps` for inline styling. Global `class` and `class:list` props are merged using `mergeClasses`, and `style` props are merged using `mergeStyles`.

## Related Components

- [`Code`](/docs/components/code)
- [`Text`](/docs/components/text)
