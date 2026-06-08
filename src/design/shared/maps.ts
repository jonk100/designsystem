import type { FontSize, TextTone, BackgroundTone, XAlign, YAlign, SpacingScale } from '@/design/shared/types';

/**
 * Maps numeric font sizes to their named equivalents
 */
export const FONT_SIZE_MAP: Record<string, string> = {
  '0': '2xs',
  '1': 'xs',
  '2': 'sm',
  '3': 'md',
  '4': 'base',
  '5': 'lg',
  '6': 'xl',
  '7': '2xl',
  '8': '3xl',
  '9': '4xl',
  '10': '5xl',
  '11': '6xl'
};

//     Maps font sizes to their CSS class names
export function getFontSizeClass(size: FontSize): string {
  const normalized =
    size in FONT_SIZE_MAP
      ? FONT_SIZE_MAP[size as keyof typeof FONT_SIZE_MAP]
      : size;

  return `fs--${normalized}`;
}

/** - - -- - - - - - -  - - - - - -  
* USAGE
* - getFontSizeClass('0');
* - getFontSizeClass('2xs');
* - getFontSizeClass('4');
* - getFontSizeClass('base');
* --------------------------------------------------------------*/

/**
 * Maps text tones to their CSS class names
 */
export const TEXT_TONE_CLASS_MAP: Record<TextTone, string> = {
  '0': 'text-0',
  '1': 'text-1',
  '2': 'text-2',
  '3': 'text-3',
  '4': 'text-4',
  '5': 'text-5',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'accent': 'text-accent',
  'white': 'text-white',
  'black': 'text-black',
  'default': 'text-default',
  'muted': 'text-muted',
  'subtle': 'text-subtle',
  'danger': 'text-danger',
  'success': 'text-success',
  'currentColor': 'text-current',
  'inherit': 'text-inherit'
};

/**
 * Maps background tones to their CSS class names
 */
export const BACKGROUND_TONE_CLASS_MAP: Record<BackgroundTone, string> = {
  '0': 'bg-0',
  '1': 'bg-1',
  '2': 'bg-2',
  '3': 'bg-3',
  '4': 'bg-4',
  '5': 'bg-5',
  'primary': 'bg-primary',
  'secondary': 'bg-secondary',
  'accent': 'bg-accent',
  'white': 'bg-white',
  'black': 'bg-black',
  'default': 'bg-default',
  'transparent': 'bg-transparent',
  'currentColor': 'bg-current',
  'inherit': 'bg-inherit'
};

/**
 * Maps horizontal alignments to their CSS class names
 */
export const X_ALIGN_CLASS_MAP: Record<XAlign, string> = {
  'left': 'text-left',
  'center': 'text-center',
  'right': 'text-right',
  'justify': 'text-justify',
  'start': 'text-start',
  'end': 'text-end'
};

/**
 * Maps vertical alignments to their CSS class names
 */
export const Y_ALIGN_CLASS_MAP: Record<YAlign, string> = {
  'super': 'align-super',
  'top': 'align-top',
  'text-top': 'align-text-top',
  'baseline': 'align-baseline',
  'middle': 'align-middle',
  'bottom': 'align-bottom',
  'text-bottom': 'align-text-bottom',
  'sub': 'align-sub'
};

/**
 * Maps numeric shorthand keys to named gap scale steps.
 * Allows consumers to pass either '0' or '2xs', '1' or 'xs', etc.
 */
export const GAP_MAP: Record<string, string> = {
  '0': '2xs',
  '1': 'xs',
  '2': 'sm',
  '3': 'md',
  '4': 'lg',
  '5': 'xl',
  '6': '2xl',
  '7': '3xl',
  '8': '4xl',
  '9': '5xl',
};

/**
 * Resolves a gap value to its CSS class name.
 * Accepts either a numeric key ('0'–'9') or a named step ('2xs'–'5xl').
 *
 * @param gap - The gap value to resolve, either numeric or named.
 * @returns The CSS class string, e.g. 'gap--md'.
 *
 * @example
 * getGapClass('3')    // → 'gap--md'
 * getGapClass('md')   // → 'gap--md'
 * getGapClass('2xl')  // → 'gap--2xl'
 */
export function getGapClass(gap: SpacingScale): string {
  const normalized =
    gap in GAP_MAP
      ? GAP_MAP[gap as keyof typeof GAP_MAP]
      : gap;
  return `gap--${normalized}`;
}

/**
 * Generates local CSS variables for typographic and semantic props.
 * This pattern replaces utility classes for properties that map to complex design tokens.
 */
export const STYLE_VAR_MAP = {
  fontSize: (val: string) => `--local-fs: var(--fs-${FONT_SIZE_MAP[val] || val})`,
  fontWeight: (val: string) => `--local-fw: var(--fw-${val})`,
  leading: (val: string) => `--local-lh: var(--lh-${val})`,
  tracking: (val: string) => `--local-ls: var(--ls-${val})`,
  tone: (val: string) => `--local-color: var(--text-${val})`, // Adjust variable name if some use --fg-*
};