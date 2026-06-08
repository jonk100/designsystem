import type { MediaComponentProps } from '@/design/media/props';
import type { VideoVariant, VideoRatio, VideoFit, VideoMimeType } from './Video.types';

/**
 * Props for the Video component.
 * Extends MediaComponentProps, which provides `src`, `caption`, and all
 * BaseComponentProps (animate, effects, bg, class, style, etc.)
 */
export interface VideoProps extends MediaComponentProps {
  /**
   * URL for the video poster image.
   * Displayed before the video plays and while it is loading.
   */
  poster?: string;

  /**
   * Controls how much of the player UI is rendered.
   * - `native`  — delegates entirely to the browser's built-in controls
   * - `minimal` — renders a custom overlay with play/pause, scrubber, time, and fullscreen
   * - `none`    — no controls; suitable for ambient or background video
   * Defaults to `native`.
   */
  variant?: VideoVariant;

  /**
   * Aspect ratio preset applied to the video wrapper.
   * Controls the `aspect-ratio` CSS property via a local CSS variable.
   * Defaults to `video` (16:9).
   */
  ratio?: VideoRatio;

  /**
   * How the video fills its container.
   * Maps to the CSS `object-fit` property on the `<video>` element.
   * Defaults to `contain`.
   */
  fit?: VideoFit;

  /**
   * MIME type hint for the video source.
   * Passed to `<source type>` so the browser can skip formats it cannot
   * decode without downloading the file first.
   * Optional — omit if the file extension makes the type unambiguous.
   */
  type?: VideoMimeType;

  /**
   * Whether the video should restart from the beginning when it ends.
   * Defaults to `false`.
   */
  loop?: boolean;

  /**
   * Whether the video should begin playing as soon as it is ready.
   * Most browsers require `muted` to be `true` for autoplay to be permitted.
   * Defaults to `false`.
   */
  autoplay?: boolean;

  /**
   * Whether the video should start muted.
   * Required by most browsers for autoplay to be permitted.
   * Defaults to `false`.
   */
  muted?: boolean;

  /**
   * Whether picture-in-picture mode should be disabled.
   * Defaults to `false`.
   */
  disablePip?: boolean;
}
