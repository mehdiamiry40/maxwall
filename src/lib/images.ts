// Locally hosted inspiration photography, free under the Unsplash License (https://unsplash.com/license).
// Swap these for photos of Max Wall's own jobs as they become available:
// drop files in /public/images and change `src` to e.g. "/images/hero.jpg".

import { blurs } from "@/lib/blurs";

export type Photo = { src: string; alt: string; credit: string };

/** next/image props that show a tiny blurred preview while the photo loads (if we have one). */
export function blurProps(photo: Photo) {
  const blurDataURL =
    blurs[photo.src.match(/photo-[0-9]+-[0-9a-f]+/)?.[0] ?? ""];
  return blurDataURL ? { placeholder: "blur" as const, blurDataURL } : {};
}

// Optimised local WebP files keep photos reliable and avoid runtime external requests.
const unsplash = (id: string) => `/images/${id}.webp`;

export const images = {
  homeHero: {
    src: "/images/maxwall-hero-home.webp",
    alt: "Architectural inspiration showing a contemporary Australian home with white rendered walls and vertical feature cladding",
    credit: "AI-generated architectural inspiration",
  },
  hero: {
    src: unsplash("photo-1657346088167-b982455bf29a"),
    alt: "Modern two-storey home with white render and grey cladding at dusk",
    credit: "George Barros",
  },
  about: {
    src: unsplash("photo-1768839725085-829e6ac7ac26"),
    alt: "Plasterer's hands applying render to a wall with trowels",
    credit: "Sasun Bughdaryan",
  },
  servicesBanner: {
    src: unsplash("photo-1632711057336-ddd25c1d921f"),
    alt: "Close-up of textured white render on a building",
    credit: "Daniel Reyes",
  },
  areasBanner: {
    src: unsplash("photo-1720175356041-6b1c963e0075"),
    alt: "Brick bungalow with a front garden in a leafy suburb",
    credit: "Paddy Pohlod",
  },
  faqBanner: {
    src: unsplash("photo-1666586988952-deac102fe388"),
    alt: "Timber and metal cladding meeting on a modern facade",
    credit: "S.Group Official",
  },
  skyline: {
    src: unsplash("photo-1677893111398-0ebb0ed2aa85"),
    alt: "Adelaide city skyline seen across leafy suburbs",
    credit: "Ben",
  },
  dusk: {
    src: unsplash("photo-1692281371858-329a972017ff"),
    alt: "Adelaide city at dusk from the hills",
    credit: "Garvit",
  },
  scaffold: {
    src: unsplash("photo-1606383446056-eb3fc3cde97b"),
    alt: "Home extension under construction with scaffolding",
    credit: "Brett Jordan",
  },
  services: {
    "cement-render": {
      src: unsplash("photo-1633519659201-8b8510d54afa"),
      alt: "White rendered gable wall against a blue sky",
      credit: "法号 削你",
    },
    "acrylic-render": {
      src: unsplash("photo-1628012209120-d9db7abf7eab"),
      alt: "Contemporary home with smooth white acrylic render",
      credit: "Felix",
    },
    "hebel-aac-panels": {
      src: unsplash("photo-1701850009190-2859ba2aeea6"),
      alt: "Tradesperson laying and mortaring blocks",
      credit: "Solømen",
    },
    "foam-cladding": {
      src: unsplash("photo-1523217582562-09d0def993a6"),
      alt: "White rendered modern house with clean lines",
      credit: "Pixasquare",
    },
    "fibre-cement-cladding": {
      src: unsplash("photo-1600732143075-4ec4f7a4d8f3"),
      alt: "Weatherboard-clad home with white shutters",
      credit: "Nicolas Gonzalez",
    },
    "render-repairs": {
      src: unsplash("photo-1753977724515-3c5b39ee15ed"),
      alt: "House extension part-way through being rendered",
      credit: "Brett Jordan",
    },
  } as Record<string, Photo>,
} satisfies Record<string, Photo | Record<string, Photo>>;
