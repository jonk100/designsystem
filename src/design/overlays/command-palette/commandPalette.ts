/**
 * src/design/overlays/command-palette/commandPalette.ts
 * Utility to register command palette actions and trigger the palette.
 */

export interface CommandPaletteItem {
  label: string;
  description?: string;
  icon?: string;
  group?: string;
  action: () => void;
}

export const commandPalette = {
  /**
   * Triggers the Command Palette to open.
   */
  open() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("command-palette:open"));
    }
  },

  /**
   * Registers a set of custom commands dynamically.
   * @param items - List of commands to add to the palette registry
   */
  register(items: CommandPaletteItem[]) {
    if (typeof window !== "undefined") {
      const win = window as any;
      win.__command_palette_registry = win.__command_palette_registry || [];
      win.__command_palette_registry.push(...items);

      window.dispatchEvent(
        new CustomEvent("command-palette:register", { detail: { items } })
      );
    }
  }
};
