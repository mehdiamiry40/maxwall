// Editorial content for the homepage. Inspiration images are not completed Max Wall jobs.
import { images } from "@/lib/images";

export const projectIdeas = [
  {
    title: "Clean lines. A fresh perspective.",
    label: "Contemporary cladding",
    body: "Grooved boards and textured panels bring crisp, modern lines to a new build or extension.",
    image: images.hero,
    href: "/services/james-hardie-cladding",
  },
  {
    title: "Seamless, from wall to floor.",
    label: "Microcement bathrooms",
    body: "A continuous, grout-free finish that can go straight over existing tiles.",
    image: images.services.microcement,
    href: "/services/microcement",
  },
  {
    title: "Give your home a new beginning.",
    label: "Facade makeovers",
    body: "New cladding and insulation can make an existing home look and feel like a whole new place.",
    image: images.areasBanner,
    href: "/services/re-cladding",
  },
];

export const finishOptions = [
  {
    title: "James Hardie cladding",
    label: "Character & low upkeep",
    description:
      "Fibre cement weatherboards, grooved boards and textured panels that resist rot, termites and moisture.",
    suits: "New builds, extensions & re-clads",
    detail: "Linea, Axon, Oblique, Stria & more",
    slug: "james-hardie-cladding",
    icon: "cladding" as const,
  },
  {
    title: "CSR Bradford insulation",
    label: "Comfort all year",
    description:
      "Ceiling, wall, underfloor and acoustic insulation for cooler summers, warmer winters and quieter rooms.",
    suits: "Existing homes, new builds & renovations",
    detail: "Thermal & acoustic batts, wraps & sarking",
    slug: "insulation",
    icon: "insulation" as const,
  },
  {
    title: "Dulux AcraStone microcement",
    label: "Seamless & refined",
    description:
      "A thin, multi-coat microcement for walls and floors with a continuous, grout-free finish.",
    suits: "Bathrooms, laundries, kitchens & floors",
    detail: "Fine, medium or base coat textures",
    slug: "microcement",
    icon: "finish" as const,
  },
];

export const projectTypes = [
  {
    number: "01",
    title: "For homeowners",
    body: "Update a tired facade, insulate a hot or cold home, or renovate a bathroom without the demolition. We'll help you choose the right system.",
    features: [
      "Re-cladding & facade makeovers",
      "Ceiling, wall & underfloor insulation",
      "Microcement bathroom renovations",
    ],
    href: "/projects/renovations",
    link: "Explore renovations",
  },
  {
    number: "02",
    title: "For builders",
    body: "One team for wall wrap, insulation, cladding, AAC panels, eaves and paint. We work to your plans and construction schedule with a clear scope.",
    features: [
      "New homes & multi-unit builds",
      "James Hardie cladding & AAC panels",
      "Insulation, eaves & linings",
    ],
    href: "/projects/new-builds",
    link: "Explore new builds",
  },
];
