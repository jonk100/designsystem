/**
 * src/design/feedback/toast/toast.ts
 * A client-side developer utility for showing toasts dynamically.
 * Exposes methods to trigger toasts from any component without direct DOM access.
 */

export interface ToastShowDetail {
  severity: "success" | "error" | "info" | "warning";
  title?: string;
  description: string;
  duration?: number;
}

export const toast = {
  show(detail: ToastShowDetail) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("toast:show", { detail }));
    }
  },
  success(description: string, title?: string, duration?: number) {
    this.show({ severity: "success", title, description, duration });
  },
  error(description: string, title?: string, duration?: number) {
    this.show({ severity: "error", title, description, duration });
  },
  info(description: string, title?: string, duration?: number) {
    this.show({ severity: "info", title, description, duration });
  },
  warning(description: string, title?: string, duration?: number) {
    this.show({ severity: "warning", title, description, duration });
  },
};
