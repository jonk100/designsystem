# Animation Next Level ideas, concepts, and considerations

## Debugging tools
- [ ] a global animation toggle for testing/debugging purposes. 
- [ ] a "this animation" on/off toggle.
- [ ] a slow-motion mode that slows down all animations by a factor of 10.
- [ ] a visual indicator that animation debugging is enabled.

## Reduced Motion
- [ ] `prefers-reduced-motion` media query as a first-class concern, not an afterthought
- [ ] a global toggle (class on `<html>`) for user-controlled disable
- [ ] distinguishing *decorative* animations (can cut entirely) from *functional* ones (should reduce, not remove — e.g. a loading spinner still needs to spin)

## Timing & Rhythm
- [ ] A numeric scale for durations (you have this) but also named semantic aliases: `--duration-instant`, `--duration-quick`, `--duration-moderate` etc.
- [ ] Matching easing curves to animation intent — entrances ease-out, exits ease-in, interactive feedback ease-in-out
- [ ] A stagger utility — either a CSS custom property (`--stagger-index: 2`) multiplied by a base delay, or a JS helper that sets them on children
- [ ] Keeping durations shorter than you think — 150–300ms for most UI, 400–600ms for larger transitions

## Architecture
- [ ] Separating *what* animates (classes) from *how* (keyframes) from *when* (delay/duration overrides via props/CSS vars) — lets you compose freely
- [ ] A convention for animation CSS var overrides: `--animation-duration`, `--animation-delay`, `--animation-iteration` on the element, consumed by the class
- [ ] Deciding early whether animations live on the element or a wrapper — `display: inline-block` requirements (like your sparkle) can affect layout

## JavaScript Utilities
- [ ] `prefersReducedMotion()` — a simple JS check mirroring the media query, for JS-driven animations
- [ ] `staggerChildren(parent, delay)` — sets `--stagger-index` on each child
- [ ] `onAnimationEnd(el, cb)` — promise-based wrapper around `animationend`, useful for sequencing
- [ ] `playOnce(el, className)` — adds a class, removes it on `animationend`, so it can be re-triggered
- [ ] An intersection observer hook/utility for triggering entrance animations on scroll

## State & Sequencing
- [ ] A clear pattern for enter/exit states (the hard part CSS alone can't fully solve) — either a library like Motion or a small state machine
- [ ] `animation-fill-mode: both` as the default for entrances/exits so elements don't flash before/after
- [ ] Thinking about interrupted animations — what happens if a user hovers off mid-animation

---
- `prefers-reduced-motion` media query as a first-class concern, not an afterthought
- A global toggle (class on `<html>`) for user-controlled disable
- Distinguishing *decorative* animations (can cut entirely) from *functional* ones (should reduce, not remove — e.g. a loading spinner still needs to spin)

**Timing & Rhythm**
- A numeric scale for durations (you have this) but also named semantic aliases: `--duration-instant`, `--duration-quick`, `--duration-moderate` etc.
- Matching easing curves to animation intent — entrances ease-out, exits ease-in, interactive feedback ease-in-out
- A stagger utility — either a CSS custom property (`--stagger-index: 2`) multiplied by a base delay, or a JS helper that sets them on children
- Keeping durations shorter than you think — 150–300ms for most UI, 400–600ms for larger transitions

**Architecture**
- Separating *what* animates (classes) from *how* (keyframes) from *when* (delay/duration overrides via props/CSS vars) — lets you compose freely
- A convention for animation CSS var overrides: `--animation-duration`, `--animation-delay`, `--animation-iteration` on the element, consumed by the class
- Deciding early whether animations live on the element or a wrapper — `display: inline-block` requirements (like your sparkle) can affect layout

**JavaScript Utilities**
- `prefersReducedMotion()` — a simple JS check mirroring the media query, for JS-driven animations
- `staggerChildren(parent, delay)` — sets `--stagger-index` on each child
- `onAnimationEnd(el, cb)` — promise-based wrapper around `animationend`, useful for sequencing
- `playOnce(el, className)` — adds a class, removes it on `animationend`, so it can be re-triggered
- An intersection observer hook/utility for triggering entrance animations on scroll

**State & Sequencing**
- A clear pattern for enter/exit states (the hard part CSS alone can't fully solve) — either a library like Motion or a small state machine
- `animation-fill-mode: both` as the default for entrances/exits so elements don't flash before/after
- Thinking about interrupted animations — what happens if a user hovers off mid-animation

**Developer Experience**
- A `data-animate` attribute approach as an alternative to class-based, keeps templates cleaner
- A slow-motion dev mode (e.g. `* { animation-duration: 10x !important }`) for debugging
- Documenting every animation with its intended use case, not just its visual description — "use for modal dismiss" is more useful than "fades out"