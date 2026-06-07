# Component Template Guide

Standard template for creating new components in the design system.

## Component Structure

A component directory contains only files that are a **component-specific responsibility** — types, constants, maps, or functions that will not be consumed by other components. Everything else belongs at the category or shared level.

```
src/design/typography/
├── vars.css                   # Global primitive values
├── tokens.css                 # Semantic design tokens
├── typography.css             # Category-level utility classes
├── typography.maps.ts         # Category-level generator maps (shared across Text, Heading, Label, etc.)
└── text/
    ├── Text.astro             # Required
    ├── Text.css               # Required
    ├── Text.svg               # Required
    ├── Text.types.ts          # Optional — component-specific types (e.g. TextTag)
    ├── Text.consts.ts         # Optional — component-specific constants (e.g. TEXT_TAGS)
    ├── Text.maps.ts           # Optional — component-specific maps
    ├── Text.functions.ts      # Optional — component-specific functions
    ├── Text.props.ts          # Optional — component Props interface (intended convention, not yet universal)
    ├── index.ts               # Optional — barrel file
    ├── vars.css               # Optional — only if category-level vars.css grows too large
    └── tokens.css             # Optional — only if category-level tokens.css grows too large
```

The canonical example of a **component-specific** file is `Text.types.ts`, which defines `TextTag` — the union of valid HTML elements for `Text`'s `as:` prop. No other component cares what tags `Text` accepts, so it lives here. By contrast, `TYPOGRAPHY_VAR_MAP` lives at the category level because `Heading`, `Label`, and other typography components share the same token prefixes.

> **Intended convention:** Each component will eventually define its Props interface in `Text.props.ts`, extending a category-level props interface (e.g. `TypographyProps`). This is not yet universal.

---

## Component Template

```astro
---
import type { BaseComponentProps } from '../../shared';
import { mergeClasses, mergeStyles } from '../../shared';
import { TYPOGRAPHY_VAR_MAP } from '../typography.maps';
import type { TextTag } from './Text.types';
import { TEXT_TAGS } from './Text.consts';

export interface Props extends BaseComponentProps {
  as?: TextTag;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  fs?: string;
  fw?: string;
  lh?: string;
  ls?: string;
}

const {
  as: Tag = 'p',
  size = 'md',
  variant = 'primary',
  fs,
  fw,
  lh,
  ls,
  class: className,
  'class:list': classList,
  style,
  ...rest
} = Astro.props;

/**
 * Component-specific BEM classes.
 * Animation, effects, bg, class, and class:list are handled automatically by mergeClasses.
 */
const classes = [
  'text',
  `text--${size}`,
  `text--${variant}`,
];

/**
 * Component-specific inline styles.
 * Pre-join the array before passing to mergeStyles, which expects a string.
 * Animation styles and the style prop are handled automatically by mergeStyles.
 */
const styles = [
  fs && TYPOGRAPHY_VAR_MAP.fontSize(fs),
  fw && TYPOGRAPHY_VAR_MAP.fontWeight(fw),
  lh && TYPOGRAPHY_VAR_MAP.leading(lh),
  ls && TYPOGRAPHY_VAR_MAP.tracking(ls),
].filter(Boolean).join(';');

const finalClasses = mergeClasses(classes, Astro.props);
const finalStyles = mergeStyles(styles, Astro.props);
---

<Tag
  class:list={finalClasses}
  style={finalStyles}
  {...rest}
>
  <slot />
</Tag>

<style>
  .text {
    font-size: var(--local-fs, inherit);
    font-weight: var(--local-fw, inherit);
    line-height: var(--local-lh, inherit);
    letter-spacing: var(--local-ls, inherit);
  }

  .text--sm { }
  .text--md { }
  .text--lg { }

  .text--primary { }
  .text--secondary { }
</style>
```

---

## What BaseComponentProps Includes

```typescript
export interface BaseComponentProps extends AnimationProps, CommonHTMLProps {
  as?: import('astro/types').HTMLTag;
}

// Expands to:
{
  animate?: string;         // e.g. 'fadeIn 0.3s delay-1s'
  effects?: string[];       // e.g. ['blur', 'lift']
  bg?: BackgroundTone;      // e.g. 'dark' | 'light'
  class?: string;
  'class:list'?: Record<string, boolean> | any[];
  style?: string | Record<string, string | number>;
  id?: string;
  as?: import('astro/types').HTMLTag;
  [key: string]: any;
}
```

---

## Shared Utilities

These live in `../../shared/functions.ts`. Do not re-implement them locally.

### `mergeClasses(componentClasses, props)`

Merges your component's BEM classes with animation classes, effect classes, bg tone class, and any received `class` / `class:list` props.

```typescript
const finalClasses = mergeClasses(classes, Astro.props);
```

### `mergeStyles(componentStyles, props)`

Merges a pre-built CSS string with animation CSS custom properties (`--animation-duration`, `--animation-delay`) and any received `style` prop (string or object).

**Important:** `mergeStyles` expects a `string` as its first argument. If you are building styles from multiple values, join them into a string before passing in:

```typescript
// Correct — pre-join before passing
const styles = [
  fs && TYPOGRAPHY_VAR_MAP.fontSize(fs),
  fw && TYPOGRAPHY_VAR_MAP.fontWeight(fw),
].filter(Boolean).join(';');

const finalStyles = mergeStyles(styles, Astro.props);

// Incorrect — do not pass an array directly
const finalStyles = mergeStyles([...], Astro.props);
```

### `combineFontStyleProps(props)`

Converts boolean font style props into a CSS string. Useful for components that expose `bold`, `italic`, `underline`, `strikethrough`, `uppercase`, and `lowercase` as props.

```typescript
import { combineFontStyleProps } from '../../shared';

const fontStyles = combineFontStyleProps({ bold, italic, underline, strikethrough, uppercase, lowercase });
const styles = [fontStyles, ...otherStyles].filter(Boolean).join(';');
```

### `transformReceivedStyle(style)` *(internal)*

Converts a camelCase style object to a CSS string. Used internally by `mergeStyles` — you rarely need this directly.

### `parseAnimationString(animate)` *(internal)*

Parses an animation string like `'fadeIn 0.3s delay-1s'` into `{ name, duration, delay }`. Used internally by `mergeClasses` and `mergeStyles` — you rarely need this directly.

---

## Category-Level Utilities

Utilities shared across all components in a category live at the category level, not inside any component directory.

### CSS Variable Generator Maps (`typography.maps.ts`)

Instead of mapping props to utility class strings, generator maps map props to CSS custom property declarations. This approach is PurgeCSS-proof (inline styles are never purged) and keeps token prefix conventions in a single place.

```typescript
// src/design/typography/typography.maps.ts
export const TYPOGRAPHY_VAR_MAP = {
  fontSize:    (val: string) => `--local-fs: var(--font-size-${val})`,
  fontWeight:  (val: string) => `--local-fw: var(--font-weight-${val})`,
  leading:     (val: string) => `--local-lh: var(--line-height-${val})`,
  tracking:    (val: string) => `--local-ls: var(--letter-spacing-${val})`,
};
```

The component CSS then consumes the local variables with fallbacks:

```css
.text {
  font-size:      var(--local-fs, inherit);
  font-weight:    var(--local-fw, inherit);
  line-height:    var(--local-lh, inherit);
  letter-spacing: var(--local-ls, inherit);
}
```

If you need to change a global token prefix, you change it once in `typography.maps.ts` — not across every component.

---

## Component-Specific Files

Only create these when the responsibility is genuinely component-specific and will not be consumed elsewhere. The canonical example is `TextTag` — the union of valid HTML elements for `Text`'s `as:` prop. No other component needs this.

| File | Contains | Example |
|---|---|---|
| `Text.types.ts` | Component-specific types | `type TextTag = 'p' \| 'span' \| 'h1' \| 'h2'` |
| `Text.consts.ts` | Component-specific constants | `const TEXT_TAGS = ['p', 'span', 'h1'] as const` |
| `Text.maps.ts` | Component-specific maps | `const TEXT_TAG_CLASS_MAP = { p: 'text--body', ... }` |
| `Text.functions.ts` | Component-specific functions | `function getTextTagClass(tag: TextTag): string` |
| `Text.props.ts` | Props interface | `interface TextProps extends TypographyProps` |
| `index.ts` | Barrel file | Re-exports from the above |

---

## Checklist for New Components

- [ ] Create directory at `src/design/{category}/{component-name}/`
- [ ] Import `BaseComponentProps` from `../../shared`
- [ ] Import `mergeClasses` and `mergeStyles` from `../../shared`
- [ ] Extend `BaseComponentProps` in Props interface
- [ ] Define `classes` array with component-specific BEM classes
- [ ] Build `styles` string — pre-join any array with `.filter(Boolean).join(';')` before passing to `mergeStyles`
- [ ] Call `mergeClasses(classes, Astro.props)` → `finalClasses`
- [ ] Call `mergeStyles(styles, Astro.props)` → `finalStyles`
- [ ] Use `class:list={finalClasses}` and `style={finalStyles}` on the root element
- [ ] Import category-level maps (e.g. `TYPOGRAPHY_VAR_MAP`) from `../{category}.maps`
- [ ] Only create additional files (`.types.ts`, `.consts.ts`, etc.) if the responsibility is genuinely component-specific
- [ ] Test with `animate="fadeIn 0.3s"` prop
- [ ] Test with `effects={['blur']}` prop if effects are supported

---

## Reference

See `src/design/typography/text/Text.astro` for a canonical example.