# Animation

The Animation category provides a centralized, performant motion system designed to decouple animation logic from individual UI components. By leveraging declarative props, intersection observers, and CSS custom properties, it ensures that motion across the design system is cohesive, manageable, and easy to apply.

This document serves as a guide for developers working with animations. It outlines the shared architectural pattern that governs motion, preventing CSS redundancy and ensuring scroll-triggered animations behave predictably.

**Major Areas Documented:**
- **Declarative Motion API**: How the `animate` prop systematically applies animations, durations, and delays without hardcoding CSS in individual components.
- **Scroll-Triggered & Staggered Animations**: How components like `Wave` and `Alternating` manage intersection observation and staggered children sequences.
- **Architectural Separation of Concerns**: Decoupling *what* animates (utility classes) from *how* (keyframes) and *when* (CSS variables).

## Components

| Component | Type | Shared Props | Solo Props |
|---|---|---|---|
| **M** (Motion) | Primitive | `animate`, `as` | (none) |
| **Wave** | Wrapper | `animate`, `as` | `stagger`, `viewport` |
| **Alternating** | Wrapper | `animate`, `as` | `stagger`, `viewport`, `reverse` |
| **Staggered** | Wrapper | `animate`, `as` | `stagger`, `viewport` |

*(Note: All animation components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `animate`, and `onScroll`.)*

---

### M (Motion)

`src/design/animation/M.astro`

#### Inline Declarative Motion Primitive

The `M` component is a low-level primitive designed specifically to wrap any element or text with declarative motion. It is especially useful when you need to animate standard HTML tags or text nodes without creating custom components just to access the `animate` prop. 

#### System-Wide Parser Integration

It relies entirely on the system's `mergeClasses` and `mergeStyles` utilities to parse string-based animation instructions (e.g., `animate="fadeIn 0.5s delay-1s"`) into CSS custom properties that dynamically drive keyframes from `animate.css`.

---

### Wave

`src/design/animation/Wave.astro`

#### Scroll-Triggered Stagger Sequence

`Wave` is a role-based wrapper designed to handle staggered entry animations for a group of children (e.g., a list of cards). It assigns incremental `--stagger-index` CSS variables to its immediate children based on their DOM position.

#### Intersection Observer Management

Instead of animating immediately, `Wave` utilizes a centralized `IntersectionObserver` via the `data-on-scroll` attribute. The animations are paused until the element enters the viewport, at which point the system activates the animation sequence, creating a visually pleasing "wave" effect as children fade in one by one.

---

### Alternating

`src/design/animation/Alternating.astro`

#### Directional Stagger Variant

`Alternating` extends the staggered scroll-triggered sequence concept but alternates the base animation direction or variant applied to odd/even children. It is ideal for timelines, zigzag layouts, or conversational UI flows where visual rhythm relies on alternating sides or states.

---

### Staggered

`src/design/animation/Staggered.astro`

#### Base Stagger Container

`Staggered` is the foundational wrapper that sets up the stagger indices for children without the specific directional nuances of `Alternating` or the semantic intent of `Wave`. It is the primary workhorse for standard list/grid staggered reveals.

---

## The Motion Architecture

The system resolves motion through a strictly decoupled architecture:

### 1. The `animate` Prop Pattern
All components within the design system that extend `BaseComponentProps` automatically support the `animate` prop.
The syntax allows for declaring the animation name, duration, and delay in a single string:
`animate="[name] [duration] delay-[delay]"`
Example: `animate="slideIn 0.8s delay-0.2s"`

### 2. The Shared Utilities (`mergeClasses` & `mergeStyles`)
Rather than rewriting animation parsing logic inside every component, the design system utilizes `mergeClasses` and `mergeStyles` (from `src/design/shared/functions.ts`). These utilities extract the `animate` prop string, outputting the necessary `.animate--<name>` class and setting the scoped CSS variables `--animation-duration` and `--animation-delay`.

### 3. CSS Decoupling
Keyframes and animation base classes live exclusively in `src/design/animation/animate.css`. Component-specific CSS files should **never** contain `@keyframes` or animation definitions. They should only govern layout and structural aesthetics, relying on the `animate` prop for motion behavior.
