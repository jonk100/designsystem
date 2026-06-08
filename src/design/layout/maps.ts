import type { LayoutAlign } from "@/design/shared/types";

/** Maps logical layout alignments to standard CSS flexbox/grid property values */
export const LAYOUT_ALIGN_MAP: Record<LayoutAlign, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  baseline: "baseline"
};
