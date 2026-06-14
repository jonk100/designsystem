/**
 * src/design/media/lightbox/Lightbox.ts
 *
 * External controller for the Lightbox Region component.
 * Imported and initialised by Lightbox.astro via a <script> block.
 *
 * Responsibilities:
 * - Listen for `lightbox:open` CustomEvents dispatched by GalleryItem.
 * - Manage open / close state on the <dialog> element.
 * - Handle previous / next navigation.
 * - Respond to keyboard events (Arrow keys, Escape).
 * - Update image src, alt, caption, and counter in the DOM.
 * - Restore focus to the triggering element on close.
 * - Support swipe gestures on touch devices.
 *
 * This controller does NOT import Gallery or GalleryItem. Communication
 * is entirely via CustomEvents, keeping the two sides decoupled.
 */

import type { LightboxState, GalleryImage } from './Lightbox.types';
import {
  LIGHTBOX_OPEN_EVENT,
  LIGHTBOX_CLOSE_EVENT,
} from '../gallery/Gallery.consts';

// ---------------------------------------------------------------------------
// DOM selectors — one place to update if IDs/attrs change
// ---------------------------------------------------------------------------

/** Data attribute selectors for all Lightbox DOM nodes. */
const SEL = {
  dialog:   '[data-lightbox-region]',
  backdrop: '[data-lightbox-backdrop]',
  image:    '[data-lightbox-image]',
  caption:  '[data-lightbox-caption]',
  counter:  '[data-lightbox-counter]',
  close:    '[data-lightbox-close]',
  prev:     '[data-lightbox-prev]',
  next:     '[data-lightbox-next]',
} as const;

// ---------------------------------------------------------------------------
// Module-level state
// ---------------------------------------------------------------------------

/** Mutable state for the current lightbox session. */
const state: LightboxState = {
  isOpen:       false,
  images:       [],
  currentIndex: 0,
  galleryId:    '',
};

/** The element that had focus before the lightbox opened. Restored on close. */
let previouslyFocused: HTMLElement | null = null;

/** Touch start X position for swipe detection. */
let touchStartX = 0;

// ---------------------------------------------------------------------------
// DOM helpers
// ---------------------------------------------------------------------------

/**
 * Retrieves a required DOM element within a given root.
 * Logs a warning if the element isn't found — useful during development.
 *
 * @param root     - The element to search within.
 * @param selector - CSS selector string.
 * @returns The found element, or null.
 */
function qs<T extends HTMLElement>(root: Element | Document, selector: string): T | null {
  const el = root.querySelector<T>(selector);
  if (!el) console.warn(`[Lightbox] Element not found: ${selector}`);
  return el;
}

// ---------------------------------------------------------------------------
// State updater — syncs DOM with current state
// ---------------------------------------------------------------------------

/**
 * Updates all lightbox DOM elements to reflect the current state.
 * Called after any navigation or open event.
 *
 * @param dialog - The <dialog> element to update within.
 */
function render(dialog: HTMLDialogElement): void {
  const { images, currentIndex } = state;
  const current: GalleryImage | undefined = images[currentIndex];

  if (!current) return;

  const imgEl    = qs<HTMLImageElement>(dialog, SEL.image);
  const captEl   = qs<HTMLParagraphElement>(dialog, SEL.caption);
  const counterEl = qs<HTMLSpanElement>(dialog, SEL.counter);
  const prevBtn  = qs<HTMLButtonElement>(dialog, SEL.prev);
  const nextBtn  = qs<HTMLButtonElement>(dialog, SEL.next);

  if (imgEl) {
    imgEl.src = current.src;
    imgEl.alt = current.alt;
  }

  if (captEl) {
    captEl.textContent = current.caption ?? '';
    // Hide the footer visually if there's no caption.
    captEl.closest('.lightbox__footer')?.classList.toggle(
      'lightbox__footer--empty',
      !current.caption
    );
  }

  if (counterEl) {
    counterEl.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  // Hide prev/next buttons when at the boundary — no wrapping.
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) nextBtn.disabled = currentIndex === images.length - 1;
}

// ---------------------------------------------------------------------------
// Open / close
// ---------------------------------------------------------------------------

/**
 * Opens the lightbox with the provided image set and starting index.
 *
 * @param dialog    - The <dialog> element to open.
 * @param images    - The full array of images for this gallery session.
 * @param index     - The zero-based index of the image to display first.
 * @param galleryId - The ID of the Gallery that triggered this open.
 */
function openLightbox(
  dialog: HTMLDialogElement,
  images: GalleryImage[],
  index: number,
  galleryId: string
): void {
  // Capture the currently focused element so we can restore it on close.
  previouslyFocused = document.activeElement as HTMLElement;

  // Update state.
  state.isOpen       = true;
  state.images       = images;
  state.currentIndex = index;
  state.galleryId    = galleryId;

  // Render the initial image.
  render(dialog);

  // showModal() opens the dialog as a top-layer modal with a ::backdrop.
  dialog.showModal();

  // Move focus to the close button so keyboard users have an immediate target.
  qs<HTMLButtonElement>(dialog, SEL.close)?.focus();
}

/**
 * Closes the lightbox and restores focus to the element that opened it.
 *
 * @param dialog - The <dialog> element to close.
 */
function closeLightbox(dialog: HTMLDialogElement): void {
  state.isOpen    = false;
  state.images    = [];
  state.galleryId = '';

  dialog.close();

  // Restore focus to the gallery item that triggered the open.
  previouslyFocused?.focus();
  previouslyFocused = null;

  // Allow external listeners to react to close (e.g. analytics).
  window.dispatchEvent(new CustomEvent(LIGHTBOX_CLOSE_EVENT));
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

/**
 * Navigates to the previous image. No-op at the start of the set.
 *
 * @param dialog - The <dialog> element to update.
 */
function prev(dialog: HTMLDialogElement): void {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    render(dialog);
  }
}

/**
 * Navigates to the next image. No-op at the end of the set.
 *
 * @param dialog - The <dialog> element to update.
 */
function next(dialog: HTMLDialogElement): void {
  if (state.currentIndex < state.images.length - 1) {
    state.currentIndex += 1;
    render(dialog);
  }
}

// ---------------------------------------------------------------------------
// Event listeners
// ---------------------------------------------------------------------------

/**
 * Wires up all event listeners for the Lightbox.
 * Called once by initLightbox after the dialog is confirmed to exist.
 *
 * @param dialog - The <dialog> element to attach listeners to.
 */
function attachListeners(dialog: HTMLDialogElement): void {

  // ── Open ──────────────────────────────────────────────────────────────────

  /**
   * Listens for `lightbox:open` events dispatched by GalleryItem.
   * Any gallery on the page can trigger this single Lightbox.
   */
  window.addEventListener(LIGHTBOX_OPEN_EVENT, (e: Event) => {
    const { images, index, galleryId } = (e as CustomEvent).detail;
    openLightbox(dialog, images, index, galleryId);
  });

  // ── Close ─────────────────────────────────────────────────────────────────

  /** Close button click. */
  qs<HTMLButtonElement>(dialog, SEL.close)?.addEventListener('click', () => {
    closeLightbox(dialog);
  });

  /**
   * Clicking the backdrop (outside the container) closes the lightbox.
   * We check the click target — clicks on the container itself should not close.
   */
  dialog.addEventListener('click', (e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('.lightbox__container') === null) {
      closeLightbox(dialog);
    }
  });

  /** Native dialog cancel event (e.g. Escape key pressed). */
  dialog.addEventListener('cancel', (e: Event) => {
    e.preventDefault(); // Prevent default close so our state is cleaned up.
    closeLightbox(dialog);
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  qs<HTMLButtonElement>(dialog, SEL.prev)?.addEventListener('click', () => prev(dialog));
  qs<HTMLButtonElement>(dialog, SEL.next)?.addEventListener('click', () => next(dialog));

  // ── Keyboard ──────────────────────────────────────────────────────────────

  /**
   * Keyboard navigation while the lightbox is open.
   * Arrow keys navigate; Escape closes.
   */
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!state.isOpen) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        prev(dialog);
        break;
      case 'ArrowRight':
        e.preventDefault();
        next(dialog);
        break;
      case 'Escape':
        e.preventDefault();
        closeLightbox(dialog);
        break;
    }
  });

  // ── Touch / swipe ─────────────────────────────────────────────────────────

  /**
   * Records the X position at the start of a touch.
   * Used to determine swipe direction on touchend.
   */
  dialog.addEventListener('touchstart', (e: TouchEvent) => {
    touchStartX = e.changedTouches[0]?.clientX ?? 0;
  }, { passive: true });

  /**
   * Calculates swipe direction and navigates accordingly.
   * A minimum swipe distance of 50px is required to trigger navigation,
   * reducing accidental swipes.
   */
  dialog.addEventListener('touchend', (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0]?.clientX ?? 0;
    const delta = touchStartX - touchEndX;
    const MIN_SWIPE_PX = 50;

    if (Math.abs(delta) < MIN_SWIPE_PX) return;

    if (delta > 0) {
      next(dialog); // Swiped left → next
    } else {
      prev(dialog); // Swiped right → prev
    }
  }, { passive: true });
}

// ---------------------------------------------------------------------------
// Initialiser — called by Lightbox.astro
// ---------------------------------------------------------------------------

/**
 * Finds the Lightbox dialog element in the DOM and initialises the controller.
 * Safe to call multiple times — exits early if already initialised or if the
 * dialog element isn't present on this page.
 *
 * @example
 * // In Lightbox.astro's <script> block:
 * import { initLightbox } from './Lightbox.ts';
 * initLightbox();
 */
export function initLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>(SEL.dialog);

  if (!dialog) {
    // No lightbox on this page — silently exit.
    return;
  }

  if (dialog.dataset.lightboxInit === 'true') {
    // Already initialised — prevent double-binding listeners.
    return;
  }

  dialog.dataset.lightboxInit = 'true';
  attachListeners(dialog);
}
