# Video

A flexible video primitive that supports native browser controls or a custom minimal overlay player. It offers token-driven aspect-ratio and object-fit handling, plus optional fullscreen support.

## Overview

The component's responsibility is to render a video source with optional UI controls. It does **not** manage playlists, adaptive streaming, or complex media pipelines – those are left to higher-level controllers. The minimal overlay adds a lightweight UI (play/pause, scrubber, timestamp, fullscreen) while keeping the markup simple and accessible.

## Props

| Prop          | Type                              | Default   | Description |
|---------------|-----------------------------------|-----------|-------------|
| src           | `string`                          | –       | URL of the video file (required by `MediaComponentProps`). |
| caption       | `string`                          | –       | Optional caption rendered as `<figcaption>`. |
| poster        | `string`                          | –       | Optional poster image shown before playback. |
| variant       | `'native' \| 'minimal' \| 'none'`| `'native'`| UI mode: native browser controls, minimal custom overlay, or no UI. |
| ratio         | `VideoRatio`` ('square'|'video'|'portrait'|'wide'|'auto'`) | `'video'` | Aspect-ratio preset applied via CSS custom property. |
| fit           | `VideoFit`` ('cover'|'contain'`)  | `'contain'`| CSS `object-fit` for the video element. |
| type          | `VideoMimeType` (see types file)  | –       | MIME type hint for the `<source>` element. |
| loop          | `boolean`                         | `false`   | Whether the video should loop. |
| autoplay      | `boolean`                         | `false`   | Whether playback starts automatically. |
| muted         | `boolean`                         | `false`   | Whether the video starts muted. |
| disablePip    | `boolean`                         | `false`   | Disables native picture-in-picture mode. |
| class         | `string`                          | –       | Global class prop merged via `mergeClasses`. |
| class:list    | `Record<string, boolean>`         | –       | Object-list class prop merged via `mergeClasses`. |
| style         | `string \| Record<string,string>` | –       | Inline styles merged via `mergeStyles`. |
| animate       | `string`                          | –       | Animation string processed by `mergeClasses`. |
| effects       | `string[]`                        | –       | Visual effects processed by `mergeClasses`. |
| bg            | `BackgroundTone`                  | –       | Background tone class added by `mergeClasses`. |

*All props from `MediaComponentProps`` (src`, `caption`) and `BaseComponentProps` (global props) are included.*

## Variants / Sizes

| Variant | Visual effect |
|---------|---------------|
| `native` | Full native browser UI (play, seek, volume, fullscreen). |
| `minimal`| Custom overlay with play/pause button, scrubber, timestamp, and fullscreen toggle. |
| `none`   | No UI – only the `video` element (useful for background video). |

## Usage

### Basic

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/intro.mp4" />
</figure>
```

### Common Patterns

**Native video with poster**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/demo.mp4" poster="/media/demo-poster.jpg" variant="native" />
</figure>
```

**Minimal overlay with custom ratio and fullscreen**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video
    src="/media/hero.mp4"
    variant="minimal"
    ratio="wide"
    fit="cover"
    autoplay
    muted
    disablePip
  />
</figure>
```

**Background video (no UI, auto-loop)**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/bg.mp4" variant="none" loop autoplay muted />
</figure>
```

## Logic

The component includes an inline `<script>` that:

* Finds all elements with `data-video-player`.
* Reads data attributes (`loop`, `autoplay`, `muted`).
* Sets up the video element, play/pause button, scrubber, progress bar, timestamp, and fullscreen button.
* Handles:
  * Play/pause toggling.
  * Scrubber click seeking.
  * Time-update for progress bar and timestamp.
  * Fullscreen toggle (request/exit fullscreen).
  * Autoplays when the `autoplay` attribute is true.

All logic is self-contained; there is no external controller file.

## Accessibility

* Native variant inherits full browser accessibility for `video`.
* Minimal overlay provides a button with `aria-label` that toggles between "Play" and "Pause", and a fullscreen button with appropriate labeling.
* Captions are rendered inside `<figcaption>` for screen-reader context.
* No custom ARIA roles beyond native semantics.

## CSS Architecture

* Root BEM class: `video`.
* Modifier class from `resolveVariantClass` (e.g., `video--minimal`).
* Token-driven custom properties:
  * `--local-ratio` from `VIDEO_VAR_MAP.ratio`.
  * `--local-fit` from `VIDEO_VAR_MAP.fit`.
* Global animation/effect/bg classes merged via `mergeClasses`.

## Related Components

* `Audio` – sibling media primitive with similar minimal overlay logic.
* `Image` – token-driven visual component.
* `Spinner` – often used as a loading placeholder for media. (`'square'|'video'|'portrait'|'wide'|'auto'`) | `'video'` | Aspect-ratio preset applied via CSS custom property. |
| fit           | `VideoFit` (`'cover'|'contain'`)  | `'contain'`| CSS `object-fit` for the video element. |
| type          | `VideoMimeType` (see types file)  | –       | MIME type hint for the `<source>` element. |
| loop          | `boolean`                         | `false`   | Whether the video should loop. |
| autoplay      | `boolean`                         | `false`   | Whether playback starts automatically. |
| muted         | `boolean`                         | `false`   | Whether the video starts muted. |
| disablePip    | `boolean`                         | `false`   | Disables native picture-in-picture mode. |
| class         | `string`                          | –       | Global class prop merged via `mergeClasses`. |
| class:list    | `Record<string, boolean>`         | –       | Object-list class prop merged via `mergeClasses`. |
| style         | `string \| Record<string,string>` | –       | Inline styles merged via `mergeStyles`. |
| animate       | `string`                          | –       | Animation string processed by `mergeClasses`. |
| effects       | `string[]`                        | –       | Visual effects processed by `mergeClasses`. |
| bg            | `BackgroundTone`                  | –       | Background tone class added by `mergeClasses`. |

*All props from `MediaComponentProps` (`src`, `caption`) and `BaseComponentProps` (global props) are included.*

## Variants / Sizes

| Variant | Visual effect |
|---------|---------------|
| `native` | Full native browser UI (play, seek, volume, fullscreen). |
| `minimal`| Custom overlay with play/pause button, scrubber, timestamp, and fullscreen toggle. |
| `none`   | No UI – only the `video` element (useful for background video). |

## Usage

### Basic

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/intro.mp4" />
</figure>
```

### Common Patterns

**Native video with poster**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/demo.mp4" poster="/media/demo-poster.jpg" variant="native" />
</figure>
```

**Minimal overlay with custom ratio and fullscreen**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video
    src="/media/hero.mp4"
    variant="minimal"
    ratio="wide"
    fit="cover"
    autoplay
    muted
    disablePip
  />
</figure>
```

**Background video (no UI, auto-loop)**

```astro
---
import Video from '@/design/media/video/Video.astro';
---
<figure>
  <Video src="/media/bg.mp4" variant="none" loop autoplay muted />
</figure>
```

## Logic

The component includes an inline `<script>` that:

* Finds all elements with `data-video-player`.
* Reads data attributes (`loop`, `autoplay`, `muted`).
* Sets up the video element, play/pause button, scrubber, progress bar, timestamp, and fullscreen button.
* Handles:
  * Play/pause toggling.
  * Scrubber click seeking.
  * Time-update for progress bar and timestamp.
  * Fullscreen toggle (request/exit fullscreen).
  * Autoplays when the `autoplay` attribute is true.

All logic is self-contained; there is no external controller file.

## Accessibility

* Native variant inherits full browser accessibility for `video`.
* Minimal overlay provides a button with `aria-label` that toggles between "Play" and "Pause", and a fullscreen button with appropriate labeling.
* Captions are rendered inside `<figcaption>` for screen-reader context.
* No custom ARIA roles beyond native semantics.

## CSS Architecture

* Root BEM class: `video`.
* Modifier class from `resolveVariantClass` (e.g., `video--minimal`).
* Token-driven custom properties:
  * `--local-ratio` from `VIDEO_VAR_MAP.ratio`.
  * `--local-fit` from `VIDEO_VAR_MAP.fit`.
* Global animation/effect/bg classes merged via `mergeClasses`.

## Related Components

* `Audio` – sibling media primitive with similar minimal overlay logic.
* `Image` – token-driven visual component.
* `Spinner` – often used as a loading placeholder for media.