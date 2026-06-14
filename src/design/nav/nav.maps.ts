export const NAV_VAR_MAP = {
  gap: (val: string) => `--local-gap: var(--sp-${val})`,
};

import type { NavOrientation } from "./nav.types";
import type { NAV_ORIENTATIONS } from "./nav.consts";

/**
 * Maps navigation properties to CSS variables.
 * @see {@link NavOrientation}
 * @see {@link NAV_ORIENTATIONS}
 */
export const NAV_MAP = {
  orientation: (val: NavOrientation) => `--local-orientation: ${val}`,
  disabled: (val: boolean) => `--local-disabled: ${val ? "true" : "false"}`,
  ariaLabel: (val: string) => `--local-aria-label: ${val}`,
};