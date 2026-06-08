import type { AudioVariant } from './Audio.types';

/**
 * Resolves the `variant` prop to a BEM modifier class.
 *
 * @param variant - The variant value to resolve.
 * @returns A BEM modifier class string.
 *
 * @example
 * resolveVariantClass('minimal') // 'audio--minimal'
 * resolveVariantClass('native')  // 'audio--native'
 */
export function resolveVariantClass(variant: AudioVariant): string {
  return `audio--${variant}`;
}

/**
 * Formats a duration in seconds into a human-readable `m:ss` string.
 * Used by the minimal player to display elapsed and total time.
 * Not called at build time — exported here so Audio.astro can inline
 * it into the component's <script> without duplicating the logic.
 *
 * @param seconds - A non-negative number of seconds.
 * @returns A formatted time string, e.g. `"3:07"`.
 *
 * @example
 * formatAudioTime(187) // '3:07'
 * formatAudioTime(60)  // '1:00'
 * formatAudioTime(9)   // '0:09'
 */
export function formatAudioTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
