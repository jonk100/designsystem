import type { VideoRatio, VideoFit, VideoVariant } from './Video.types';
import { VIDEO_RATIO_VALUES } from './Video.consts';

/**
 * Maps Video props to CSS custom property declarations.
 * Consumed by Video.astro to build the inline style string passed to mergeStyles.
 */
export const VIDEO_VAR_MAP = {
  /**
   * Returns a CSS custom property declaration for the aspect ratio.
   * Returns an empty string for `auto` since no ratio should be enforced.
   *
   * @param ratio - The ratio preset to resolve.
   * @returns A CSS custom property string, or empty string for `auto`.
   *
   * @example
   * VIDEO_VAR_MAP.ratio('video')    // '--local-ratio: 16 / 9'
   * VIDEO_VAR_MAP.ratio('portrait') // '--local-ratio: 9 / 16'
   * VIDEO_VAR_MAP.ratio('auto')     // ''
   */
  ratio: (ratio: VideoRatio): string => {
    if (ratio === 'auto') return '';
    return `--local-ratio: ${VIDEO_RATIO_VALUES[ratio]}`;
  },

  /**
   * Returns a CSS custom property declaration for object-fit.
   *
   * @param fit - The object-fit value to apply.
   * @returns A CSS custom property string.
   *
   * @example
   * VIDEO_VAR_MAP.fit('cover')   // '--local-fit: cover'
   * VIDEO_VAR_MAP.fit('contain') // '--local-fit: contain'
   */
  fit: (fit: VideoFit): string => `--local-fit: ${fit}`,
};

/**
 * Resolves the `variant` prop to a BEM modifier class.
 *
 * @param variant - The variant value to resolve.
 * @returns A BEM modifier class string.
 *
 * @example
 * resolveVariantClass('minimal') // 'video--minimal'
 * resolveVariantClass('native')  // 'video--native'
 */
export function resolveVariantClass(variant: VideoVariant): string {
  return `video--${variant}`;
}

/**
 * Formats a duration in seconds into a human-readable `m:ss` string.
 * Used by the minimal player to display elapsed and total time.
 * Not called at build time — exported here so Video.astro can inline
 * it into the component's <script> without duplicating the logic.
 *
 * @param seconds - A non-negative number of seconds.
 * @returns A formatted time string, e.g. `"3:07"`.
 *
 * @example
 * formatVideoTime(187) // '3:07'
 * formatVideoTime(60)  // '1:00'
 * formatVideoTime(9)   // '0:09'
 */
export function formatVideoTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}
