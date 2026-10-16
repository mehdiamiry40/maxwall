// Locally hosted inspiration photography, free under the Unsplash License (https://unsplash.com/license).
// Swap these for photos of Max Wall's own jobs as they become available:
// drop files in /public/images and change `src` to e.g. "/images/hero.jpg".

import { blurs } from "@/lib/blurs";

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  source?: string;
  location?: string;
};

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
    src: unsplash("photo-1756541790216-2b23c9113e43-hero"),
    alt: "Modern Australian townhouses with smooth white facades, grey cladding panels and timber balconies",
    credit: "Troy Mortier",
    source:
      "https://unsplash.com/photos/modern-townhouses-with-geometric-designs-on-a-street-44FRvkxNwcY",
    location: "Clyde North VIC, Australia",
  },
  hero: {
    src: unsplash("photo-1776685107181-c6caafb712bc"),
    alt: "New Australian homes combining cladding, smooth wall finishes and brick",
    credit: "Troy Mortier",
    source:
      "https://unsplash.com/photos/modern-houses-with-grey-roofs-and-brick-accents-pxSADPEJEaI",
    location: "Clyde North VIC, Australia",
  },
  about: {
    src: unsplash("photo-1768839725085-829e6ac7ac26"),
    alt: "Tradesperson's hands applying a trowelled finish to a wall",
    credit: "Sasun Bughdaryan",
  },
  servicesBanner: {
    src: unsplash("photo-1632711057336-ddd25c1d921f"),
    alt: "Close-up of a textured white wall finish",
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
    src: unsplash("photo-1750500376369-442d5d557b93"),
    alt: "Homes under construction with timber frames and scaffolding in Clyde North, Victoria",
    credit: "Troy Mortier",
    source:
      "https://unsplash.com/photos/houses-are-under-construction-framing-is-visible-sHQPqnUygmE",
    location: "Clyde North VIC, Australia",
  },
  services: {
    "james-hardie-cladding": {
      src: unsplash("photo-1600732143075-4ec4f7a4d8f3"),
      alt: "Home clad in painted weatherboards with white shutters",
      credit: "Nicolas Gonzalez",
    },
    "re-cladding": {
      src: unsplash("photo-1666586988952-deac102fe388"),
      alt: "Modern facade where vertical cladding meets timber-look panels",
      credit: "S.Group Official",
    },
    "aac-panels": {
      src: unsplash("photo-1777106322601-578dc9213ace"),
      alt: "Two-storey Australian home with a smooth rendered-look facade",
      credit: "Troy Mortier",
      source:
        "https://unsplash.com/photos/modern-two-story-house-with-a-dark-garage-door-HckCpdBDeDk",
    },
    "eaves-linings": {
      src: unsplash("photo-1633519659201-8b8510d54afa"),
      alt: "White gable wall and eaves against a blue sky",
      credit: "法号 削你",
    },
    insulation: {
      src: unsplash("photo-1753460133435-bf41927f77f7"),
      alt: "Roof space lined with foil-faced insulation between timber rafters",
      credit: "Brett Jordan",
      source:
        "https://unsplash.com/photos/attic-with-insulation-beams-and-storage-_oy5VYpFe5Y",
    },
    microcement: {
      src: unsplash("photo-1750036015902-c6f5ebca924e"),
      alt: "Bathroom with a seamless stone-look microcement wall and timber vanity",
      credit: "Ela De Pure",
      source:
        "https://unsplash.com/photos/elegant-modern-bathroom-with-natural-accents-and-plants-HIu7A27ptE0",
    },
    painting: {
      src: unsplash("photo-1562259949-e8e7689d7828"),
      alt: "Paint roller applying fresh paint to a wall",
      credit: "Theme Photos",
      source:
        "https://unsplash.com/photos/paint-roller-applying-blue-paint-Cl-OpYWFFm0",
    },
    detail: {
      src: unsplash("photo-1628012209120-d9db7abf7eab"),
      alt: "Contemporary home with a smooth white facade",
      credit: "Felix",
    },
    texture: {
      src: unsplash("photo-1523217582562-09d0def993a6"),
      alt: "White modern house with clean lines",
      credit: "Pixasquare",
    },
    install: {
      src: unsplash("photo-1701850009190-2859ba2aeea6"),
      alt: "Tradesperson installing lightweight wall blocks",
      credit: "Solømen",
    },
  } as Record<string, Photo>,
} satisfies Record<string, Photo | Record<string, Photo>>;
