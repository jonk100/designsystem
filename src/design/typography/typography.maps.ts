import type { FontSize, TextTone, BackgroundTone, XAlign, YAlign } from './typography.types';

/**
 * Maps numeric font sizes to their named equivalents
 */
export const FONT_SIZE_MAP: Record<string, string> = {
  '0': 'xxs',
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

/**
 * Maps font sizes to their CSS class names
 */
export const FONT_SIZE_CLASS_MAP: Record<FontSize, string> = {
  '0': 'text--xxs',
  'xxs': 'text--xxs',
  '1': 'text--xs',
  'xs': 'text--xs',
  '2': 'text--sm',
  'sm': 'text--sm',
  '3': 'text--md',
  'md': 'text--md',
  '4': 'text--base',
  'base': 'text--base',
  '5': 'text--lg',
  'lg': 'text--lg',
  '6': 'text--xl',
  'xl': 'text--xl',
  '7': 'text--2xl',
  '2xl': 'text--2xl',
  '8': 'text--3xl',
  '3xl': 'text--3xl',
  '9': 'text--4xl',
  '4xl': 'text--4xl',
  '10': 'text--5xl',
  '5xl': 'text--5xl',
  '11': 'text--6xl',
  '6xl': 'text--6xl'
};

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

// Made with Bob
