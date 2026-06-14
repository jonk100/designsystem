import type { FONT, TONE, ALIGN, SPACING, COMPONENT } from "./consts";

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------
export type FontSize = (typeof FONT.sizes)[number];
export type FontWeight = (typeof FONT.weights)[number];
export type FontFamily = (typeof FONT.families)[number];
export type LineHeight = (typeof FONT.lineHeights)[number];
export type LetterSpacing = (typeof FONT.letterSpacings)[number];
export type WhiteSpace = (typeof FONT.whiteSpaces)[number];

// ---------------------------------------------------------------------------
// Color / Tone
// ---------------------------------------------------------------------------
export type TextTone = (typeof TONE.text)[number];
export type BackgroundTone = (typeof TONE.bg)[number];

// ---------------------------------------------------------------------------
// Alignment
// ---------------------------------------------------------------------------
export type XAlign = (typeof ALIGN.x)[number];
export type YAlign = (typeof ALIGN.y)[number];
export type LayoutAlign = (typeof ALIGN.layout)[number];

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------
export type SpacingScale = (typeof SPACING.scale)[number];
export type GapScale = (typeof SPACING.gap)[number];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export type ComponentLayer = (typeof COMPONENT.layers)[number];
export type ComponentRadius = (typeof COMPONENT.radii)[number];
export type ComponentEffect = (typeof COMPONENT.effects)[number];

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

/** A plain CSS-in-JS style object with camelCase keys */
export type InlineStyle = Record<string, string | number>;
