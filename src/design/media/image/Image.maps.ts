import type { ImageRatio, ImageFit, ImageRounded } from './Image.types';
import { IMAGE_RATIO_VALUES } from './Image.consts';

/**
 * Maps Image props to CSS custom property declarations.
 * Consumed by Image.astro to build the inline style string passed to mergeStyles.
 */
export const IMAGE_VAR_MAP = {
  /**
   * Returns a CSS custom property declaration for the aspect ratio.
   * Returns an empty string for `auto` since no ratio should be enforced.
   *
   * @param ratio - The ratio preset to resolve.
   * @returns A CSS custom property string, or empty string for `auto`.
   *
   * @example
   * IMAGE_VAR_MAP.ratio('video') // '--local-ratio: 16 / 9'
   */
  ratio: (ratio: ImageRatio): string => {
    if (ratio === 'auto') return '';
    return `--local-ratio: ${IMAGE_RATIO_VALUES[ratio]}`;
  },

  /**
   * Returns a CSS custom property declaration for object-fit.
   *
   * @param fit - The object-fit value to apply.
   * @returns A CSS custom property string.
   *
   * @example
   * IMAGE_VAR_MAP.fit('contain') // '--local-fit: contain'
   */
  fit: (fit: ImageFit): string => `--local-fit: ${fit}`,
};

/**
 * Resolves the `rounded` prop to a BEM modifier class.
 * A value of `true` defaults to the `md` size.
 *
 * @param rounded - The rounded prop value.
 * @returns A BEM modifier class string, or empty string when falsy.
 *
 * @example
 * resolveRoundedClass(true)   // 'image--rounded-md'
 * resolveRoundedClass('lg')   // 'image--rounded-lg'
 * resolveRoundedClass(false)  // ''
 */
export function resolveRoundedClass(rounded: ImageRounded): string {
  if (!rounded) return '';
  if (rounded === true) return 'image--rounded-md';
  return `image--rounded-${rounded}`;
}