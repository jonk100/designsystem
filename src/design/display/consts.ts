/**
 * src/design/display/consts.ts
 * Use this file for category-level logic and types.
 * DO NOT put global shared tokens here.
 */

export const DISPLAY = {
  sizes: [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
  ] as const,
  variants: [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
  ] as const,
  effects: ["shimmer", "glass", "glow", "ping"] as const,
};
