import { MENU_ALIGN_OPTS, MENU_ORIENTATION_OPTS } from "./Menu.consts";
import type { SvgName } from "@/design/shared/icons/";

export type MenuAlignOptions = (typeof MENU_ALIGN_OPTS)[number];
export type MenuOrientationOptions = (typeof MENU_ORIENTATION_OPTS)[number];

/**
 * A standard navigation link item.
 * Can contain nested children to form a sub-menu.
 */
export interface MenuLinkItem {
  type: "link";
  label: string;
  href: string;
  icon?: SvgName;
  disabled?: boolean;
  active?: boolean;
  children?: MenuLinkItem[];
}

/**
 * A non-interactive section heading that labels a group of links.
 * Never focusable, never a link — purely decorative/semantic grouping.
 */
export interface MenuGroupItem {
  type: "group";
  label: string;
  icon?: string;
  children: MenuLinkItem[];
}

/**
 * A horizontal rule separating visual regions of the menu.
 * No label, no href, no children.
 */
export interface MenuSeparatorItem {
  type: "separator";
}

/**
 * The discriminated union of all valid menu item shapes.
 * Narrow with `item.type` before accessing type-specific fields.
 */
export type MenuItemDef = MenuLinkItem | MenuGroupItem | MenuSeparatorItem;
