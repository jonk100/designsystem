import type { BaseComponentProps } from "@/design/shared/props";
import type { DisplayVariant, DisplaySize } from "../types";
import type { SvgName } from "@/design/shared/icons/index";

export interface TagProps extends BaseComponentProps, Omit<import("astro/types").HTMLAttributes<"div">, keyof BaseComponentProps> {
  icon?: SvgName | string;
  variant?: DisplayVariant | 'amber' | 'teal' | 'coral' | 'purple';
  size?: DisplaySize;
  dot?: boolean;
}