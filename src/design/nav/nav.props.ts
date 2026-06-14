import type { NavOrientation } from "./nav.types";
import type { LayoutAlign } from "@/design/shared/types";
import type { FlexboxProps } from "@/design/shared/props";

/**
 * Category-level props shared across all navigation components.
 *
 * @see {@link NavOrientation}
 * @see {@link LayoutAlign}
 *
 * @category Navigation
 * Optional props: `ariaLabel`, `orientation`, `align`, `disabled`, `currentPath`
 */
export interface NavComponentProps extends FlexboxProps {
  /**
   * Distinguishes multiple <nav> landmarks for screen readers.
   * Strongly recommended for almost all nav components.
   */
  ariaLabel?: string;

  /**
   * Layout direction for flexible nav components like Tabs, Menus, or Steppers.
   */
  orientation?: NavOrientation;

  /**
   * Globally disables interactions within the nav component
   * (e.g., locked steppers, disabled pagination rows).
   */
  disabled?: boolean;

  /**
   * Optional URL path to automatically highlight active links.
   * Only pass this if the component drives URL state (e.g., Navbar, Breadcrumbs).
   */
  currentPath?: string;
}