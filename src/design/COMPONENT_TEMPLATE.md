# Component Template Guide

Standard template for creating new components with animation support built-in.

## Component Structure

```
component-name/
├── ComponentName.astro        # Main component file
├── ComponentName.svg          # Component icon
├── ComponentName.css          # Component-specific styles (optional)
├── ComponentName.ts           # Component logic/helpers (optional)
├── vars.css                   # Component-specific variables (optional)
└── tokens.css                 # Component-specific tokens (optional)
```

## Component Template (Simplified - Recommended)

```astro
---
import type { BaseComponentProps } from '../../shared';
import { mergeClasses, mergeStyles } from '../../shared';

export interface Props extends BaseComponentProps {
  // Component-specific props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  // ... other props
}

const {
  // Component-specific props
  size = 'md',
  variant = 'primary',
  as: Tag = 'div',
  
  ...rest
} = Astro.props;

// Define component-specific classes and styles
const classes = [
  'component-name',
  `component-name--${size}`,
  `component-name--${variant}`,
];

const styles = ''; // Add any component-specific inline styles here

// Merge with animation and received props (handles everything!)
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
  .component-name {
    /* Base styles */
  }
  
  /* Size variants */
  .component-name--sm { /* ... */ }
  .component-name--md { /* ... */ }
  .component-name--lg { /* ... */ }
  
  /* Other variants */
  .component-name--primary { /* ... */ }
  .component-name--secondary { /* ... */ }
</style>
```

## Component Template (Legacy - Still Supported)

```astro
---
import type { BaseComponentProps } from '../../shared';
import { transformReceivedStyle } from '../../shared';
import { processAnimation } from '../../animation/motion';

export interface Props extends BaseComponentProps {
  // Component-specific props
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  // ... other props
}

const {
  // Component-specific props
  size = 'md',
  variant = 'primary',
  
  // BaseComponentProps (always include these)
  as: Tag = 'div',
  class: className = '',
  "class:list": classList = {},
  style = '',
  animate,
  
  ...rest
} = Astro.props;

// Process animation (one line!)
const { animationClass, animationStyles } = processAnimation(animate);

// Build class list
const componentClasses = [
  'component-name',
  `component-name--${size}`,
  `component-name--${variant}`,
  animationClass,
  className
];

// Build styles
const receivedStyles = transformReceivedStyle(style);
const styles = [animationStyles, receivedStyles].filter(Boolean).join(';');
---

<Tag
  class:list={[
    componentClasses,
    classList
  ]}
  style={styles}
  {...rest}
>
  <slot />
</Tag>

<style>
  .component-name {
    /* Base styles */
  }
  
  /* Size variants */
  .component-name--sm { /* ... */ }
  .component-name--md { /* ... */ }
  .component-name--lg { /* ... */ }
  
  /* Other variants */
  .component-name--primary { /* ... */ }
  .component-name--secondary { /* ... */ }
</style>
```

## What BaseComponentProps Includes

```typescript
export interface BaseComponentProps extends AnimationProps, CommonHTMLProps {
  as?: string;
}

// Which expands to:
{
  // From AnimationProps
  animate?: string;
  
  // From CommonHTMLProps
  class?: string;
  "class:list"?: Record<string, boolean> | any[];
  style?: string | Record<string, string | number>;
  id?: string;
  [key: string]: any;
  
  // From BaseComponentProps
  as?: string;
}
```

## Key Points (Simplified Approach)

1. **Always extend BaseComponentProps** - Gives you animation + common HTML props
2. **Define classes array** - Just your component-specific classes
3. **Define styles string** - Just your component-specific inline styles (usually empty)
4. **Use mergeClasses()** - Automatically handles animation, class, and class:list props
5. **Use mergeStyles()** - Automatically handles animation styles, style prop (string or object)
6. **No manual destructuring needed** - mergeClasses/mergeStyles read from Astro.props

## Key Points (Legacy Approach)

1. **Always extend BaseComponentProps** - Gives you animation + common HTML props
2. **Always parse animation** - `const animation = parseAnimation(animate)`
3. **Always add animation class** - `getAnimationClass(animation)` in class list
4. **Always add animation styles** - `getAnimationStyles(animation)` in styles
5. **Use transformReceivedStyle** - For handling style prop (string or object)
6. **Separate componentClasses and classList** - Don't join classList into string

## Checklist for New Components (Simplified Approach)

- [ ] Import `BaseComponentProps` from `../../shared`
- [ ] Import `mergeClasses` and `mergeStyles` from `../../shared`
- [ ] Extend `BaseComponentProps` in Props interface
- [ ] Define `classes` array with component-specific classes
- [ ] Define `styles` string with component-specific inline styles
- [ ] Call `mergeClasses(classes, Astro.props)` to get final classes
- [ ] Call `mergeStyles(styles, Astro.props)` to get final styles
- [ ] Use `class:list={finalClasses}` and `style={finalStyles}`
- [ ] Test with `animate="sparkle 1s"` prop

## Checklist for New Components (Legacy Approach)

- [ ] Import `BaseComponentProps` from `../../shared`
- [ ] Import `processAnimation` from `../../animation/motion`
- [ ] Import `transformReceivedStyle` from `../../shared`
- [ ] Extend `BaseComponentProps` in Props interface
- [ ] Destructure `animate`, `class`, `class:list`, `style` from props
- [ ] Call `processAnimation(animate)` to get `animationClass` and `animationStyles`
- [ ] Add `animationClass` to componentClasses array
- [ ] Add `animationStyles` to styles string
- [ ] Use `class:list={[componentClasses, classList]}` pattern
- [ ] Test with `animate="sparkle 1s"` prop

## Examples

See these components for reference:
- `src/design/typography/text/Text.astro`
- `src/design/layout/inline/Inline.astro`
- `src/design/layout/spacer/Spacer.astro`