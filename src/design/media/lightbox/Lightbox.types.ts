/**
 * src/design/media/lightbox/Lightbox.types.ts
 * Type definitions for the Lightbox component and its controller.
 */

import type { GalleryImage, LightboxOpenPayload } from '../gallery/Gallery.types';

// Re-export for convenience so consumers only need to import from lightbox.
export type { GalleryImage, LightboxOpenPayload };

/**
 * Internal state managed by the Lightbox controller.
 */
export interface LightboxState {
  /** Whether the lightbox is currently open. */
  isOpen: boolean;
  /** All images in the current set. */
  images: GalleryImage[];
  /** Index of the currently displayed image. */
  currentIndex: number;
  /** The gallery ID that triggered this lightbox instance. */
  galleryId: string;
}

/**
 * DOM element selectors used by the Lightbox controller.
 * Centralised here so typos in selector strings only need fixing in one place.
 */
export interface LightboxSelectors {
  /** The root dialog element. */
  dialog: string;
  /** The main displayed image element. */
  image: string;
  /** The caption text element. */
  caption: string;
  /** The image counter element (e.g. "3 / 12"). */
  counter: string;
  /** The close button. */
  closeBtn: string;
  /** The previous image button. */
  prevBtn: string;
  /** The next image button. */
  nextBtn: string;
  /** The backdrop/overlay element. */
  backdrop: string;
}
