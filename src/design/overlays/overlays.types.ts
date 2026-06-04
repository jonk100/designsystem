/**
 * Position options for overlay components
 */
export type OverlayPosition = 
  | 'top' 
  | 'top-left' 
  | 'top-right' 
  | 'bottom' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'left' 
  | 'right' 
  | 'center';

/**
 * Size variants for overlay components
 */
export type OverlaySize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | 'full';

/**
 * Animation types for overlay components
 */
export type OverlayAnimation = 
  | 'fade' 
  | 'slide' 
  | 'scale' 
  | 'zoom' 
  | 'none';

/**
 * Backdrop blur options
 */
export type BackdropBlur = 
  | 'none' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl';

/**
 * Overlay placement relative to trigger
 */
export type OverlayPlacement = 
  | 'top' 
  | 'top-start' 
  | 'top-end' 
  | 'bottom' 
  | 'bottom-start' 
  | 'bottom-end' 
  | 'left' 
  | 'left-start' 
  | 'left-end' 
  | 'right' 
  | 'right-start' 
  | 'right-end';

/**
 * Trigger types for overlay components
 */
export type OverlayTrigger = 
  | 'click' 
  | 'hover' 
  | 'focus' 
  | 'manual';

/**
 * Modal variants
 */
export type ModalVariant = 
  | 'default' 
  | 'centered' 
  | 'fullscreen' 
  | 'drawer';

/**
 * Drawer positions
 */
export type DrawerPosition = 
  | 'left' 
  | 'right' 
  | 'top' 
  | 'bottom';

/**
 * Sheet positions
 */
export type SheetPosition = 
  | 'left' 
  | 'right' 
  | 'top' 
  | 'bottom';

/**
 * Popover arrow options
 */
export type PopoverArrow = 
  | 'none' 
  | 'default' 
  | 'large';

/**
 * Tooltip delay options
 */
export type TooltipDelay = 
  | 'none' 
  | 'short' 
  | 'medium' 
  | 'long';

/**
 * Context menu trigger
 */
export type ContextMenuTrigger = 
  | 'right-click' 
  | 'long-press' 
  | 'manual';

/**
 * Dropdown menu alignment
 */
export type DropdownAlignment = 
  | 'start' 
  | 'center' 
  | 'end';

/**
 * Command palette mode
 */
export type CommandPaletteMode = 
  | 'search' 
  | 'command' 
  | 'navigation';

/**
 * Overlay z-index layers
 */
export type OverlayLayer = 
  | 'dropdown' 
  | 'sticky' 
  | 'fixed' 
  | 'modal' 
  | 'popover' 
  | 'tooltip';

/**
 * Close behavior options
 */
export type CloseBehavior = 
  | 'click-outside' 
  | 'escape' 
  | 'both' 
  | 'manual';

/**
 * Overlay transition timing
 */
export type TransitionTiming = 
  | 'fast' 
  | 'normal' 
  | 'slow';

// Made with Bob
