import type { CommonHTMLProps, SpacingScale } from "../shared";

/** Shared interface for components using flexbox properties */
export interface FlexboxProps extends CommonHTMLProps {
  gap?: SpacingScale;
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean;
}

/** Allowed display values for the Box component */
export type BoxDisplay = "block" | "inline" | "inline-block" | "contents";

/** Allowed max-width sizes for the Container component */
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "fluid";

/** Orientation of the Separator component */
export type SeparatorOrientation = "horizontal" | "vertical";

/** Configuration or custom rule CSS for Columns component dividers */
export type ColumnsRule = boolean | string;

/** Scrollbar visibility configuration for ScrollArea component */
export type ScrollAreaScrollbar = "visible" | "hidden" | "thin";

/** Overflow behavior settings for ScrollArea component */
export type ScrollAreaOverflow = "auto" | "scroll" | "hidden" | "visible";