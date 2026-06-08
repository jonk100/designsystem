/**
 * Controls how much of the browser's native audio UI is exposed.
 * - `native`  — full browser controls (play, seek, volume, download)
 * - `minimal` — custom single-line player (play/pause, scrubber, time)
 * - `none`    — no controls; useful when playback is driven externally
 */
export type AudioVariant = 'native' | 'minimal' | 'none';

/**
 * MIME type hint for the audio source.
 * Passed to the `<source type>` attribute so the browser can skip
 * formats it cannot decode without downloading the file first.
 */
export type AudioMimeType =
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/wav'
  | 'audio/webm'
  | 'audio/aac'
  | 'audio/flac';
