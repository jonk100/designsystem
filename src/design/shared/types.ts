import type { AnimationName } from '../animation/motion.types';
/**
 * src/design/design.types.ts
 * Type definitions for commonly used design properties
 */
export type ComponentRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full"
  ;

/** Size Scales - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   */
export type SpacingScale = "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "none";
export type DisplaySize = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

/** Variable Mapping - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   */
export type DisplayVariant = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
export type BlockType = "p" | "div" | "span" | "em" | "strong" | "mark" | "del" | "ins" | "sup" | "sub";

/* Interfaces____________________ */
export interface AnimationConfig {
  name: AnimationName;
  duration: string;
  delay: string;
}

/**  */