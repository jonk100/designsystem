# Agent Instructions

## 1. Documentation & JSDoc Headers
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
*Note: Only explain complex props. Do not explain standard props like `class`, `href`, or `id`.*

## 2. Directory Hierarchy
```
design - shared.vars.css, shared.tokens.css,  component directories, animations directory, shared directory
|------- animation/
         |----------motion.vars.css - variables that attach to a value. eg. --speed-1: 200ms;
         |----------animate.css - semantic references to varibles. eg. --fastest: var(--speed-1);
         |----------motion.types.ts - types specific to the animation system, e.g. AnimationName
         |__________motion.ts - functions for use in fetching, sorting, or manipulating values or types within the animations directory
         