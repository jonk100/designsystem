/**
 * src/design/media/gallery/index.ts
 * Barrel exports for the Gallery component family.
 */

export type {
  GalleryVariant,
  GalleryColumns,
  GalleryGap,
  GalleryImage,
  LightboxOpenPayload,
} from './Gallery.types';

export {
  GALLERY_VARIANTS,
  GALLERY_COLUMNS,
  GALLERY_GAPS,
  GALLERY_GAP_VALUES,
  LIGHTBOX_OPEN_EVENT,
  LIGHTBOX_CLOSE_EVENT,
  LIGHTBOX_NAVIGATE_EVENT,
} from './Gallery.consts';

export { buildGalleryStyles } from './Gallery.maps';
