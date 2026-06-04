/**
 * Available animation names
 */
export type AnimationName =
  | 'sparkle'
  | 'pulse'
  | 'bounce'
  | 'spin'
  | 'ping'
  | 'wiggle'
  | 'float'
  | 'glow'
  | 'shake'
  | 'fadeIn'
  | 'slideIn'
  | 'scaleIn'
  ;

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
  animate?: AnimationName;
}