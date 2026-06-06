# Shared

The Shared category acts as the foundational nervous system of the entire design system. It does not contain renderable components itself; rather, it contains the critical types, constants, utilities, and base prop definitions that enforce consistency, type safety, and architectural DRYness (Don't Repeat Yourself) across all other component directories.

This document serves as a guide for understanding how to leverage the shared infrastructure when creating or modifying components, ensuring they properly hook into the design system's global tokens, animations, and effects.

**Major Areas Documented:**
- **Base Properties & Composition**: How `BaseComponentProps` standardizes HTML attributes, animations, and system-wide effects across all UI components.
- **Style & Class Resolution**: How `mergeClasses` and `mergeStyles` handle complex string parsing, array filtering, and animation custom property injection securely.
- **Type Safety & Mapping**: How system-wide types (`DisplaySize`, `TextTone`) are defined once, exported, and mapped cleanly to CSS utilities via constant objects and mapped types.
- **Global Icon Registry**: The automated SVG registry system that guarantees type safety and scalable icon integration.

## Architecture & Modules

Instead of components, the Shared directory is divided into module domains:

### `props.ts`

#### Component API Standardization
Defines `BaseComponentProps` and `AnimationProps`. Every single UI component in the design system MUST extend `BaseComponentProps` (usually via `Omit<HTMLAttributes<"...">, keyof BaseComponentProps>`). 

#### Solves Prop Duplication
By centralizing the definition of `class`, `class:list`, `style`, `animate`, `effects`, and `onScroll`, we eliminate the need to manually declare standard HTML behaviors in every single `.astro` component. This guarantees that if the system needs a new global prop (like `effects`), it is added here and instantly becomes available to every component.

---

### `functions.ts`

#### The Resolution Engine
Contains the critical utility functions `mergeClasses`, `mergeStyles`, `parseAnimationString`, and `transformReceivedStyle`.

#### Solves Brittle Class Concatenation
Instead of manually interpolating strings in component templates (`class={\`btn ${size} ${className}\`}`), components pass an array of internal rules alongside `Astro.props` into `mergeClasses`. The function strips falsy values, parses the `animate` string to extract the correct `.animate--*` utility class, parses the `effects` array, and seamlessly merges in any user-provided `class` or `class:list`. `mergeStyles` performs the equivalent operation for inline styles and CSS variable injections (like `--animation-delay`).

---

### `types.ts` & `consts.ts`

#### Centralized Token Taxonomy
`consts.ts` defines readonly arrays of the system's exact token names (e.g., `DISPLAY_SIZES = ['sm', 'md', 'lg'] as const`). `types.ts` dynamically derives TypeScript union types from these arrays (e.g., `export type DisplaySize = typeof DISPLAY_SIZES[number]`).

#### Solves Type Drift
This pattern ensures that TypeScript definitions and JavaScript runtime values are always perfectly in sync. When components need a size prop, they import `DisplaySize` rather than hardcoding `'sm' | 'md' | 'lg'`, preventing typos and standardizing the token vernacular system-wide.

---

### `maps.ts`

#### Static Class Mapping
Contains objects that safely map prop values to their corresponding utility classes or behaviors without relying on dangerous string interpolation at runtime (e.g., mapping a specific semantic intent to a specific hex color variable).

---

### `icons/` & `scripts/generate-icons.ts`

#### Type-Safe SVG Automation
The `icons/` directory acts as the single source of truth for raw `.svg` files. The `generate-icons.ts` script automatically scans this directory and outputs an `index.ts` file containing a static registry object (`icons`) and a derived union type (`SvgName`).

#### Solves SVG Component Maintenance
This eliminates the need to manually wrap every SVG in an Astro component or manually type available icon strings. When a new icon is dropped into the folder, running `pnpm gen:icons` instantly registers it and makes it available to the `<Icon>` component securely.

---

### `effects.css`

#### Global Visual Modifiers
Contains globally accessible utility classes for persistent visual modifications (`.effect--shimmer`, `.effect--glass`, `.effect--glow`, `.effect--ping`).

#### Solves Duplicate Visuals
Rather than building a "Glass Card" component and a "Glass Button" component, the effects are abstracted to CSS utilities. Because `BaseComponentProps` exposes the `effects` array, any component can become a glassmorphic component by passing `effects={['glass']}`.
