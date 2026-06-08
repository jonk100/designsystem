import type { BaseComponentProps } from "@/design/shared";

/**
 * Size variants for control components
 */
export type ControlSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl';

/**
 * Visual variants for control components
 */
export type ControlVariant = 
  | 'solid' 
  | 'outline' 
  | 'ghost' 
  | 'link' 
  | 'soft';

/**
 * Color schemes for control components
 */
export type ControlColor = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'success' 
  | 'warning' 
  | 'danger' 
  | 'info' 
  | 'neutral';

/**
 * Input types for form controls
 */
export type InputType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'search' 
  | 'date' 
  | 'time' 
  | 'datetime-local' 
  | 'month' 
  | 'week' 
  | 'color' 
  | 'file' 
  | 'hidden';

/**
 * States for control components
 */
export type ControlState = 
  | 'default' 
  | 'hover' 
  | 'focus' 
  | 'active' 
  | 'disabled' 
  | 'loading' 
  | 'error' 
  | 'success';

/**
 * Validation states for form controls
 */
export type ValidationState = 
  | 'valid' 
  | 'invalid' 
  | 'warning' 
  | 'pending';

/**
 * Orientation for control groups
 */
export type ControlOrientation = 
  | 'horizontal' 
  | 'vertical';

/**
 * Alignment options for controls
 */
export type ControlAlignment = 
  | 'start' 
  | 'center' 
  | 'end' 
  | 'stretch';

/**
 * Border radius options for controls
 */
export type ControlRadius = 
  | 'none' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'full';

/**
 * Icon position in controls
 */
export type IconPosition = 
  | 'left' 
  | 'right' 
  | 'start' 
  | 'end';

/**
 * Loading indicator position
 */
export type LoadingPosition = 
  | 'prefix' 
  | 'suffix' 
  | 'overlay';

/**
 * Common properties shared by all control components
 */
export interface ControlComponentProps extends BaseComponentProps {
  /** The size modifier for the control */
  size?: ControlSize | string;
  /** Visual theme variant */
  variant?: ControlVariant | string;
  /** Disabled state of the control */
  disabled?: boolean;
  /** Marks the control as required */
  required?: boolean;
  /** Sets the control to read-only */
  readonly?: boolean;
  /** Marks the control as invalid or in error state */
  invalid?: boolean;
  /** Text label associated with the control */
  label?: string;
  /** Name of the control for form submission */
  name?: string;
}


