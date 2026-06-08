import type { ImageRatio, ImageFit, ImageLoading } from './Image.types';

/**
 * All valid aspect ratio preset values.
 * Used for runtime validation if needed.
 */
export const IMAGE_RATIOS: ImageRatio[] = [
  'square',
  'video',
  'portrait',
  'wide',
  'auto',
];

/**
 * All valid object-fit values.
 */
export const IMAGE_FITS: ImageFit[] = ['cover', 'contain', 'fill', 'none'];

/**
 * All valid loading strategy values.
 */
export const IMAGE_LOADING_OPTIONS: ImageLoading[] = ['lazy', 'eager'];

/**
 * Maps each ratio preset to its CSS `aspect-ratio` value.
 * Used by `Image.maps.ts` to generate the inline CSS custom property.
 */
export const IMAGE_RATIO_VALUES: Record<Exclude<ImageRatio, 'auto'>, string> = {
  square:   '1 / 1',
  video:    '16 / 9',
  portrait: '3 / 4',
  wide:     '21 / 9',
};