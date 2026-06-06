import type { CommonHTMLProps } from "../../shared/props";
import type { AnimationName } from "../animation/motion.types.ts";

export interface TextProps extends CommonHTMLProps {
  animation?: AnimationName;
}

export type CaptionElement = "figcaption" | "span" | "div" | "p";