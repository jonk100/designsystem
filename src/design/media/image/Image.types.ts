/**
 * Valid aspect ratio presets for the Image component.
 * - `square`   — 1:1
 * - `video`    — 16:9
 * - `portrait` — 3:4
 * - `wide`     — 21:9
 * - `auto`     — no ratio enforced; image uses intrinsic dimensions
 */
export type ImageRatio = 'square' | 'video' | 'portrait' | 'wide' | 'auto';

/**
 * Controls how the image fills its container.
 * Maps directly to the CSS `object-fit` property.
 */
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none';

/**
 * Border-radius presets applied to the image wrapper.
 * - `true` defaults to `md`
 */
export type ImageRounded = boolean | 'sm' | 'md' | 'lg' | 'full';

/**
 * Native browser loading strategy for the underlying `<img>` element.
 */
export type ImageLoading = 'lazy' | 'eager';

/**
 * Controls whether the browser decodes the image on the main thread or off it.
 * `async` allows decoding off the main thread, avoiding paint delays.
 * `sync` decodes before rendering — rarely needed.
 * `auto` leaves the decision to the browser.
 */
export type ImageDecoding = 'async' | 'sync' | 'auto';