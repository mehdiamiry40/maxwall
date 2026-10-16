// All business details and page copy live here. Edit this file to update the site.

export const site = {
  name: "Max Wall",
  legalName: "Max Wall Building Solutions Pty Ltd",
  abn: "89 657 571 590",
  url: "https://maxwall.com.au",
  phone: "0431 278 034",
  email: "info@maxwall.com.au",
  city: "Adelaide",
  region: "South Australia",
  hours: "Mon–Sat, 7am–6pm",
};

export const phoneHref = `tel:${site.phone.replace(/\s+/g, "")}`;
/** E.164 format for structured data, e.g. +61431278034. */
export const phoneIntl = `+61${site.phone.replace(/\D/g, "").slice(1)}`;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Areas", href: "/areas" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

/** Manufacturer systems we work with. Used for trust strips and the footer disclaimer. */
export const brands = [
  {
    name: "James Hardie",
    range: "Fibre cement cladding, linings & AAC",
    href: "https://www.jameshardie.com.au/",
  },
  {
    name: "CSR Bradford",
    range: "Ceiling, wall & underfloor insulation",
    href: "https://www.csr.com.au/products/by-application/insulation",
  },
  {
    name: "Dulux AcraStone",
    range: "Seamless microcement walls & floors",
    href: "https://duluxacrastone.com.au/",
  },
];

export const pillars = [
  {
    title: "Fixed, written quotes",
    body: "We measure on site and put the scope and price in writing. No surprises on the invoice, no extras halfway through.",
  },
  {
    title: "Proven Australian systems",
    body: "James Hardie cladding, CSR Bradford insulation and Dulux AcraStone, installed to the manufacturer's specifications.",
  },
  {
    title: "One team for the whole wall",
    body: "Wall wrap, insulation, cladding, linings and the final finish, coordinated by one Adelaide team.",
  },
];

export type ServiceCategory = "Cladding" | "Insulation" | "Interiors";

export type Service = {
  slug: string;
  title: string;
  /** Search-friendly page title, without the brand suffix. */
  seoTitle: string;
  /** Meta description, 140–160 characters. */
  metaDescription: string;
  category: ServiceCategory;
  icon: "cladding" | "wall" | "insulation" | "finish" | "repair";
  body: string;
  intro: string;
  products: { name: string; body: string }[];
  includes: string[];
  idealFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "james-hardie-cladding",
    title: "James Hardie cladding",
    seoTitle: "James Hardie Cladding Installers Adelaide",
    metaDescription:
      "James Hardie weatherboard and panel cladding installed across Adelaide: Linea, Axon, Oblique, Stria and Matrix. Free on-site measure and fixed written quote.",
    category: "Cladding",
    icon: "cladding",
    body: "Linea weatherboards, Axon, Oblique and Stria boards, and textured panels, installed to James Hardie's specifications.",
    intro:
      "James Hardie fibre cement cladding gives you the character of timber or the clean lines of a rendered panel, without the rot, termites or constant upkeep. We help you choose the profile, then install it with the right wall wrap, battens, joints and trims so the finish lasts.",
    products: [
      {
        name: "Linea™ Weatherboard",
        body: "A 16mm thick, pre-primed weatherboard with deep shadow lines, in 150mm and 180mm widths. The go-to for Hamptons, coastal and classic homes.",
      },
      {
        name: "Axon™ Cladding",
        body: "Vertically grooved panels with a shiplap joint, in smooth or grained finishes and 133mm or 400mm groove spacing.",
      },
      {
        name: "Hardie™ Oblique™ Cladding",
        body: "14mm shiplap boards in 200mm and 300mm widths, with angled groove edges that cast shifting shadows through the day.",
      },
      {
        name: "Stria™ Cladding",
        body: "Horizontal 14mm boards with deep grooves, in a smooth finish or a fine render texture, for a modern, linear facade.",
      },
      {
        name: "Hardie™ Fine Texture & Brushed Concrete",
        body: "Pre-textured panels with a natural sand or swept-concrete look, for the rendered or concrete aesthetic on a lightweight wall.",
      },
      {
        name: "Matrix™ Cladding",
        body: "A panelised system with a 10mm express joint and cavity construction, for crisp, architectural grid layouts.",
      },
    ],
    includes: [
      "On-site measure and profile recommendation",
      "Wall wrap, battens and cavity detailing as specified",
      "Boards or panels cut and fixed to James Hardie's installation guide",
      "Corners, trims, window and door flashings",
      "Joint and fixing finishing, ready for paint",
      "Optional painting and site clean-up",
    ],
    idealFor: [
      "New homes, extensions and granny flats",
      "Upper-storey additions where weight matters",
      "Hamptons, coastal and contemporary facades",
      "Mixing cladding with masonry or AAC on one facade",
    ],
    faqs: [
      {
        q: "Which James Hardie profile is right for my home?",
        a: "It depends on the style of the home and how you want the light to fall on it. Linea suits classic and Hamptons homes, Axon and Stria give a modern linear look, and textured panels mimic render or concrete. We'll bring the options to the on-site measure and talk through how each suits your walls.",
      },
      {
        q: "Is James Hardie cladding fire and termite resistant?",
        a: "James Hardie states that most of its fibre cement cladding resists rot, moisture and termite damage, and most profiles are rated for bushfire areas up to BAL-40 (Matrix is listed to BAL-29). We confirm the rating for your chosen product and site before quoting.",
      },
      {
        q: "Does fibre cement cladding need painting?",
        a: "Yes. Most James Hardie boards are supplied pre-primed and need a quality exterior paint system to finish. We can paint as part of the job, so one team is responsible from frame to final coat.",
      },
      {
        q: "What warranty comes with James Hardie cladding?",
        a: "James Hardie offers a product warranty on most of its cladding, commonly 25 years. Warranty terms depend on correct installation and maintenance, which is why we install to the manufacturer's guide and explain the care requirements at handover.",
      },
    ],
  },
  {
    slug: "re-cladding",
    title: "Re-cladding & facade makeovers",
    seoTitle: "Re-cladding & Facade Renovations Adelaide",
    metaDescription:
      "Transform a dated Adelaide home with James Hardie re-cladding. We assess your walls, upgrade insulation and wrap, and install a fresh facade. Fixed written quotes.",
    category: "Cladding",
    icon: "repair",
    body: "Replace tired weatherboards or update a dated facade with new James Hardie cladding, and upgrade the insulation while the walls are open.",
    intro:
      "Re-cladding is one of the fastest ways to transform how a home looks and feels. We remove or prepare the existing cladding, check the frame, add new wall wrap and insulation where it's accessible, then install a new James Hardie facade. It's a chance to fix the street appeal and the comfort of the house in one job.",
    products: [
      {
        name: "Weatherboard re-clads",
        body: "Swap rotting or cracked timber weatherboards for Linea™ weatherboards that keep the classic look without the maintenance.",
      },
      {
        name: "Modern facade updates",
        body: "Give a 70s, 80s or 90s home a contemporary look with Axon™, Stria™ or Oblique™ boards on feature sections or the whole front.",
      },
      {
        name: "Insulation upgrade",
        body: "With the cladding off, we can add CSR Bradford wall batts and a new wall wrap to improve thermal and acoustic comfort.",
      },
    ],
    includes: [
      "Inspection of the existing cladding and frame",
      "Removal and disposal of old cladding where required",
      "New wall wrap and optional Bradford wall insulation",
      "James Hardie cladding, trims and flashings",
      "Paint-ready joints and optional painting",
      "Protection of gardens, paths and windows, and a clean site",
    ],
    idealFor: [
      "Homes with rotting or damaged weatherboards",
      "Dated facades that need street appeal",
      "Pre-sale or investment property upgrades",
      "Improving comfort while the walls are open",
    ],
    faqs: [
      {
        q: "Can you re-clad over my existing walls?",
        a: "Sometimes. It depends on the existing material, the frame and how the new cladding will be fixed and detailed around windows and doors. Often the old cladding is removed so the frame can be checked and insulated. We assess this on site and explain the options in your quote.",
      },
      {
        q: "Is it worth adding insulation when re-cladding?",
        a: "Re-cladding is the easiest time to insulate external walls, because the cavity is open. Adding wall batts and a new wall wrap can make rooms more comfortable year-round and quieter. We'll price it as an option so you can decide.",
      },
      {
        q: "Do I need council approval to re-clad?",
        a: "Like-for-like re-cladding often doesn't need approval, but heritage areas, bushfire zones and changes to the look of a home can. Check with your council or a building certifier; we're happy to supply product details to help.",
      },
    ],
  },
  {
    slug: "aac-panels",
    title: "AAC panel walls",
    seoTitle: "AAC Panel Walls Adelaide | Hardie Gravis Installers",
    metaDescription:
      "Hardie Gravis AAC panel walls installed and finished in Adelaide. Lightweight, non-combustible masonry with a texture coat finish. Free fixed-price quotes.",
    category: "Cladding",
    icon: "wall",
    body: "Lightweight Hardie™ Gravis™ AAC panels, installed and finished with a texture coat and membrane for a solid, rendered look.",
    intro:
      "Autoclaved aerated concrete (AAC) gives you the solid feel and rendered look of masonry at a fraction of the weight. James Hardie's Gravis™ panel is steel-reinforced, non-combustible and render-ready, and we finish it with a compatible texture and membrane coating system, so one team delivers the whole wall.",
    products: [
      {
        name: "Hardie™ Gravis™ Panel Wall",
        body: "Steel-reinforced AAC panels in 50mm and 75mm thicknesses with a smooth, render-ready face, for external, boundary and intertenancy walls.",
      },
      {
        name: "Texture & membrane finishes",
        body: "A compatible texture coat and flexible membrane topcoat, tinted to your colour, protect the panels and give an even, rendered appearance.",
      },
    ],
    includes: [
      "Battens, brackets and panel installation",
      "Panel joints, reinforcing and openings detailed to spec",
      "Flashings and movement joints",
      "Texture coat and membrane finish in your colour",
      "Final inspection and clean-up",
    ],
    idealFor: [
      "New builds and upper storeys",
      "Boundary and zero-lot walls",
      "A rendered look on a lightweight frame",
      "Bushfire-prone sites",
    ],
    faqs: [
      {
        q: "Why choose AAC panels over brick?",
        a: "AAC panels go up faster and weigh far less than brick, which matters on upper storeys. They also offer good thermal and acoustic performance and a solid, masonry feel once finished.",
      },
      {
        q: "Is AAC suitable for bushfire areas?",
        a: "James Hardie lists the Gravis™ panel as non-combustible and suitable for all Bushfire Attack Levels when installed as specified. We confirm the system for your site's BAL rating before quoting.",
      },
      {
        q: "How are AAC panels finished?",
        a: "AAC needs a compatible coating system to keep water out and give an even finish. We apply a texture coat and a flexible membrane in your chosen colour, so the wall doesn't need separate painting.",
      },
    ],
  },
  {
    slug: "eaves-linings",
    title: "Eaves, soffits & linings",
    seoTitle: "Eaves Lining & Soffits Adelaide | Hardie Groove Lining",
    metaDescription:
      "Fibre cement eaves, soffits and grooved feature linings for Adelaide homes and alfrescos, including Hardie Groove Lining. Free on-site measure and quote.",
    category: "Cladding",
    icon: "cladding",
    body: "Fibre cement eaves, soffits, alfresco ceilings and grooved feature linings that tie the whole facade together.",
    intro:
      "Eaves and soffits are the finishing frame of a facade, and alfresco ceilings are some of the most-seen surfaces in a home. We line them in fibre cement, including Hardie™ Groove Lining with its V-grooves at 100mm spacing, for a durable, paintable finish that suits both the house and the outdoor areas.",
    products: [
      {
        name: "Hardie™ Groove Lining",
        body: "V-grooved fibre cement lining at 100mm spacing, for a timber-look ceiling on eaves, soffits, alfrescos and interior feature walls.",
      },
      {
        name: "Flat eaves & soffit lining",
        body: "Clean, flat fibre cement sheet for eaves and soffits, with neat joints and trims ready for paint.",
      },
    ],
    includes: [
      "Measure, set-out and framing check",
      "Eave, soffit or ceiling lining fixed to spec",
      "Vents, trims and junctions detailed neatly",
      "Joints and fixings finished, ready for paint",
      "Optional painting",
    ],
    idealFor: [
      "New builds and extensions",
      "Alfresco, porch and patio ceilings",
      "Replacing damaged or sagging eaves",
      "Feature walls with a grooved texture",
    ],
    faqs: [
      {
        q: "Can you replace damaged eaves on an existing house?",
        a: "Yes. We remove the damaged lining, check the framing, and install new fibre cement sheets with matching trims, ready for paint.",
      },
      {
        q: "Can groove lining be used inside?",
        a: "Yes. Hardie™ Groove Lining is designed for interior walls and ceilings as well as eaves and soffits, and it makes an easy feature wall or ceiling.",
      },
    ],
  },
  {
    slug: "insulation",
    title: "Insulation",
    seoTitle: "Home Insulation Installers Adelaide | CSR Bradford",
    metaDescription:
      "CSR Bradford ceiling, wall, underfloor and acoustic insulation installed across Adelaide. Cooler summers, warmer winters and quieter rooms. Free quotes.",
    category: "Insulation",
    icon: "insulation",
    body: "CSR Bradford ceiling, wall, underfloor and acoustic insulation, plus wall wraps and roof sarking, for a cooler, quieter home.",
    intro:
      "Adelaide's hot summers and cold winters make insulation one of the best-value upgrades for any home. We install CSR Bradford insulation, manufactured in Australia, in ceilings, walls and floors, and pair it with the right wall wrap or sarking so the whole building envelope works together.",
    products: [
      {
        name: "Ceiling insulation",
        body: "Bradford Gold and Polymax ceiling batts, plus Gold Perimeter Batts for low-clearance edges, to cut heat gain through the roof.",
      },
      {
        name: "Wall insulation",
        body: "Bradford Gold Wall Batts and Gold Comfort Touch batts for external walls in new builds, extensions and re-clads.",
      },
      {
        name: "Acoustic insulation",
        body: "Bradford SoundScreen batts in internal walls and between floors to reduce noise between bedrooms, bathrooms and living areas.",
      },
      {
        name: "Underfloor insulation",
        body: "Bradford Optimo batts and Polymax underfloor rolls for raised timber floors, to stop cold coming up through the floor.",
      },
      {
        name: "Wall wraps & roof sarking",
        body: "Bradford Enviroseal and Thermoseal wraps and sarking to manage moisture and air leakage behind cladding and under roofs.",
      },
      {
        name: "Roof blankets",
        body: "Bradford Anticon roof blanket under metal roofing to reduce heat, condensation and rain noise.",
      },
    ],
    includes: [
      "Inspection of roof space, walls or subfloor",
      "R-value recommendation for each area",
      "Supply and installation of CSR Bradford products",
      "Clearances kept around downlights, flues and vents",
      "Wall wrap or sarking where specified",
      "Clean-up and a record of what was installed",
    ],
    idealFor: [
      "Existing homes with little or no ceiling insulation",
      "New builds and extensions",
      "Re-cladding and renovation projects",
      "Bedrooms, media rooms and home offices that need quiet",
    ],
    faqs: [
      {
        q: "What R-value insulation do I need in Adelaide?",
        a: "It depends on whether it's the ceiling, walls or floor, the roof type and whether it's a new build. New homes must meet the National Construction Code energy requirements set out in your plans. For existing homes, we recommend R-values for each area during the inspection and explain the trade-offs.",
      },
      {
        q: "Can you top up the old insulation in my ceiling?",
        a: "Often, yes. If the existing insulation is dry, in place and in reasonable condition, new batts can be added. If it's damaged, compressed or damp, removing it first may be better. We check during the inspection.",
      },
      {
        q: "Does insulation help with noise?",
        a: "Yes. Acoustic batts like Bradford SoundScreen in internal walls and between floors reduce noise transfer between rooms. Thermal batts in external walls also help reduce outside noise.",
      },
      {
        q: "Is it safe to insulate around downlights?",
        a: "Insulation must keep the clearances required for downlights, flues and other heat sources. We follow these clearances on every job and will point out any fittings that need attention from an electrician.",
      },
    ],
  },
  {
    slug: "microcement",
    title: "Microcement (Dulux AcraStone)",
    seoTitle: "Microcement Adelaide: Bathrooms, Walls & Floors",
    metaDescription:
      "Seamless Dulux AcraStone microcement for bathrooms, kitchens, walls and floors in Adelaide. Apply over existing tiles with no demolition. Free quotes.",
    category: "Interiors",
    icon: "finish",
    body: "Seamless, grout-free Dulux AcraStone microcement for bathrooms, laundries, kitchens, walls and floors, often straight over existing tiles.",
    intro:
      "Dulux AcraStone is a thin, multi-coat microcement system that creates a continuous, grout-free surface on walls and floors. Because it can go over suitably prepared existing surfaces, including well-adhered tiles, it's a way to transform a bathroom, laundry or kitchen without the noise, dust and waste of ripping everything out.",
    products: [
      {
        name: "Finish Coat FINE",
        body: "A smooth, subtly mottled finish with natural tonal variation, suited to walls, floors and wet areas.",
      },
      {
        name: "Finish Coat MEDIUM",
        body: "A soft, organic texture with more visible movement, for walls and floors that want a little more character.",
      },
      {
        name: "Tinted Base Coat",
        body: "A coarser, more textured look using the tinted base coat as the finish, for a raw, natural-stone feel.",
      },
    ],
    includes: [
      "Substrate check: tiles, plasterboard, concrete or masonry",
      "Colour and texture selection from the AcraStone range",
      "Surface preparation and primer",
      "Base coats and finish coats to the Dulux system specification",
      "Protective sealer",
      "Care and cleaning guidance at handover",
    ],
    idealFor: [
      "Bathroom and laundry renovations without demolition",
      "Showers and wet areas",
      "Kitchen floors and feature walls",
      "Continuous floors across living areas",
    ],
    faqs: [
      {
        q: "Can microcement go over existing tiles?",
        a: "Yes. Dulux AcraStone can be applied over suitably prepared, well-adhered glazed tiles on walls and floors, so in many bathrooms the tiles don't need to be removed. Loose or drummy tiles must be fixed first, and we check this on site.",
      },
      {
        q: "Is microcement waterproof?",
        a: "AcraStone is water resistant and Dulux recommends it for wet areas. It isn't a waterproofing membrane on its own, so wet areas still need a compliant waterproofing system beneath. We'll explain what your bathroom needs.",
      },
      {
        q: "Can I apply AcraStone myself?",
        a: "No. Dulux states AcraStone is not recommended for DIY and is a professional system applied by trained artisans, because each layer and the sealer must be applied correctly for the finish to perform.",
      },
      {
        q: "What colours are available?",
        a: "AcraStone comes in a curated range of colours, from warm whites to greys and darker tones, in fine and medium textures. We recommend viewing a physical sample in your own lighting before choosing.",
      },
    ],
  },
  {
    slug: "painting",
    title: "Painting & coatings",
    seoTitle: "Exterior & Interior Painters Adelaide",
    metaDescription:
      "Interior and exterior wall painting in Adelaide, including new James Hardie cladding, eaves and AAC membranes. Proper prep and fixed written quotes.",
    category: "Interiors",
    icon: "finish",
    body: "Interior and exterior painting, including new fibre cement cladding, eaves, linings and texture coat membranes.",
    intro:
      "A facade is only as good as its finish. Most James Hardie cladding arrives pre-primed and needs a quality exterior paint system, and interior walls need the right prep to look their best. We paint inside and out, either on its own or as the final step of your cladding, lining or renovation project.",
    products: [
      {
        name: "New cladding & linings",
        body: "Exterior paint systems on new fibre cement weatherboards, panels, eaves and alfresco ceilings.",
      },
      {
        name: "Exterior repaints",
        body: "Washing, repairs, priming and repainting of existing painted cladding, render and trims.",
      },
      {
        name: "Interior walls & ceilings",
        body: "Colour changes and refreshes with careful masking, filling and a finish suited to each room.",
      },
    ],
    includes: [
      "On-site assessment and written quote",
      "Protection of floors, windows, fixtures and gardens",
      "Cleaning, filling and preparation suited to the surface",
      "Compatible primer or sealer where needed",
      "Paint in your selected colour and sheen",
      "Final inspection and site clean-up",
    ],
    idealFor: [
      "Finishing new James Hardie cladding and eaves",
      "Exterior facade refreshes",
      "Interior colour changes and renovations",
      "Pre-sale and rental property updates",
    ],
    faqs: [
      {
        q: "Do you paint both interior and exterior walls?",
        a: "Yes. We paint interior and exterior walls across Adelaide. Tell us which areas you'd like included and we'll confirm the preparation, finish and scope during the on-site measure.",
      },
      {
        q: "Can painting be combined with cladding?",
        a: "Yes, and it's often the simplest option. One team installs and paints the cladding, so there's no gap between trades and the finish is coordinated from the start.",
      },
      {
        q: "Can you help me choose a colour?",
        a: "Yes. Colours look different in Adelaide's strong outdoor light than on a chart, so we recommend sample pots or swatches on the actual wall before the final choice.",
      },
    ],
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const steps = [
  {
    title: "Tell us about the job",
    body: "Call, text a photo, or fill in the form. Your suburb and a rough idea of the job is all we need.",
    detail:
      "Send us a few photos, plans if you have them and your suburb. We'll ask about the walls, the look you're after and your timing, then book a time to come out.",
  },
  {
    title: "Get a fixed quote",
    body: "We measure on site and recommend the right system. What we quote is what you pay.",
    detail:
      "We measure on site, check the frame, walls or roof space, and talk through products, profiles and finishes. You'll get a clear written quote with scope, price and timeline. No hidden extras.",
  },
  {
    title: "We get it done",
    body: "We protect your home, install to the manufacturer's specifications and leave the site clean.",
    detail:
      "We protect windows, paths and gardens, then install and finish the work to the manufacturer's guide. When we're done we clean up, walk the job with you and explain how to look after it.",
  },
];

export const areas = [
  {
    id: "north",
    /** URL segment for the region page, /areas/[slug]. */
    slug: "north",
    name: "Northern suburbs",
    suburbs: [
      "Parafield Gardens",
      "Salisbury",
      "Mawson Lakes",
      "Paralowie",
      "Elizabeth",
      "Munno Para",
      "Golden Grove",
      "Modbury",
      "Gawler",
    ],
  },
  {
    id: "west",
    slug: "west",
    name: "Western suburbs",
    suburbs: [
      "Woodville",
      "West Lakes",
      "Henley Beach",
      "Grange",
      "Findon",
      "Seaton",
      "Semaphore",
      "Port Adelaide",
      "Torrensville",
    ],
  },
  {
    id: "east",
    slug: "east-hills",
    name: "Eastern suburbs & Hills",
    suburbs: [
      "Norwood",
      "Burnside",
      "Campbelltown",
      "Magill",
      "Paradise",
      "Newton",
      "Stirling",
      "Aldgate",
      "Mount Barker",
    ],
  },
  {
    id: "south",
    slug: "south",
    name: "Southern suburbs",
    suburbs: [
      "Marion",
      "Glenelg",
      "Brighton",
      "Hallett Cove",
      "Aberfoyle Park",
      "Happy Valley",
      "Morphett Vale",
      "Noarlunga",
      "Seaford",
    ],
  },
];

export const areaBySlug = (slug: string) =>
  areas.find((area) => area.slug === slug);

export const faqs = [
  {
    q: "What does Max Wall do?",
    a: "We install James Hardie cladding, AAC panel walls, eaves and linings, CSR Bradford insulation and Dulux AcraStone microcement, and we paint inside and out. Homeowners and builders across Adelaide use us for one or all of these.",
  },
  {
    q: "How much does cladding cost in Adelaide?",
    a: "It depends on the profile, wall area, height, access and the detailing around windows and corners. Most cladding is priced per square metre. Send us photos or plans and we'll give you a ballpark, then a fixed written quote after a site measure.",
  },
  {
    q: "Which is better: weatherboards, panels or AAC?",
    a: "Weatherboards like Linea suit classic and Hamptons homes, grooved boards like Axon and Stria give a modern linear look, and AAC panels with a texture coat give a solid, rendered finish. Many homes mix two. We'll recommend what suits your design and budget.",
  },
  {
    q: "Do you supply the products?",
    a: "Yes. We supply and install, or work with materials your builder has already ordered, provided they suit the job.",
  },
  {
    q: "How long does a typical job take?",
    a: "Ceiling insulation is often done in a day. A microcement bathroom typically takes several days because each coat needs to dry. Cladding a house front or extension usually takes one to two weeks depending on size and weather. You'll get a timeline with your quote.",
  },
  {
    q: "Do you work for builders?",
    a: "Yes. We work with builders on new homes, extensions and multi-unit sites, and fit in with your construction schedule.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We carry public liability insurance and are happy to provide certificates for builders and strata managers.",
  },
  {
    q: "What should I have ready for a quote?",
    a: "Your suburb, a few clear photos and a short description of the project are enough to start. Plans, rough measurements and your preferred timing help, but aren't essential. We measure accurately on site before preparing a written quote.",
  },
  {
    q: "Can I stay at home while the work is done?",
    a: "For most jobs, yes. We'll discuss access, scaffolding and any rooms or areas that need to be kept clear before starting, so we can plan around you, your kids and pets.",
  },
  {
    q: "Are you affiliated with James Hardie, CSR or Dulux?",
    a: "No. Max Wall is an independent Adelaide contractor. We choose to work with these manufacturers' systems because they're proven in Australian conditions, and we install them to the manufacturer's published specifications.",
  },
];
