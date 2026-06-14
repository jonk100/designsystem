import type { BaseComponentProps } from "@/design/shared/props";
import type { SpacingScale } from "../shared";
import type { DisplaySize } from "./types";

export interface DisplayComponentProps extends BaseComponentProps {
  mx?: SpacingScale;
  my?: SpacingScale;
  px?: SpacingScale;
  py?: SpacingScale;
  margin?: SpacingScale;
  padding?: SpacingScale;
  src?: string;
  size: DisplaySize;
}
