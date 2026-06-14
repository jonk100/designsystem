/**
 * src/design/design.animations.ts
 * Centralized animation system for all components
 */
import type { AnimationName } from './Animation.types';
import type { AnimationConfig } from '@/design/shared/types';

/**
 * Parse animation string into configuration
 * 
 * @param animateStr - Animation string (e.g., "sparkle", "sparkle 2s", "sparkle 1.5s delay-1s")
 * @returns Parsed animation config or null if no animation
 * 
 * @example
 * parseAnimation("sparkle") // { name: "sparkle", duration: "1s", delay: "0s" }
 * parseAnimation("sparkle 2s") // { name: "sparkle", duration: "2s", delay: "0s" }
 * parseAnimation("sparkle 1.5s delay-1s") // { name: "sparkle", duration: "1.5s", delay: "1s" }
 */
export const parseAnimation = (animateStr: string | undefined): AnimationConfig | null => {
  if (!animateStr) return null;
  
  const parts = animateStr.trim().split(/\s+/);
  const name = parts[0] as AnimationName;
  let duration = '1s';
  let delay = '0s';
  
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.startsWith('delay-')) {
      delay = part.replace('delay-', '');
    } else if (part.match(/^\d+\.?\d*(s|ms)$/)) {
      duration = part;
    }
  }
  
  return { name, duration, delay };
};

/**
 * Generate animation CSS class name
 *
 * @param animation - Animation config
 * @returns CSS class name
 */
export const getAnimationClass = (animation: AnimationConfig | null): string | null => {
  if (!animation) return null;
  return `animate--${animation.name}`;
};

/**
 * Generate animation inline styles
 * 
 * @param animation - Animation config
 * @returns CSS style string
 */
export const getAnimationStyles = (animation: AnimationConfig | null): string => {
  if (!animation) return '';
  return `animation-duration: ${animation.duration}; animation-delay: ${animation.delay};`;
};

/**
 * Animation descriptions for documentation
 */
export const ANIMATION_DESCRIPTIONS: Partial<Record<AnimationName, string>> = {
  sparkle: 'Scale and rotate with opacity change',
  pulse: 'Fade in and out',
  bounce: 'Bounce up and down',
  spin: 'Continuous rotation',
  ping: 'Scale up and fade out',
  wiggle: 'Rotate left and right',
  float: 'Move up and down smoothly',
  glow: 'Pulsing glow effect',
  shake: 'Shake horizontally',
  fadeIn: 'Fade in once (use with delay for staggered effects)',
  slideIn: 'Slide in from bottom',
  scaleIn: 'Scale in with bounce'
};

/**
 * Get all available animations with descriptions
 */
export const getAvailableAnimations = (): Array<{ name: AnimationName; description: string }> => {
  return Object.entries(ANIMATION_DESCRIPTIONS).map(([name, description]) => ({
    name: name as AnimationName,
    description
  }));
};

/**
 * Process animation prop and return all necessary values
 * Use this helper to reduce boilerplate in components
 *
 * @param animate - Animation string from props
 * @returns Object with animation class and styles
 *
 * @example
 * const { animationClass, animationStyles } = processAnimation(animate);
 * const classes = ['my-component', animationClass, className];
 * const styles = [myStyles, animationStyles, receivedStyles].filter(Boolean).join(';');
 */
export const processAnimation = (animate: string | undefined) => {
  const animation = parseAnimation(animate);
  return {
    animation,
    animationClass: getAnimationClass(animation),
    animationStyles: getAnimationStyles(animation)
  };
};

// Made with Bob
