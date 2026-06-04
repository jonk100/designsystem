import type { 
  ControlSize, 
  ControlVariant, 
  ControlColor, 
  ControlState, 
  ValidationState,
  ControlOrientation,
  ControlAlignment,
  ControlRadius,
  IconPosition,
  LoadingPosition
} from './controls.types';

/**
 * Maps control sizes to their CSS class names
 */
export const CONTROL_SIZE_CLASS_MAP: Record<ControlSize, string> = {
  'xs': 'control-xs',
  'sm': 'control-sm',
  'md': 'control-md',
  'lg': 'control-lg',
  'xl': 'control-xl'
};

/**
 * Maps control variants to their CSS class names
 */
export const CONTROL_VARIANT_CLASS_MAP: Record<ControlVariant, string> = {
  'solid': 'control-solid',
  'outline': 'control-outline',
  'ghost': 'control-ghost',
  'link': 'control-link',
  'soft': 'control-soft'
};

/**
 * Maps control colors to their CSS class names
 */
export const CONTROL_COLOR_CLASS_MAP: Record<ControlColor, string> = {
  'primary': 'control-primary',
  'secondary': 'control-secondary',
  'accent': 'control-accent',
  'success': 'control-success',
  'warning': 'control-warning',
  'danger': 'control-danger',
  'info': 'control-info',
  'neutral': 'control-neutral'
};

/**
 * Maps control states to their CSS class names
 */
export const CONTROL_STATE_CLASS_MAP: Record<ControlState, string> = {
  'default': 'control-default',
  'hover': 'control-hover',
  'focus': 'control-focus',
  'active': 'control-active',
  'disabled': 'control-disabled',
  'loading': 'control-loading',
  'error': 'control-error',
  'success': 'control-success'
};

/**
 * Maps validation states to their CSS class names
 */
export const VALIDATION_STATE_CLASS_MAP: Record<ValidationState, string> = {
  'valid': 'validation-valid',
  'invalid': 'validation-invalid',
  'warning': 'validation-warning',
  'pending': 'validation-pending'
};

/**
 * Maps control orientations to their CSS class names
 */
export const CONTROL_ORIENTATION_CLASS_MAP: Record<ControlOrientation, string> = {
  'horizontal': 'control-horizontal',
  'vertical': 'control-vertical'
};

/**
 * Maps control alignments to their CSS class names
 */
export const CONTROL_ALIGNMENT_CLASS_MAP: Record<ControlAlignment, string> = {
  'start': 'control-align-start',
  'center': 'control-align-center',
  'end': 'control-align-end',
  'stretch': 'control-align-stretch'
};

/**
 * Maps control radius options to their CSS class names
 */
export const CONTROL_RADIUS_CLASS_MAP: Record<ControlRadius, string> = {
  'none': 'control-radius-none',
  'sm': 'control-radius-sm',
  'md': 'control-radius-md',
  'lg': 'control-radius-lg',
  'full': 'control-radius-full'
};

/**
 * Maps icon positions to their CSS class names
 */
export const ICON_POSITION_CLASS_MAP: Record<IconPosition, string> = {
  'left': 'icon-left',
  'right': 'icon-right',
  'start': 'icon-start',
  'end': 'icon-end'
};

/**
 * Maps loading positions to their CSS class names
 */
export const LOADING_POSITION_CLASS_MAP: Record<LoadingPosition, string> = {
  'prefix': 'loading-prefix',
  'suffix': 'loading-suffix',
  'overlay': 'loading-overlay'
};

/**
 * Maps control sizes to their pixel dimensions
 */
export const CONTROL_SIZE_DIMENSIONS: Record<ControlSize, { height: string; padding: string }> = {
  'xs': { height: '1.5rem', padding: '0.25rem 0.5rem' },
  'sm': { height: '2rem', padding: '0.375rem 0.75rem' },
  'md': { height: '2.5rem', padding: '0.5rem 1rem' },
  'lg': { height: '3rem', padding: '0.625rem 1.25rem' },
  'xl': { height: '3.5rem', padding: '0.75rem 1.5rem' }
};

/**
 * Maps validation states to their semantic colors
 */
export const VALIDATION_STATE_COLORS: Record<ValidationState, string> = {
  'valid': 'success',
  'invalid': 'danger',
  'warning': 'warning',
  'pending': 'info'
};

/**
 * Maps control states to their interactive status
 */
export const CONTROL_STATE_INTERACTIVE: Record<ControlState, boolean> = {
  'default': true,
  'hover': true,
  'focus': true,
  'active': true,
  'disabled': false,
  'loading': false,
  'error': true,
  'success': true
};

// Made with Bob
