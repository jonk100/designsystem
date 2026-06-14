/**
 * src/design/display/types.ts
 * Use this file for category-level logic and types.
 * DO NOT put global shared tokens here.
 */
import { DISPLAY } from "./consts";
export type DisplaySize = (typeof DISPLAY.sizes)[number];
export type DisplayVariant = (typeof DISPLAY.variants)[number];
export type DisplayEffect = (typeof DISPLAY.effects)[number];
