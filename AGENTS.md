# DesignSystem Agent Guidelines

Welcome to the DesignSystem project! As an AI agent working on this codebase, please adhere to the following rules to maintain consistency, performance, and code quality.

## 1. Shared Display Component Pattern

### Display Folder Components
All components within the `src/design/display/` folder (Badge, Chip, Tag, Dot, Avatar, Counter, Indicator, Icon, etc.) that have:
- Background colors that change based on variant
- Border colors that change based on variant
- Hover states with background changes
- Shadow effects on hover

**MUST** use the shared variant classes defined in `src/design/display/tokens.css`:

- **Size classes**: `.display-size--sm`, `.display-size--md`, `.display-size--lg`
- **Variant classes**: `.display-variant--default`, `.display-variant--primary`, `.display-variant--secondary`, `.display-variant--success`, `.display-variant--warning`, `.display-variant--danger`, `.display-variant--info`

### Implementation Rules

1. **Component CSS files** (e.g., `Badge.css`, `Chip.css`) should ONLY contain component-specific styles (layout, element-specific styling, component-unique behaviors). Size and variant styles MUST use the shared classes from `tokens.css`.

2. **Component Astro files** should apply the shared classes via `class:list`:
   ```astro
   const classes = [
     'component-name',
     `display-size--${size}`,
     `display-variant--${variant}`
   ];
   ```

3. **NEVER create component-specific tokens** for shared display properties. Always use the shared tokens from `tokens.css`:
   - Use `--display-radius` instead of `--badge-radius`, `--chip-radius`, etc.
   - Use `--display-size-*` instead of component-specific size tokens
   - Use `--display-padding-*` instead of component-specific padding tokens

4. **Import tokens.css** in component CSS files if needed:
   ```css
   @import '../tokens.css';
   ```

### Future Migration to Global Variants

If components outside the display folder (e.g., buttons in `src/design/controls/`) later require the same variant pattern (background, border, hover, shadow), the shared variant classes should be:
1. Moved from `src/design/display/tokens.css` to a more global location (e.g., `src/styles/variants/`)
2. Renamed from `.display-variant--*` to `.global-variant--*`
3. Updated across all consuming components

This migration should only happen when there is a clear need for cross-folder usage, not preemptively.

## 2. Component File Structure

Each component in the design system should follow this structure:
```
component-name/
  ├── ComponentName.astro   # Component implementation
  ├── ComponentName.css     # Component-specific styles only
  └── component-name.svg    # Icon/asset (if applicable)
```

## 3. Token Organization

- **tokens.css**: Contains CSS custom properties (design tokens) under `:root` selector. No class selectors allowed.
- **Component-specific CSS**: May contain class selectors but must bind to tokens, never hardcode values.
- **Shared utilities**: When multiple components need the same visual treatment, extract to shared variant classes in the appropriate tokens file.

## 4. Documentation

All components should include clear comments indicating:
- What shared classes they use
- What tokens they reference
- Any component-specific behaviors that deviate from the shared pattern
