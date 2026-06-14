import type { NavComponentProps } from "@/design/nav/nav.props";
import type { TabsVariant, TabsSize } from "./Tabs.types";

export interface TabsProps extends NavComponentProps {
  variant?: TabsVariant;
  size?: TabsSize;
  fullWidth?: boolean;
}