/**
 * src/design/design.props.ts
 * Global prop definitions that can be used across all components
 */

import type { AnimationName } from '../animation/motion.types';
import type { DisplayEffect, BackgroundTone } from './types';

/**
 * Animation prop interface — add to any component's Props to enable animations.
 */
export interface AnimationProps {
  /**
   * Animation name with optional duration and delay.
   *
   * Format: `"<name> [duration] [delay-<value>]"`
   *
   * | Name      | Description                          |
   * |-----------|--------------------------------------|
   * | sparkle   | Scale and rotate with opacity change |
   * | pulse     | Fade in and out                      |
   * | bounce    | Bounce up and down                   |
   * | spin      | Continuous rotation                  |
   * | ping      | Scale up and fade out                |
   * | wiggle    | Rotate left and right                |
   * | float     | Move up and down smoothly            |
   * | glow      | Pulsing glow effect                  |
   * | shake     | Shake horizontally                   |
   * | fadeIn    | Fade in once                         |
   * | slideIn   | Slide in from bottom                 |
   * | scaleIn   | Scale in with bounce                 |
   *
   * @example
   * animate="sparkle"
   * animate="sparkle 2s"
   * animate="sparkle 1.5s delay-1s"
   * animate="bounce 3s delay-0.5s"
   */
  animate?: AnimationName | (string & {});
}

export interface CommonHTMLProps {
  class?: string;
  'class:list'?: Record<string, boolean> | any[];
  style?: string | Record<string, string | number>;
  id?: string;
  onScroll?: boolean;

  [key: string]: any;
}

export interface BaseComponentProps extends AnimationProps, CommonHTMLProps {
  as?: import('astro/types').HTMLTag;
  effects?: DisplayEffect[];
  /** Background tone — maps to .bg-* utility classes (0-5 = layer tones, or semantic names) */
  bg?: BackgroundTone;
}


// Made with Bob