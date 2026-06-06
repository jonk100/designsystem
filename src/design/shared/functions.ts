import { BACKGROUND_TONE_CLASS_MAP } from './maps';
import type { BackgroundTone } from './types';

const TIME_VALUE_RE = /^\d+(\.\d+)?(s|ms)$/;

/**
 * Parses an animation string into its component parts.
 * @param animate - Animation string in the format `name [duration] [delay-<value>]`
 * @returns Object containing the animation name, optional duration, and optional delay
 * @example parseAnimationString('fadeIn 0.3s delay-1s') // { name: 'fadeIn', duration: '0.3s', delay: '1s' }
 */
export const parseAnimationString = (animate: string) => {
  const [name, ...modifiers] = animate.trim().split(/\s+/);

  return modifiers.reduce(
    (acc, part) => {
      if (part.startsWith('delay-')) acc.delay = part.slice(6);
      else if (TIME_VALUE_RE.test(part)) acc.duration = part;
      return acc;
    },
    { name, duration: undefined as string | undefined, delay: undefined as string | undefined }
  );
};

/**
 * Transforms a style prop into a CSS string.
 * @param style - Either a CSS string or a camelCase style object
 * @returns A semicolon-separated CSS string
 */
export const transformReceivedStyle = (
  style: string | Record<string, string | number> | undefined
): string => {
  if (!style || typeof style === 'string') return style ?? '';

  return Object.entries(style)
    .map(([k, v]) => `${k.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${v}`)
    .join(';');
};

/**
 * Merges component classes with animation and received props.
 * @param componentClasses - Array of component-specific classes
 * @param props - Object containing animate, class, and class:list props
 * @returns Merged class array
 */
export const mergeClasses = (
  componentClasses: (string | undefined | false)[],
  props: { animate?: string; class?: string; 'class:list'?: any; effects?: string[]; bg?: BackgroundTone }
) => {
  const { animate, class: className, 'class:list': classList, effects, bg } = props;
  const animation = animate ? parseAnimationString(animate) : null;
  const effectClasses = effects?.map(effect => `effect--${effect}`);
  const bgClass = bg ? BACKGROUND_TONE_CLASS_MAP[bg] : undefined;

  return [...componentClasses, animation && `animate--${animation.name}`, ...(effectClasses || []), bgClass, className, classList]
    .filter(Boolean);
};

/**
 * Merges component styles with animation and received props.
 * @param componentStyles - Semicolon-separated CSS string of component-specific styles
 * @param props - Object containing animate and style props
 * @returns Merged semicolon-separated CSS string
 */
export const mergeStyles = (
  componentStyles: string,
  props: { animate?: string; style?: string | Record<string, string | number> }
) => {
  const { animate, style } = props;
  const animation = animate ? parseAnimationString(animate) : null;

  const animationStyles = animation
    ? [
      animation.duration && `--animation-duration: ${animation.duration}`,
      animation.delay && `--animation-delay: ${animation.delay}`,
    ].filter(Boolean).join(';')
    : '';

  return [componentStyles, animationStyles, transformReceivedStyle(style)]
    .filter(Boolean)
    .join(';');
};

/**
 * Combines boolean FontStyleProps into a CSS string
 * @param props - Object containing boolean font style props
 * @returns A semicolon-separated CSS string
 */
export const combineFontStyleProps = (props: {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
}) => {
  const { bold, italic, underline, strikethrough, uppercase, lowercase } = props;
  
  const textDeco = [underline && 'underline', strikethrough && 'line-through'].filter(Boolean).join(' ');
  const textTransform = uppercase ? 'uppercase' : lowercase ? 'lowercase' : undefined;
  
  return [
    bold && `font-weight: bold`,
    italic && `font-style: italic`,
    textDeco && `text-decoration: ${textDeco}`,
    textTransform && `text-transform: ${textTransform}`
  ].filter(Boolean).join(';');
};