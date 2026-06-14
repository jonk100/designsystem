// src/design/display/badge/Badge.props.ts
import type { BaseComponentProps } from "@/design/shared/props";
import type { DisplayVariant, DisplaySize } from "@/design/display/types";
import type { SvgName } from "@/design/shared/icons/index";

export interface BadgeProps extends BaseComponentProps, Omit<import("astro/types").HTMLAttributes<"span">, keyof BaseComponentProps> {
  icon?: SvgName | string;
  variant?: DisplayVariant;
  size?: DisplaySize;
}