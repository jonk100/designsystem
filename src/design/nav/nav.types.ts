import type { NAV_ORIENTATIONS } from "./nav.consts";
import type { NAV_MAP } from "./nav.maps";


/**
 * Provides the choices for the orientation prop in nav components.
 * @see {@link NAV_MAP}
 */
export type NavOrientation = (typeof NAV_ORIENTATIONS)[number];

