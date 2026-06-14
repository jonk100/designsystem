/**
 * src/design/media/gallery/Gallery.maps.ts
 * Prop-to-CSS mapping utilities for the Gallery component.
 */

import type { GalleryColumns, GalleryGap } from './Gallery.types';
import { GALLERY_GAP_VALUES } from './Gallery.consts';

/**
 * Builds the inline CSS custom properties for the Gallery layout.
 * Returns a semicolon-joined string ready to pass to mergeStyles.
 *
 * @param columns - Number of columns for the grid layout.
 * @param gap     - Gap size token between items.
 * @returns A CSS custom property string.
 *
 * @example
 * buildGalleryStyles(3, 'md')
 * // '--gallery-columns: 3; --gallery-gap: var(--space--sm)'
 */
export function buildGalleryStyles(columns: GalleryColumns, gap: GalleryGap): string {
  return [
    `--gallery-columns: ${columns}`,
    `--gallery-gap: ${GALLERY_GAP_VALUES[gap]}`,
  ].join('; ');
}
