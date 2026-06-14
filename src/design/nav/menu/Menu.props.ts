import type { BaseComponentProps } from "@/design/shared";
import type { NavProps } from "@/design/nav/nav.types";
import type { MenuItemDef } from "./Menu.types";

export interface NavMenuProps extends BaseComponentProps, NavProps {
  orientation?: "vertical" | "horizontal";
  align?: "start" | "center" | "end" | "justify";
  items: MenuItemDef[];
  label: string; // Required — unlabeled <nav> is a WCAG 2.4.1 failure
  bare?: boolean; // Optional — if true, the menu will be rendered without a `<nav>` wrapper
  collapsed?: boolean;
}
