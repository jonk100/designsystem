import type { 
  OverlayPosition, 
  OverlaySize, 
  OverlayAnimation, 
  BackdropBlur,
  OverlayPlacement,
  OverlayTrigger,
  ModalVariant,
  DrawerPosition,
  SheetPosition,
  PopoverArrow,
  TooltipDelay,
  ContextMenuTrigger,
  DropdownAlignment,
  CommandPaletteMode,
  OverlayLayer,
  CloseBehavior,
  TransitionTiming
} from './overlays.types';
import { OVERLAY_LAYER_Z_INDEX, TOOLTIP_DELAY_VALUES, TRANSITION_TIMING_VALUES } from './overlays.consts';

/**
 * Validates if a value is a valid overlay position
 */
export function isValidOverlayPosition(value: string): value is OverlayPosition {
  const validPositions: OverlayPosition[] = [
    'top', 'top-left', 'top-right',
    'bottom', 'bottom-left', 'bottom-right',
    'left', 'right', 'center'
  ];
  return validPositions.includes(value as OverlayPosition);
}

/**
 * Validates if a value is a valid overlay size
 */
export function isValidOverlaySize(value: string): value is OverlaySize {
  const validSizes: OverlaySize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
  return validSizes.includes(value as OverlaySize);
}

/**
 * Validates if a value is a valid overlay placement
 */
export function isValidOverlayPlacement(value: string): value is OverlayPlacement {
  const validPlacements: OverlayPlacement[] = [
    'top', 'top-start', 'top-end',
    'bottom', 'bottom-start', 'bottom-end',
    'left', 'left-start', 'left-end',
    'right', 'right-start', 'right-end'
  ];
  return validPlacements.includes(value as OverlayPlacement);
}

/**
 * Gets the CSS class name for overlay position
 */
export function getOverlayPositionClass(position: OverlayPosition): string {
  return `overlay-${position}`;
}

/**
 * Gets the CSS class name for overlay size
 */
export function getOverlaySizeClass(size: OverlaySize): string {
  return `overlay-${size}`;
}

/**
 * Gets the CSS class name for overlay animation
 */
export function getOverlayAnimationClass(animation: OverlayAnimation): string {
  return `overlay-animate-${animation}`;
}

/**
 * Gets the CSS class name for backdrop blur
 */
export function getBackdropBlurClass(blur: BackdropBlur): string {
  return `backdrop-blur-${blur}`;
}

/**
 * Gets the CSS class name for overlay placement
 */
export function getOverlayPlacementClass(placement: OverlayPlacement): string {
  return `overlay-placement-${placement}`;
}

/**
 * Gets the CSS class name for modal variant
 */
export function getModalVariantClass(variant: ModalVariant): string {
  return `modal-${variant}`;
}

/**
 * Gets the CSS class name for drawer position
 */
export function getDrawerPositionClass(position: DrawerPosition): string {
  return `drawer-${position}`;
}

/**
 * Gets the CSS class name for sheet position
 */
export function getSheetPositionClass(position: SheetPosition): string {
  return `sheet-${position}`;
}

/**
 * Gets the CSS class name for popover arrow
 */
export function getPopoverArrowClass(arrow: PopoverArrow): string {
  return `popover-arrow-${arrow}`;
}

/**
 * Gets the CSS class name for dropdown alignment
 */
export function getDropdownAlignmentClass(alignment: DropdownAlignment): string {
  return `dropdown-align-${alignment}`;
}

/**
 * Gets the CSS class name for command palette mode
 */
export function getCommandPaletteModeClass(mode: CommandPaletteMode): string {
  return `command-palette-${mode}`;
}

/**
 * Gets the z-index value for an overlay layer
 */
export function getOverlayLayerZIndex(layer: OverlayLayer): number {
  return OVERLAY_LAYER_Z_INDEX[layer];
}

/**
 * Gets the tooltip delay value in milliseconds
 */
export function getTooltipDelayValue(delay: TooltipDelay): number {
  return TOOLTIP_DELAY_VALUES[delay];
}

/**
 * Gets the transition timing value in milliseconds
 */
export function getTransitionTimingValue(timing: TransitionTiming): number {
  return TRANSITION_TIMING_VALUES[timing];
}

/**
 * Calculates overlay position based on trigger element
 */
export function calculateOverlayPosition(
  triggerRect: DOMRect,
  overlayRect: DOMRect,
  placement: OverlayPlacement,
  offset: number = 8
): { top: number; left: number } {
  const positions: Record<OverlayPlacement, { top: number; left: number }> = {
    'top': {
      top: triggerRect.top - overlayRect.height - offset,
      left: triggerRect.left + (triggerRect.width - overlayRect.width) / 2
    },
    'top-start': {
      top: triggerRect.top - overlayRect.height - offset,
      left: triggerRect.left
    },
    'top-end': {
      top: triggerRect.top - overlayRect.height - offset,
      left: triggerRect.right - overlayRect.width
    },
    'bottom': {
      top: triggerRect.bottom + offset,
      left: triggerRect.left + (triggerRect.width - overlayRect.width) / 2
    },
    'bottom-start': {
      top: triggerRect.bottom + offset,
      left: triggerRect.left
    },
    'bottom-end': {
      top: triggerRect.bottom + offset,
      left: triggerRect.right - overlayRect.width
    },
    'left': {
      top: triggerRect.top + (triggerRect.height - overlayRect.height) / 2,
      left: triggerRect.left - overlayRect.width - offset
    },
    'left-start': {
      top: triggerRect.top,
      left: triggerRect.left - overlayRect.width - offset
    },
    'left-end': {
      top: triggerRect.bottom - overlayRect.height,
      left: triggerRect.left - overlayRect.width - offset
    },
    'right': {
      top: triggerRect.top + (triggerRect.height - overlayRect.height) / 2,
      left: triggerRect.right + offset
    },
    'right-start': {
      top: triggerRect.top,
      left: triggerRect.right + offset
    },
    'right-end': {
      top: triggerRect.bottom - overlayRect.height,
      left: triggerRect.right + offset
    }
  };

  return positions[placement];
}

/**
 * Checks if overlay should close on click outside
 */
export function shouldCloseOnClickOutside(behavior: CloseBehavior): boolean {
  return behavior === 'click-outside' || behavior === 'both';
}

/**
 * Checks if overlay should close on escape key
 */
export function shouldCloseOnEscape(behavior: CloseBehavior): boolean {
  return behavior === 'escape' || behavior === 'both';
}

/**
 * Combines multiple overlay classes
 */
export function combineOverlayClasses(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checks if trigger is interactive
 */
export function isInteractiveTrigger(trigger: OverlayTrigger): boolean {
  return trigger !== 'manual';
}

/**
 * Gets the opposite placement for arrow positioning
 */
export function getOppositePlacement(placement: OverlayPlacement): string {
  const opposites: Record<string, string> = {
    'top': 'bottom',
    'bottom': 'top',
    'left': 'right',
    'right': 'left'
  };
  
  const base = placement.split('-')[0];
  return opposites[base] || base;
}

/**
 * Checks if overlay fits in viewport
 */
export function fitsInViewport(
  position: { top: number; left: number },
  size: { width: number; height: number }
): boolean {
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return (
    position.top >= 0 &&
    position.left >= 0 &&
    position.top + size.height <= viewport.height &&
    position.left + size.width <= viewport.width
  );
}

/**
 * Adjusts overlay position to fit in viewport
 */
export function adjustPositionForViewport(
  position: { top: number; left: number },
  size: { width: number; height: number },
  padding: number = 8
): { top: number; left: number } {
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  let { top, left } = position;

  // Adjust horizontal position
  if (left < padding) {
    left = padding;
  } else if (left + size.width > viewport.width - padding) {
    left = viewport.width - size.width - padding;
  }

  // Adjust vertical position
  if (top < padding) {
    top = padding;
  } else if (top + size.height > viewport.height - padding) {
    top = viewport.height - size.height - padding;
  }

  return { top, left };
}

// Made with Bob
