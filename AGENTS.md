# DesignSystem Agent Guidelines

Welcome to the DesignSystem project! As an AI agent working on this codebase, please adhere to the following rules to maintain consistency, performance, and code quality.

## 1. Additional Context

Read and understand `src/design/COMPONENT_TEMPLATE.md` and `src/design/AGENTS.md` at the start of each conversation.

## 2. Component File Structure

Components are nested, generally, in the following structure:

```txt
src/design/category/
├── vars.css                   # Global primitive values
├── tokens.css                 # Semantic design tokens
├── category.css               # Category-level utility classes
├── category.maps.ts           # Category-level generator maps
└── component-name/
    ├── ComponentName.astro    # Required
    ├── ComponentName.css      # Required
    ├── ComponentName.svg      # Required
    ├── ComponentName.types.ts # Optional — component-specific types
    ├── ComponentName.consts.ts# Optional — component-specific constants
    ├── ComponentName.maps.ts  # Optional — component-specific maps
    ├── ComponentName.functions.ts # Optional — component-specific functions
    ├── ComponentName.props.ts # Optional — component Props interface
    └── index.ts               # Optional — barrel file
```

Additional relevant files:
- `../../shared/functions.ts` - Global shared utilities (e.g. mergeClasses, mergeStyles, combineFontStyleProps)
- `../../shared/types.ts` - Global types and interfaces
- `../{category}.types.ts` - Category-level types and interfaces
- `../{category}.maps.ts` - Category-level mapping functions (e.g. generator maps)

### Showcase / Helper Components

For custom helper components, page layout blocks, and showcase sections used to demonstrate the design system outside of the core `src/design/` directory, place them under `src/components/`:
- `src/components/`: Root directory for custom presentation-only, layout, or utility components.
- `src/components/sections/`: Modular section components that represent page sections (e.g. layout, control showcases), keeping main page files like `src/pages/index.astro` clean and maintainable.

## 3. Token Organization

- **tokens.css**: Contains CSS custom properties (design tokens) under `:root` selector. No class selectors allowed.
- **Component-specific CSS**: May contain class selectors but must bind to tokens, never hardcode values.
- **Shared utilities**: When multiple components need the same visual treatment, extract to shared variant classes in the appropriate tokens file.

## 4. Documentation & JSDoc Headers

Every `.astro` component must include a standardized JSDoc block immediately following the opening `---` of the frontmatter.

**Template:**
```astro
---
/**
 * src/components/path/to/file.astro
 * [A single sentence describing the component's purpose]
 * - [Bullet point detailing a feature]
 * - [Bullet point detailing another feature]
 * @props (local): prop1, prop2
 * @props (global): class, class:list, frame, effects
 * - [Explanation of complex prop 1]
 * - [Explanation of complex prop 2]
 */
```

Additionally, all components should include clear comments indicating:
- What shared classes they use
- What tokens they reference
- Any component-specific behaviors that deviate from the shared pattern

## 5. Utilizing Established Patterns

When creating or modifying components, strictly adhere to the following established architectural patterns to ensure consistency across the design system:

### 1. The `mergeClasses` & `mergeStyles` Utility Pattern
Instead of manually concatenating string templates for classes or styles, gather internal component rules into arrays. Filter out falsy values and pass them through `mergeClasses(classes, Astro.props)` and `mergeStyles(styles, Astro.props)`. This ensures user-provided `class`, `class:list`, and `style` props are seamlessly and safely applied.
**Important:** `mergeStyles` expects a `string` as its first argument. Join any array of styles into a string before passing.
**Example:**

```astro
const classes = ['button', `button--size-${size}`];
const styles = [bold && 'font-weight: bold'].filter(Boolean).join(';');
const finalClasses = mergeClasses(classes, Astro.props);
const finalStyles = mergeStyles(styles, Astro.props);
```

### 2. Category-Level Mappings (`*.maps.ts`)
Avoid mapping prop values to CSS classes directly in the template strings. Instead, use static mapping objects in category-level `*.maps.ts` files (e.g., `typography.maps.ts`). This provides type safety and avoids runtime concatenation bugs.
**Example:**
```typescript
// in typography.maps.ts
export const TEXT_TONE_CLASS_MAP: Record<TextTone, string> = { 'primary': 'text-primary' };
```

### 3. The `BaseComponentProps` Extension
All component `Props` interfaces MUST extend `BaseComponentProps` utilizing `Omit<HTMLAttributes<'...'>, keyof BaseComponentProps>`. This ensures all components consistently support global props like `animate`, `onScroll`, and standard HTML attributes.

### 4. Component Folder Isolation
Each component must reside in an isolated directory containing its `.astro` file, `.css` styles, and `.svg` icons (e.g., `src/design/category/component-name/`). Keep component-specific CSS strictly scoped.

### 5. Separation of Tokens and Variables
Raw variables and clamp calculations should be defined in `vars.css` (e.g., `--fs-md: clamp(...)`), while `tokens.css` should only handle the utility class definitions that apply those variables to elements.

### 6. Frontmatter CSS Imports
Do NOT use `<style>` tags to import CSS files in Astro components. Instead, import the stylesheets as the very last imports at the top of the Astro frontmatter script block.
**Example:**
```astro
---
import { mergeClasses } from '../../shared/functions';
import '../typography.css';
import './Component.css';

// ... component logic ... //
---
```

### 7. Boolean Props for Styling
Instead of inline union types for text styling (e.g., `style?: "normal" | "italic"` or `decoration?: "none" | "underline"`), implement a standard series of boolean props (`bold?: boolean`, `italic?: boolean`, `underline?: boolean`, `strikethrough?: boolean`, `uppercase?: boolean`, `lowercase?: boolean`) and convert them into a CSS string using the `combineFontStyleProps` utility from shared functions, then include them in your styles string.

### 8. Centralized Type Definitions
Do not use inline union types for component properties (e.g., `weight?: "light" | "normal"...`). Extract them into shared or category-level type definitions and reference them. Global types (e.g., `FontWeight`) should go in `src/design/shared/types.ts`, and category-specific types (e.g., `LineHeight`) should go in `../category.types.ts`.

## 6. General Rules

1. **Maintain Comments and Docstrings:** Never strip existing code documentation or architecture comments when refactoring unless they are explicitly incorrect.
2. **Proactive Type Checking:** Verify compilation correctness before completing a task by executing typescript or Astro verification commands.
3. **No Visual Placeholders:** When adding cards or sections, use real-world descriptive texts, authentic SVG inline icons, or generate high-fidelity assets using system tools. Do not use generic grey blocks or "lorem ipsum" text.
4. **Accessibility (A11y) Focus:** Ensure all interactive elements have semantic meaning, keyboard support, high contrast ratios, and clear `:focus-visible` outline rings.
