export type NavOrientation = 'horizontal' | 'vertical';
export type NavAlignment = 'start' | 'center' | 'end' | 'justify';
import type { SpacingScale } from "../shared/types";

export interface NavProps {
  /** Determines the layout direction of the navigation items */
  orientation?: NavOrientation;
  /** Determines the alignment of items along the main or cross axis depending on orientation */
  align?: NavAlignment;
  /** Gap between navigation items, corresponds to space tokens */
  gap?: SpacingScale;
}