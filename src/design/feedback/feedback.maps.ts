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
 * Maps feedback severities to their CSS class names
 */
export const FEEDBACK_SEVERITY_CLASS_MAP: Record<FeedbackSeverity, string> = {
  'info': 'feedback-info',
  'success': 'feedback-success',
  'warning': 'feedback-warning',
  'error': 'feedback-error',
  'neutral': 'feedback-neutral'
};

/**
 * Maps feedback variants to their CSS class names
 */
export const FEEDBACK_VARIANT_CLASS_MAP: Record<FeedbackVariant, string> = {
  'solid': 'feedback-solid',
  'outline': 'feedback-outline',
  'soft': 'feedback-soft',
  'subtle': 'feedback-subtle'
};

/**
 * Maps feedback positions to their CSS class names
 */
export const FEEDBACK_POSITION_CLASS_MAP: Record<FeedbackPosition, string> = {
  'top': 'feedback-top',
  'top-left': 'feedback-top-left',
  'top-right': 'feedback-top-right',
  'bottom': 'feedback-bottom',
  'bottom-left': 'feedback-bottom-left',
  'bottom-right': 'feedback-bottom-right',
  'center': 'feedback-center'
};

/**
 * Maps feedback animations to their CSS class names
 */
export const FEEDBACK_ANIMATION_CLASS_MAP: Record<FeedbackAnimation, string> = {
  'fade': 'feedback-animate-fade',
  'slide': 'feedback-animate-slide',
  'scale': 'feedback-animate-scale',
  'bounce': 'feedback-animate-bounce',
  'none': 'feedback-animate-none'
};

/**
 * Maps feedback durations to their millisecond values
 */
export const FEEDBACK_DURATION_VALUE_MAP: Record<FeedbackDuration, number | null> = {
  'short': 3000,
  'medium': 5000,
  'long': 8000,
  'persistent': null
};

/**
 * Maps feedback sizes to their CSS class names
 */
export const FEEDBACK_SIZE_CLASS_MAP: Record<FeedbackSize, string> = {
  'sm': 'feedback-sm',
  'md': 'feedback-md',
  'lg': 'feedback-lg'
};

/**
 * Maps feedback icon positions to their CSS class names
 */
export const FEEDBACK_ICON_POSITION_CLASS_MAP: Record<FeedbackIconPosition, string> = {
  'left': 'feedback-icon-left',
  'right': 'feedback-icon-right',
  'top': 'feedback-icon-top',
  'none': 'feedback-icon-none'
};

/**
 * Maps progress types to their CSS class names
 */
export const PROGRESS_TYPE_CLASS_MAP: Record<ProgressType, string> = {
  'linear': 'progress-linear',
  'circular': 'progress-circular',
  'indeterminate': 'progress-indeterminate'
};

/**
 * Maps progress sizes to their CSS class names
 */
export const PROGRESS_SIZE_CLASS_MAP: Record<ProgressSize, string> = {
  'xs': 'progress-xs',
  'sm': 'progress-sm',
  'md': 'progress-md',
  'lg': 'progress-lg',
  'xl': 'progress-xl'
};

/**
 * Maps skeleton animations to their CSS class names
 */
export const SKELETON_ANIMATION_CLASS_MAP: Record<SkeletonAnimation, string> = {
  'pulse': 'skeleton-pulse',
  'wave': 'skeleton-wave',
  'none': 'skeleton-none'
};

/**
 * Maps skeleton shapes to their CSS class names
 */
export const SKELETON_SHAPE_CLASS_MAP: Record<SkeletonShape, string> = {
  'text': 'skeleton-text',
  'circular': 'skeleton-circular',
  'rectangular': 'skeleton-rectangular',
  'rounded': 'skeleton-rounded'
};

/**
 * Maps spinner sizes to their CSS class names
 */
export const SPINNER_SIZE_CLASS_MAP: Record<SpinnerSize, string> = {
  'xs': 'spinner-xs',
  'sm': 'spinner-sm',
  'md': 'spinner-md',
  'lg': 'spinner-lg',
  'xl': 'spinner-xl'
};

/**
 * Maps alert dialog types to their CSS class names
 */
export const ALERT_DIALOG_TYPE_CLASS_MAP: Record<AlertDialogType, string> = {
  'info': 'alert-dialog-info',
  'warning': 'alert-dialog-warning',
  'error': 'alert-dialog-error',
  'success': 'alert-dialog-success',
  'confirm': 'alert-dialog-confirm'
};

/**
 * Maps banner modes to their CSS class names
 */
export const BANNER_MODE_CLASS_MAP: Record<BannerMode, string> = {
  'inline': 'banner-inline',
  'floating': 'banner-floating',
  'sticky': 'banner-sticky'
};

/**
 * Maps feedback severities to their icon names
 */
export const FEEDBACK_SEVERITY_ICON_MAP: Record<FeedbackSeverity, string> = {
  'info': 'info',
  'success': 'check-circle',
  'warning': 'alert-triangle',
  'error': 'alert-circle',
  'neutral': 'info'
};

/**
 * Maps feedback severities to their ARIA roles
 */
export const FEEDBACK_SEVERITY_ARIA_ROLE_MAP: Record<FeedbackSeverity, string> = {
  'info': 'status',
  'success': 'status',
  'warning': 'alert',
  'error': 'alert',
  'neutral': 'status'
};

/**
 * Maps feedback severities to their semantic colors
 */
export const FEEDBACK_SEVERITY_COLOR_MAP: Record<FeedbackSeverity, string> = {
  'info': 'blue',
  'success': 'green',
  'warning': 'yellow',
  'error': 'red',
  'neutral': 'gray'
};

/**
 * Maps progress sizes to their dimensions
 */
export const PROGRESS_SIZE_DIMENSIONS: Record<ProgressSize, { height: string; width?: string }> = {
  'xs': { height: '0.25rem' },
  'sm': { height: '0.5rem' },
  'md': { height: '0.75rem' },
  'lg': { height: '1rem' },
  'xl': { height: '1.25rem' }
};

/**
 * Maps spinner sizes to their dimensions
 */
export const SPINNER_SIZE_DIMENSIONS: Record<SpinnerSize, string> = {
  'xs': '1rem',
  'sm': '1.5rem',
  'md': '2rem',
  'lg': '2.5rem',
  'xl': '3rem'
};

// Made with Bob
