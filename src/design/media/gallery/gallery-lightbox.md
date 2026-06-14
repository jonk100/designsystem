# Gallery + Lightbox

A composed image collection system. `Gallery` handles layout; `Lightbox` handles fullscreen viewing. They are decoupled — `Gallery` works without `Lightbox`, and `Lightbox` can be triggered by anything that dispatches a `lightbox:open` event.

---

## Gallery

A layout wrapper for displaying a collection of images. Three layout variants: `grid`, `masonry`, and `strip`.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'grid' \| 'masonry' \| 'strip'` | `'grid'` | Layout mode. |
| `columns` | `1–6` | `3` | Number of columns. Ignored in `strip` variant. |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Gap between items. Maps to `--space--*` tokens. |
| `images` | `GalleryImage[]` | — | Data-driven image array. When provided, Gallery renders GalleryItems internally. |
| `lightbox` | `boolean` | `false` | When true, each item dispatches a `lightbox:open` event on click. |
| `id` | `string` | auto | Stable ID for this gallery instance. Required when multiple galleries coexist on the same page. |
| `class` | `string` | — | Additional CSS classes. |
| `class:list` | `string` | — | List of CSS classes. |

### Variants

#### `grid`
Uniform CSS Grid. All items share the same cell size. Best for homogeneous content — avatars, album art, thumbnails.

#### `masonry`
Variable-height columns. Uses `grid-template-rows: masonry` where supported, with a CSS column fallback elsewhere. Best for photography with mixed aspect ratios.

#### `strip`
A single horizontal row with `overflow-x: scroll` and `scroll-snap`. Best for timelines, film strips, or preview rows.

### Usage

**Data-driven with lightbox:**
```astro
---
import Gallery from '@/design/media/gallery/Gallery.astro';
import Lightbox from '@/design/media/lightbox/Lightbox.astro';

const photos = [
  { src: '/photos/a.jpg', alt: 'A photo', caption: 'Caption text' },
  { src: '/photos/b.jpg', alt: 'B photo' },
];
---

<Lightbox />

<Gallery
  images={photos}
  variant="grid"
  columns={3}
  gap="md"
  lightbox
/>
```

**Slot-driven:**
```astro
---
import Gallery from '@/design/media/gallery/Gallery.astro';
import GalleryItem from '@/design/media/gallery/GalleryItem.astro';
---

<Gallery variant="masonry" columns={3} gap="sm">
  <GalleryItem src="/a.jpg" alt="A" caption="Caption A" lightbox allImages={photos} galleryId="my-gallery" index={0} total={2} />
  <GalleryItem src="/b.jpg" alt="B" lightbox allImages={photos} galleryId="my-gallery" index={1} total={2} />
</Gallery>
```

**Film strip:**
```astro
<Gallery variant="strip" columns={4} gap="xs" images={frames} />
```

---

## GalleryItem

An individual item within a Gallery. Renders an `Image` with an optional hover overlay and caption reveal.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image source URL. Required. |
| `alt` | `string` | — | Alt text. Required. |
| `caption` | `string` | — | Optional caption shown in overlay and Lightbox. |
| `index` | `number` | `0` | Zero-based index within the Gallery. Used for Lightbox navigation. |
| `total` | `number` | `1` | Total images in the Gallery. Used for aria-label. |
| `galleryId` | `string` | `''` | Parent Gallery's ID. Scopes the `lightbox:open` event. |
| `lightbox` | `boolean` | `false` | Enables hover overlay and click-to-open behaviour. |
| `allImages` | `GalleryImage[]` | `[]` | Full image set passed in the `lightbox:open` event payload. |

---

## Lightbox

A fullscreen image viewer. Type C Region component — static HTML mount point (`Lightbox.astro`) with an external TypeScript controller (`Lightbox.ts`).

Place **one `<Lightbox />`** per page. All galleries share it.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `id` | `string` | `'lightbox-region'` | ID for the root `<dialog>` element. |

### Keyboard support

| Key | Action |
|---|---|
| `←` Arrow | Previous image |
| `→` Arrow | Next image |
| `Escape` | Close |

### Touch support

Swipe left → next image. Swipe right → previous image. Minimum 50px swipe distance to prevent accidental navigation.

### Custom events

| Event | Direction | Payload |
|---|---|---|
| `lightbox:open` | Gallery → Lightbox | `{ images, index, galleryId }` |
| `lightbox:close` | Lightbox → world | none |

Anything that dispatches a `lightbox:open` `CustomEvent` on `window` can open the Lightbox — it's not tied to Gallery specifically.

---

## Architecture notes

**Decoupling.** Gallery and Lightbox communicate exclusively via `window.dispatchEvent`. Neither imports the other. This means:
- Gallery works without Lightbox on the page (items just don't open a viewer).
- Lightbox can be triggered from anywhere — a card, a button, a custom component.
- Multiple gallery instances on one page share a single Lightbox dialog without any wiring.

**`<dialog>` element.** The Lightbox uses the native HTML `<dialog>` element with `showModal()`. This gives top-layer stacking (no `z-index` configuration), a native `::backdrop` pseudo-element, and built-in focus trapping and `Escape` key handling via the browser.

**Double-init guard.** `initLightbox()` checks for a `data-lightbox-init` attribute before attaching listeners. This prevents duplicate event bindings if the script runs more than once (e.g. in Astro's view transitions).

**`GalleryImage` type.** Shared between Gallery and Lightbox via `Gallery.types.ts`. Both re-export it from their own `index.ts` for clean import paths.

---

## Related components

- [`Image`](/docs/components/image)
- [`Video`](/docs/components/video)
- [`Paper`](/docs/components/paper)
