import type { MenuAlignOptions, MenuOrientationOptions } from "./Menu.types";
import type { SpacingScale } from "@/design/shared/types";

export const MENU_MAP = {
  orientation: (val: MenuOrientationOptions) => `menu--${val}`,
  align: (val: MenuAlignOptions) => `menu--align-${val}`,
  gap: (val: SpacingScale) => `--local-gap: var(--sp-${val})`,
};
