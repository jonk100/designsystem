/**
 * Severity levels for feedback components
 */
export type FeedbackSeverity = 
  | 'info' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'neutral';

/**
 * Visual variants for feedback components
 */
export type FeedbackVariant = 
  | 'solid' 
  | 'outline' 
  | 'soft' 
  | 'subtle';

/**
 * Position options for feedback components
 */
export type FeedbackPosition = 
  | 'top' 
  | 'top-left' 
  | 'top-right' 
  | 'bottom' 
  | 'bottom-left' 
  | 'bottom-right' 
  | 'center';

/**
 * Animation types for feedback components
 */
export type FeedbackAnimation = 
  | 'fade' 
  | 'slide' 
  | 'scale' 
  | 'bounce' 
  | 'none';

/**
 * Duration options for feedback components
 */
export type FeedbackDuration = 
  | 'short' 
  | 'medium' 
  | 'long' 
  | 'persistent';

/**
 * Size variants for feedback components
 */
export type FeedbackSize = 
  | 'sm' 
  | 'md' 
  | 'lg';

/**
 * Icon position in feedback components
 */
export type FeedbackIconPosition = 
  | 'left' 
  | 'right' 
  | 'top' 
  | 'none';

/**
 * Progress indicator types
 */
export type ProgressType = 
  | 'linear' 
  | 'circular' 
  | 'indeterminate';

/**
 * Progress size variants
 */
export type ProgressSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl';

/**
 * Skeleton animation types
 */
export type SkeletonAnimation = 
  | 'pulse' 
  | 'wave' 
  | 'none';

/**
 * Skeleton shape variants
 */
export type SkeletonShape = 
  | 'text' 
  | 'circular' 
  | 'rectangular' 
  | 'rounded';

/**
 * Spinner size variants
 */
export type SpinnerSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl';

/**
 * Toast action types
 */
export type ToastAction = {
  label: string;
  onClick: () => void;
};

/**
 * Alert dialog types
 */
export type AlertDialogType = 
  | 'info' 
  | 'warning' 
  | 'error' 
  | 'success' 
  | 'confirm';

/**
 * Banner display modes
 */
export type BannerMode = 
  | 'inline' 
  | 'floating' 
  | 'sticky';

// Made with Bob
