import type { CommonHTMLProps, SpacingScale } from "../shared";



/** Shared interface for components using flexbox properties */
export interface FlexboxProps extends CommonHTMLProps {
  gap?: SpacingScale;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean;
}