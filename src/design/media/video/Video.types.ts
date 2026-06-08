/**
 * Controls how much of the browser's native video UI is exposed.
 * - `native`  — full browser controls (play, seek, volume, fullscreen)
 * - `minimal` — custom overlay controls (play/pause, scrubber, time, fullscreen)
 * - `none`    — no controls; useful for background/ambient video
 */
export type VideoVariant = 'native' | 'minimal' | 'none';

/**
 * Valid aspect ratio presets for the Video component.
 * - `square`   — 1:1
 * - `video`    — 16:9 (default for most video content)
 * - `portrait` — 9:16 (vertical/mobile video)
 * - `wide`     — 21:9 (cinematic)
 * - `auto`     — no ratio enforced; video uses intrinsic dimensions
 */
export type VideoRatio = 'square' | 'video' | 'portrait' | 'wide' | 'auto';

/**
 * Controls how the video fills its container.
 * Maps directly to the CSS `object-fit` property.
 */
export type VideoFit = 'cover' | 'contain';

/**
 * MIME type hint for the video source.
 * Passed to the `<source type>` attribute so the browser can skip
 * formats it cannot decode without downloading the file first.
 */
export type VideoMimeType =
  | 'video/mp4'
  | 'video/webm'
  | 'video/ogg'
  | 'video/mov';
