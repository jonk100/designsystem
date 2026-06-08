/**
 * src/design/overlays/drawer/drawer.ts
 * Programmatic triggers to open or close drawers/sheets by ID.
 */

export const drawer = {
  /**
   * Opens the drawer/sheet matching the specified element ID.
   * @param id - The element ID of the drawer dialog
   */
  open(id: string) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("drawer:open", { detail: { id } }));
    }
  },

  /**
   * Closes the drawer/sheet matching the specified element ID.
   * @param id - The element ID of the drawer dialog
   */
  close(id: string) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("drawer:close", { detail: { id } }));
    }
  }
};
