import type { BaseComponentProps } from "@/design/shared/props";

export type SurfacePadding = 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl';
export type SurfaceLayer = 0 | 1 | 2 | 3 | 4 | 5;

export interface SurfaceComponentProps extends BaseComponentProps {
  /** The padding applied to the internal edges of the surface. */
  padding?: SurfacePadding;
  /** The elevation layer, defining background color and shadow. */
  layer?: SurfaceLayer;
}