// src/design/overlays/context-menu/actions.ts

import { toast } from "@/design/feedback/toast/toast";

/**
 * Registry of reusable context menu action functions.
 * Import and compose these into contextMenu.register() calls:
 * 
 * contextMenu.register("menu-id", [
 *   actions.renameCard("menu-id"),
 *   actions.deleteCard("menu-id"),
 *   actions.toggleFavorite("menu-id"),
 */
export const contextMenuActions = {
  renameCard: {
    label: "Rename Card",
    action: () => toast.info("Rename option clicked"),
  },
  deleteCard: {
    label: "Delete Card",
    action: () => toast.error("Action not permitted"),
  },
  toggleFavorite: {
    label: "Toggle Favorite",
    action: () => toast.success("Added to favorites!"),
  },
};