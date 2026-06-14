import { BACKGROUND_TONE_CLASS_MAP } from "./maps";
import type { BackgroundTone, SpacingScale, ComponentEffect } from "./types.ts";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Matches valid CSS time values: e.g. `0.3s`, `300ms`, `1s` */
const TIME_VALUE_RE = /^\d+(\.\d+)?(s|ms)$/;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * The parsed components of an animation shorthand string.
 * Produced by {@link parseAnimationString}.
 */
export type AnimationParts = {
  /** The animation name, e.g. `fadeIn`, `slideUp` */
  name: string;
  /** Optional CSS duration value, e.g. `0.3s`, `300ms` */
  duration?: string;
  /** Optional CSS delay value, e.g. `1s`, `200ms` */
  delay?: string;
};

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

/**
 * Type guard for `Array.filter` that removes falsy values and narrows the
 * result to `T[]` instead of `(T | false | undefined | null)[]`.
 *
 * @param value - The value to test
 * @returns `true` if the value is truthy
 *
 * @example
 * const result = ['foo', false, undefined, 'bar'].filter(isTruthy);
 * // result: string[] = ['foo', 'bar']
 */
export const isTruthy = <T>(value: T | false | undefined | null): value is T =>
  Boolean(value);

/**
 * Converts a camelCase CSS property name to its kebab-case equivalent.
 * CSS custom properties (starting with `--`) are returned unchanged.
 *
 * @param prop - A camelCase CSS property name, e.g. `backgroundColor`
 * @returns The kebab-case equivalent, e.g. `background-color`
 *
 * @example
 * toKebabCase('backgroundColor') // 'background-color'
 * toKebabCase('--myVar')         // '--myVar'
 */
const toKebabCase = (prop: string): string => {
  if (prop.startsWith("--")) return prop;
  return prop.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
};

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

/**
 * Parses an animation shorthand string into its component parts.
 *
 * The format is: `name [duration] [delay-<value>]`
 * - `name` — required; the animation name
 * - `duration` — optional; any valid CSS time value (`0.3s`, `300ms`)
 * - `delay-<value>` — optional; prefixed with `delay-`, e.g. `delay-1s`
 *
 * @param animate - The animation shorthand string to parse
 * @returns An {@link AnimationParts} object with `name`, and optional `duration` and `delay`
 *
 * @example
 * parseAnimationString('fadeIn')
 * // { name: 'fadeIn' }
 *
 * parseAnimationString('fadeIn 0.3s')
 * // { name: 'fadeIn', duration: '0.3s' }
 *
 * parseAnimationString('fadeIn 0.3s delay-1s')
 * // { name: 'fadeIn', duration: '0.3s', delay: '1s' }
 */
export const parseAnimationString = (animate: string): AnimationParts => {
  const [name, ...modifiers] = animate.trim().split(/\s+/);
  return modifiers.reduce<AnimationParts>(
    (acc, part) => {
      if (part.startsWith("delay-")) acc.delay = part.slice(6);
      else if (TIME_VALUE_RE.test(part)) acc.duration = part;
      return acc;
    },
    { name },
  );
};

/**
 * Builds a CSS custom property string.
 *
 * Input:
 * - Array of conditional style values
 *
 * Output:
 * - Semicolon-separated inline style string
 */
export function buildStyles(
  styles: Array<string | undefined | null | false>,
): string {
  return styles.filter(Boolean).join(';');
}

/**
 * Transforms a `style` prop value into a plain CSS string.
 *
 * Accepts either a pre-formatted CSS string (returned as-is) or a
 * camelCase style object (converted to kebab-case key:value pairs).
 * CSS custom properties (e.g. `--myVar`) are preserved unchanged.
 *
 * @param style - A CSS string, a camelCase style record, or `undefined`
 * @returns A semicolon-separated CSS string, or an empty string if falsy
 *
 * @example
 * transformReceivedStyle('color: red; font-size: 14px')
 * // 'color: red; font-size: 14px'
 *
 * transformReceivedStyle({ backgroundColor: 'red', fontSize: 14 })
 * // 'background-color:red;font-size:14'
 *
 * transformReceivedStyle(undefined)
 * // ''
 */
export const transformReceivedStyle = (
  style: string | Record<string, string | number> | undefined,
): string => {
  if (!style || typeof style === "string") return style ?? "";
  return Object.entries(style)
    .map(([k, v]) => `${toKebabCase(k)}:${v}`)
    .join(";");
};

/**
 * Merges component-level classes with animation, effect, background tone,
 * and consumer-provided class props into a single flat array for Astro's
 * `class:list` directive.
 *
 * @param componentClasses - Base classes defined by the component itself;
 *   falsy entries (`false`, `undefined`) are filtered out automatically
 * @param props - Subset of component props that affect class output:
 *   - `animate` — animation shorthand string (see {@link parseAnimationString})
 *   - `class` — a plain class string passed by the consumer
 *   - `class:list` — an Astro-style class list passed by the consumer
 *   - `effects` — array of {@link DisplayEffect} values mapped to `effect--*` classes
 *   - `bg` — {@link BackgroundTone} mapped to a `bg-*` utility class
 * @returns A filtered array of class values ready for `class:list`
 *
 * @example
 * mergeClasses(['my-component', 'my-component--block'], {
 *   animate: 'fadeIn 0.3s',
 *   effects: ['blur'],
 *   bg: 'surface',
 *   class: 'extra-class',
 * });
 * // ['my-component', 'my-component--block', 'animate--fadeIn', 'effect--blur', 'bg-surface', 'extra-class']
 */
export const mergeClasses = (
  componentClasses: (string | undefined | false)[],
  props: {
    animate?: string;
    class?: string;
    "class:list"?: any;
    effects?: ComponentEffect[];
    bg?: BackgroundTone;
  },
): (string | any)[] => {
  const {
    animate,
    class: className,
    "class:list": classList,
    effects,
    bg,
  } = props;
  const animation = animate ? parseAnimationString(animate) : null;
  const effectClasses = effects?.map((effect) => `effect--${effect}`);
  const bgClass = bg ? BACKGROUND_TONE_CLASS_MAP[bg] : undefined;

  return [
    ...componentClasses,
    animation && `animate--${animation.name}`,
    ...(effectClasses ?? []),
    bgClass,
    className,
    classList,
  ].filter(isTruthy);
};

/**
 * Merges component-level styles with animation CSS custom properties and
 * consumer-provided style props into a single semicolon-separated CSS string.
 *
 * When an `animate` string includes a `duration` or `delay`, they are written
 * as `--animation-duration` and `--animation-delay` custom properties so the
 * component's CSS can consume them via `var()`.
 *
 * @param componentStyles - Base inline styles defined by the component itself;
 *   pass an empty string `''` if the component has no base styles
 * @param props - Subset of component props that affect style output:
 *   - `animate` — animation shorthand string (see {@link parseAnimationString})
 *   - `style` — a CSS string or camelCase style object passed by the consumer
 * @returns A semicolon-separated CSS string with all styles merged
 *
 * @example
 * mergeStyles('display: block', {
 *   animate: 'fadeIn 0.3s delay-1s',
 *   style: { color: 'red' },
 * });
 * // 'display: block;--animation-duration: 0.3s;--animation-delay: 1s;color:red'
 */
export const mergeStyles = (
  componentStyles: string,
  props: {
    animate?: string;
    style?: string | Record<string, string | number>;
  },
): string => {
  const { animate, style } = props;
  const animation = animate ? parseAnimationString(animate) : null;

  const animationStyles = animation
    ? [
        animation.duration && `--animation-duration: ${animation.duration}`,
        animation.delay && `--animation-delay: ${animation.delay}`,
      ]
        .filter(isTruthy)
        .join(";")
    : "";

  return [componentStyles, animationStyles, transformReceivedStyle(style)]
    .filter(isTruthy)
    .join(";");
};

/** One step smaller on the spacing scale — used for asymmetric card section padding */
const PADDING_HALF_STEP: Record<SpacingScale, SpacingScale> = {
  none: "none",
  "3xs": "3xs",
  "2xs": "3xs",
  xs: "2xs",
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg",
  "2xl": "xl",
  "3xl": "2xl",
  "4xl": "3xl",
  "5xl": "4xl",
};

/**
 * Sets `--surface-pad` and `--surface-pad-half` CSS variables from a spacing token.
 * Used by compound Card sections whose CSS applies directional padding from these vars.
 */
export const compoundPadStyles = (padding: SpacingScale): string => {
  if (padding === "none") return "--surface-pad: 0;--surface-pad-half: 0";
  const half = PADDING_HALF_STEP[padding];
  return `--surface-pad: var(--sp-${padding});--surface-pad-half: var(--sp-${half})`;
};
