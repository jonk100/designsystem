/** src/design/shared/consts.ts */

// ---------------------------------------------------------------------------
// Regex
// ---------------------------------------------------------------------------

/** Matches valid CSS time values: `0.3s`, `300ms`, `1s` */
export const TIME_VALUE_RE = /^\d+(\.\d+)?(s|ms)$/;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const FONT = {
  sizes: [
    "2xs",
    "xs",
    "sm",
    "md",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
  ] as const,
  weights: [
    "xlt",
    "lt",
    "md",
    "bold",
    "xbold",
    "black",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ] as const,
  families: ["sans", "serif", "mono", "display"] as const,
  lineHeights: [
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
    "6xl",
  ] as const,
  letterSpacings: [
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
    "6xl",
  ] as const,
  whiteSpaces: [
    "normal",
    "nowrap",
    "pre",
    "pre-wrap",
    "pre-line",
    "break-spaces",
  ] as const,
} as const;

// ---------------------------------------------------------------------------
// Color / Tone
// ---------------------------------------------------------------------------

export const TONE = {
  text: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "primary",
    "secondary",
    "accent",
    "white",
    "black",
    "default",
    "muted",
    "subtle",
    "danger",
    "success",
    "warning",
    "info",
    "currentColor",
    "inherit",
  ] as const,
  bg: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "primary",
    "secondary",
    "accent",
    "white",
    "black",
    "default",
    "transparent",
    "currentColor",
    "inherit",
    "danger",
    "success",
    "warning",
    "info",
  ] as const,
} as const;

// ---------------------------------------------------------------------------
// Alignment
// ---------------------------------------------------------------------------

export const ALIGN = {
  x: ["left", "center", "right", "justify", "start", "end"] as const,
  y: [
    "super",
    "top",
    "text-top",
    "baseline",
    "middle",
    "bottom",
    "text-bottom",
    "sub",
  ] as const,
  layout: [
    "start",
    "center",
    "end",
    "stretch",
    "between",
    "around",
    "evenly",
    "baseline",
  ] as const,
} as const;

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

export const SPACING = {
  scale: [
    "3xs",
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
    "none",
  ] as const,
  gap: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const,
} as const;

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export const COMPONENT = {
  layers: ["-1", "0", "1", "2", "3", "4", "5"] as const,
  radii: [
    "none",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ] as const,
  effects: ["shimmer", "glass", "glow", "ping"] as const,
} as const;

