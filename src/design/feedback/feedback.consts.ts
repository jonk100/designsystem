import type { 
  FeedbackSeverity, 
  FeedbackVariant, 
  FeedbackPosition, 
  FeedbackAnimation,
  FeedbackDuration,
  FeedbackSize,
  FeedbackIconPosition,
  ProgressType,
  ProgressSize,
  SkeletonAnimation,
  SkeletonShape,
  SpinnerSize,
  AlertDialogType,
  BannerMode
} from './feedback.types';

/**
 * Available feedback severity levels
 */
export const FEEDBACK_SEVERITIES: FeedbackSeverity[] = [
  'info', 'success', 'warning', 'error', 'neutral'
];

/**
 * Available feedback variants
 */
export const FEEDBACK_VARIANTS: FeedbackVariant[] = [
  'solid', 'outline', 'soft', 'subtle'
];

/**
 * Available feedback positions
 */
export const FEEDBACK_POSITIONS: FeedbackPosition[] = [
  'top', 'top-left', 'top-right',
  'bottom', 'bottom-left', 'bottom-right',
  'center'
];

/**
 * Available feedback animations
 */
export const FEEDBACK_ANIMATIONS: FeedbackAnimation[] = [
  'fade', 'slide', 'scale', 'bounce', 'none'
];

/**
 * Available feedback durations
 */
export const FEEDBACK_DURATIONS: FeedbackDuration[] = [
  'short', 'medium', 'long', 'persistent'
];

/**
 * Duration values in milliseconds
 */
export const FEEDBACK_DURATION_VALUES: Record<FeedbackDuration, number | null> = {
  'short': 3000,
  'medium': 5000,
  'long': 8000,
  'persistent': null
};

/**
 * Available feedback sizes
 */
export const FEEDBACK_SIZES: FeedbackSize[] = ['sm', 'md', 'lg'];

/**
 * Available feedback icon positions
 */
export const FEEDBACK_ICON_POSITIONS: FeedbackIconPosition[] = [
  'left', 'right', 'top', 'none'
];

/**
 * Available progress types
 */
export const PROGRESS_TYPES: ProgressType[] = [
  'linear', 'circular', 'indeterminate'
];

/**
 * Available progress sizes
 */
export const PROGRESS_SIZES: ProgressSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Available skeleton animations
 */
export const SKELETON_ANIMATIONS: SkeletonAnimation[] = [
  'pulse', 'wave', 'none'
];

/**
 * Available skeleton shapes
 */
export const SKELETON_SHAPES: SkeletonShape[] = [
  'text', 'circular', 'rectangular', 'rounded'
];

/**
 * Available spinner sizes
 */
export const SPINNER_SIZES: SpinnerSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Available alert dialog types
 */
export const ALERT_DIALOG_TYPES: AlertDialogType[] = [
  'info', 'warning', 'error', 'success', 'confirm'
];

/**
 * Available banner modes
 */
export const BANNER_MODES: BannerMode[] = ['inline', 'floating', 'sticky'];

/**
 * Default values
 */
export const DEFAULT_FEEDBACK_SEVERITY: FeedbackSeverity = 'info';
export const DEFAULT_FEEDBACK_VARIANT: FeedbackVariant = 'solid';
export const DEFAULT_FEEDBACK_POSITION: FeedbackPosition = 'top-right';
export const DEFAULT_FEEDBACK_ANIMATION: FeedbackAnimation = 'slide';
export const DEFAULT_FEEDBACK_DURATION: FeedbackDuration = 'medium';
export const DEFAULT_FEEDBACK_SIZE: FeedbackSize = 'md';
export const DEFAULT_FEEDBACK_ICON_POSITION: FeedbackIconPosition = 'left';
export const DEFAULT_PROGRESS_TYPE: ProgressType = 'linear';
export const DEFAULT_PROGRESS_SIZE: ProgressSize = 'md';
export const DEFAULT_SKELETON_ANIMATION: SkeletonAnimation = 'pulse';
export const DEFAULT_SKELETON_SHAPE: SkeletonShape = 'rectangular';
export const DEFAULT_SPINNER_SIZE: SpinnerSize = 'md';
export const DEFAULT_ALERT_DIALOG_TYPE: AlertDialogType = 'info';
export const DEFAULT_BANNER_MODE: BannerMode = 'inline';

// Made with Bob
