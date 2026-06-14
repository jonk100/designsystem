# Navbar

A horizontal navigation bar component that arranges a logo, links, and actions in a three‑zone layout.

## Overview

The `Navbar` component provides a flexible, accessible navigation container. It renders a `<nav>` landmark with an optional `aria-label` and splits its content into three named zones: **start** (logo or wordmark), **center** (navigation links), and **end** (actions, avatar, etc.). The component owns the spacing between zones and the internal gap between items, but it does not manage dropdowns, mobile toggles, or other interactive behaviors – those are handled by separate overlay components such as `Menu` or `Drawer`.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | Accessible label for the `<nav>` landmark (e.g. "Main navigation"). |
| `gap` | `SpacingScale` (`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`) | `md` | Sets the gap between the three zones and between items within each zone. |
| `orientation` | `'horizontal' | 'vertical'` | `horizontal` | Determines the layout direction of the navigation items. The component currently renders horizontally; the prop is accepted for future flexibility. |
| `align` | `'start' | 'center' | 'end' | 'justify'` | `start` | Alignment of items along the main axis. Not used directly by the component but accepted for consistency with the `NavProps` interface. |
| `class` | `string` | | Additional CSS classes to apply to the component. |
| `class:list` | `string` | | List of CSS classes to apply to the component. |
| `animate` | `string` | | Animation name and optional duration/delay. |
| `effects` | `DisplayEffect[]` | | Visual effects such as blur or lift. |
| `bg` | `BackgroundTone` | | Background tone utility class. |
| `style` | `string` | | Inline styles. |
| `onScroll` | `boolean` | | Scroll event callback. |

All other standard HTML attributes are forwarded to the `<nav>` element via `BaseComponentProps`.

## Variants / Sizes

The `Navbar` itself has no visual variants; its appearance is driven by the `gap` prop and any global styling applied through `class`, `class:list`, or `bg`.

## Usage

### Basic

```astro
---
import Navbar from '@/design/nav/navbar/Navbar.astro';
---

<Navbar label="Main navigation">
  <span slot="start">Logo</span>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <span slot="end">Login</span>
</Navbar>
```

### Common Patterns

```astro
---
import Navbar from '@/design/nav/navbar/Navbar.astro';
import Icon from '@/design/icons/Icon.astro';
---

<!-- Navbar with a logo, centered navigation links, and a user avatar on the end -->
<Navbar label="Site navigation" gap="lg" bg="primary">
  <div slot="start">
    <img src="/logo.svg" alt="Site logo" width="32" height="32" />
  </div>

  <a href="/">Home</a>
  <a href="/docs">Docs</a>
  <a href="/blog">Blog</a>

  <div slot="end">
    <Icon name="user" />
  </div>
</Navbar>

<!-- Navbar with a mobile menu toggle (handled by a separate component) -->
<Navbar label="Responsive navigation" gap="md">
  <button slot="start" aria-label="Open menu">☰</button>
  <a href="/">Home</a>
  <a href="/features">Features</a>
  <a href="/pricing">Pricing</a>
  <button slot="end" aria-label="Search">🔍</button>
</Navbar>
```

## Accessibility

The component renders a `<nav>` landmark and accepts an optional `aria-label`. When the `label` prop is omitted, the component relies on the surrounding context or additional ARIA attributes to convey its purpose. The named slots do not affect accessibility; they simply provide a convenient way to position content.

## CSS Architecture

The `Navbar` uses the `navbar-component` BEM base class. It applies a CSS custom property `--local-gap` derived from the `gap` prop via `NAV_VAR_MAP.gap`. The component also defines helper classes for each zone (`navbar__zone--start`, `navbar__zone--center`, `navbar__zone--end`) that use flexbox to align items horizontally. Global props such as `class`, `class:list`, `animate`, and `bg` are merged through `mergeClasses`, and inline styles are merged via `mergeStyles`.

## Related Components

- [`Menu`](/docs/components/menu)
- [`Drawer`](/docs/components/drawer)
- [`Header`](/docs/components/header)
- [`Footer`](/docs/components/footer)
