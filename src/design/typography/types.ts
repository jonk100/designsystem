import type { CommonHTMLProps } from "@/design/shared/props";
import type { AnimationName } from "@/design/animation/Animation.types";
import type { 
    FontSize, TextTone, XAlign, YAlign, FontWeight, 
    LineHeight, LetterSpacing, FontFamily, WhiteSpace, FontStyleProps
} from "@/design/shared/types";

export interface TypographyProps extends FontStyleProps {
  fs?: FontSize;
  tone?: TextTone;
  xa?: XAlign;
  ya?: YAlign;
  fw?: FontWeight | string;
  lh?: LineHeight;
  ls?: LetterSpacing;
  ws?: WhiteSpace;
  ff?: FontFamily;
}

export interface TextProps extends CommonHTMLProps {
  animation?: AnimationName;
}

export type CaptionElement = "figcaption" | "span" | "div" | "p";