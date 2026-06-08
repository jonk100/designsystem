import type { MediaComponentProps } from '@/design/media/props';
import type { ImageRatio, ImageFit, ImageRounded, ImageLoading, ImageDecoding } from './Image.types';

/**
 * Props for the Image component.
 * Extends MediaComponentProps, which provides `src`, `caption`, and all
 * BaseComponentProps (animate, effects, bg, class, style, etc.)
 */
export interface ImageProps extends MediaComponentProps {
  /**
   * Descriptive alt text for the image.
   * Required for accessibility. Pass an empty string (`alt=""`) only
   * for purely decorative images that convey no information.
   */
  alt: string;

  /**
   * Aspect ratio preset applied to the figure wrapper.
   * Controls the `aspect-ratio` CSS property via a local CSS variable.
   * Defaults to `auto`, which lets the image use its intrinsic dimensions.
   */
  ratio?: ImageRatio;

  /**
   * How the image fills its container.
   * Maps to the CSS `object-fit` property on the `<img>` element.
   * Defaults to `cover`.
   */
  fit?: ImageFit;

  /**
   * Applies border-radius token classes to the figure wrapper.
   * Pass `true` to use the default `md` radius, or a specific size token.
   * Defaults to `false` (no rounding).
   */
  rounded?: ImageRounded;

  /**
   * Native browser loading strategy for the `<img>` element.
   * Use `lazy` for below-the-fold images to defer loading.
   * Defaults to `lazy`.
   */
  loading?: ImageLoading;

  /**
   * Controls whether the image is decoded on or off the main thread.
   * `async` avoids blocking rendering while the image is decoded.
   * Defaults to `async`.
   */
  decoding?: ImageDecoding;
}