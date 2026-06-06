/**
 * Available animation names
 */
export type AnimationName =
  | 'fadeIn'
  | 'fadeUp'
  | 'fadeDown'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'revealUp'
  | 'slideIn'
  | 'slideLeft'
  | 'slideRight'
  | 'pulse'
  | 'ping'
  | 'shimmer'
  | 'blink'
  | 'glow'
  | 'spin'
  | 'spinSlow'
  | 'float'
  | 'breathe'
  | 'sparkle'
  | 'shake'
  | 'bounce'
  | 'wiggle'
  | 'headShake'
  | 'jello'
  | 'jiggle'
  | 'swivel'
  | 'ripple'
  | 'half-ripple'
  | 'quarter-ripple'
  | 'vibrate'
  | 'fadeOut'
  | 'scaleOut'
  | 'collapse'
  | 'pickle'
  | 'DancingMonkey'
  | 'staggeredSlideLeft'
  | 'staggeredSlideRight'
  | 'alternatingSlideLeft'
  | 'alternatingSlideRight';
/**
 * Animation prop interface — add to any component's Props to enable animations.
 */
export interface AnimationProps {
  /**
   * Animation name with optional duration and delay.
   *
   * Format: `"<name> [duration] [delay-<value>]"`
   *
   * See animate.css for full documentation of each animation.
   *
   * @example
   * animate="sparkle"
   * animate="sparkle 2s"
   * animate="sparkle 1.5s delay-1s"
   * animate="bounce 3s delay-0.5s"
   */
  animate?: AnimationName | string;
}