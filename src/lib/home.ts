// Editorial content for the homepage. Inspiration images are not completed Max Wall jobs.
import { images } from "@/lib/images";

export const projectIdeas = [
  {
    title: "Clean lines. A fresh perspective.",
    label: "Contemporary cladding",
    body: "James Hardie Linea weatherboards, grooved Axon, Stria and Oblique boards, and textured panels for new builds, extensions and feature walls.",
    image: images.hero,
    href: "/services/james-hardie-cladding",
  },
  {
    title: "Seamless, from wall to floor.",
    label: "Microcement bathrooms",
    body: "A continuous, grout-free Dulux AcraStone finish for walls and floors, often applied straight over sound existing tiles.",
    image: images.services.microcement,
    href: "/services/microcement",
  },
  {
    title: "Give your home a new beginning.",
    label: "Facade makeovers",
    body: "New cladding on an older home, with wall wrap and insulation added while the frame is open.",
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
    body: "Replace a tired facade, insulate a hot or cold house, or resurface a bathroom without the demolition. We check what's there and recommend the system that suits.",
    features: [
      "Re-cladding & facade makeovers",
      "Ceiling, wall & underfloor insulation",
      "Microcement bathroom renovations",
    ],
    href: "/projects/renovations",
    link: "Cladding and insulation for renovations",
  },
  {
    number: "02",
    title: "For builders",
    body: "One team for wall wrap, insulation, cladding, AAC panels, eaves and paint, priced from your plans and scheduled around your build.",
    features: [
      "New homes & multi-unit builds",
      "James Hardie cladding & AAC panels",
      "Insulation, eaves & linings",
    ],
    href: "/projects/new-builds",
    link: "Cladding and insulation for new builds",
  },
];
