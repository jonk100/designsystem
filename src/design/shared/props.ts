
/**
 * Props interfaces for the components in the library.
 * 
 */
import type { HTMLTag } from 'astro/types';
import type { AnimationName } from '../animation/Animation.types';
import type { GapScale, LayoutAlign} from './types.ts';


export interface CommonHTMLProps {
  /*** The one string to rule them all, and in the shadow DOM bind them. */
  id?: string;
  
  /*** This is the styling hook, not your D&D character's vocation. */
  class?: string;
  
  /*** Use only when the cascade has failed you. */
  style?: string | Record<string, string | number>;
  
  /*** Framework utility for conditional/array-based class merging (acts like clsx). */
  'class:list'?: (string | Record<string, boolean> | undefined | null | false)[] | Record<string, boolean>;

  /*** The catch-all trapdoor for native HTML attributes, ARIA roles, and `data-*` props. */
  [key: string]: any;
}

export interface BaseComponentProps extends CommonHTMLProps {
  
  /*** Animation name, optional duration & delay. See `../animation/animate.css`
  *  - accepts any of the following formats:
  *
  * @example
  * animate="sparkle"
  * animate="sparkle 2s"
  * animate="sparkle 1.5s delay-1s"
  * animate="bounce 3s delay-0.5s"
  */
  animate?: AnimationName | string;

  /*** animate on scroll? */
  scrollAnimation?: boolean;

  /*** Type assertion - tells typescript to treat the component as this type of element */
  as?: HTMLTag;
}

/**
 * Shared props for components that use flexbox layout.
 * Maps to flex utility classes for alignment, gap, and wrapping.
 */
export interface FlexboxProps extends BaseComponentProps {
  /** Gap between children; maps to `gap-*` utility classes */
  gap?: GapScale;
  /** Main-axis (horizontal) alignment; maps to `justify-*` utility classes */
  x?: LayoutAlign;
  /** Cross-axis (vertical) alignment; maps to `items-*` utility classes */
  y?: LayoutAlign;
  /** Whether children should wrap; `'reverse'` applies `flex-wrap-reverse` */
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