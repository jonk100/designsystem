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
import { FEEDBACK_DURATION_VALUES } from './feedback.consts';

/**
 * Validates if a value is a valid feedback severity
 */
export function isValidFeedbackSeverity(value: string): value is FeedbackSeverity {
  const validSeverities: FeedbackSeverity[] = ['info', 'success', 'warning', 'error', 'neutral'];
  return validSeverities.includes(value as FeedbackSeverity);
}

/**
 * Validates if a value is a valid feedback variant
 */
export function isValidFeedbackVariant(value: string): value is FeedbackVariant {
  const validVariants: FeedbackVariant[] = ['solid', 'outline', 'soft', 'subtle'];
  return validVariants.includes(value as FeedbackVariant);
}

/**
 * Validates if a value is a valid feedback position
 */
export function isValidFeedbackPosition(value: string): value is FeedbackPosition {
  const validPositions: FeedbackPosition[] = [
    'top', 'top-left', 'top-right',
    'bottom', 'bottom-left', 'bottom-right',
    'center'
  ];
  return validPositions.includes(value as FeedbackPosition);
}

/**
 * Gets the CSS class name for feedback severity
 */
export function getFeedbackSeverityClass(severity: FeedbackSeverity): string {
  return `feedback-${severity}`;
}

/**
 * Gets the CSS class name for feedback variant
 */
export function getFeedbackVariantClass(variant: FeedbackVariant): string {
  return `feedback-${variant}`;
}

/**
 * Gets the CSS class name for feedback position
 */
export function getFeedbackPositionClass(position: FeedbackPosition): string {
  return `feedback-${position}`;
}

/**
 * Gets the CSS class name for feedback animation
 */
export function getFeedbackAnimationClass(animation: FeedbackAnimation): string {
  return `feedback-animate-${animation}`;
}

/**
 * Gets the CSS class name for feedback size
 */
export function getFeedbackSizeClass(size: FeedbackSize): string {
  return `feedback-${size}`;
}

/**
 * Gets the duration value in milliseconds
 */
export function getFeedbackDurationValue(duration: FeedbackDuration): number | null {
  return FEEDBACK_DURATION_VALUES[duration];
}

/**
 * Gets the CSS class name for progress type
 */
export function getProgressTypeClass(type: ProgressType): string {
  return `progress-${type}`;
}

/**
 * Gets the CSS class name for progress size
 */
export function getProgressSizeClass(size: ProgressSize): string {
  return `progress-${size}`;
}

/**
 * Gets the CSS class name for skeleton animation
 */
export function getSkeletonAnimationClass(animation: SkeletonAnimation): string {
  return `skeleton-${animation}`;
}

/**
 * Gets the CSS class name for skeleton shape
 */
export function getSkeletonShapeClass(shape: SkeletonShape): string {
  return `skeleton-${shape}`;
}

/**
 * Gets the CSS class name for spinner size
 */
export function getSpinnerSizeClass(size: SpinnerSize): string {
  return `spinner-${size}`;
}

/**
 * Gets the CSS class name for alert dialog type
 */
export function getAlertDialogTypeClass(type: AlertDialogType): string {
  return `alert-dialog-${type}`;
}

/**
 * Gets the CSS class name for banner mode
 */
export function getBannerModeClass(mode: BannerMode): string {
  return `banner-${mode}`;
}

/**
 * Calculates progress percentage
 */
export function calculateProgressPercentage(current: number, total: number): number {
  if (total === 0) return 0;
  return Math.min(Math.max((current / total) * 100, 0), 100);
}

/**
 * Formats progress percentage for display
 */
export function formatProgressPercentage(percentage: number): string {
  return `${Math.round(percentage)}%`;
}

/**
 * Checks if feedback should auto-dismiss
 */
export function shouldAutoDismiss(duration: FeedbackDuration): boolean {
  return duration !== 'persistent';
}

/**
 * Gets the icon name for feedback severity
 */
export function getFeedbackSeverityIcon(severity: FeedbackSeverity): string {
  const iconMap: Record<FeedbackSeverity, string> = {
    'info': 'info-circle',
    'success': 'check-circle',
    'warning': 'exclamation-triangle',
    'error': 'times-circle',
    'neutral': 'circle'
  };
  return iconMap[severity];
}

/**
 * Gets the ARIA role for feedback severity
 */
export function getFeedbackAriaRole(severity: FeedbackSeverity): string {
  const roleMap: Record<FeedbackSeverity, string> = {
    'info': 'status',
    'success': 'status',
    'warning': 'alert',
    'error': 'alert',
    'neutral': 'status'
  };
  return roleMap[severity];
}

/**
 * Combines multiple feedback classes
 */
export function combineFeedbackClasses(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Checks if feedback is dismissible
 */
export function isFeedbackDismissible(duration: FeedbackDuration): boolean {
  return duration === 'persistent';
}

/**
 * Gets skeleton width based on text length
 */
export function getSkeletonWidth(textLength: number): string {
  const baseWidth = 50;
  const widthPerChar = 8;
  return `${Math.min(baseWidth + (textLength * widthPerChar), 100)}%`;
}

// Made with Bob
