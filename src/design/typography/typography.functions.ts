import type { FontSize, TextTone, BackgroundTone, XAlign, YAlign } from './typography.types';

/**
 * Validates if a value is a valid font size
 */
export function isValidFontSize(value: string): value is FontSize {
  const validSizes: FontSize[] = [
    '0', 'xxs', '1', 'xs', '2', 'sm', '3', 'md',
    '4', 'base', '5', 'lg', '6', 'xl', '7', '2xl',
    '8', '3xl', '9', '4xl', '10', '5xl', '11', '6xl'
  ];
  return validSizes.includes(value as FontSize);
}

/**
 * Validates if a value is a valid text tone
 */
export function isValidTextTone(value: string): value is TextTone {
  const validTones: TextTone[] = [
    '0', '1', '2', '3', '4', '5',
    'primary', 'secondary', 'accent',
    'white', 'black', 'default', 'muted', 'subtle',
    'danger', 'success', 'currentColor', 'inherit'
  ];
  return validTones.includes(value as TextTone);
}

/**
 * Validates if a value is a valid background tone
 */
export function isValidBackgroundTone(value: string): value is BackgroundTone {
  const validTones: BackgroundTone[] = [
    '0', '1', '2', '3', '4', '5',
    'primary', 'secondary', 'accent',
    'white', 'black', 'default', 'transparent',
    'currentColor', 'inherit'
  ];
  return validTones.includes(value as BackgroundTone);
}

/**
 * Validates if a value is a valid horizontal alignment
 */
export function isValidXAlign(value: string): value is XAlign {
  const validAligns: XAlign[] = ['left', 'center', 'right', 'justify', 'start', 'end'];
  return validAligns.includes(value as XAlign);
}

/**
 * Validates if a value is a valid vertical alignment
 */
export function isValidYAlign(value: string): value is YAlign {
  const validAligns: YAlign[] = [
    'super', 'top', 'text-top', 'baseline',
    'middle', 'bottom', 'text-bottom', 'sub'
  ];
  return validAligns.includes(value as YAlign);
}

/**
 * Converts a numeric font size to its named equivalent
 */
export function getFontSizeName(size: FontSize): string {
  const sizeMap: Record<string, string> = {
    '0': 'xxs', '1': 'xs', '2': 'sm', '3': 'md',
    '4': 'base', '5': 'lg', '6': 'xl', '7': '2xl',
    '8': '3xl', '9': '4xl', '10': '5xl', '11': '6xl'
  };
  return sizeMap[size] || size;
}

/**
 * Gets the CSS class name for a font size
 */
export function getFontSizeClass(size: FontSize): string {
  return `text-${getFontSizeName(size)}`;
}

/**
 * Gets the CSS class name for a text tone
 */
export function getTextToneClass(tone: TextTone): string {
  return `text-${tone}`;
}

/**
 * Gets the CSS class name for a background tone
 */
export function getBackgroundToneClass(tone: BackgroundTone): string {
  return `bg-${tone}`;
}

/**
 * Gets the CSS class name for horizontal alignment
 */
export function getXAlignClass(align: XAlign): string {
  return `text-${align}`;
}

/**
 * Gets the CSS class name for vertical alignment
 */
export function getYAlignClass(align: YAlign): string {
  return `align-${align}`;
}

// Made with Bob
