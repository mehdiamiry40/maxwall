// All business details and page copy live here. Edit this file to update the site.

export const site = {
  name: "Max Wall",
  legalName: "Max Wall Building Solutions Pty Ltd",
  abn: "89 657 571 590",
  url: "https://maxwall.com.au",
  // TODO: replace with the real business phone number
  phone: "0400 000 000",
  email: "info@maxwall.com.au",
  city: "Adelaide",
  region: "South Australia",
  hours: "Mon–Sat, 7am–6pm",
};

export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Areas", href: "/areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Fixed, written quotes",
    body: "We measure on site and put the price in writing. No surprises on the invoice, no extras halfway through.",
  },
  {
    title: "Adelaide based, locally trusted",
    body: "Based in Adelaide's north, working for homeowners and builders from Gawler to Seaford and up into the Hills.",
  },
  {
    title: "A finish built to last",
    body: "Proper prep, quality render systems and clean lines. We finish every wall as if it were on our own home.",
  },
];

export type Service = {
  slug: string;
  title: string;
  body: string;
  intro: string;
  includes: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "cement-render",
    title: "Cement render",
    body: "Traditional sand and cement render for brick, block and new builds. Smooth, sponge or float finish.",
    intro:
      "Sand and cement render is the classic way to give brick and block a clean, solid, modern face. It's hard-wearing, breathes well and takes paint beautifully, which is why it's still the go-to finish on so many Adelaide homes.",
    includes: [
      "Site protection, masking and set-up",
      "Surface clean, prep and bonding coat",
      "Corner beads, control joints and stop beads",
      "Base coat and finish coat, sponge or float finish",
      "Clean-up and removal of waste",
    ],
    idealFor: [
      "Updating tired face brick",
      "New builds and block walls",
      "Front fences and retaining walls",
      "Matching existing rendered areas",
    ],
    faqs: [
      {
        q: "Will cement render crack?",
        a: "Fine hairline cracking can happen as any masonry moves, but correct prep, control joints and a good membrane or paint system keep it to a minimum. If your walls move a lot, we may suggest acrylic render instead.",
      },
      {
        q: "Does cement render need painting?",
        a: "Yes. Cement render should be sealed with a quality exterior paint or membrane to keep water out and give an even colour. We can organise this as part of the job.",
      },
    ],
  },
  {
    slug: "acrylic-render",
    title: "Acrylic render",
    body: "Flexible acrylic render and texture coats that resist cracking and hold colour for years.",
    intro:
      "Acrylic render has polymers added to the mix, giving it more flex than straight cement. It's our pick for lightweight panels, foam and walls that move with Adelaide's hot summers and cool winters.",
    includes: [
      "Substrate check and prep",
      "Mesh reinforcement where needed",
      "Acrylic base coat and texture coat",
      "Your choice of finish: fine, medium or coarse texture",
      "Optional coloured top coat or membrane",
    ],
    idealFor: [
      "Hebel, AAC and foam panel walls",
      "Homes with minor movement cracks",
      "Coloured, low-maintenance finishes",
      "Extensions and upper storeys",
    ],
    faqs: [
      {
        q: "Is acrylic render more expensive than cement?",
        a: "Materials cost a little more, but acrylic is often applied thinner and needs less repair over time. We'll price both options if either would suit your walls.",
      },
      {
        q: "Can acrylic render be tinted?",
        a: "Yes. Many acrylic systems can be through-coloured or finished with a matching membrane, so you get an even colour without separate painting.",
      },
    ],
  },
  {
    slug: "hebel-aac-panels",
    title: "Hebel & AAC panels",
    body: "Supply and install Hebel and AAC panel walls, finished with a matching render system.",
    intro:
      "Autoclaved aerated concrete (AAC) panels like Hebel are light, strong and naturally insulating. We install the panels and finish them with a compatible render system, so you get one trade for the whole wall.",
    includes: [
      "Battens, fixings and panel installation",
      "Joint adhesive and reinforcing mesh",
      "Flashings and openings detailed to spec",
      "Compatible acrylic render and texture coat",
      "Final inspection and clean-up",
    ],
    idealFor: [
      "New builds and granny flats",
      "Second-storey additions",
      "Boundary and fire-rated walls",
      "Replacing tired weatherboard",
    ],
    faqs: [
      {
        q: "Why choose AAC panels over brick?",
        a: "AAC panels go up faster, weigh far less and offer good thermal and acoustic performance. They're a great fit for upper storeys where weight matters.",
      },
      {
        q: "Do you supply the panels?",
        a: "Yes. We can supply and install, or work with panels your builder has already ordered.",
      },
    ],
  },
  {
    slug: "foam-cladding",
    title: "Foam cladding",
    body: "Lightweight EPS foam cladding for extensions, upper storeys and feature walls.",
    intro:
      "Expanded polystyrene (EPS) foam cladding is light, quick to install and gives a crisp rendered look at a lower cost. It also adds a layer of insulation to the wall.",
    includes: [
      "Frame check and moisture barrier",
      "EPS panels fixed to spec",
      "Mesh reinforcement on joints and corners",
      "Acrylic render and texture finish",
      "Feature bands and mouldings on request",
    ],
    idealFor: [
      "Upper-storey extensions",
      "Feature walls and parapets",
      "Budget-friendly rendered facades",
      "Adding insulation to existing walls",
    ],
    faqs: [
      {
        q: "Is foam cladding durable?",
        a: "When it's installed with a proper mesh and acrylic render system, EPS cladding is tough and long-lasting. It's best kept away from high-impact areas at ground level.",
      },
      {
        q: "Is foam cladding fire safe?",
        a: "Building codes limit where EPS can be used, especially near boundaries. We'll check your plans and recommend a compliant product for your site.",
      },
    ],
  },
  {
    slug: "fibre-cement-cladding",
    title: "Fibre cement cladding",
    body: "Linea-style weatherboards, Axon panels and fibre cement sheeting, cut and fixed to spec.",
    intro:
      "Fibre cement weatherboards and panels give you the look of timber without the upkeep. They're durable, termite-resistant and suit everything from Hamptons-style homes to modern boxy extensions.",
    includes: [
      "Wall wrap and battens",
      "Weatherboards, grooved panels or flat sheet",
      "Trims, corners and window flashings",
      "Joint and nail-hole finishing, ready for paint",
      "Optional painting to finish",
    ],
    idealFor: [
      "Hamptons and coastal-style homes",
      "Mixing render and cladding on one facade",
      "Extensions and granny flats",
      "Replacing old timber weatherboards",
    ],
    faqs: [
      {
        q: "Can you combine cladding with render?",
        a: "Yes, and it's one of the most popular looks right now. We can render the base and clad the upper storey, or pick out feature sections in weatherboard.",
      },
      {
        q: "Does fibre cement cladding need painting?",
        a: "Most fibre cement products come primed and need a quality exterior paint. Some prefinished options are available too.",
      },
    ],
  },
  {
    slug: "render-repairs",
    title: "Repairs & re-render",
    body: "Cracks, drummy patches and tired facades stripped back and refinished to look new.",
    intro:
      "Cracked, drummy or flaking render lets water in and drags down the look of the whole house. We find the cause, remove the damaged areas and patch or re-render so the repair blends in.",
    includes: [
      "Inspection and advice on the cause",
      "Removal of drummy or loose render",
      "Crack repair and control joints",
      "Patching or full re-render to match",
      "Repaint or membrane to finish",
    ],
    idealFor: [
      "Cracked or drummy render",
      "Pre-sale facade refresh",
      "Water damage and flaking paint",
      "Matching repairs after renovations",
    ],
    faqs: [
      {
        q: "Can you match my existing render?",
        a: "We match texture as closely as possible. A fresh coat of paint over the repaired area and the surrounding wall gives the most seamless result.",
      },
      {
        q: "Should I patch or re-render the whole wall?",
        a: "If damage is limited, patching is fine. If large areas are drummy or cracked, a full re-render is often better value long term. We'll give you both options.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const steps = [
  {
    title: "Tell us about the job",
    body: "Call, text a photo, or fill in the form. A rough size is all we need to start.",
    detail:
      "Send us a few photos and rough measurements if you have them. We'll ask about the walls, the look you're after and your timing, then book a time to come out.",
  },
  {
    title: "Get a fixed quote",
    body: "We measure up on site and give you a written price. What we quote is what you pay.",
    detail:
      "We measure on site, check the substrate and talk through finishes. You'll get a clear written quote with scope, price and timeline. No hidden extras.",
  },
  {
    title: "We get it done",
    body: "Our team preps, protects and finishes the job, then leaves the site clean.",
    detail:
      "We protect windows, paths and gardens, then prep, render or clad and finish. When we're done we clean up, walk the job with you and make sure you're happy.",
  },
];

export const areas = [
  {
    name: "Northern suburbs",
    suburbs: [
      "Parafield Gardens", "Salisbury", "Mawson Lakes", "Paralowie", "Elizabeth",
      "Munno Para", "Golden Grove", "Modbury", "Gawler",
    ],
  },
  {
    name: "Western suburbs",
    suburbs: [
      "Woodville", "West Lakes", "Henley Beach", "Grange", "Findon",
      "Seaton", "Semaphore", "Port Adelaide", "Torrensville",
    ],
  },
  {
    name: "Eastern suburbs & Hills",
    suburbs: [
      "Norwood", "Burnside", "Campbelltown", "Magill", "Paradise",
      "Newton", "Stirling", "Aldgate", "Mount Barker",
    ],
  },
  {
    name: "Southern suburbs",
    suburbs: [
      "Marion", "Glenelg", "Brighton", "Hallett Cove", "Aberfoyle Park",
      "Happy Valley", "Morphett Vale", "Noarlunga", "Seaford",
    ],
  },
];

export const faqs = [
  {
    q: "How much does rendering cost in Adelaide?",
    a: "It depends on the wall area, the substrate and the finish you want. Most jobs are priced per square metre. Send us a photo and rough measurements and we'll give you a ballpark the same day, then a fixed written quote after a site visit.",
  },
  {
    q: "Cement or acrylic render — which is better?",
    a: "Cement render is hard-wearing and suits solid brick and block. Acrylic render has added polymers that make it more flexible, so it's less likely to crack and suits lightweight panels and foam. We'll recommend the right system for your walls.",
  },
  {
    q: "Can you render over existing brick?",
    a: "Yes. Rendering over brick is one of the most common jobs we do. We clean and prep the surface, fix any cracks, then apply the render and finish coat.",
  },
  {
    q: "Do you do the painting too?",
    a: "Yes. We can apply a matching membrane or paint finish after rendering so the job is fully complete.",
  },
  {
    q: "How long does a typical job take?",
    a: "A standard single-storey house front is usually 2–4 days, weather permitting. Bigger facades and cladding installs take longer. We'll give you a timeline with your quote.",
  },
  {
    q: "Do you work for builders?",
    a: "Yes. We work with builders on new homes, extensions and multi-unit sites, and can fit in with your build schedule.",
  },
  {
    q: "What happens if it rains?",
    a: "Render needs dry conditions to cure properly, so we'll reschedule rather than rush. We keep you updated if the weather moves the start date.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry public liability insurance and are happy to provide certificates for builders and strata managers.",
  },
];
