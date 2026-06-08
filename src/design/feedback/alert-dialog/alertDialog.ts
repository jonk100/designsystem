/**
 * src/design/feedback/alert-dialog/alertDialog.ts
 * Client-side utility for executing confirmation dialogs programmatically.
 * Exposes alertDialog.confirm() which returns a Promise<boolean>.
 */

export interface AlertDialogConfirmOptions {
  title?: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const alertDialog = {
  confirm(options: AlertDialogConfirmOptions): Promise<boolean> {
    return new Promise((resolve) => {
      if (typeof window !== "undefined") {
        // Unique ID to match this specific confirmation request
        const id = Math.random().toString(36).substring(2, 9);

        const onResolve = (e: Event) => {
          const ev = e as CustomEvent;
          if (ev.detail && ev.detail.id === id) {
            window.removeEventListener("alert-dialog:resolve", onResolve);
            resolve(ev.detail.result);
          }
        };

        window.addEventListener("alert-dialog:resolve", onResolve);

        window.dispatchEvent(
          new CustomEvent("alert-dialog:show", {
            detail: {
              id,
              title: options.title,
              description: options.description,
              confirmLabel: options.confirmLabel || "Confirm",
              cancelLabel: options.cancelLabel || "Cancel",
            },
          })
        );
      } else {
        resolve(false);
      }
    });
  },
};
