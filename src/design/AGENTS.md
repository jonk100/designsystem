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
    ├── index.ts               # Optional — barrel file
    ├── vars.css               # Optional — only if category-level vars.css grows too large
    └── tokens.css             # Optional — only if category-level tokens.css grows too large
```

Additional relevant files:
- `../../shared/functions.ts` - Global shared utilities (e.g. mergeClasses, mergeStyles)
- `../../shared/types.ts` - Global types and interfaces
- `../{category}.types.ts` - Category-level types and interfaces
- `../{category}.maps.ts` - Category-level mapping functions (e.g. generator maps)

### 2. Destructure Global Props Before Rest Spreads
When extracting component props using `Astro.props`, **ALWAYS** explicitly destructure global props (`class`, `class:list`, and `style`) before rest-spreading `...rest`. This prevents Astro's `<Tag {...rest}>` spread from silently overwriting your component's explicitly computed `class:list` or `style` attributes.
**Example:**
```astro
const {
  as: Tag = 'div',
  variant,
  class: className,
  'class:list': classList,
  style,
  ...rest
} = Astro.props;
```

### 3. Category-Level Mappings (`*.maps.ts`)

## 4. Component Spacing Responsibilities

**Spacing responsibility follows a clean boundary:**

| Component       | Owns                                                         |
|-----------------|--------------------------------------------------------------|
| Text            | nothing                                                      |
| Inline          | gap between its children                                     |
| Stack           | gap between its children                                     |
| Card            | internal padding only                                        |
| Grid / CardGrid | gap between its children                                     |
| Prose           | space between typographic children (p + p, p + h2, etc.)     |
| Container       | horizontal padding (gutters)                                 |

- Internal spacing is the responsibility of the component.
- External spacing is the responsibility of the parent.

This is the single rule worth internalizing. If you follow it consistently, you never end up with a component that needs its margin reset in a specific context, because it never had margin in the first place.

### Put spacing logic in the right place(s):

- Tokens — the raw scale. --space-xs through --space-2xl. Live in tokens.css or variables.css. Nothing else.
- Component CSS — internal padding only. Card.css sets padding. Stack.css sets gap. Nobody sets their own margin.
- Layout components — Stack, Grid, Prose. These are the only things allowed to put space between children. If you find yourself adding margin-top to a Card or Text, the real fix is to wrap them in a Stack.
- Utility classes — the escape hatch. A mt-md or mb-lg class for one-off spacing needs at the usage site. Not ideal but better than baking margin into a component. Keep these in a utilities.css file so they're visible and auditable.

## 4. Color Responsibilities

### Components never reference neutrals directly

The neutral scale (`--neutral-0` to `--neutral-15`) and neutral-rgb variants (`--neutral-rgb-0` to `--neutral-rgb-15`) are raw palette. They are never used in component CSS.

```css
/* wrong */
.button { background: var(--neutral-3); }
.card   { border-color: rgb(var(--neutral-rgb-8) / 0.5); }

/* right */
.button { background: var(--layer--3); }
.card   { border-color: var(--border--0); }
```

If you find yourself writing `--neutral-` in a component file, stop. Either a semantic token already exists for that role, or you need to create one.

### Text color inherits by default, overrides via text tokens only

The text scale runs `--text--0` to `--text--5`, plus `--text--d` (disabled) and `--text--m` (muted). Set the baseline once at the root and let inheritance do the work.

```css
/* global.css — set once */
body { color: var(--text--3); }

/* components only override when semantically meaningful */
.caption  { color: var(--text--1); }
.label    { color: var(--text--2); }
.disabled { color: var(--text--d); }
.muted    { color: var(--text--m); }
```

A `Text` component with no `tone` prop applied should render at whatever color it inherits. It should not set `color: var(--text--3)` explicitly just to match the default — that breaks inheritance when `Text` is inside a surface with a different text color intent.

### Surfaces own their background via layer tokens

The layer scale runs `--layer--0` to `--layer--5`. Each surface component picks one layer and owns it. Nothing inside the surface re-declares background.

```css
/* surfaces.css */
.container { background: var(--layer--0); } /* page base */
.section, .paper { background: var(--layer--1); } /* slight lift */
.card, .bento { background: var(--layer--2); } /* standard card */
.modal { background: var(--layer--3); } /* overlay surfaces */
.popover { background: var(--layer--4); } /* floating surfaces */
.tooltip { background: var(--layer--5); } /* topmost surfaces */
```

The layer number communicates elevation. `--layer--0` is the floor. `--layer--5` is the ceiling. A component should never use a lower layer token than the surface it sits inside — that would make it appear to sink below its parent.

### Borders use border tokens

The border scale runs `--border--0` and `--border--1`. These are the only values that go on `border-color` in component CSS. `--border--0` is your default border. `--border--1` is a bolder, more recessive border. If you need a more subtle border, use the rgb variants with opacity, e.g. rgb(var(--neutral-rgb-0) / 0.5).

```css
/* right */
.card    { border: 1px solid var(--border--0); }
.divider { background: var(--border--1); }

/* wrong — reaching past the semantic layer */
.card    { border: 1px solid var(--neutral-8); }

/* wrong — using text tokens for borders */
.card    { border: 1px solid var(--text--d); }
```

When you need a new border weight (e.g. focus, active states), create a new semantic token (`--border--focus`, `--border--accent`) that maps to a raw variable. Don't use a raw color directly.

### The RGB variants exist only for alpha compositing

`--neutral-rgb-N` are not an alternative way to reference a color. They exist exclusively for situations where you need transparency — glass surfaces, overlays, shadows, noise layers:

```css
/* the only legitimate uses */
.glass-surface {
  background: rgb(var(--neutral-rgb-2) / 0.06);
  box-shadow: 0 8px 32px rgb(var(--neutral-rgb-0) / 0.6);
}

.overlay-backdrop {
  background: rgb(var(--neutral-rgb-0) / 0.75);
}
```

### Disabled state uses `--text--d` and `--text--m` exclusively

They are the only values applied to disabled or muted UI. No component invents its own disabled color by halving opacity or reaching for a color variable directly.

```css
/* right */
.button:disabled { color: var(--text--d); }
.helper-text     { color: var(--text--m); }

/* wrong */
.button:disabled { color: var(--neutral-6); opacity: 0.5; }
.helper-text     { color: rgb(var(--neutral-rgb-7) / 0.7); }
```

The distinction between `--text--d` (disabled) and `--text--m` (muted) is semantic, not just visual. Disabled means the element is non-interactive and communicates unavailability. Muted means the element is present and readable but de-emphasized. Use each in the correct context.

### Elevation is always expressed as a layer step, never a shadow alone

Shadow without a background shift doesn't communicate elevation. Elevation requires all of:

```css
/* complete — layer + shadow + border */
.card {
  background: var(--layer--2);
  box-shadow: 0 4px 12px rgb(var(--neutral-rgb-0) / 0.4);
  border: 1px solid var(--border--1);
}
```

The border does the heavy lifting on dark surfaces. The shadow reinforces it.

### Focus rings are global and use a dedicated token

There is a gap in the token set — it has no focus ring color. Before building any interactive components, make sure we close the gap.

```css
/* add to tokens.css */
--focus-ring: var(--amber); /* or whatever your accent is */
--focus-ring-offset: 2px;

/* every interactive component uses this, nothing else */
.button:focus-visible,
.input:focus-visible,
.link:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}
```

### Text on surfaces must be verified against all five layer backgrounds

Text tokens need to be readable against `--layer--0` through `--layer--5`. Verify explicitly, especially `--text--0` and `--text--m` which are our dimmest values. The minimum contrast ratio for body text is 4.5:1 (WCAG AA). For large text and UI components it's 3:1.

The risk in the scale is the middle range — `--text--d` at `--neutral-6` and `--text--m` at `--neutral-7` are our darkest text values sitting against our darkest backgrounds. Check those pairs first.

### The decision tree for any new color need

```
Do I need a background?
  └── use a --layer-- token

Do I need text color?
  └── inherit first
  └── if override needed, use --text-- token
  └── if disabled, use --text--d
  └── if muted, use --text--m

Do I need a border?
  └── use --border--0 or --border--1
  └── if it communicates state, create a new semantic border token

Do I need transparency?
  └── use rgb(var(--neutral-rgb-N) / alpha)
  └── never use plain `--color-N` with opacity

Does nothing fit?
  └── create a named semantic token
  └── map it in tokens.css (leave vars.css for raw scales)
  └── never use `--color-N` directly in a component
```

## Border Radius

## Borders

---

### The three jobs borders do

**Separation** — dividing one surface from another, or a surface from the void behind it.

**Definition** — giving a component a visible edge, making it feel like a discrete object.

**Communication** — signaling state. Focus, error, success, hover. The border changes meaning, not just appearance.

These three jobs should never share the same token.

---

### The laws

**1. Border color comes from border tokens only**

You have `--border--0` and `--border--1`. That's your palette for structural borders. Nothing else touches `border-color` in component CSS.

```css
/* wrong */
.input { border: 1px solid var(--neutral-8); }
.card  { border: 1px solid var(--text--d); }

/* right */
.input { border: 1px solid var(--border--0); }
.card  { border: 1px solid var(--border--1); }
```

**2. State borders are their own tokens, never derived from structural ones**

Focus, error, success, warning — these need dedicated tokens. They don't modify `--border--0`, they replace it entirely during the state.

```css
/* tokens you don't have yet but need */
--border--focus:   var(--amber);
--border--error:   var(--red);
--border--success: var(--green);
--border--warning: var(--yellow);

/* usage */
.input:focus-visible  { border-color: var(--border--focus); }
.input[data-error]    { border-color: var(--border--error); }
.input[data-success]  { border-color: var(--border--success); }
```

**3. Border width is a token, not a hardcoded value**

You'll want two widths at most. Define them once.

```css
--border-width--default: 1px;
--border-width--thick:   2px;  /* focus rings, active states */
```

Hairline borders on high-DPI screens can render as 0.5px effectively — if you want that, `--border-width--thin: 0.5px` is worth adding now.

**4. Dividers are not borders**

A `Separator` component is not a bordered element — it's a line in space. It should use `background-color` on a thin element, not `border`. This matters because `border` participates in the box model differently and causes subtle layout shifts.

```css
/* wrong */
.separator { border-top: 1px solid var(--border--1); }

/* right */
.separator {
  height: 1px;
  background: var(--border--1);
}
```

**5. Borders on glass surfaces use RGB variants with alpha**

When a surface uses `backdrop-filter`, its border should be semi-transparent to feel physically consistent with the glass effect. A fully opaque border on a glass card looks painted on.

```css
.glass-card {
  border: 1px solid rgb(var(--neutral-rgb-15) / 0.10);
}

/* steps up as layer steps up */
--glass-border--1: rgb(var(--neutral-rgb-15) / 0.06);
--glass-border--2: rgb(var(--neutral-rgb-15) / 0.09);
--glass-border--3: rgb(var(--neutral-rgb-15) / 0.12);
--glass-border--4: rgb(var(--neutral-rgb-15) / 0.16);
--glass-border--5: rgb(var(--neutral-rgb-15) / 0.20);
```

**6. No component sets its own border by default unless a border is intrinsic to what it is**

A `Card` has a border — that's part of being a card. An `Input` has a border — that's how it communicates it's an editable field. A `Stack` does not have a border. A `Text` does not have a border. A `Box` does not have a border.

The test: would removing the border make this component unrecognizable or non-functional? If yes, the border is intrinsic. If no, it doesn't belong there by default.

## Border Radius

### The jobs radius does

**Softness** — Large radius reads as friendly, approachable, modern. Small radius reads as precise, editorial, serious.

**Hierarchy** — Larger containers have larger radius and smaller elements inside them have smaller radius. This creates a visual nesting logic.

**Identity** — Radius is one of the strongest carriers of a design system's personality.

### Radius is a token scale, not per-component decisions**

Components pick from from the scale. Nobody invents a new value.

### Radius scales with component size, not component type**

A small `Badge` uses `--radius--full` or `--radius--sm`. A large `Modal` uses `--radius--xl`. A full-page `Screen` uses `--radius--none`. The rule is: the larger the surface, the larger the radius — up to a point. Very large containers (page-level) often go back to zero.

### Nested elements must have smaller radius than their parent**

This is the inset radius rule. If a `Card` has `--radius--lg` (10px) and you put an image flush in the top-left corner of that card, the image's corner radius needs to match the card's inner corner — which is the card radius minus the card's border width. If you ignore this, the background of the card bleeds visibly around the image corner.

```css
.card                { border-radius: var(--radius--lg); padding: 0; }
.card > .card-image  { border-radius: calc(var(--radius--lg) - 1px) calc(var(--radius--lg) - 1px) 0 0; }
```

For non-flush content (content with padding), this doesn't apply — the padding creates enough distance that the mismatch is invisible.

### Pill radius is always `--radius--full`, never a large number

Don't write `border-radius: 999px` or `border-radius: 100px` in component CSS. That's what `--radius--full` is for. A hardcoded large number is a magic value — `9999px` in a token is a documented decision.

### Interactive elements share radius with their non-interactive counterparts

A `Button` that looks like an `Input` should have the same radius as an `Input`. A `Select` that opens from a `Card`-like trigger should match. Inconsistent radius between related interactive elements is one of the most common ways a design system starts to feel unpolished.

### Radius participates in overflow

Any time you set `border-radius` on a container that has children touching its edges, you need `overflow: hidden` or the children will bleed past the rounded corner. This is not a radius decision — it's a consequence of radius that belongs in component CSS.

```css
.card {
  border-radius: var(--radius--lg);
  overflow: hidden; /* prevents child bleed */
}
```

The exception is when children need to visually escape the container — a `Badge` positioned on the corner of a `Card`, a `Tooltip` anchored to an `Input`. In those cases `overflow: visible` is correct and the radius mismatch is intentional.

## Typography

### The three jobs typography does

**Scale** — size, weight, line height. How big, how heavy, how tall.

**Role** — what this text *is* in the document. Heading, caption, label, body. Semantic meaning independent of visual size.

**Rhythm** — the spacing between typographic elements. How text blocks relate to each other vertically.

### Font size is a token scale, never a raw value

No component ever writes `font-size: 14px` — it writes `font-size: var(--fs--sm)`.

### Line height pairs with font size, not set independently

Line height without font size context is meaningless. Each size step should have a paired line height. Smaller text needs more leading. Larger display text needs less.

### Role components are thin wrappers — they set size, weight, leading, and element. Nothing else.

A `Caption` component should do exactly four things: set `font-size`, set `line-height`, set `color` to the appropriate text token, and render the right HTML element. It should not set margin, padding, letter spacing, or font family unless those are intrinsic to what a caption is.

```astro
---
// Caption.astro — does four things only
---
<span class="caption"><slot /></span>

<style>
.caption {
  font-size: var(--text-size--xs);
  line-height: var(--leading--xs);
  color: var(--text--1);
}
</style>
```

### Heading levels are semantic, heading sizes are visual — keep them separate

An `h2` is not always visually large. A visually large span is not always an `h2`. The `Heading` component accepts both an `as` prop (the HTML element) and a `fs` prop (the visual scale) independently.

```astro
---
// Heading.astro
// as="h1" fs="xl" — big element, medium visual
// as="h2" fs="4xl" — medium element, big visual
---
```

This prevents the trap of choosing heading levels based on how they look rather than what they mean.

### Measure is a typography concern, not a layout concern

The maximum line length for readable body text belongs on the `Prose` component, not on `Container` or `Stack`. `Prose` enforces measure. Everything else is agnostic about line length.

```css
.prose {
  max-width: 68ch;  /* ~65-75ch is the readable range */
}
```

`ch` units are correct here — they're relative to the width of the `0` character in the current font, so the measure scales with font size automatically.

### Letter spacing is optical, not systematic

Unlike size and weight, letter spacing doesn't follow a clean mathematical scale. It's optical — display text needs negative tracking, body text needs none, all-caps labels need positive tracking.

### Font family is a role decision, not a component decision

Use tokens to assign font familes based on context and role, not to individual components.

```css
/* role assignments */
--font--display:  var(--font--serif);
--font--body:     var(--font--sans);
--font--label:    var(--font--mono);
--font--code:     var(--font--mono);
--font--data:     var(--font--mono);
```

Components reference role tokens, never family tokens directly. `Code.astro` uses `--font--code`. `Label.astro` uses `--font--label`. If you decide labels should switch from mono to sans, you change one token.

### Rhythm belongs to Prose, not to individual type components

The space between a heading and the paragraph that follows it, between two paragraphs, between a paragraph and a list — this is `Prose`'s job. Individual type components have no margin by default.

```css
/* Prose.css — owns all inter-element rhythm */
.prose h1 + p,
.prose h2 + p,
.prose h3 + p { margin-block-start: var(--space--sm); }

.prose p + p   { margin-block-start: var(--space--md); }
.prose p + h2  { margin-block-start: var(--space--xl); }
```

Outside of `Prose`, a `Heading` has no margin. A `Text` has no margin. A `Stack` provides the spacing between them. This is the same law as the margin/padding law from earlier, but applied to the typographic layer.

### `tabular-nums` is a token behavior, not an afterthought

Any text that displays numbers in a tabular or data context needs `font-variant-numeric: tabular-nums`. This belongs on `--font--data`, `--font--mono`, and any component that renders numeric data — `Counter`, `Metric`, `Stat`, `Badge` with counts. If not set, numbers shift width character by character and columns don't align.

```css
--font--data: var(--font--mono);
--font-numeric--tabular: tabular-nums;

.counter,
.metric,
.stat,
.badge[data-numeric] {
  font-variant-numeric: var(--font-numeric--tabular);
}
```

**10. `text-underline-offset` is set globally, never per-component**

Default browser underlines cut through descenders on most fonts. Fix it once.

```css
/* global.css */
* { text-underline-offset: 0.2em; }
```

The `Link` component inherits this automatically.

##