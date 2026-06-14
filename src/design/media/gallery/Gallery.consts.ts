/**
 * src/design/media/gallery/Gallery.consts.ts
 * Constants for the Gallery component.
 */

import type { GalleryVariant, GalleryColumns, GalleryGap } from './Gallery.types';

/** All valid gallery layout variants. */
export const GALLERY_VARIANTS: GalleryVariant[] = ['grid', 'masonry', 'strip'];

/** All valid column counts. */
export const GALLERY_COLUMNS: GalleryColumns[] = [1, 2, 3, 4, 5, 6];

/** All valid gap sizes. */
export const GALLERY_GAPS: GalleryGap[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Maps gap size tokens to CSS custom property declarations.
 * Values reference the shared --space--* token scale.
 */
export const GALLERY_GAP_VALUES: Record<GalleryGap, string> = {
  none: '0',
  xs:   'var(--space--2xs)',
  sm:   'var(--space--xs)',
  md:   'var(--space--sm)',
  lg:   'var(--space--md)',
  xl:   'var(--space--lg)',
};

/** Custom event name dispatched when a gallery item is activated. */
export const LIGHTBOX_OPEN_EVENT = 'lightbox:open' as const;

/** Custom event name dispatched when the lightbox requests close. */
export const LIGHTBOX_CLOSE_EVENT = 'lightbox:close' as const;

/** Custom event dispatched when the lightbox navigates to a new image. */
export const LIGHTBOX_NAVIGATE_EVENT = 'lightbox:navigate' as const;
