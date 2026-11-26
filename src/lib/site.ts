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

export const services: (Service & {
  /** Paragraph under the overview: plain text mixed with internal links. */
  links: (string | { href: string; label: string })[];
})[] = [
  {
    slug: "james-hardie-cladding",
    title: "James Hardie cladding",
    seoTitle: "James Hardie Cladding Installers Adelaide",
    metaDescription:
      "James Hardie cladding installers in Adelaide: Linea, Axon, Oblique, Stria and Matrix, supplied and fitted. Free on-site measure and fixed written quote.",
    category: "Cladding",
    icon: "cladding",
    body: "Linea weatherboards, Axon, Oblique and Stria boards, Matrix and textured panels, supplied and installed across Adelaide to James Hardie's specifications.",
    intro:
      "Max Wall supplies and installs James Hardie fibre cement cladding on new homes, extensions, upper storeys and granny flats across Adelaide and the Adelaide Hills. Fibre cement gives you the shadow lines of a timber weatherboard or the clean face of a rendered panel, and James Hardie states that most of its cladding resists rot, moisture and termite damage. We bring samples to a free on-site measure, help you settle on a profile, then fix it with the wall wrap, battens, flashings and trims that James Hardie's installation guide calls for. The profile, scope and price go into a fixed written quote before any work starts.",
    links: [
      "Still deciding on a profile? Our guide ",
      {
        href: "/guides/choosing-james-hardie-cladding",
        label: "compares Linea, Axon and Stria side by side",
      },
      ", and a second explains ",
      {
        href: "/guides/cladding-cost-adelaide",
        label: "what affects the cost of cladding in Adelaide",
      },
      ". If you are replacing old cladding rather than building new, see ",
      { href: "/services/re-cladding", label: "facade recladding" },
      ". You can also read ",
      { href: "/how-we-work", label: "how we measure, quote and install" },
      ", or check ",
      { href: "/areas", label: "the Adelaide and Hills suburbs we cover" },
      ".",
    ],
    products: [
      {
        name: "Linea™ Weatherboard",
        body: "A 16mm thick, pre-primed weatherboard in 150mm and 180mm widths, with deep shadow lines. Chosen for Hamptons, coastal and classic homes, and to replace timber weatherboards without losing their character.",
      },
      {
        name: "Axon™ Cladding",
        body: "Vertically grooved panels with a shiplap joint. Smooth comes with grooves at 133mm or 400mm spacing, Grained at 133mm, for a board-and-batten look or a cleaner, wider panel.",
      },
      {
        name: "Hardie™ Oblique™ Cladding",
        body: "14mm shiplap boards in 200mm and 300mm widths, run horizontally or vertically, with angled groove edges that cast shifting shadows through the day.",
      },
      {
        name: "Stria™ Cladding",
        body: "14mm boards with deep, crisp grooves, in a smooth finish or a fine render texture, run horizontally or vertically for a modern, linear facade.",
      },
      {
        name: "Hardie™ Fine Texture & Brushed Concrete",
        body: "Pre-textured panels with a natural sand or swept-concrete look, for a rendered or concrete appearance on a lightweight wall.",
      },
      {
        name: "Matrix™ Cladding",
        body: "A panel system with a 10mm express joint and cavity construction, for crisp grid layouts that are set out around windows and doors from the start.",
      },
    ],
    includes: [
      "Free on-site measure with samples and a profile recommendation",
      "Fixed written quote with scope, price and timeline",
      "Supply of James Hardie boards, panels, trims and fixings",
      "Wall wrap, battens and cavity detailing as specified",
      "Boards or panels cut and fixed to James Hardie's installation guide",
      "Corners, trims, window and door flashings",
      "Joints and fixings finished, ready for paint, with optional painting",
      "Site clean-up and a walk-through at handover",
    ],
    idealFor: [
      "New homes, extensions and granny flats",
      "Upper-storey additions where weight matters",
      "Hamptons, coastal and contemporary facades",
      "Mixing cladding with brick or AAC on one facade",
      "Builders and owner-builders working to plans",
    ],
    faqs: [
      {
        q: "Which James Hardie profile is right for my home?",
        a: "It depends on the style of the house and how the light falls on each wall. Linea suits classic, coastal and Hamptons homes, Axon and Stria give a modern linear look, Oblique casts shifting shadows, and textured panels or Matrix suit a rendered or architectural style. We bring samples to the on-site measure and talk through how each one would sit on your walls.",
      },
      {
        q: "Do you supply the cladding as well as install it?",
        a: "Yes. We supply and install James Hardie boards, panels, trims and fixings as one job. If your builder has already ordered the materials, we can install those instead, provided they suit the job.",
      },
      {
        q: "How do you price a James Hardie cladding job?",
        a: "Most cladding is priced per square metre, but the rate depends on the profile, wall area, height, access and the detailing around windows and corners. Send photos or plans and we'll give you a ballpark, then measure on site and put a fixed price in writing. The quote sets out the scope, price and timeline, so you can see what is included.",
      },
      {
        q: "How long does it take to clad a house or extension?",
        a: "Cladding a house front or an extension usually takes one to two weeks, depending on its size and the weather. Exterior work stops for rain and strong wind, and upper storeys may need scaffolding first. You'll get a timeline with your quote.",
      },
      {
        q: "Is James Hardie cladding suitable for bushfire-prone sites?",
        a: "James Hardie lists most of its fibre cement cladding for bushfire-prone areas up to BAL-40, with Matrix listed to BAL-29. Much of the Adelaide Hills is designated bushfire-prone, so we confirm the Bushfire Attack Level for your site and the matching product, fixings and detailing before we quote.",
      },
      {
        q: "Can James Hardie cladding be used near the coast?",
        a: "Yes, with the right details. James Hardie sets specific requirements for fixings and accessories on homes close to the sea, so a beachside facade is detailed differently from the same profile further inland. We check how close your home is to the coast and allow for those requirements in the quote.",
      },
      {
        q: "Does fibre cement cladding need painting?",
        a: "Yes. Most James Hardie boards and panels are supplied pre-primed and need a quality exterior paint system to finish them. We can paint as part of the job, so one team is responsible from frame to final coat.",
      },
      {
        q: "What warranty comes with James Hardie cladding?",
        a: "James Hardie offers a product warranty on most of its cladding, commonly 25 years. Warranty terms depend on correct installation and maintenance, which is why we install to the manufacturer's guide and explain the care requirements at handover.",
      },
      {
        q: "Do you install cladding for builders and owner-builders?",
        a: "Yes. Send the drawings and wall specifications and we'll price the cladding, wall wrap, insulation and eaves the plans call for. We schedule the work around frame inspections and other trades, and can provide a certificate of our public liability insurance.",
      },
    ],
  },
  {
    slug: "re-cladding",
    title: "Facade recladding",
    seoTitle: "Facade Recladding Adelaide: Fixed Written Quotes",
    metaDescription:
      "Facade recladding in Adelaide: old cladding removed, frame checked, insulation upgraded and a new James Hardie facade installed. Fixed written quotes.",
    category: "Cladding",
    icon: "repair",
    body: "Old or damaged cladding removed, the frame checked, wall wrap and insulation upgraded, and a new James Hardie facade installed on your existing home.",
    intro:
      "Facade recladding replaces the tired or damaged outer skin of a house with new cladding, without rebuilding the walls behind it. Max Wall re-clads Adelaide homes in James Hardie fibre cement: we remove or prepare the existing cladding, check the frame, fit new wall wrap, add CSR Bradford wall batts where the wall is accessible, then install and finish the new facade. You can re-clad the whole house or just the street front, a gable or a rear extension. It improves the street appeal and the comfort of the house in one job, and it starts with a free on-site measure and a fixed written quote.",
    links: [
      "For the boards themselves, see ",
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding profiles and installation",
      },
      ". While the walls are open, it is worth pricing ",
      { href: "/services/insulation", label: "wall insulation" },
      " as well. Our guides explain ",
      {
        href: "/guides/cladding-cost-adelaide",
        label: "what drives the cost of a cladding job",
      },
      " and ",
      {
        href: "/guides/planning-your-project",
        label: "how to plan a cladding or renovation project",
      },
      ". See ",
      { href: "/how-we-work", label: "how we measure and quote" },
      ", and ",
      { href: "/areas", label: "the suburbs we work in across Adelaide" },
      ".",
    ],
    products: [
      {
        name: "Weatherboard recladding",
        body: "Rotting or cracked timber weatherboards replaced with Linea™ weatherboards, which keep the classic look without the maintenance of timber.",
      },
      {
        name: "Modern facade updates",
        body: "A 70s, 80s or 90s home takes on a contemporary look with Axon™, Stria™ or Oblique™ boards on feature sections or across the whole front.",
      },
      {
        name: "Brick home facelifts",
        body: "James Hardie boards or panels added to a gable, entry or framed upper section, then painted to complement the brick, as an alternative to rendering.",
      },
      {
        name: "Partial re-clads",
        body: "One elevation, a gable or a tired rear extension re-clad on its own, with trims and junctions detailed where the new cladding meets the walls that stay.",
      },
      {
        name: "Wall insulation & wrap upgrade",
        body: "With the cladding off, we can fit CSR Bradford wall batts and a new wall wrap to improve thermal and acoustic comfort.",
      },
      {
        name: "Painted finish",
        body: "New boards arrive pre-primed. We can paint them as part of the job, so one team is responsible from frame to final coat.",
      },
    ],
    includes: [
      "Free on-site measure and check of the existing cladding and frame",
      "Fixed written quote with scope, price and timeline",
      "Removal and disposal of old cladding where required",
      "New wall wrap and optional Bradford wall insulation",
      "James Hardie cladding, trims and flashings",
      "Paint-ready joints and optional painting",
      "Protection of gardens, paths and windows, and a clean site",
      "A walk-through of the finished facade at handover",
    ],
    idealFor: [
      "Homes with rotting, cracked or damaged weatherboards",
      "Dated 70s, 80s and 90s facades that need street appeal",
      "Brick homes that want a new look without rendering",
      "Pre-sale or investment property upgrades",
      "Improving comfort while the walls are open",
    ],
    faqs: [
      {
        q: "What does facade recladding involve?",
        a: "We remove or prepare the existing cladding, check the frame for rot, termite damage and out-of-line studs, and fit a new wall wrap. Wall insulation can go in while the wall is open. New James Hardie cladding is then fixed with its trims and flashings, the joints are finished, and the facade is painted if that is part of your quote.",
      },
      {
        q: "Can you re-clad over my existing walls?",
        a: "Sometimes. It depends on the existing material, the frame and how the new cladding will be fixed and detailed around windows and doors. Often the old cladding is removed so the frame can be checked and insulated. We assess this on site and explain the options in your quote.",
      },
      {
        q: "Can I re-clad just the front of the house?",
        a: "Yes. You can re-clad the street front, a gable or a tired rear extension rather than the whole house, which is one way to keep the job within budget. We plan the trims and junctions where the new cladding meets the walls that stay, so the change looks intentional.",
      },
      {
        q: "What if you find damage behind the old cladding?",
        a: "Rot, termite damage or out-of-line studs have to be fixed before new cladding goes on, because the cladding can only be as straight and sound as the frame it's fixed to. This often can't be known until the wall is open, so your quote explains how hidden damage would be handled and priced if we find it.",
      },
      {
        q: "What if the old cladding contains asbestos?",
        a: "Homes built or renovated before 1990 may have cladding or eaves that contain asbestos. If we suspect asbestos, we won't start until it has been tested and, if present, removed by a licensed asbestos removalist. That is an additional cost, and we flag it as early as we can.",
      },
      {
        q: "Is it worth adding insulation when recladding?",
        a: "Recladding is the easiest time to insulate external walls, because the cavity is open. Adding wall batts and a new wall wrap can make rooms more comfortable year-round and quieter. We price it as an option so you can decide.",
      },
      {
        q: "Do I need council approval to re-clad?",
        a: "Like-for-like recladding often doesn't need approval, but heritage areas, bushfire zones and changes to the look of a home can. Strata and community-titled properties may also need the corporation's approval. Check with your council or a building certifier; we're happy to supply product details to help.",
      },
      {
        q: "How long does recladding take, and can we stay at home?",
        a: "Cladding a house front usually takes one to two weeks, depending on its size and the weather, and you'll get a timeline with your quote. Most people stay at home. The work is mostly outside, though there is noise from cutting and fixing during the day.",
      },
    ],
  },
  {
    slug: "aac-panels",
    title: "AAC panel walls",
    seoTitle: "Hardie Gravis AAC Panel Walls Adelaide",
    metaDescription:
      "AAC panel walls in Adelaide: Hardie Gravis panels installed and finished with a texture coat and membrane. Free on-site measure and fixed written quote.",
    category: "Cladding",
    icon: "wall",
    body: "Hardie™ Gravis™ AAC panels installed on new homes, upper storeys and boundary walls, then finished with a texture coat and membrane for a solid, rendered look.",
    intro:
      "Autoclaved aerated concrete (AAC) panels give a wall the solid feel and rendered look of masonry at a fraction of the weight. Max Wall installs James Hardie's AAC panel, Hardie™ Gravis™, across Adelaide: a steel-reinforced, non-combustible panel with a smooth, render-ready face. We fix the battens, brackets and panels, detail the joints, openings and flashings to the specification, then apply a compatible texture coat and membrane in your colour, so one team delivers the wall from frame to finish. Builders can send plans for pricing, and homeowners get a free on-site measure and a fixed written quote.",
    links: [
      "AAC panel walls can be paired with ",
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding on an upper storey",
      },
      ", and we fit ",
      { href: "/services/insulation", label: "wall and ceiling insulation" },
      " on the same builds. Our ",
      {
        href: "/guides/planning-your-project",
        label: "project planning checklist",
      },
      " lists what to have ready for a quote. See ",
      { href: "/how-we-work", label: "how we measure, quote and install" },
      " and ",
      { href: "/areas", label: "the Adelaide areas we cover" },
      ".",
    ],
    products: [
      {
        name: "Hardie™ Gravis™ Panel Wall",
        body: "Steel-reinforced AAC panels in 50mm and 75mm thicknesses with a smooth, render-ready face, for external, boundary and intertenancy walls.",
      },
      {
        name: "Boundary & zero-lot walls",
        body: "On tight lots the wall system has to suit the setback and its fire requirements, which is one reason Gravis panels are popular for boundary and zero-lot walls.",
      },
      {
        name: "Upper storeys & extensions",
        body: "AAC panels weigh far less than brick, so they suit upper storeys and framed extensions where you want a rendered look on a lightweight frame.",
      },
      {
        name: "Texture & membrane finishes",
        body: "A compatible texture coat and flexible membrane topcoat, tinted to your colour, protect the panels and give an even, rendered appearance.",
      },
      {
        name: "AAC with cladding above",
        body: "A Gravis base with Linea™ weatherboards on the upper storey is one common pairing. We detail the junction so the change of material looks deliberate.",
      },
    ],
    includes: [
      "Fixed written quote from your plans or a free on-site measure",
      "Battens, brackets and panel installation",
      "Panel joints, reinforcing and openings detailed to spec",
      "Flashings and movement joints",
      "Texture coat and membrane finish in your colour",
      "Final inspection and clean-up",
    ],
    idealFor: [
      "New builds and upper storeys",
      "Boundary and zero-lot walls",
      "Townhouses and infill homes on narrow lots",
      "A rendered look on a lightweight frame",
      "Bushfire-prone sites",
    ],
    faqs: [
      {
        q: "What is an AAC panel?",
        a: "AAC stands for autoclaved aerated concrete, a lightweight form of masonry. Hardie Gravis is James Hardie's AAC panel: steel-reinforced, made in 50mm and 75mm thicknesses, with a smooth face that is ready for a render-style coating. Once finished, it gives a wall a solid, masonry feel while weighing far less than brick.",
      },
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
      {
        q: "Can AAC panels be used on a boundary wall?",
        a: "Yes. James Hardie lists the Gravis panel for external, boundary and intertenancy walls. On tight lots the wall system has to suit the setback and its fire requirements, so we check the specification for your wall before quoting.",
      },
      {
        q: "Can AAC panels be mixed with James Hardie cladding?",
        a: "Yes. An AAC base with weatherboards such as Linea on the upper storey is a common approach. Where the two materials meet, we use a clean trim or a deliberate change in plane, lined up with windows, floor levels and rooflines.",
      },
      {
        q: "Can you price AAC panel walls from my plans?",
        a: "Yes. Send the drawings and wall specifications and we'll price the panels, fixings and coating system they call for. For builders, we schedule the installation around frame inspections and other trades.",
      },
    ],
  },
  {
    slug: "eaves-linings",
    title: "Eaves, soffits & linings",
    seoTitle: "Eaves & Soffits Adelaide: Hardie Groove Lining",
    metaDescription:
      "Eaves and soffits lined or replaced in fibre cement across Adelaide, plus alfresco ceilings in Hardie Groove Lining. Free measure and fixed written quote.",
    category: "Cladding",
    icon: "cladding",
    body: "Fibre cement eaves and soffits installed or replaced, plus alfresco ceilings and feature linings in Hardie™ Groove Lining, for homes across Adelaide.",
    intro:
      "Eaves and soffits frame the roofline, and an alfresco or porch ceiling is one of the most-seen surfaces of a home. Max Wall lines them in fibre cement on new builds and extensions, and replaces damaged or sagging eaves on existing Adelaide houses. Choose flat sheet with neat joints and trims, or Hardie™ Groove Lining, whose V-grooves at 100mm spacing give a timber-look finish. Either way we check the framing, fix the lining to the manufacturer's specification, detail the vents and junctions, and leave the joints and fixings ready for paint. We can paint it too, so the eaves, cladding and trims are finished together.",
    links: [
      "Eaves and soffits can be lined with new ",
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding",
      },
      ", replaced as part of ",
      { href: "/services/re-cladding", label: "a facade re-clad" },
      " and finished by our ",
      { href: "/services/painting", label: "exterior painting" },
      " service. See ",
      { href: "/how-we-work", label: "how we measure, quote and install" },
      " and ",
      { href: "/areas", label: "the suburbs we cover across Adelaide" },
      ".",
    ],
    products: [
      {
        name: "Flat eaves & soffit lining",
        body: "Clean, flat fibre cement sheet for eaves and soffits, with neat joints and trims, ready for paint.",
      },
      {
        name: "Hardie™ Groove Lining",
        body: "V-grooved fibre cement lining at 100mm spacing, for a timber-look finish on eaves, soffits, and interior walls and ceilings.",
      },
      {
        name: "Alfresco, porch & patio ceilings",
        body: "Outdoor ceilings lined in flat sheet or Groove Lining, so the alfresco ties in with the eaves and the rest of the facade.",
      },
      {
        name: "Eave replacement",
        body: "Damaged or sagging lining removed, the framing checked, and new fibre cement sheets installed with matching trims.",
      },
      {
        name: "Interior feature linings",
        body: "Groove Lining is designed for interior walls and ceilings too, and makes an easy grooved feature wall or ceiling.",
      },
    ],
    includes: [
      "Free on-site measure and fixed written quote",
      "Set-out and framing check",
      "Eave, soffit or ceiling lining fixed to spec",
      "Vents, trims and junctions detailed neatly",
      "Joints and fixings finished, ready for paint",
      "Optional painting",
    ],
    idealFor: [
      "New builds and extensions",
      "Alfresco, porch and patio ceilings",
      "Replacing damaged or sagging eaves",
      "Feature walls and ceilings with a grooved texture",
    ],
    faqs: [
      {
        q: "What is the difference between eaves and soffits?",
        a: "The eave is the part of the roof that overhangs the wall, and the soffit is the lined underside of that overhang. In practice, eaves lining and soffit lining usually mean the same sheet. Porch, patio and alfresco ceilings are lined in the same way.",
      },
      {
        q: "What do you line eaves and soffits with?",
        a: "Fibre cement. Flat sheet gives a clean, plain finish with neat joints and trims, while Hardie Groove Lining has V-grooves at 100mm spacing for a timber-look finish. Both are fixed to the manufacturer's installation guide and finished ready for paint.",
      },
      {
        q: "Can you replace damaged eaves on an existing house?",
        a: "Yes. We remove the damaged lining, check the framing, and install new fibre cement sheets with matching trims, ready for paint.",
      },
      {
        q: "Could my old eaves contain asbestos?",
        a: "Possibly. Homes built or renovated before 1990 may have eaves that contain asbestos. If we suspect it, we won't cut or remove anything until the sheet has been tested and, if asbestos is present, removed by a licensed asbestos removalist.",
      },
      {
        q: "Can groove lining be used inside?",
        a: "Yes. Hardie™ Groove Lining is designed for interior walls and ceilings as well as eaves and soffits, and it makes an easy feature wall or ceiling.",
      },
      {
        q: "Do you paint the eaves as well?",
        a: "Yes, if you'd like us to. The lining is left with joints and fixings finished ready for paint, and we can paint it as part of the same job, so there is no gap between trades.",
      },
    ],
  },
  {
    slug: "insulation",
    title: "Insulation",
    seoTitle: "Insulation Adelaide: Wall & Ceiling Installers",
    metaDescription:
      "Insulation installers in Adelaide: CSR Bradford ceiling, wall, roof, underfloor and acoustic batts, supplied and fitted. Free measure, fixed written quote.",
    category: "Insulation",
    icon: "insulation",
    body: "CSR Bradford ceiling, wall, roof, underfloor and acoustic insulation supplied and installed in Adelaide homes, with wall wraps and sarking where specified.",
    intro:
      "Max Wall supplies and installs CSR Bradford insulation in homes across Adelaide and the Adelaide Hills: ceiling batts in the roof space, wall batts behind new cladding or linings, underfloor insulation beneath raised timber floors, and acoustic batts between rooms. Adelaide's hot, dry summers and cold winter nights make insulation one of the most worthwhile upgrades to a house, and in most homes the ceiling is the best place to start. We inspect the roof space, walls or subfloor, recommend an R-value for each area, and install with the clearances that downlights, flues and vents need. You get a fixed written quote before we start and a record of what was installed when we finish.",
    links: [
      "Working out where to start? Our guide to ",
      {
        href: "/guides/insulation-for-adelaide-homes",
        label: "insulating an Adelaide home, area by area",
      },
      " goes deeper into R-values, ceilings, walls and floors. External walls are easiest to insulate during ",
      { href: "/services/re-cladding", label: "facade recladding" },
      " or behind new ",
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding",
      },
      ". See ",
      { href: "/how-we-work", label: "how we measure, quote and install" },
      ", or find your suburb in ",
      { href: "/areas", label: "our Adelaide service areas" },
      ".",
    ],
    products: [
      {
        name: "Ceiling insulation",
        body: "Bradford Gold and Polymax ceiling batts laid in the roof space, with Gold Perimeter Batts for the low edges near the eaves, to cut heat gain and loss through the roof.",
      },
      {
        name: "Wall insulation",
        body: "Bradford Gold Wall Batts and Gold Comfort Touch batts fitted in the wall cavity on new builds, extensions and re-clads, before the cladding or lining goes on.",
      },
      {
        name: "Roof insulation",
        body: "Bradford Anticon roof blanket under metal roofing to reduce heat, condensation and rain noise, installed when the roof sheets are laid.",
      },
      {
        name: "Underfloor insulation",
        body: "Bradford Optimo batts and Polymax underfloor rolls for raised timber floors, to stop cold coming up through the floor.",
      },
      {
        name: "Acoustic insulation",
        body: "Bradford SoundScreen batts in internal walls and between floors to reduce noise between bedrooms, bathrooms and living areas.",
      },
      {
        name: "Wall wraps & roof sarking",
        body: "Bradford Enviroseal and Thermoseal wraps and sarking to manage moisture and air leakage behind cladding and under roofs.",
      },
    ],
    includes: [
      "On-site inspection of roof space, walls or subfloor",
      "R-value recommendation for each area",
      "Fixed written quote before any work starts",
      "Supply and installation of CSR Bradford products",
      "Clearances kept around downlights, flues and vents",
      "Wall wrap or sarking where specified",
      "Clean-up and a record of what was installed",
    ],
    idealFor: [
      "Existing homes with little or no ceiling insulation",
      "Old, compressed or patchy batts that need a top-up",
      "New builds and extensions quoted to the plans and energy report",
      "Recladding and renovation projects",
      "Raised timber floors in older villas and Hills homes",
      "Bedrooms, media rooms and home offices that need quiet",
    ],
    faqs: [
      {
        q: "Which part of the house should be insulated first?",
        a: "Usually the ceiling. In most homes the roof is the biggest source of summer heat gain and winter heat loss, so ceiling insulation tends to give the best return. Walls are best done when they are open for a new build, extension or recladding, and underfloor insulation suits homes with raised timber floors.",
      },
      {
        q: "What R-value insulation do I need in Adelaide?",
        a: "It depends on whether it's the ceiling, walls or floor, the roof type and whether it's a new build. New homes must meet the National Construction Code energy requirements set out in your plans. For existing homes, we recommend R-values for each area during the inspection and explain the trade-offs.",
      },
      {
        q: "Can you top up the old insulation in my ceiling?",
        a: "Often, yes. If the existing insulation is dry, in place and in reasonable condition, new batts can be added. If it's damaged, compressed or damp, removing it first may be better. We check during the inspection.",
      },
      {
        q: "Can you insulate the walls of an existing house?",
        a: "External walls are hard to insulate once the linings and cladding are on. The practical time is when the wall cavity is open: during recladding, an extension or a new build, when wall batts and a new wall wrap can go in before the cladding. If the walls are staying closed, ceiling and underfloor insulation are usually the upgrades to do first.",
      },
      {
        q: "Do you install roof insulation under a metal roof?",
        a: "Yes. Bradford Anticon roof blanket goes under metal roofing to reduce heat, condensation and rain noise. It has to be installed when the roof sheets are laid, so raise it early if you are building or re-roofing. Under an existing roof, ceiling batts in the roof space are the usual upgrade.",
      },
      {
        q: "Which insulation batts do you install?",
        a: "CSR Bradford batts. Bradford makes glasswool products such as the Gold range and polyester products such as Polymax, each sold to a stated R-value. The choice usually comes down to the space, the R-value you need and how you prefer the product to handle and feel. We explain why we recommend one over another for each part of the house.",
      },
      {
        q: "Does insulation help with noise?",
        a: "Yes. Acoustic batts like Bradford SoundScreen in internal walls and between floors reduce noise transfer between rooms. Thermal batts in external walls also help reduce outside noise.",
      },
      {
        q: "Is it safe to insulate around downlights?",
        a: "Insulation must keep the clearances required for downlights, flues and other heat sources. We follow these clearances on every job and will point out any fittings that need attention from an electrician.",
      },
      {
        q: "How long does it take to install ceiling insulation?",
        a: "Ceiling insulation in a house is often done in a day. Wall and underfloor insulation depend on access, and on the other trades when it is part of a build or recladding job. You'll get a timeline with your quote.",
      },
    ],
  },
  {
    slug: "microcement",
    title: "Microcement (Dulux AcraStone)",
    seoTitle: "Microcement Adelaide: Dulux AcraStone Installers",
    metaDescription:
      "Microcement in Adelaide: seamless, grout-free Dulux AcraStone for walls, floors, bathrooms and kitchens. Free on-site measure and fixed written quote.",
    category: "Interiors",
    icon: "finish",
    body: "Seamless, grout-free Dulux AcraStone microcement applied to walls, floors, bathrooms and kitchens across Adelaide, often over sound existing tiles.",
    intro:
      "Microcement is a thin, hand-applied coating that gives walls and floors a continuous, grout-free surface. Max Wall applies the Dulux AcraStone system in Adelaide homes: primer, base coats, finish coats and a protective sealer, built up to suit the surface beneath. It can go over suitably prepared plasterboard, concrete, masonry and well-adhered tiles, which is why it is often chosen to renovate a bathroom, laundry or kitchen without stripping the room back. We check the surfaces on site, help you choose a colour and texture from the AcraStone range, and put the preparation, finish, sealer and timeline in a fixed written quote before any work starts.",
    links: [
      "Renovating a bathroom? Our guide to ",
      {
        href: "/guides/microcement-bathroom-renovation",
        label: "microcement bathrooms over existing tiles",
      },
      " covers suitable surfaces, waterproofing and what to expect. Walls and ceilings around the microcement can be refreshed by our ",
      { href: "/services/painting", label: "interior painting" },
      " service. See ",
      {
        href: "/how-we-work",
        label: "how we measure, quote and carry out the work",
      },
      ", and ",
      { href: "/areas", label: "where we work across Adelaide and the Hills" },
      ".",
    ],
    products: [
      {
        name: "Walls & feature walls",
        body: "A continuous finish for interior walls, from a single feature wall to a whole room, over suitably prepared plasterboard, masonry or well-adhered tiles.",
      },
      {
        name: "Floors",
        body: "Kitchen floors and continuous floors through living areas, with no grout lines. Ask about slip resistance: the finish and the sealer both affect how a floor feels underfoot when wet.",
      },
      {
        name: "Bathrooms, showers & laundries",
        body: "Dulux recommends AcraStone for wet areas. It can run from the floor up the walls and into a shower recess without a break, over a compliant waterproofing system.",
      },
      {
        name: "Finish Coat FINE",
        body: "A smooth, subtly mottled finish with natural tonal variation, suited to walls, floors and wet areas.",
      },
      {
        name: "Finish Coat MEDIUM",
        body: "A soft, organic texture with more visible movement, for walls and floors that want a little more character.",
      },
      {
        name: "Base Coat finish",
        body: "A coarser, more textured look using a tinted Base Coat as the finish, for a raw, natural-stone feel.",
      },
    ],
    includes: [
      "Substrate check: tiles, plasterboard, concrete or masonry",
      "Colour and texture selection from the AcraStone range",
      "Fixed written quote with preparation, finish, sealer and timeline",
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
      "Dated tiles that are still sound and well adhered",
    ],
    faqs: [
      {
        q: "What is microcement and where can it be used?",
        a: "Microcement is a thin, multi-coat finish that creates a continuous surface without grout lines. Dulux recommends its AcraStone system for interior walls and floors, including wet areas such as showers, bathrooms and laundries. It can be applied over suitably prepared plasterboard, concrete, masonry and well-adhered tiles.",
      },
      {
        q: "Can microcement go over existing tiles?",
        a: "Yes. Dulux AcraStone can be applied over suitably prepared, well-adhered glazed tiles on walls and floors, so in many bathrooms the tiles don't need to be removed. Loose or drummy tiles must be fixed first, and we check this on site.",
      },
      {
        q: "Is microcement waterproof?",
        a: "AcraStone is water resistant and Dulux recommends it for wet areas. It isn't a waterproofing membrane on its own, so wet areas still need a compliant waterproofing system beneath. We'll explain what your bathroom needs.",
      },
      {
        q: "How long does a microcement job take?",
        a: "A microcement bathroom typically takes several days rather than one, because each coat needs time to dry before the next goes on. The room is out of use while the work is underway, and the sealer needs time to cure before a shower is used. We give you the timeline, and the date you can use the room again, before we start.",
      },
      {
        q: "How is microcement priced?",
        a: "On the area being covered and the work needed to get the surfaces ready. Preparation is the biggest variable: re-fixing drummy tiles, repairing cracks and dealing with any waterproofing problems all happen before the first coat. The finish you choose and details such as niches, corners and window reveals also affect the time involved. We list all of it in a fixed written quote.",
      },
      {
        q: "What colours and finishes are available?",
        a: "AcraStone comes in a curated range of colours, from warm whites to greys and darker tones, in fine and medium textures, or with a tinted base coat for a coarser, stone-like look. We recommend viewing a physical sample in your own lighting before choosing.",
      },
      {
        q: "How do I clean and look after microcement?",
        a: "Clean it with mild, pH-neutral products and avoid harsh abrasives that can damage the sealer. Because it is a hand-applied finish, expect natural tonal variation, which is part of the look. We explain the care routine at handover.",
      },
      {
        q: "Can I apply AcraStone myself?",
        a: "No. Dulux states AcraStone is not recommended for DIY and is a professional system applied by trained artisans, because each layer and the sealer must be applied correctly for the finish to perform.",
      },
    ],
  },
  {
    slug: "painting",
    title: "Exterior & interior painting",
    seoTitle: "Exterior & Interior Painting Adelaide",
    metaDescription:
      "Exterior and interior painting in Adelaide, from new James Hardie cladding and eaves to repaints and room refreshes. Proper prep and fixed written quotes.",
    category: "Interiors",
    icon: "finish",
    body: "Exterior and interior painting for Adelaide homes: new fibre cement cladding, eaves and linings, exterior repaints, and interior walls and ceilings.",
    intro:
      "Max Wall paints Adelaide homes inside and out, as a job on its own or as the final step of a cladding, lining or renovation project. Most James Hardie cladding arrives pre-primed and needs a quality exterior paint system, so having the installer paint it keeps one team responsible from frame to final coat. On existing homes we wash, repair, prime and repaint painted cladding, render and trims, and refresh interior walls and ceilings with careful masking and filling. Every job starts with an on-site assessment and a fixed written quote that confirms the areas, preparation and finish.",
    links: [
      "Painting can be booked on its own or with new ",
      {
        href: "/services/james-hardie-cladding",
        label: "James Hardie cladding",
      },
      ", ",
      { href: "/services/eaves-linings", label: "eaves and soffit linings" },
      " or ",
      { href: "/services/re-cladding", label: "facade recladding" },
      ". Still choosing boards? Start with our ",
      {
        href: "/guides/choosing-james-hardie-cladding",
        label: "guide to choosing James Hardie cladding",
      },
      ". See ",
      { href: "/how-we-work", label: "how we quote and work" },
      " and ",
      { href: "/areas", label: "the Adelaide suburbs we cover" },
      ".",
    ],
    products: [
      {
        name: "New cladding & linings",
        body: "Exterior paint systems on new pre-primed fibre cement weatherboards and panels, applied once the joints and fixings are finished.",
      },
      {
        name: "Eaves & alfresco ceilings",
        body: "New or existing eaves, soffits and alfresco ceilings painted to suit the trims and the rest of the facade.",
      },
      {
        name: "AAC texture & membrane coatings",
        body: "Hardie™ Gravis™ AAC walls are finished with a compatible texture coat and flexible membrane, tinted to your colour, instead of a separate paint job.",
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
      "On-site assessment and fixed written quote",
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
        a: "Yes. We paint interior and exterior walls across Adelaide, as a stand-alone job or as the final step of a cladding or renovation project. Tell us which areas you'd like included and we'll confirm the preparation, finish and scope during the on-site measure.",
      },
      {
        q: "Can painting be combined with cladding?",
        a: "Yes, and it's often the simplest option. One team installs and paints the cladding, so there's no gap between trades and the finish is coordinated from the start.",
      },
      {
        q: "What paint system does new fibre cement cladding need?",
        a: "Most James Hardie boards and panels arrive pre-primed and need a quality exterior paint system over the top. The paint manufacturer's specification, the number of coats and the preparation all affect how long the finish lasts, so we follow that specification.",
      },
      {
        q: "What preparation is included in a paint job?",
        a: "We protect floors, windows, fixtures and gardens, then clean, fill and prepare each surface to suit its condition, with a compatible primer or sealer where one is needed. Exterior repaints start with washing and repairs. The preparation for your job is confirmed in the written quote.",
      },
      {
        q: "What affects the price of a paint job?",
        a: "The area, the condition of the surfaces and the amount of preparation they need. Dark colours, multiple colours and a lot of trim work all take more time to paint neatly. We assess the job on site and give you a fixed written quote.",
      },
      {
        q: "Does the weather affect exterior painting?",
        a: "Yes. Exterior work stops for rain and strong wind, and each paint system has its own weather limits. We confirm the plan and timeline before work starts and keep you updated if the weather affects it.",
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
