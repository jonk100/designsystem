import type {
  FontSize,
  TextTone,
  BackgroundTone,
  XAlign,
  YAlign,
  SpacingScale,
  ComponentRadius,
  FontWeight,
  LineHeight,
  LetterSpacing,
} from "./types";

import type { LayoutAlign } from "./types";
// ---------------------------------------------------------------------------
// Internal lookup tables
// ---------------------------------------------------------------------------

/**
 * Maps numeric font size shorthand keys to their named token equivalents.
 * Allows consumers to pass either `'0'` or `'2xs'`, `'4'` or `'base'`, etc.
 */
const FONT_SIZE_ALIASES: Record<string, string> = {
  "0": "2xs",
  "1": "xs",
  "2": "sm",
  "3": "md",
  "4": "base",
  "5": "lg",
  "6": "xl",
  "7": "2xl",
  "8": "3xl",
  "9": "4xl",
  "10": "5xl",
  "11": "6xl",
};

/**
 * Maps numeric gap shorthand keys to their named token equivalents.
 * Allows consumers to pass either `'0'` or `'2xs'`, `'3'` or `'md'`, etc.
 */
const GAP_ALIASES: Record<string, string> = {
  "0": "2xs",
  "1": "xs",
  "2": "sm",
  "3": "md",
  "4": "lg",
  "5": "xl",
  "6": "2xl",
  "7": "3xl",
  "8": "4xl",
  "9": "5xl",
};

// ---------------------------------------------------------------------------
// Class maps
// ---------------------------------------------------------------------------

/**
 * CSS class maps for values that have a 1:1 token → class relationship
 * and don't require normalization or CSS variable injection.
 *
 * These are kept as plain Record maps rather than functions because the
 * mapping is exhaustive, type-safe, and requires no runtime transformation.
 */

/** Maps text tone tokens to their `text-*` CSS class names */
export const TEXT_TONE_CLASS_MAP: Record<TextTone, string> = {
  "0": "text-0",
  "1": "text-1",
  "2": "text-2",
  "3": "text-3",
  "4": "text-4",
  "5": "text-5",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  white: "text-white",
  black: "text-black",
  default: "text-default",
  muted: "text-muted",
  subtle: "text-subtle",
  danger: "text-danger",
  success: "text-success",
  info: "info",
  warning: "warning",
  currentColor: "text-current",
  inherit: "text-inherit",
};

/** Maps background tone tokens to their `bg-*` CSS class names */
export const BACKGROUND_TONE_CLASS_MAP: Record<BackgroundTone, string> = {
  "0": "--layer-0--bg",
  "1": "--layer-1--bg",
  "2": "--layer-2--bg",
  "3": "--layer-3--bg",
  "4": "--layer-4--bg",
  "5": "--layer-5--bg",
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  white: "bg-white",
  black: "bg-black",
  default: "bg-default",
  transparent: "bg-transparent",
  danger: "danger--surface",
  success: "success--surface",
  info: "info--surface",
  warning: "warning--surface",
  currentColor: "bg-current",
  inherit: "bg-inherit",
};

/** Maps horizontal alignment tokens to their `text-*` CSS class names */
export const X_ALIGN_CLASS_MAP: Record<XAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};

/** Maps vertical alignment tokens to their `align-*` CSS class names */
export const Y_ALIGN_CLASS_MAP: Record<YAlign, string> = {
  super: "align-super",
  top: "align-top",
  "text-top": "align-text-top",
  baseline: "align-baseline",
  middle: "align-middle",
  bottom: "align-bottom",
  "text-bottom": "align-text-bottom",
  sub: "align-sub",
};

// ---------------------------------------------------------------------------
// CSS variable maps
// ---------------------------------------------------------------------------

/**
 * Maps typography prop names to functions that produce scoped CSS custom
 * property declarations. Components consume these via `var(--local-*)`.
 *
 * Font size accepts both numeric shorthands (`'0'`–`'11'`) and named tokens
 * (`'2xs'`–`'6xl'`); all others accept their token values directly.
 */
export const FONT_MAP = {
  /**
   * @param val - A {@link FontSize} token, numeric or named
   * @returns e.g. `'--local-fs: var(--fs-md)'`
   */
  size: (val: FontSize): string =>
    `--local-fs: var(--fs-${FONT_SIZE_ALIASES[val] ?? val})`,

  /**
   * @param val - A {@link FontWeight} token
   * @returns e.g. `'--local-fw: var(--fw-bold)'`
   */
  weight: (val: FontWeight): string =>
    `--local-fw: var(--fw-${val})`,

  /**
   * @param val - A {@link LineHeight} token
   * @returns e.g. `'--local-lh: var(--lh-tight)'`
   */
  lineHeight: (val: LineHeight): string =>
    `--local-lh: var(--lh-${val})`,

  /**
   * @param val - A {@link LetterSpacing} token
   * @returns e.g. `'--local-ls: var(--ls-wide)'`
   */
  letterSpacing: (val: LetterSpacing): string =>
    `--local-ls: var(--ls-${val})`,
} as const;

/**
 * Maps tone prop names to functions that produce scoped CSS custom
 * property declarations. Components consume these via `var(--local-*)`.
 */
export const TONE_MAP = {
  /**
   * @param val - A {@link TextTone} token
   * @returns e.g. `'--local-color: var(--text-muted)'`
   */
  text: (val: TextTone): string =>
    `--local-color: var(--text-${val})`,
} as const;

/**
 * Maps spacing prop names to functions that produce scoped CSS custom
 * property declarations. Components consume these via `var(--local-*)`.
 *
 * Gap accepts both numeric shorthands (`'0'`–`'9'`) and named tokens
 * (`'2xs'`–`'5xl'`); all others accept {@link SpacingScale} tokens directly.
 */
export const SPACING_MAP = {
  /** @param val - e.g. `'md'` → `'--local-margin: var(--sp-md)'` */
  margin: (val: SpacingScale): string =>
    `--local-margin: var(--sp-${val})`,

  /** @param val - e.g. `'lg'` → `'--local-mx: var(--sp-lg)'` */
  mx: (val: SpacingScale): string =>
    `--local-mx: var(--sp-${val})`,

  /** @param val - e.g. `'sm'` → `'--local-my: var(--sp-sm)'` */
  my: (val: SpacingScale): string =>
    `--local-my: var(--sp-${val})`,

  /** @param val - e.g. `'xl'` → `'--local-padding: var(--sp-xl)'` */
  padding: (val: SpacingScale): string =>
    `--local-padding: var(--sp-${val})`,

  /** @param val - e.g. `'xs'` → `'--local-px: var(--sp-xs)'` */
  px: (val: SpacingScale): string =>
    `--local-px: var(--sp-${val})`,

  /** @param val - e.g. `'2xl'` → `'--local-py: var(--sp-2xl)'` */
  py: (val: SpacingScale): string =>
    `--local-py: var(--sp-${val})`,

  /**
   * Accepts both numeric shorthands and named tokens.
   * @param val - e.g. `'3'` or `'md'` → `'--local-gap: var(--sp-md)'`
   */
  gap: (val: SpacingScale): string =>
    `--local-gap: var(--sp-${GAP_ALIASES[val] ?? val})`,
} as const;

/**
 * Maps border radius prop names to functions that produce scoped CSS custom
 * property declarations. Components consume these via `var(--local-*)`.
 */
export const RADIUS_MAP = {
  /** @param val - e.g. `'md'` → `'--local-rad: var(--rad-md)'` */
  rad: (val: ComponentRadius): string =>
    `--local-rad: var(--rad-${val})`,
} as const;

/** Maps logical layout alignments to standard CSS flexbox/grid property values */
export const LAYOUT_ALIGN_MAP: Record<LayoutAlign, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  baseline: "baseline"
};