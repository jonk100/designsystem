# Animation System

A centralized animation system that can be added to any component in the design system.

**Naming Convention**: Uses double-dash syntax (`animate--sparkle`) to match the design system's token pattern (`$component-$property--value`).

## File Structure

```
src/design/
├── animation/
│   ├── motion.ts              # Animation parsing functions
│   ├── motion.types.ts        # Animation type definitions
│   ├── motion.vars.css        # CSS custom properties (durations, easing, etc.)
│   └── animate.css            # Animation classes and keyframes
├── shared/
│   ├── index.ts               # Barrel export for shared utilities
│   ├── props.ts               # AnimationProps and other shared props
│   ├── types.ts               # Shared type definitions
│   └── functions.ts           # Shared utility functions
├── vars.css                   # Global variables (imports animation vars)
├── tokens.css                 # Global tokens (imports animation tokens)
└── ANIMATIONS.md              # This documentation
```

## Component Structure

Each component follows this structure:

```
component-name/
├── ComponentName.astro        # Main component file
├── ComponentName.svg          # Component icon
├── ComponentName.css          # Component-specific styles
├── ComponentName.ts           # Component logic/helpers (optional)
├── vars.css                   # Component-specific variables (optional)
└── tokens.css                 # Component-specific tokens (optional)
```

Components should also consider using:
- `../shared/` - For functions, props, types used by multiple components
- `../vars.css` - Global design system variables
- `../tokens.css` - Global design system tokens

## Quick Start

### 1. Add Animation Support to a Component

**Option A: Use BaseComponentProps (Recommended)**
```typescript
// Includes AnimationProps + CommonHTMLProps (class, style, id, etc.)
import type { BaseComponentProps } from '../../shared';

export interface Props extends BaseComponentProps {
  // ... your component-specific props
}
```

**Option B: Use AnimationProps Only**
```typescript
// Just animation support
import type { AnimationProps } from '../../shared';

export interface Props extends AnimationProps {
  // ... other props
}
```

### 2. Import Animation Functions

```typescript
import { parseAnimation, getAnimationClass, getAnimationStyles } from '../../animation/motion';
import { transformReceivedStyle } from '../../shared';
```

### 3. Parse and Apply Animation

```typescript
const {
  class: className = '',
  "class:list": classList = {},
  style = '',
  animate,
  ...rest
} = Astro.props;

const animation = parseAnimation(animate);

const componentClasses = [
  'your-component',
  getAnimationClass(animation),
  className,
  classList
  // ... other component-specific classes
];

const animationStyles = getAnimationStyles(animation);
const receivedStyles = transformReceivedStyle(style);
const styles = [animationStyles, receivedStyles].filter(Boolean).join(';');
```

### 4. Apply to Element

```astro
<Tag
  class:list={[
    ...componentClasses,
    classList
  ]}
  style={styles}
  {...rest}
/>
```

## Usage Examples

### Basic Animation
```astro
<Inline animate="sparkle">✨</Inline>
```

### Custom Duration
```astro
<Inline animate="bounce 2s">🎈</Inline>
```

### With Delay
```astro
<Inline animate="sparkle 1.5s delay-1s">⭐</Inline>
```

### Staggered Animations
```astro
<Inline animate="fadeIn 0.5s delay-0.1s">First</Inline>
<Inline animate="fadeIn 0.5s delay-0.2s">Second</Inline>
<Inline animate="fadeIn 0.5s delay-0.3s">Third</Inline>
```

## Available Animations

### Continuous Animations (Loop Forever)

- **sparkle** - Scale and rotate with opacity change
  ```astro
  <Inline animate="sparkle">✨</Inline>
  ```

- **pulse** - Fade in and out
  ```astro
  <Inline animate="pulse 2s">💓</Inline>
  ```

- **bounce** - Bounce up and down
  ```astro
  <Inline animate="bounce">🏀</Inline>
  ```

- **spin** - Continuous rotation
  ```astro
  <Inline animate="spin 3s">⚙️</Inline>
  ```

- **ping** - Scale up and fade out
  ```astro
  <Inline animate="ping">📍</Inline>
  ```

- **wiggle** - Rotate left and right
  ```astro
  <Inline animate="wiggle">👋</Inline>
  ```

- **float** - Move up and down smoothly
  ```astro
  <Inline animate="float">☁️</Inline>
  ```

- **glow** - Pulsing glow effect
  ```astro
  <Inline animate="glow">🌟</Inline>
  ```

- **shake** - Shake horizontally
  ```astro
  <Inline animate="shake">🔔</Inline>
  ```

### One-Time Animations (Play Once)

- **fadeIn** - Fade in once (perfect for staggered effects)
  ```astro
  <Inline animate="fadeIn 0.5s">Content</Inline>
  ```

- **slideIn** - Slide in from bottom
  ```astro
  <Inline animate="slideIn 0.6s">Content</Inline>
  ```

- **scaleIn** - Scale in with bounce
  ```astro
  <Inline animate="scaleIn 0.5s">Content</Inline>
  ```

## Syntax

```
animate="[name] [duration] delay-[delay]"
```

- **name** (required): Animation name from the list above
- **duration** (optional): Time in seconds (s) or milliseconds (ms). Default: `1s`
- **delay** (optional): Delay before animation starts. Format: `delay-[time]`. Default: `0s`

### Examples

```astro
<!-- Just animation name -->
<Inline animate="sparkle">✨</Inline>

<!-- With duration -->
<Inline animate="bounce 2s">🎈</Inline>

<!-- With duration and delay -->
<Inline animate="glow 1.5s delay-0.5s">⭐</Inline>

<!-- Delay only (uses default 1s duration) -->
<Inline animate="fadeIn delay-1s">Content</Inline>
```

## Adding to New Components

1. Import `AnimationProps` from `../../shared`
2. Import animation functions: `parseAnimation`, `getAnimationClass`, `getAnimationStyles`
3. Import utility: `transformReceivedStyle` from `../../shared`
4. Parse the animate prop: `const animation = parseAnimation(animate)`
5. Add animation class to your component's class list
6. Add animation styles to your component's inline styles

See `src/design/layout/inline/Inline.astro` or `src/design/layout/spacer/Spacer.astro` for complete examples.

## CSS Variables

Animation timing and easing are controlled by CSS custom properties in `animation/motion.vars.css`:

```css
--animation-duration-fast: 0.15s
--animation-duration-normal: 0.3s
--animation-duration-slow: 0.5s
--animation-ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
--animation-ease-bounce: cubic-bezier(0.8, 0, 1, 1)
--animation-ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1)
```

## TypeScript Support

The system is fully typed with TypeScript:

```typescript
import type { AnimationName } from '../animation/motion.types';
import type { AnimationConfig } from '../shared/types';

// AnimationName is a union of all available animation names
const myAnimation: AnimationName = 'sparkle';

// AnimationConfig includes parsed duration and delay
const config: AnimationConfig = {
  name: 'sparkle',
  duration: '1.5s',
  delay: '0.5s'
};