/**
 * src/design/overlays/context-menu/contextMenu.ts
 * Helper utility to register dynamic context menus.
 */

export type ContextMenuItem = 
  | { label: string; icon?: string; action: () => void; divider?: false }
  | { divider: true };

export const contextMenu = {
  /**
   * Registers options for a context menu identified by key.
   * Elements with `data-context-menu="[id]"` will trigger this menu on right click.
   * @param id - Identifies the context menu
   * @param items - Options rendered in the menu list
   */
  register(id: string, items: ContextMenuItem[]) {
    if (typeof window !== "undefined") {
      const win = window as any;
      win.__context_menus = win.__context_menus || {};
      win.__context_menus[id] = items;

      window.dispatchEvent(
        new CustomEvent("context-menu:register", { detail: { id, items } })
      );
    }
  }
};
