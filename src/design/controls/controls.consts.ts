import type { 
  ControlSize, 
  ControlVariant, 
  ControlColor, 
  InputType, 
  ControlState, 
  ValidationState,
  ControlOrientation,
  ControlAlignment,
  ControlRadius,
  IconPosition,
  LoadingPosition
} from './controls.types';

/**
 * Available control sizes
 */
export const CONTROL_SIZES: ControlSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Available control variants
 */
export const CONTROL_VARIANTS: ControlVariant[] = ['solid', 'outline', 'ghost', 'link', 'soft'];

/**
 * Available control colors
 */
export const CONTROL_COLORS: ControlColor[] = [
  'primary', 'secondary', 'accent',
  'success', 'warning', 'danger', 'info', 'neutral'
];

/**
 * Available input types
 */
export const INPUT_TYPES: InputType[] = [
  'text', 'email', 'password', 'number', 'tel', 'url', 'search',
  'date', 'time', 'datetime-local', 'month', 'week',
  'color', 'file', 'hidden'
];

/**
 * Available control states
 */
export const CONTROL_STATES: ControlState[] = [
  'default', 'hover', 'focus', 'active', 'disabled', 'loading', 'error', 'success'
];

/**
 * Available validation states
 */
export const VALIDATION_STATES: ValidationState[] = ['valid', 'invalid', 'warning', 'pending'];

/**
 * Available control orientations
 */
export const CONTROL_ORIENTATIONS: ControlOrientation[] = ['horizontal', 'vertical'];

/**
 * Available control alignments
 */
export const CONTROL_ALIGNMENTS: ControlAlignment[] = ['start', 'center', 'end', 'stretch'];

/**
 * Available control radius options
 */
export const CONTROL_RADII: ControlRadius[] = ['none', 'sm', 'md', 'lg', 'full'];

/**
 * Available icon positions
 */
export const ICON_POSITIONS: IconPosition[] = ['left', 'right', 'start', 'end'];

/**
 * Available loading positions
 */
export const LOADING_POSITIONS: LoadingPosition[] = ['prefix', 'suffix', 'overlay'];

/**
 * Default values
 */
export const DEFAULT_CONTROL_SIZE: ControlSize = 'md';
export const DEFAULT_CONTROL_VARIANT: ControlVariant = 'solid';
export const DEFAULT_CONTROL_COLOR: ControlColor = 'primary';
export const DEFAULT_INPUT_TYPE: InputType = 'text';
export const DEFAULT_CONTROL_STATE: ControlState = 'default';
export const DEFAULT_VALIDATION_STATE: ValidationState = 'valid';
export const DEFAULT_CONTROL_ORIENTATION: ControlOrientation = 'horizontal';
export const DEFAULT_CONTROL_ALIGNMENT: ControlAlignment = 'start';
export const DEFAULT_CONTROL_RADIUS: ControlRadius = 'md';
export const DEFAULT_ICON_POSITION: IconPosition = 'left';
export const DEFAULT_LOADING_POSITION: LoadingPosition = 'overlay';

// Made with Bob
