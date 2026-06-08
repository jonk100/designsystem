import type { AudioVariant, AudioMimeType } from './Audio.types';

/**
 * All valid variant values.
 * Used for runtime validation if needed.
 */
export const AUDIO_VARIANTS: AudioVariant[] = ['native', 'minimal', 'none'];

/**
 * All valid MIME type values.
 * Used for runtime validation if needed.
 */
export const AUDIO_MIME_TYPES: AudioMimeType[] = [
  'audio/mpeg',
  'audio/ogg',
  'audio/wav',
  'audio/webm',
  'audio/aac',
  'audio/flac',
];
