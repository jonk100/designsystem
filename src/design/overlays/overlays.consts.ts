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

export const OVERLAY_POSITIONS: OverlayPosition[] = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'left', 'right', 'center'
];
export const OVERLAY_PLACEMENTS: OverlayPlacement[] = [
  'top', 'top-start', 'top-end',
  'bottom', 'bottom-start', 'bottom-end',
  'left', 'left-start', 'left-end',
  'right', 'right-start', 'right-end'
];

export const OVERLAY_SIZES: OverlaySize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'full'];
export const OVERLAY_ANIMATIONS: OverlayAnimation[] = ['fade', 'slide', 'scale', 'zoom', 'none'];
export const BACKDROP_BLURS: BackdropBlur[] = ['none', 'sm', 'md', 'lg', 'xl'];


/**
 * Available overlay triggers
 */
export const OVERLAY_TRIGGERS: OverlayTrigger[] = ['click', 'hover', 'focus', 'manual'];

/**
 * Available modal variants
 */
export const MODAL_VARIANTS: ModalVariant[] = ['default', 'centered', 'fullscreen', 'drawer'];

/**
 * Available drawer positions
 */
export const DRAWER_POSITIONS: DrawerPosition[] = ['left', 'right', 'top', 'bottom'];

/**
 * Available sheet positions
 */
export const SHEET_POSITIONS: SheetPosition[] = ['left', 'right', 'top', 'bottom'];

/**
 * Available popover arrow options
 */
export const POPOVER_ARROWS: PopoverArrow[] = ['none', 'default', 'large'];

/**
 * Available tooltip delays
 */
export const TOOLTIP_DELAYS: TooltipDelay[] = ['none', 'short', 'medium', 'long'];

/**
 * Tooltip delay values in milliseconds
 */
export const TOOLTIP_DELAY_VALUES: Record<TooltipDelay, number> = {
  'none': 0,
  'short': 200,
  'medium': 500,
  'long': 1000
};

/**
 * Available context menu triggers
 */
export const CONTEXT_MENU_TRIGGERS: ContextMenuTrigger[] = ['right-click', 'long-press', 'manual'];

/**
 * Available dropdown alignments
 */
export const DROPDOWN_ALIGNMENTS: DropdownAlignment[] = ['start', 'center', 'end'];

/**
 * Available command palette modes
 */
export const COMMAND_PALETTE_MODES: CommandPaletteMode[] = ['search', 'command', 'navigation'];

/**
 * Available overlay layers
 */
export const OVERLAY_LAYERS: OverlayLayer[] = [
  'dropdown', 'sticky', 'fixed', 'modal', 'popover', 'tooltip'
];

/**
 * Z-index values for overlay layers
 */
export const OVERLAY_LAYER_Z_INDEX: Record<OverlayLayer, number> = {
  'dropdown': 1000,
  'sticky': 1100,
  'fixed': 1200,
  'modal': 1300,
  'popover': 1400,
  'tooltip': 1500
};

/**
 * Available close behaviors
 */
export const CLOSE_BEHAVIORS: CloseBehavior[] = ['click-outside', 'escape', 'both', 'manual'];

/**
 * Available transition timings
 */
export const TRANSITION_TIMINGS: TransitionTiming[] = ['fast', 'normal', 'slow'];

/**
 * Transition timing values in milliseconds
 */
export const TRANSITION_TIMING_VALUES: Record<TransitionTiming, number> = {
  'fast': 150,
  'normal': 300,
  'slow': 500
};

/**
 * Default values
 */
export const DEFAULT_OVERLAY_POSITION: OverlayPosition = 'center';
export const DEFAULT_OVERLAY_SIZE: OverlaySize = 'md';
export const DEFAULT_OVERLAY_ANIMATION: OverlayAnimation = 'fade';
export const DEFAULT_BACKDROP_BLUR: BackdropBlur = 'md';
export const DEFAULT_OVERLAY_PLACEMENT: OverlayPlacement = 'bottom';
export const DEFAULT_OVERLAY_TRIGGER: OverlayTrigger = 'click';
export const DEFAULT_MODAL_VARIANT: ModalVariant = 'default';
export const DEFAULT_DRAWER_POSITION: DrawerPosition = 'right';
export const DEFAULT_SHEET_POSITION: SheetPosition = 'bottom';
export const DEFAULT_POPOVER_ARROW: PopoverArrow = 'default';
export const DEFAULT_TOOLTIP_DELAY: TooltipDelay = 'medium';
export const DEFAULT_CONTEXT_MENU_TRIGGER: ContextMenuTrigger = 'right-click';
export const DEFAULT_DROPDOWN_ALIGNMENT: DropdownAlignment = 'start';
export const DEFAULT_COMMAND_PALETTE_MODE: CommandPaletteMode = 'search';
export const DEFAULT_OVERLAY_LAYER: OverlayLayer = 'modal';
export const DEFAULT_CLOSE_BEHAVIOR: CloseBehavior = 'both';
export const DEFAULT_TRANSITION_TIMING: TransitionTiming = 'normal';

// Made with Bob
