import type { BaseComponentProps } from '../shared';

/**
 * Base props shared across all media components.
 *
 * All media components (Image, Audio, Video, etc.) extend this interface.
 * It establishes the common surface that consumers can rely on regardless
 * of which media component they are using.
 *
 * @example
 * // In a component-level props file:
 * import type { MediaComponentProps } from '../media.props';
 *
 * export interface ImageProps extends MediaComponentProps {
 *   ratio?: ImageRatio;
 *   fit?: ImageFit;
 * }
 */
export interface MediaComponentProps extends BaseComponentProps {
  /**
   * The media source URL.
   * Required on all media components — images, audio tracks, video files, etc.
   */
  src: string;

  /**
   * A text label associated with the media.
   * Rendered as a visible `<figcaption>` beneath the media element.
   * Optional on all media components.
   */
  caption?: string;
}