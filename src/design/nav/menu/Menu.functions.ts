// Menu.functions.ts

import type { MenuItemDef, MenuLinkItem } from "./Menu.types";

/**
 * Validates that all link items in a collapsed menu have icons defined.
 * Emits a console warning in dev mode for any items missing an icon.
 * No-ops in production.
 *
 * @param items - The full list of menu item definitions to check
 * @param componentName - The display name used in the warning message
 */
export function warnIfCollapsedItemsMissingIcons(
  items: MenuItemDef[],
  componentName = "Menu",
): void {
  if (!import.meta.env.DEV) return;

  const missingIcons = items
    .filter((i): i is MenuLinkItem => i.type === "link")
    .filter((i) => !i.icon);

  if (missingIcons.length > 0) {
    console.warn(
      `[${componentName}] collapsed={true} but these items are missing icons:`,
      missingIcons.map((i) => i.label),
    );
  }
}
