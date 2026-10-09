// Editorial content for the homepage. Inspiration images are not completed Max Wall jobs.
import { images } from "@/lib/images";

export const projectIdeas = [
  {
    title: "Clean lines. A fresh perspective.",
    label: "Contemporary render",
    body: "A smooth rendered facade brings different wall surfaces together for a crisp, considered finish.",
    image: images.hero,
    href: "/services/acrylic-render",
  },
  {
    title: "Character, with a modern edge.",
    label: "Feature cladding",
    body: "Horizontal profiles add texture and depth, whether you're updating a classic home or finishing an extension.",
    image: images.faqBanner,
    href: "/services/fibre-cement-cladding",
  },
  {
    title: "Give your walls a new beginning.",
    label: "Facade refresh",
    body: "Repaired surfaces and a consistent finish can help an existing home feel like a whole new place.",
    image: images.areasBanner,
    href: "/services/render-repairs",
  },
];

export const finishOptions = [
  {
    title: "Cement render",
    label: "Solid & timeless",
    description:
      "A durable, traditional finish for solid masonry. Choose a smooth, sponge or float texture, then seal and paint.",
    suits: "Brick, block & masonry walls",
    detail: "Exterior paint or membrane finish",
    slug: "cement-render",
    colour: "#d8d0bf",
  },
  {
    title: "Acrylic render",
    label: "Flexible & refined",
    description:
      "A polymer-modified system with added flexibility. A compatible texture coat creates a consistent, modern facade.",
    suits: "AAC, foam & compatible substrates",
    detail: "Fine, medium or coarse texture",
    slug: "acrylic-render",
    colour: "#e8e5dc",
  },
  {
    title: "Fibre cement cladding",
    label: "Texture & character",
    description:
      "Panel and weatherboard profiles that give framed walls a distinct look, with careful detailing around every opening.",
    suits: "Framed walls, extensions & additions",
    detail: "Weatherboard or panel profiles",
    slug: "fibre-cement-cladding",
    colour: "#92988c",
  },
];

export const projectTypes = [
  {
    number: "01",
    title: "For homeowners",
    body: "Refresh tired brick, repair existing render or give your extension a finish that feels part of your home. We'll help you choose the system and texture.",
    features: [
      "Facade updates & renovations",
      "Extensions & additions",
      "Repairs & matching finishes",
    ],
    href: "/projects/renovations",
    link: "Explore renovations",
  },
  {
    number: "02",
    title: "For builders",
    body: "One team for panel installation, render and final coats. We work with your plans and construction schedule, with a clearly defined scope from the start.",
    features: [
      "New homes & multi-unit builds",
      "Hebel & AAC panel installation",
      "Coordinated cladding & render",
    ],
    href: "/projects/new-builds",
    link: "Explore new builds",
  },
];
