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

/**
 * Maps overlay positions to their CSS class names
 */
export const OVERLAY_POSITION_CLASS_MAP: Record<OverlayPosition, string> = {
  'top': 'overlay-top',
  'top-left': 'overlay-top-left',
  'top-right': 'overlay-top-right',
  'bottom': 'overlay-bottom',
  'bottom-left': 'overlay-bottom-left',
  'bottom-right': 'overlay-bottom-right',
  'left': 'overlay-left',
  'right': 'overlay-right',
  'center': 'overlay-center'
};

/**
 * Maps overlay sizes to their CSS class names
 */
export const OVERLAY_SIZE_CLASS_MAP: Record<OverlaySize, string> = {
  'xs': 'overlay-xs',
  'sm': 'overlay-sm',
  'md': 'overlay-md',
  'lg': 'overlay-lg',
  'xl': 'overlay-xl',
  'full': 'overlay-full'
};

/**
 * Maps overlay animations to their CSS class names
 */
export const OVERLAY_ANIMATION_CLASS_MAP: Record<OverlayAnimation, string> = {
  'fade': 'overlay-animate-fade',
  'slide': 'overlay-animate-slide',
  'scale': 'overlay-animate-scale',
  'zoom': 'overlay-animate-zoom',
  'none': 'overlay-animate-none'
};

/**
 * Maps backdrop blur options to their CSS class names
 */
export const BACKDROP_BLUR_CLASS_MAP: Record<BackdropBlur, string> = {
  'none': 'backdrop-blur-none',
  'sm': 'backdrop-blur-sm',
  'md': 'backdrop-blur-md',
  'lg': 'backdrop-blur-lg',
  'xl': 'backdrop-blur-xl'
};

/**
 * Maps overlay placements to their CSS class names
 */
export const OVERLAY_PLACEMENT_CLASS_MAP: Record<OverlayPlacement, string> = {
  'top': 'overlay-placement-top',
  'top-start': 'overlay-placement-top-start',
  'top-end': 'overlay-placement-top-end',
  'bottom': 'overlay-placement-bottom',
  'bottom-start': 'overlay-placement-bottom-start',
  'bottom-end': 'overlay-placement-bottom-end',
  'left': 'overlay-placement-left',
  'left-start': 'overlay-placement-left-start',
  'left-end': 'overlay-placement-left-end',
  'right': 'overlay-placement-right',
  'right-start': 'overlay-placement-right-start',
  'right-end': 'overlay-placement-right-end'
};

/**
 * Maps overlay triggers to their event names
 */
export const OVERLAY_TRIGGER_EVENT_MAP: Record<OverlayTrigger, string[]> = {
  'click': ['click'],
  'hover': ['mouseenter', 'mouseleave'],
  'focus': ['focus', 'blur'],
  'manual': []
};

/**
 * Maps modal variants to their CSS class names
 */
export const MODAL_VARIANT_CLASS_MAP: Record<ModalVariant, string> = {
  'default': 'modal-default',
  'centered': 'modal-centered',
  'fullscreen': 'modal-fullscreen',
  'drawer': 'modal-drawer'
};

/**
 * Maps drawer positions to their CSS class names
 */
export const DRAWER_POSITION_CLASS_MAP: Record<DrawerPosition, string> = {
  'left': 'drawer-left',
  'right': 'drawer-right',
  'top': 'drawer-top',
  'bottom': 'drawer-bottom'
};

/**
 * Maps sheet positions to their CSS class names
 */
export const SHEET_POSITION_CLASS_MAP: Record<SheetPosition, string> = {
  'left': 'sheet-left',
  'right': 'sheet-right',
  'top': 'sheet-top',
  'bottom': 'sheet-bottom'
};

/**
 * Maps popover arrow options to their CSS class names
 */
export const POPOVER_ARROW_CLASS_MAP: Record<PopoverArrow, string> = {
  'none': 'popover-arrow-none',
  'default': 'popover-arrow-default',
  'large': 'popover-arrow-large'
};

/**
 * Maps tooltip delays to their millisecond values
 */
export const TOOLTIP_DELAY_VALUE_MAP: Record<TooltipDelay, number> = {
  'none': 0,
  'short': 200,
  'medium': 500,
  'long': 1000
};

/**
 * Maps context menu triggers to their event names
 */
export const CONTEXT_MENU_TRIGGER_EVENT_MAP: Record<ContextMenuTrigger, string[]> = {
  'right-click': ['contextmenu'],
  'long-press': ['touchstart', 'touchend'],
  'manual': []
};

/**
 * Maps dropdown alignments to their CSS class names
 */
export const DROPDOWN_ALIGNMENT_CLASS_MAP: Record<DropdownAlignment, string> = {
  'start': 'dropdown-align-start',
  'center': 'dropdown-align-center',
  'end': 'dropdown-align-end'
};

/**
 * Maps command palette modes to their CSS class names
 */
export const COMMAND_PALETTE_MODE_CLASS_MAP: Record<CommandPaletteMode, string> = {
  'search': 'command-palette-search',
  'command': 'command-palette-command',
  'navigation': 'command-palette-navigation'
};

/**
 * Maps overlay layers to their z-index values
 */
export const OVERLAY_LAYER_Z_INDEX_MAP: Record<OverlayLayer, number> = {
  'dropdown': 1000,
  'sticky': 1100,
  'fixed': 1200,
  'modal': 1300,
  'popover': 1400,
  'tooltip': 1500
};

/**
 * Maps close behaviors to their configuration
 */
export const CLOSE_BEHAVIOR_CONFIG_MAP: Record<CloseBehavior, { clickOutside: boolean; escape: boolean }> = {
  'click-outside': { clickOutside: true, escape: false },
  'escape': { clickOutside: false, escape: true },
  'both': { clickOutside: true, escape: true },
  'manual': { clickOutside: false, escape: false }
};

/**
 * Maps transition timings to their millisecond values
 */
export const TRANSITION_TIMING_VALUE_MAP: Record<TransitionTiming, number> = {
  'fast': 150,
  'normal': 300,
  'slow': 500
};

/**
 * Maps overlay sizes to their dimensions
 */
export const OVERLAY_SIZE_DIMENSIONS: Record<OverlaySize, { width?: string; height?: string; maxWidth?: string; maxHeight?: string }> = {
  'xs': { maxWidth: '20rem' },
  'sm': { maxWidth: '28rem' },
  'md': { maxWidth: '36rem' },
  'lg': { maxWidth: '48rem' },
  'xl': { maxWidth: '64rem' },
  'full': { width: '100%', height: '100%' }
};

/**
 * Maps overlay placements to their opposite placements
 */
export const OVERLAY_PLACEMENT_OPPOSITE_MAP: Record<string, string> = {
  'top': 'bottom',
  'bottom': 'top',
  'left': 'right',
  'right': 'left'
};

/**
 * Maps drawer positions to their transform origins
 */
export const DRAWER_POSITION_TRANSFORM_ORIGIN: Record<DrawerPosition, string> = {
  'left': 'left center',
  'right': 'right center',
  'top': 'center top',
  'bottom': 'center bottom'
};

/**
 * Maps overlay animations to their keyframe names
 */
export const OVERLAY_ANIMATION_KEYFRAMES: Record<OverlayAnimation, string> = {
  'fade': 'fadeIn',
  'slide': 'slideIn',
  'scale': 'scaleIn',
  'zoom': 'zoomIn',
  'none': 'none'
};

// Made with Bob
