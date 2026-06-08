import type { AnimationName } from '@/design/animation/motion.types';
import type { 
  FONT_SIZES, TEXT_TONES, BACKGROUND_TONES, X_ALIGNS, Y_ALIGNS,
  FONT_WEIGHTS, LINE_HEIGHTS, LETTER_SPACINGS, FONT_FAMILIES, WHITE_SPACES,
  COMPONENT_LAYERS, DISPLAY_SIZES, SPACING_SCALES, COMPONENT_RADII, DISPLAY_VARIANTS,
  LAYOUT_ALIGNS, DISPLAY_EFFECTS
} from './consts';

export type FontSize = typeof FONT_SIZES[number];
export type TextTone = typeof TEXT_TONES[number];
export type BackgroundTone = typeof BACKGROUND_TONES[number];
export type XAlign = typeof X_ALIGNS[number];
export type YAlign = typeof Y_ALIGNS[number];
export type FontWeight = typeof FONT_WEIGHTS[number];
export type LineHeight = typeof LINE_HEIGHTS[number];
export type LetterSpacing = typeof LETTER_SPACINGS[number];
export type FontFamily = typeof FONT_FAMILIES[number];
export type WhiteSpace = typeof WHITE_SPACES[number];
export type ComponentLayer = typeof COMPONENT_LAYERS[number];
export type DisplaySize = typeof DISPLAY_SIZES[number];
export type SpacingScale = typeof SPACING_SCALES[number];
export type ComponentRadius = typeof COMPONENT_RADII[number];
export type DisplayVariant = typeof DISPLAY_VARIANTS[number];
export type LayoutAlign = typeof LAYOUT_ALIGNS[number];
export type DisplayEffect = typeof DISPLAY_EFFECTS[number];

export type InlineStyle = Record<string, string | number>;

/** Shared interface for components using flexbox properties */
export interface FlexboxProps {
  gap?: SpacingScale;
  x?: LayoutAlign;
  y?: LayoutAlign;
  wrap?: boolean | 'reverse';
}

export interface AnimationConfig {
  name: AnimationName;
  duration: string;
  delay: string;
}

export interface FontStyleProps {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}