/**
 * src/design/display/maps.ts
 * Use this file for category-level logic and types.
 * DO NOT put global shared tokens here.
 */

import type { DisplaySize, DisplayVariant } from "./types";

/**
 * Get the CSS variable name for a given display size.
 * @param size - The display size to get the CSS variable name for.
 * @param variant -  The display variant which gets mapped to background, border, and hover border CSS variables.
 */
export const DISPLAY_VAR_MAP = {
  size: (val: DisplaySize): string => 
    `--local-size: var(--display-size-${val}); --local-padding: var(--display-padding-${val}); --local-height: var(--display-height-${val})`,
  
  variant: (val: DisplayVariant): string => 
    `--local-bg: var(--display-${val}-bg); --local-border: var(--display-${val}-border); --local-hover-bg: var(--display-${val}-hover-bg)`
};
