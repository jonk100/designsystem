import type { FontSize, TextTone, BackgroundTone, XAlign, YAlign } from '@/design/shared/types';

export const FONT_SIZES: FontSize[] = [
  '0', '2xs',
  '1', 'xs',
  '2', 'sm',
  '3', 'md',
  '4', 'base',
  '5', 'lg',
  '6', 'xl',
  '7', '2xl',
  '8', '3xl',
  '9', '4xl',
  '10', '5xl',
  '11', '6xl'
];

export const TEXT_TONES: TextTone[] = [
  '0', '1', '2', '3', '4', '5',
  'primary', 'secondary', 'accent',
  'white', 'black',
  'default', 'muted', 'subtle',
  'danger', 'success',
  'currentColor', 'inherit'
];

export const BACKGROUND_TONES: BackgroundTone[] = [
  '0', '1', '2', '3', '4', '5',
  'primary', 'secondary', 'accent',
  'white', 'black',
  'default', 'transparent',
  'currentColor', 'inherit'
];

export const X_ALIGNMENTS: XAlign[] = [
  'left', 'center', 'right',
  'justify', 'start', 'end'
];

export const Y_ALIGNMENTS: YAlign[] = [
  'super', 'top', 'text-top',
  'baseline', 'middle',
  'bottom', 'text-bottom', 'sub'
];

export const DEFAULT_FONT_SIZE: FontSize = 'base';
export const DEFAULT_TEXT_TONE: TextTone = 'default';
export const DEFAULT_BACKGROUND_TONE: BackgroundTone = 'transparent';
export const DEFAULT_X_ALIGN: XAlign = 'left';
export const DEFAULT_Y_ALIGN: YAlign = 'baseline';

// Made with Bob
