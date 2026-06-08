import type { VideoVariant, VideoRatio, VideoFit, VideoMimeType } from './Video.types';

/**
 * All valid variant values.
 * Used for runtime validation if needed.
 */
export const VIDEO_VARIANTS: VideoVariant[] = ['native', 'minimal', 'none'];

/**
 * All valid aspect ratio preset values.
 * Used for runtime validation if needed.
 */
export const VIDEO_RATIOS: VideoRatio[] = [
  'square',
  'video',
  'portrait',
  'wide',
  'auto',
];

/**
 * All valid object-fit values.
 * Used for runtime validation if needed.
 */
export const VIDEO_FITS: VideoFit[] = ['cover', 'contain'];

/**
 * All valid MIME type values.
 * Used for runtime validation if needed.
 */
export const VIDEO_MIME_TYPES: VideoMimeType[] = [
  'video/mp4',
  'video/webm',
  'video/ogg',
  'video/mov',
];

/**
 * Maps each ratio preset to its CSS `aspect-ratio` value.
 * Used by `Video.maps.ts` to generate the inline CSS custom property.
 */
export const VIDEO_RATIO_VALUES: Record<Exclude<VideoRatio, 'auto'>, string> = {
  square:   '1 / 1',
  video:    '16 / 9',
  portrait: '9 / 16',
  wide:     '21 / 9',
};
