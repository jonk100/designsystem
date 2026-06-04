import type { CommonHTMLProps } from "../shared/props.ts";
import type { AnimationName } from "../animation/motion.types.ts";

export interface TextProps extends CommonHTMLProps {
  animation?:
  | AnimationName
}

export type ComponentRadius =
  | "none" | "sm" | "md" | "lg" | "xl" | "full";

export type FontSize =
  | '0' | 'xxs'
  | '1' | 'xs'
  | '2' | 'sm'
  | '3' | 'md'
  | '4' | 'base'
  | '5' | 'lg'
  | '6' | 'xl'
  | '7' | '2xl'
  | '8' | '3xl'
  | '9' | '4xl'
  | '10' | '5xl'
  | '11' | '6xl'
  ;
export type ComponentLayer =
  | "-1"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  ;
export type TextTone =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'white'
  | 'black'
  | 'default'
  | 'muted'
  | 'subtle'
  | 'danger'
  | 'success'
  | 'currentColor'
  | 'inherit'
  ;
export type BackgroundTone =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'white'
  | 'black'
  | 'default'
  | 'transparent'
  | 'currentColor'
  | 'inherit'
  ;
export type XAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'start'
  | 'end'
  ;
export type YAlign =
  | 'super'
  | 'top'
  | 'text-top'
  | 'baseline'
  | 'middle'
  | 'bottom'
  | 'text-bottom'
  | 'sub'
  ;

export type InlineStyle = Record<string, string | number>;