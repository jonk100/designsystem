/**
 * src/design/overlays/modal/modal.ts
 * Programmatic triggers to open or close registered declarative modals by ID.
 */

export const modal = {
  /**
   * Opens the modal matching the specified element ID.
   * @param id - The element ID of the modal dialog
   */
  open(id: string) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("modal:open", { detail: { id } }));
    }
  },

  /**
   * Closes the modal matching the specified element ID.
   * @param id - The element ID of the modal dialog
   */
  close(id: string) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("modal:close", { detail: { id } }));
    }
  }
};
