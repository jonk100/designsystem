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
 * Validates if a value is a valid control size
 */
export function isValidControlSize(value: string): value is ControlSize {
  const validSizes: ControlSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  return validSizes.includes(value as ControlSize);
}

/**
 * Validates if a value is a valid control variant
 */
export function isValidControlVariant(value: string): value is ControlVariant {
  const validVariants: ControlVariant[] = ['solid', 'outline', 'ghost', 'link', 'soft'];
  return validVariants.includes(value as ControlVariant);
}

/**
 * Validates if a value is a valid control color
 */
export function isValidControlColor(value: string): value is ControlColor {
  const validColors: ControlColor[] = [
    'primary', 'secondary', 'accent',
    'success', 'warning', 'danger', 'info', 'neutral'
  ];
  return validColors.includes(value as ControlColor);
}

/**
 * Validates if a value is a valid input type
 */
export function isValidInputType(value: string): value is InputType {
  const validTypes: InputType[] = [
    'text', 'email', 'password', 'number', 'tel', 'url', 'search',
    'date', 'time', 'datetime-local', 'month', 'week',
    'color', 'file', 'hidden'
  ];
  return validTypes.includes(value as InputType);
}

/**
 * Validates if a value is a valid control state
 */
export function isValidControlState(value: string): value is ControlState {
  const validStates: ControlState[] = [
    'default', 'hover', 'focus', 'active', 'disabled', 'loading', 'error', 'success'
  ];
  return validStates.includes(value as ControlState);
}

/**
 * Validates if a value is a valid validation state
 */
export function isValidValidationState(value: string): value is ValidationState {
  const validStates: ValidationState[] = ['valid', 'invalid', 'warning', 'pending'];
  return validStates.includes(value as ValidationState);
}

/**
 * Gets the CSS class name for a control size
 */
export function getControlSizeClass(size: ControlSize): string {
  return `control-${size}`;
}

/**
 * Gets the CSS class name for a control variant
 */
export function getControlVariantClass(variant: ControlVariant): string {
  return `control-${variant}`;
}

/**
 * Gets the CSS class name for a control color
 */
export function getControlColorClass(color: ControlColor): string {
  return `control-${color}`;
}

/**
 * Gets the CSS class name for a control state
 */
export function getControlStateClass(state: ControlState): string {
  return `control-${state}`;
}

/**
 * Gets the CSS class name for a validation state
 */
export function getValidationStateClass(state: ValidationState): string {
  return `validation-${state}`;
}

/**
 * Gets the CSS class name for control orientation
 */
export function getControlOrientationClass(orientation: ControlOrientation): string {
  return `control-${orientation}`;
}

/**
 * Gets the CSS class name for control alignment
 */
export function getControlAlignmentClass(alignment: ControlAlignment): string {
  return `control-align-${alignment}`;
}

/**
 * Gets the CSS class name for control radius
 */
export function getControlRadiusClass(radius: ControlRadius): string {
  return `control-radius-${radius}`;
}

/**
 * Gets the CSS class name for icon position
 */
export function getIconPositionClass(position: IconPosition): string {
  return `icon-${position}`;
}

/**
 * Gets the CSS class name for loading position
 */
export function getLoadingPositionClass(position: LoadingPosition): string {
  return `loading-${position}`;
}

/**
 * Combines multiple control classes
 */
export function combineControlClasses(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checks if a control is in an interactive state
 */
export function isInteractiveState(state: ControlState): boolean {
  return !['disabled', 'loading'].includes(state);
}

/**
 * Checks if a control has an error state
 */
export function hasErrorState(state: ControlState | ValidationState): boolean {
  return state === 'error' || state === 'invalid';
}

/**
 * Checks if a control has a success state
 */
export function hasSuccessState(state: ControlState | ValidationState): boolean {
  return state === 'success' || state === 'valid';
}

// Made with Bob
