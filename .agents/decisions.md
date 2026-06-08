## ComponentPreview — DOM Patching Over Re-rendering

For the interactive prop explorer, we chose direct DOM patching (class swapping, style variable updates, element visibility toggling) over iframe re-rendering or client-side framework rendering. This keeps the component zero-dependency, compatible with any Astro-rendered component, and avoids the combinatorial explosion of pre-rendering all prop states. The consumer renders the component in its "maximal state" (all optional features enabled), and the JS subtracts or modifies from there.

## ComponentPreview — Syntax Highlighting

Uses a lightweight ~40-line regex tokenizer for code block colorization instead of runtime Shiki. Astro's built-in Shiki is build-time only and can't highlight dynamically changing code. The tokenizer handles HTML/JSX tags, attributes, strings, and punctuation — sufficient for the short code snippets the component generates.
