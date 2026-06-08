import type { MediaComponentProps } from '@/design/media/props';
import type { AudioVariant, AudioMimeType } from './Audio.types';

/**
 * Props for the Audio component.
 * Extends MediaComponentProps, which provides `src`, `caption`, and all
 * BaseComponentProps (animate, effects, bg, class, style, etc.)
 */
export interface AudioProps extends MediaComponentProps {
  /**
   * Optional visible title rendered above the player.
   * Useful for identifying the track, episode, or clip.
   */
  title?: string;

  /**
   * Optional secondary label rendered beneath the title.
   * Typically used for the artist name, show name, or source.
   */
  label?: string;

  /**
   * Controls how much of the player UI is rendered.
   * - `native`  — delegates entirely to the browser's built-in controls
   * - `minimal` — renders a custom single-line play/pause + scrubber + time display
   * - `none`    — no controls; useful when playback is driven by an external trigger
   * Defaults to `native`.
   */
  variant?: AudioVariant;

  /**
   * MIME type hint for the audio source.
   * Passed to `<source type>` so the browser can skip formats it cannot
   * decode without downloading the file first.
   * Optional — omit if the file extension makes the type unambiguous.
   */
  type?: AudioMimeType;

  /**
   * Whether the audio should restart from the beginning when it ends.
   * Defaults to `false`.
   */
  loop?: boolean;

  /**
   * Whether the audio should begin playing as soon as it is ready.
   * Browsers may block autoplay without a prior user interaction.
   * Defaults to `false`.
   */
  autoplay?: boolean;

  /**
   * Whether the audio should start muted.
   * Required by most browsers for autoplay to be permitted.
   * Defaults to `false`.
   */
  muted?: boolean;
}
