import type { TextTag } from "./Text.types";

export const TEXT_TAGS_MAP: Record<TextTag, TextTag> = {
  "p": "p",
  "div": "div",
  "span": "span",
  "em": "em",
  "strong": "strong",
  "mark": "mark",
  "del": "del",
  "ins": "ins",
  "sup": "sup",
  "sub": "sub",
  "h1": "h1",
  "h2": "h2",
  "h3": "h3",
  "h4": "h4",
  "h5": "h5",
  "h6": "h6"
} as const;