/**
 * src/design/display/maps.ts
 * Use this file for category-level logic and types.
 * DO NOT put global shared tokens here.
 */

import type { DisplaySize } from "../shared/types";

export const DISPLAY_VAR_MAP = {
  size: (val: DisplaySize) => `--local-size: var(--display-size-${val})`,
};
