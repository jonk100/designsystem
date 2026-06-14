/**
 * src/design/media/gallery/Gallery.types.ts
 * Type definitions for the Gallery and GalleryItem components.
 */

/**
 * Layout variant for the Gallery component.
 *
 * - `grid`    — Uniform columns. All items share the same cell size.
 *               Best for homogeneous content (avatars, album art, thumbnails).
 * - `masonry` — Variable-height columns via CSS `grid-template-rows: masonry`
 *               (with JS fallback for browsers that don't support it yet).
 *               Best for photography with mixed aspect ratios.
 * - `strip`   — Single horizontal row, horizontally scrollable.
 *               Best for timelines, film strips, or preview rows.
 */
export type GalleryVariant = 'grid' | 'masonry' | 'strip';

/**
 * Number of columns in the gallery grid.
 * Accepts a number (uniform across breakpoints) or a responsive object.
 */
export type GalleryColumns = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Gap between gallery items.
 * Maps to shared SpacingScale tokens.
 */
export type GalleryGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Data shape for a single gallery image.
 * Used when passing images as a data array rather than via slots.
 */
export interface GalleryImage {
  /** URL of the image. */
  src: string;
  /** Alt text for the image. Required for accessibility. */
  alt: string;
  /** Optional caption displayed on hover or in the lightbox. */
  caption?: string;
  /** Optional width hint (used by masonry layout). */
  width?: number;
  /** Optional height hint (used by masonry layout). */
  height?: number;
}

/**
 * Payload dispatched by the `lightbox:open` custom event.
 * Consumed by the Lightbox controller.
 */
export interface LightboxOpenPayload {
  /** All images in the current gallery, in order. */
  images: GalleryImage[];
  /** Index of the image that triggered the open. */
  index: number;
  /** The gallery instance ID, used to scope event listeners. */
  galleryId: string;
}
