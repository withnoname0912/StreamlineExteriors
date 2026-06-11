/**
 * Single source of truth for all Streamline Exteriors content.
 * Update here — all pages and components draw from this file.
 */

// ─── Business ─────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Streamline Exteriors",
  legalName: "Streamline Exteriors Ltd.",
  tagline: "Premium Exterior Systems — BC & Alberta",
  founded: 1994,
  owner: "Curtis Poustie",

  phone: {
    salmonArm: "(250) 832-0610",
    vernon: "(250) 545-3061",
    primary: "(250) 832-0610",
    primaryHref: "tel:+12508320610",
    vernonHref: "tel:+12505453061",
  },

  email: "sales@streamlineexteriors.ca",

  offices: [
    { city: "Salmon Arm", province: "BC", primary: true },
    { city: "Vernon", province: "BC", primary: false },
  ],

  social: {
    facebook: "https://www.facebook.com/streamlineexteriorscanada/",
    instagram: "https://www.instagram.com/streamline.exteriors/",
  },
} as const

// ─── Credentials ──────────────────────────────────────────────────────────────

export const CREDENTIALS = [
  "Gentek Certified Premium Renovator — one of 200 in Canada",
  "LePage Quad Max Seal Certified",
  "Step Code Compliant Exterior Insulation",
  "Continuous WCB Coverage Since 1994",
  "Bonded",
  "$10M Liability Insurance",
] as const

// ─── Stats ────────────────────────────────────────────────────────────────────

export const HOMEPAGE_STATS = [
  { value: "1M+", label: "Feet of Gutters Installed" },
  { value: "30+", label: "Years in Business" },
  { value: "6", label: "Service Locations" },
  { value: "100%", label: "Warranty Backed" },
] as const

// ─── Services ─────────────────────────────────────────────────────────────────

export type ServiceData = {
  id: string
  slug: string
  name: string
  shortName: string
  tag: string
  summary: string
  description: string
  keyPoints: string[]
  seo: { title: string; description: string; keywords: string[] }
}

export const SERVICES: ServiceData[] = [
  {
    id: "commercial",
    slug: "commercial",
    name: "Commercial & Multifamily",
    shortName: "Commercial",
    tag: "BC & Alberta",
    summary:
      "Large-scale building envelope systems for commercial properties, strata complexes, and low-rise multi-family developments. Step Code compliant. Delivered on schedule.",
    description:
      "Streamline Exteriors has built a reputation for delivering complex commercial exterior scopes on time and without surprises. Our crews handle everything from new construction cladding packages to complete envelope replacements on occupied buildings — coordinating across strata councils, property managers, and general contractors with the same precision we bring to every residential project.\n\nWe are Step Code compliant installers, specifying exterior insulation systems that meet BC's current energy requirements. Whether the scope is a 4-storey wood-frame apartment, a townhouse complex, or a commercial strip, our installation teams are scaled to the project.",
    keyPoints: [
      "Step Code compliant exterior insulation systems",
      "Siding, gutters, windows, and doors across all units",
      "Experience with strata, property management, and GC coordination",
      "Large installation teams for phased and occupied-building projects",
      "Competitive pricing with fixed-scope contracts",
    ],
    seo: {
      title: "Commercial Exterior Contractor — BC & Alberta | Streamline Exteriors",
      description:
        "Commercial siding, gutters, and building envelope systems for multi-family and commercial properties across BC and Alberta. Step Code compliant. Streamline Exteriors.",
      keywords: [
        "commercial siding contractor BC",
        "multifamily exterior contractor",
        "building envelope BC",
        "step code siding installation",
        "commercial gutters Okanagan",
        "strata exterior renovation BC",
      ],
    },
  },
  {
    id: "residential",
    slug: "residential",
    name: "Residential",
    shortName: "Residential",
    tag: "Okanagan · Shuswap · Calgary",
    summary:
      "Premium siding, seamless gutters, windows, and doors for homeowners across BC and Alberta. Journeyman-led installations, product-specified for western Canadian climate conditions.",
    description:
      "Your home's exterior is its first and most permanent layer of protection. At Streamline Exteriors, residential work has been our foundation since 1994 — and the standard we hold every project to is the same regardless of scope.\n\nWe install vinyl, fibre cement (James Hardie, Allura), cedar, and metal siding systems. Every renovation begins with a thorough building envelope assessment and, when needed, computer-rendered design visualization so you can see the finished result before we start. Our journeyman carpenters and certified installers bring over 100 years of combined experience to every project.",
    keyPoints: [
      "Vinyl, fibre cement, cedar, and metal siding installation",
      "Computer-rendered design visualization before commitment",
      "Seamless continuous gutters with Alu-Rex hanger systems",
      "Window and door replacement with envelope-first approach",
      "Soffits, fascia, sundecks, and railings",
    ],
    seo: {
      title: "Residential Exterior Contractor BC | Siding, Gutters, Windows | Streamline",
      description:
        "Premium residential siding, gutters, windows, and exterior renovation across BC and Alberta. James Hardie, LP SmartSide, Allura installers. Streamline Exteriors since 1994.",
      keywords: [
        "residential siding contractor BC",
        "Hardie board siding Okanagan",
        "LP SmartSide installer BC",
        "residential gutters BC",
        "exterior renovation Kelowna",
        "siding installation Vernon",
      ],
    },
  },
  {
    id: "gutters",
    slug: "gutters",
    name: "Gutters",
    shortName: "Gutters",
    tag: "All 6 Locations",
    summary:
      "Continuous seamless gutter systems, Alu-Rex hangers, and GutterGlove leaf protection — including heated ice-dam prevention for mountain climates. Over one million linear feet installed since 1994.",
    description:
      "Streamline Exteriors is the Okanagan–Shuswap's most experienced gutter installer — and Canada's #1 distributor of GutterGlove, the stainless-steel micro-mesh guard top-rated by Consumer Reports. Over the past 30 years, we've installed more than one million linear feet of continuous seamless gutters from Revelstoke to Kelowna.\n\nWe use Alu-Rex continuous hanger systems (DoublePro® and T-Rex®) which mount gutters solidly without the weak points of spike-and-hanger methods. For mountain climates, we install GutterGlove IceBreaker with Nu-Heat cable — a permanent solution for ice damming. Standard warranty is 5 years; lifetime warranty is available.",
    keyPoints: [
      "Continuous seamless gutters — no joints to leak or sag",
      "Alu-Rex DoublePro® and T-Rex® hanger systems",
      "GutterGlove stainless micro-mesh guard — 25-year clog-free guarantee",
      "Heated IceBreaker system for ice-dam prevention in mountain climates",
      "Snow stops and custom downspout fabrication",
      "Repair, cleaning, and seasonal maintenance programs",
    ],
    seo: {
      title: "Seamless Gutter Installation BC | GutterGlove | Streamline Exteriors",
      description:
        "Over 1 million feet of continuous gutters installed across BC. Alu-Rex, GutterGlove, and heated IceBreaker systems. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, Calgary.",
      keywords: [
        "seamless gutters BC",
        "gutter installation Kelowna",
        "gutter guard BC",
        "GutterGlove installer Canada",
        "eavestroughs Okanagan",
        "gutter installation Salmon Arm",
        "heated gutters Revelstoke",
      ],
    },
  },
  {
    id: "renovation",
    slug: "renovation",
    name: "Renovation",
    shortName: "Renovation",
    tag: "Full Exterior Scope",
    summary:
      "Complete exterior transformations — from siding replacement to full envelope renewal. Design, supply, and installation under one contractor. Gentek-certified window and door installation.",
    description:
      "Most exterior renovation failures trace back to poor detailing at window and door openings — the most common cause of building envelope failure. Streamline Exteriors is one of only 200 Gentek-certified premium renovators in Canada, and our team is certified for the LePage Quad Max seal installation method, the industry benchmark for weathertight openings.\n\nEvery renovation project can include our digital design service: we photograph your home, render it with your chosen finishes, and email you the result before any commitment is made. Sundecks, railings, roofing, soffits, and fascia are all within scope.",
    keyPoints: [
      "Gentek Certified Premium Renovator — one of 200 in Canada",
      "LePage Quad Max Seal certified window and door installation",
      "Computer-rendered visualization before project start",
      "Siding, windows, doors, soffits, fascia, sundecks, railings",
      "Full building envelope assessment on every project",
    ],
    seo: {
      title: "Exterior Renovation Contractor BC | Siding, Windows, Doors | Streamline",
      description:
        "Complete exterior renovations across BC and Alberta. Gentek-certified window and door installation. Siding, gutters, decks, and full envelope replacement. Streamline Exteriors.",
      keywords: [
        "exterior renovation BC",
        "window door installation contractor BC",
        "Gentek certified renovator BC",
        "siding replacement Okanagan",
        "home exterior renovation Kelowna",
        "exterior renovation Salmon Arm",
      ],
    },
  },
]

// ─── Cities ───────────────────────────────────────────────────────────────────

export type CityData = {
  id: string
  slug: string
  name: string
  province: string
  provinceCode: "BC" | "AB"
  region: string
  shortDescription: string
  longDescription: string
  highlights: string[]
  services: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const CITIES: CityData[] = [
  {
    id: "kelowna",
    slug: "kelowna",
    name: "Kelowna",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Central Okanagan",
    shortDescription:
      "Our flagship Okanagan market. Residential and commercial exterior projects across the Central Okanagan Valley.",
    longDescription:
      "Kelowna is Streamline Exteriors' primary Okanagan market — a region where the combination of hot summers, cold winters, and rapid residential development demands exterior systems that perform across climate extremes. From West Kelowna residential estates to downtown commercial facades, our teams have been active across the Central Okanagan for over three decades.\n\nWe install James Hardie, Allura, LP SmartSide, Longboard, and vinyl siding systems across the full range of Kelowna residential and commercial projects — backed by our standard warranty and $10M liability insurance.",
    highlights: [
      "Over 30 years of Okanagan exterior installations",
      "Residential and commercial siding, gutters, windows, doors",
      "James Hardie and LP SmartSide certified installers",
      "Same-season seamless gutter service",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Kelowna BC | Streamline Exteriors",
      description:
        "Premium siding, seamless gutters, and exterior renovation in Kelowna, BC. James Hardie, LP SmartSide, and Allura installers. Over 30 years serving the Okanagan. Free estimate.",
      keywords: [
        "siding contractor Kelowna",
        "gutters Kelowna BC",
        "exterior renovation Kelowna",
        "Hardie board siding Kelowna",
        "LP SmartSide Kelowna",
        "seamless gutters Kelowna",
        "exterior contractor Kelowna BC",
        "siding installation Central Okanagan",
      ],
    },
  },
  {
    id: "vernon",
    slug: "vernon",
    name: "Vernon",
    province: "British Columbia",
    provinceCode: "BC",
    region: "North Okanagan",
    shortDescription:
      "Home of our Vernon office. North Okanagan residential and commercial exterior services — serving the region since 1994.",
    longDescription:
      "Vernon is one of Streamline Exteriors' two home bases — we've operated a Vernon office since the early years of the business. The North Okanagan's climate demands exterior systems with proven durability across the full seasonal range, and our Vernon-area crews have the regional knowledge to specify and install accordingly.\n\nWe serve Vernon, Coldstream, Armstrong, Enderby, Spallumcheen, and the broader North Okanagan region with the full range of siding, gutter, window, door, and renovation services.",
    highlights: [
      "Streamline Exteriors Vernon office — active since 1994",
      "Serving Vernon, Coldstream, Armstrong, Enderby, and surrounding areas",
      "Full residential and commercial exterior scope",
      "100+ years combined crew experience",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Vernon BC | Streamline Exteriors",
      description:
        "Exterior siding, seamless gutters, and renovation in Vernon, BC. Streamline Exteriors has served the North Okanagan since 1994. James Hardie, LP SmartSide, Allura. Free estimate.",
      keywords: [
        "siding contractor Vernon BC",
        "gutters Vernon BC",
        "exterior renovation Vernon",
        "siding installation North Okanagan",
        "eavestroughs Vernon BC",
        "exterior contractor Vernon",
        "Hardie board siding Vernon",
        "home renovation Vernon BC",
      ],
    },
  },
  {
    id: "salmon-arm",
    slug: "salmon-arm",
    name: "Salmon Arm",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Shuswap",
    shortDescription:
      "Our founding home and primary base. The Okanagan–Shuswap's longest-serving exterior contractor — here since 1994.",
    longDescription:
      "Salmon Arm is where Streamline Exteriors began in 1994, and it remains our primary base of operations. As the Shuswap's longest-serving exterior contractor, we've built more than three decades of regional knowledge into every project — understanding which products perform through the Shuswap's weather patterns and which installation methods hold up year after year.\n\nWe serve Salmon Arm, Eagle Bay, Sicamous, and surrounding Shuswap communities with the full scope of exterior services: siding, seamless gutters, gutter guards, windows, doors, soffits, sundecks, and commercial envelope work.",
    highlights: [
      "Streamline Exteriors founded in Salmon Arm — 1994",
      "Shuswap's longest-serving exterior contractor",
      "Primary office location — full crew availability",
      "Serving Eagle Bay, Sicamous, and surrounding Shuswap communities",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Renovation Salmon Arm BC | Streamline Exteriors",
      description:
        "The Shuswap's original exterior contractor since 1994. Siding, seamless gutters, windows, and renovation in Salmon Arm, BC. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Salmon Arm",
        "gutters Salmon Arm BC",
        "exterior renovation Salmon Arm",
        "seamless gutters Shuswap",
        "siding installation Salmon Arm",
        "exterior contractor Shuswap",
        "eavestroughs Salmon Arm",
        "Hardie board siding Salmon Arm",
      ],
    },
  },
  {
    id: "revelstoke",
    slug: "revelstoke",
    name: "Revelstoke",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Columbia–Shuswap",
    shortDescription:
      "Mountain-climate exterior specialists. Heated gutter systems, snow-load rated installations, and Step Code building envelopes for Revelstoke's extreme conditions.",
    longDescription:
      "Revelstoke is the most climate-demanding location in Streamline Exteriors' service area. Extreme snowloads, freeze-thaw cycles, and high precipitation require exterior systems and installation methods that go beyond the standard — and our Revelstoke-area experience goes back over twenty years.\n\nFor gutters, we install GutterGlove IceBreaker with Nu-Heat cable — the only permanent solution for ice damming in high-snowload environments. Our siding installations in Revelstoke prioritize moisture management, vapour control, and envelope continuity above all else.",
    highlights: [
      "Heated IceBreaker gutter systems for ice-dam prevention",
      "Snow stops and snow guard installation",
      "Step Code compliant building envelope systems",
      "Mountain-climate siding specification and installation",
    ],
    services: ["residential", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Revelstoke BC | Streamline Exteriors",
      description:
        "Mountain-climate exterior systems for Revelstoke, BC. Heated gutters, snow guards, and Step Code siding installation. Streamline Exteriors — 30+ years of western Canadian exterior work.",
      keywords: [
        "siding contractor Revelstoke BC",
        "gutters Revelstoke BC",
        "heated gutters Revelstoke",
        "exterior renovation Revelstoke",
        "snow guard installer BC",
        "exterior contractor Revelstoke",
        "ice dam prevention Revelstoke",
      ],
    },
  },
  {
    id: "kamloops",
    slug: "kamloops",
    name: "Kamloops",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Thompson Okanagan",
    shortDescription: "Interior BC's largest city — residential and commercial exterior systems for Kamloops and the Thompson Valley.",
    longDescription: "Kamloops sits at the convergence of the North and South Thompson Rivers and serves as the interior's commercial hub. Its semi-arid climate brings hot dry summers and cold winters — conditions that demand exterior systems built for thermal cycling and UV resistance.\n\nStreamline Exteriors brings James Hardie, LP SmartSide, and vinyl siding systems to Kamloops residential and commercial clients, backed by the same warranty and installation standards as our Okanagan operations.",
    highlights: ["Thompson Valley residential and commercial scope", "UV and thermal-cycling rated exterior systems", "James Hardie and LP SmartSide installation", "Seamless gutters and renovation packages"],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Kamloops BC | Streamline Exteriors",
      description: "Premium exterior siding, gutters, and renovation in Kamloops, BC. James Hardie, LP SmartSide installers. Streamline Exteriors — free estimate.",
      keywords: ["siding contractor Kamloops", "gutters Kamloops BC", "exterior renovation Kamloops", "exterior contractor Thompson Valley"],
    },
  },
  {
    id: "penticton",
    slug: "penticton",
    name: "Penticton",
    province: "British Columbia",
    provinceCode: "BC",
    region: "South Okanagan",
    shortDescription: "South Okanagan residential and commercial exterior — serving Penticton, Summerland, and the surrounding wine country region.",
    longDescription: "Penticton's South Okanagan climate is the most extreme in our BC service area — the highest summer temperatures and one of the lowest annual rainfalls in Canada. These conditions place specific demands on exterior systems, particularly around thermal expansion, UV stability, and moisture management during freeze-thaw periods.\n\nWe serve Penticton and surrounding South Okanagan communities with the full scope of exterior services, specifying products chosen for the region's specific climate profile.",
    highlights: ["South Okanagan climate specialists", "High-UV and thermal expansion rated systems", "James Hardie, LP SmartSide, and Longboard installation", "Serving Penticton, Summerland, and surrounding area"],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Penticton BC | Streamline Exteriors",
      description: "Exterior siding, gutters, and renovation in Penticton and the South Okanagan. Streamline Exteriors — free estimate.",
      keywords: ["siding contractor Penticton", "gutters Penticton BC", "exterior renovation Penticton", "exterior contractor South Okanagan"],
    },
  },
  {
    id: "west-kelowna",
    slug: "west-kelowna",
    name: "West Kelowna",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Central Okanagan",
    shortDescription: "West Kelowna and the Westside — premium residential and commercial exterior work for one of the Okanagan's fastest-growing communities.",
    longDescription: "West Kelowna has emerged as one of the Okanagan's most active residential markets, with a mix of new construction estates, strata developments, and full exterior renovations. Streamline Exteriors has served the Westside community for over 30 years — long before it became a separate municipality.\n\nWe bring the full scope of exterior services to West Kelowna: siding, seamless gutters, windows, doors, soffits, and complete renovation packages.",
    highlights: ["One of the Okanagan's most active residential markets", "Full residential and commercial exterior scope", "30+ years of Westside project experience", "James Hardie, LP SmartSide, and Longboard systems"],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation West Kelowna BC | Streamline Exteriors",
      description: "Premium exterior siding, gutters, and renovation in West Kelowna, BC. Streamline Exteriors — 30+ years in the Okanagan.",
      keywords: ["siding contractor West Kelowna", "gutters West Kelowna BC", "exterior renovation West Kelowna", "exterior contractor Westside Okanagan"],
    },
  },
  {
    id: "sicamous",
    slug: "sicamous",
    name: "Sicamous",
    province: "British Columbia",
    provinceCode: "BC",
    region: "Shuswap",
    shortDescription: "Houseboat capital of Canada — exterior systems for Sicamous waterfront properties, residential renovations, and commercial work.",
    longDescription: "Sicamous sits at the neck between Mara Lake and Shuswap Lake, and its waterfront-adjacent climate places unique demands on exterior systems. High moisture exposure, UV, and temperature extremes mean that product selection and installation quality are critical for longevity.\n\nStreamline Exteriors has served Sicamous and surrounding communities from our Salmon Arm base for decades — understanding the specific conditions that affect exterior performance in this environment.",
    highlights: ["Waterfront-adjacent climate expertise", "Moisture and UV resistant exterior systems", "30+ years of Shuswap project experience", "Residential and commercial exterior scope"],
    services: ["residential", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Sicamous BC | Exterior Contractor | Streamline Exteriors",
      description: "Exterior siding, gutters, and renovation in Sicamous, BC. Shuswap waterfront exterior specialists. Streamline Exteriors.",
      keywords: ["siding contractor Sicamous BC", "gutters Sicamous", "exterior renovation Sicamous", "exterior contractor Shuswap"],
    },
  },
  {
    id: "calgary",
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    provinceCode: "AB",
    region: "Southern Alberta",
    shortDescription:
      "Bringing BC exterior standards to Calgary. Premium residential and commercial systems for Alberta's fastest-growing market.",
    longDescription:
      "Calgary is Streamline Exteriors' Alberta expansion — bringing three decades of BC exterior expertise into one of Canada's most active construction markets. Calgary's climate presents its own demands: freeze-thaw cycles, high UV exposure, hail risk, and a residential market that increasingly demands premium cladding systems over commodity installation.\n\nWe serve Calgary residential and commercial clients with the same product range and installation standards as our BC operations: James Hardie, LP SmartSide, Longboard, and vinyl siding; continuous seamless gutters with Alu-Rex systems; and full renovation packages.",
    highlights: [
      "BC-standard installation quality brought to Calgary",
      "James Hardie and LP SmartSide for Alberta climate conditions",
      "Seamless gutters with Alu-Rex hanger systems",
      "Residential and commercial exterior scope",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Calgary AB | Streamline Exteriors",
      description:
        "Premium exterior siding, seamless gutters, and renovation in Calgary, Alberta. James Hardie, LP SmartSide, and Allura installers. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Calgary",
        "gutters Calgary AB",
        "exterior renovation Calgary",
        "Hardie board siding Calgary",
        "LP SmartSide Calgary",
        "seamless gutters Calgary",
        "exterior contractor Calgary Alberta",
        "siding installation Calgary",
      ],
    },
  },
  {
    id: "edmonton",
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceCode: "AB",
    region: "Central Alberta",
    shortDescription:
      "Premium exterior systems for Edmonton and the greater metro area. Residential and commercial envelope work to BC installation standards.",
    longDescription:
      "Edmonton's continental climate — long cold winters and warm summers — demands exterior systems built for thermal performance and moisture management. Streamline Exteriors brings three decades of western Canadian exterior expertise to Edmonton's residential and commercial market.\n\nWe install James Hardie, LP SmartSide, and Longboard systems across Edmonton's full range of project types, from custom homes in the River Valley to commercial facades in the metro core.",
    highlights: [
      "BC installation standards applied to Edmonton's climate demands",
      "James Hardie and LP SmartSide certified installation",
      "Residential, commercial, and multifamily exterior scope",
      "Seamless gutters with Alu-Rex hanger systems",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Edmonton AB | Streamline Exteriors",
      description:
        "Premium exterior siding, seamless gutters, and renovation in Edmonton, Alberta. James Hardie, LP SmartSide installers. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Edmonton",
        "gutters Edmonton AB",
        "exterior renovation Edmonton",
        "Hardie board siding Edmonton",
        "exterior contractor Edmonton Alberta",
        "seamless gutters Edmonton",
      ],
    },
  },
  {
    id: "red-deer",
    slug: "red-deer",
    name: "Red Deer",
    province: "Alberta",
    provinceCode: "AB",
    region: "Central Alberta",
    shortDescription:
      "Exterior systems for Red Deer and Central Alberta — residential and commercial cladding, gutters, and renovation.",
    longDescription:
      "Red Deer sits at the geographic centre of Alberta's two largest markets, and Streamline Exteriors serves the city and surrounding communities with the full scope of exterior services. Central Alberta's climate combines extreme temperature swings with high UV exposure — conditions our product specifications are built around.\n\nFrom new residential builds to commercial envelope replacement, our Red Deer-area crews deliver the same installation quality that has defined our BC operations for over 30 years.",
    highlights: [
      "Central Alberta's climate demands — addressed with premium systems",
      "Full residential and commercial exterior scope",
      "James Hardie, LP SmartSide, and Longboard installation",
      "Continuous seamless gutters throughout",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Red Deer AB | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Red Deer and Central Alberta. James Hardie, LP SmartSide installers. Streamline Exteriors.",
      keywords: [
        "siding contractor Red Deer",
        "gutters Red Deer AB",
        "exterior renovation Red Deer",
        "exterior contractor Central Alberta",
        "siding installation Red Deer",
      ],
    },
  },
  {
    id: "lethbridge",
    slug: "lethbridge",
    name: "Lethbridge",
    province: "Alberta",
    provinceCode: "AB",
    region: "Southern Alberta",
    shortDescription:
      "Southern Alberta exterior specialists. High-wind rated systems, premium cladding, and seamless gutters for Lethbridge and surrounding communities.",
    longDescription:
      "Lethbridge is one of Canada's windiest cities — a fact that directly shapes how exterior systems must be specified and installed. Streamline Exteriors brings product knowledge and installation methods calibrated for Lethbridge's wind exposure, hail risk, and temperature extremes.\n\nWe serve Lethbridge residential and commercial clients with James Hardie, LP SmartSide, and Longboard cladding systems, continuous seamless gutters with Alu-Rex fastening, and full exterior renovation packages.",
    highlights: [
      "High-wind rated installation methods for Lethbridge conditions",
      "James Hardie and LP SmartSide certified installation",
      "Seamless gutters with heavy-gauge Alu-Rex fasteners",
      "Residential and commercial exterior scope",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding, Gutters & Exterior Renovation Lethbridge AB | Streamline Exteriors",
      description:
        "Premium exterior siding, gutters, and renovation in Lethbridge, Alberta. Wind-rated installation methods. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Lethbridge",
        "gutters Lethbridge AB",
        "exterior renovation Lethbridge",
        "exterior contractor Southern Alberta",
        "siding installation Lethbridge",
      ],
    },
  },
  {
    id: "airdrie",
    slug: "airdrie",
    name: "Airdrie",
    province: "Alberta",
    provinceCode: "AB",
    region: "Calgary Region",
    shortDescription:
      "Airdrie and the Calgary corridor — fast-growing residential market served with premium siding, gutters, and full exterior renovation.",
    longDescription:
      "Airdrie is one of Alberta's fastest-growing communities, and its residential construction pace matches the demand for quality exterior contractors. Streamline Exteriors serves Airdrie and the Calgary corridor with the same standards that define our BC and Calgary operations.\n\nNew construction packages, full renovation scopes, and commercial cladding projects are all within our Airdrie-area scope. Crews mobilize from our Calgary base.",
    highlights: [
      "Fast-growing residential corridor — high new-construction volume",
      "James Hardie, LP SmartSide, and vinyl siding installation",
      "Seamless gutters and full renovation scope",
      "Same crews as our Calgary operations",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Airdrie AB | Exterior Contractor | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Airdrie, Alberta. Serving the Calgary corridor. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Airdrie AB",
        "gutters Airdrie",
        "exterior renovation Airdrie",
        "exterior contractor Calgary corridor",
      ],
    },
  },
  {
    id: "canmore",
    slug: "canmore",
    name: "Canmore",
    province: "Alberta",
    provinceCode: "AB",
    region: "Bow Valley",
    shortDescription:
      "Mountain-grade exterior systems for Canmore and the Bow Valley. Alpine-climate specification for premium residential and commercial projects.",
    longDescription:
      "Canmore's mountain environment is unforgiving on exterior systems — heavy snowloads, freeze-thaw cycles, and high-altitude UV exposure require products and installation methods that go beyond standard residential practice. Streamline Exteriors brings the same mountain-climate expertise we've developed in Revelstoke to Canmore and the Bow Valley.\n\nFor Canmore projects, we specify products with proven alpine performance: James Hardie fibre cement, Longboard aluminum, and heated GutterGlove IceBreaker systems for ice-dam prevention.",
    highlights: [
      "Alpine-climate exterior specification and installation",
      "Heated IceBreaker gutter systems for mountain snowloads",
      "Premium cladding products rated for Canmore's conditions",
      "Residential and commercial exterior scope",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Canmore AB | Mountain Exterior Contractor | Streamline",
      description:
        "Mountain-grade exterior siding, heated gutters, and renovation in Canmore, Alberta. Alpine-climate specialists. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Canmore",
        "gutters Canmore AB",
        "exterior renovation Canmore",
        "mountain exterior contractor Alberta",
        "heated gutters Canmore",
      ],
    },
  },
  {
    id: "banff",
    slug: "banff",
    name: "Banff",
    province: "Alberta",
    provinceCode: "AB",
    region: "Bow Valley",
    shortDescription:
      "Exterior systems for Banff National Park area properties. Alpine-rated installation for one of Canada's most demanding climates.",
    longDescription:
      "Banff sits at over 1,400 metres in elevation — one of the most climatically challenging locations in western Canada. Extreme snowloads, wind, UV, and freeze-thaw cycles demand exterior systems engineered and installed with precision. Streamline Exteriors brings alpine exterior expertise to Banff area residential and hospitality properties.\n\nWe specify and install products that perform at altitude: James Hardie fibre cement, Longboard architectural aluminum, and GutterGlove IceBreaker heated systems for permanent ice-dam prevention.",
    highlights: [
      "High-altitude exterior specification — Banff's unique demands",
      "Heated IceBreaker gutter systems for extreme snowload environments",
      "Architectural products suited to Banff's premium property market",
      "Mountain-climate installation expertise from our Revelstoke work",
    ],
    services: ["residential", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Banff AB | Alpine Exterior Contractor | Streamline Exteriors",
      description:
        "Alpine-grade exterior siding and heated gutter systems for Banff, Alberta. Streamline Exteriors — mountain-climate exterior specialists.",
      keywords: [
        "siding contractor Banff",
        "gutters Banff AB",
        "exterior contractor Banff",
        "alpine exterior systems Banff",
        "heated gutters Banff Alberta",
      ],
    },
  },
  {
    id: "lake-louise",
    slug: "lake-louise",
    name: "Lake Louise",
    province: "Alberta",
    provinceCode: "AB",
    region: "Bow Valley",
    shortDescription:
      "Exterior work for Lake Louise properties. Premium systems for high-altitude, high-snowload residential and hospitality projects.",
    longDescription:
      "Lake Louise properties face some of the most extreme exterior conditions in Canada — high snowloads, severe freeze-thaw cycling, and continuous wind exposure. Streamline Exteriors brings the installation methodology developed across 30 years of mountain-climate work in BC to Lake Louise area projects.\n\nEvery Lake Louise project receives our mountain-grade specification: products rated for the conditions, installation methods that prevent moisture infiltration at every detail, and heated gutter systems where snowload demands it.",
    highlights: [
      "30+ years of mountain-climate exterior experience",
      "Heated IceBreaker systems for high-snowload conditions",
      "Fibre cement and aluminum cladding for alpine environments",
      "Full residential and small commercial exterior scope",
    ],
    services: ["residential", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Lake Louise AB | Mountain Exterior | Streamline Exteriors",
      description:
        "Mountain-grade exterior siding and heated gutters for Lake Louise, Alberta. Alpine exterior specialists. Streamline Exteriors.",
      keywords: [
        "siding contractor Lake Louise",
        "gutters Lake Louise AB",
        "exterior contractor Lake Louise",
        "alpine exterior Alberta",
      ],
    },
  },
  {
    id: "okotoks",
    slug: "okotoks",
    name: "Okotoks",
    province: "Alberta",
    provinceCode: "AB",
    region: "Calgary Region",
    shortDescription:
      "Okotoks and Foothills County — residential and commercial exterior systems serving one of Alberta's fastest-growing communities.",
    longDescription:
      "Okotoks has grown rapidly as one of Calgary's premier satellite communities, and its exterior construction market reflects that growth. Streamline Exteriors serves Okotoks and the Foothills County area with the full range of residential and commercial exterior services.\n\nFrom new residential packages to full exterior renovations, our Okotoks-area projects are delivered to the same standard as our Calgary and BC operations.",
    highlights: [
      "Serving Okotoks, High River, and the Foothills County area",
      "Full residential and commercial exterior scope",
      "James Hardie, LP SmartSide, and vinyl systems",
      "Seamless gutters and full renovation packages",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Okotoks AB | Exterior Contractor | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Okotoks and Foothills County, Alberta. Streamline Exteriors.",
      keywords: [
        "siding contractor Okotoks",
        "gutters Okotoks AB",
        "exterior renovation Okotoks",
        "exterior contractor Foothills County",
      ],
    },
  },
  {
    id: "cochrane",
    slug: "cochrane",
    name: "Cochrane",
    province: "Alberta",
    provinceCode: "AB",
    region: "Calgary Region",
    shortDescription:
      "Cochrane and the Rocky View County area — premium exterior systems for one of Alberta's most picturesque residential communities.",
    longDescription:
      "Cochrane's position at the foothills of the Rockies gives it a unique climate profile — stronger winds than the Calgary plain, higher snowloads, and significant temperature swings. These conditions demand exterior systems specified with the foothills environment in mind.\n\nStreamline Exteriors serves Cochrane and Rocky View County with residential and commercial exterior work, mobilizing from our Calgary base and applying the mountain-adjacent specification knowledge we've built across the BC Rockies.",
    highlights: [
      "Foothills climate specification — wind and snowload rated",
      "Residential and commercial exterior scope",
      "James Hardie, LP SmartSide, and Longboard systems",
      "Seamless gutters and complete renovation packages",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Cochrane AB | Exterior Contractor | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Cochrane and Rocky View County, Alberta. Streamline Exteriors.",
      keywords: [
        "siding contractor Cochrane AB",
        "gutters Cochrane Alberta",
        "exterior renovation Cochrane",
        "exterior contractor Rocky View County",
      ],
    },
  },
  {
    id: "drumheller",
    slug: "drumheller",
    name: "Drumheller",
    province: "Alberta",
    provinceCode: "AB",
    region: "Central Alberta",
    shortDescription:
      "Drumheller and the Badlands — exterior systems for the region's unique climate, from residential renovations to commercial cladding.",
    longDescription:
      "Drumheller's high-desert climate is characterized by extreme temperature variation, high winds, and intense UV exposure — conditions that accelerate exterior failure on standard residential cladding. Streamline Exteriors brings product knowledge and installation methods that account for these extremes.\n\nWe serve Drumheller and the surrounding Badlands communities with residential siding, gutters, and renovation services. Our James Hardie and LP SmartSide specifications are calibrated for Drumheller's specific exposure conditions.",
    highlights: [
      "High-desert climate specification — UV and wind exposure",
      "James Hardie and LP SmartSide for extreme temperature ranges",
      "Seamless gutters and residential renovation packages",
      "Commercial exterior scope available",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Drumheller AB | Exterior Contractor | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Drumheller, Alberta. Badlands climate specialists. Streamline Exteriors.",
      keywords: [
        "siding contractor Drumheller",
        "gutters Drumheller AB",
        "exterior renovation Drumheller",
        "exterior contractor Badlands Alberta",
      ],
    },
  },
  {
    id: "brooks",
    slug: "brooks",
    name: "Brooks",
    province: "Alberta",
    provinceCode: "AB",
    region: "Southeast Alberta",
    shortDescription:
      "Brooks and Southeast Alberta — residential and commercial exterior systems with fast crew mobilization from our Calgary base.",
    longDescription:
      "Brooks sits at the heart of Southeast Alberta's agricultural and industrial corridor. Streamline Exteriors serves Brooks and surrounding communities with the full range of exterior services — from residential siding and gutter packages to commercial cladding systems.\n\nSoutheast Alberta's climate is characterized by high winds, hail, and temperature extremes. Our product specifications are built for these conditions: high-impact fibre cement, premium vinyl, and Alu-Rex gutter systems that hold under wind load.",
    highlights: [
      "Southeast Alberta coverage from our Calgary base",
      "Hail and wind-rated cladding specifications",
      "Full residential and commercial exterior scope",
      "Seamless gutters and renovation packages",
    ],
    services: ["residential", "commercial", "gutters", "renovation"],
    seo: {
      title: "Siding & Gutters Brooks AB | Exterior Contractor | Streamline Exteriors",
      description:
        "Exterior siding, gutters, and renovation in Brooks and Southeast Alberta. Streamline Exteriors — free estimate.",
      keywords: [
        "siding contractor Brooks AB",
        "gutters Brooks Alberta",
        "exterior renovation Brooks",
        "exterior contractor Southeast Alberta",
      ],
    },
  },
]

// ─── Suppliers ────────────────────────────────────────────────────────────────

export const SUPPLIERS = [
  {
    id: "james-hardie",
    name: "James Hardie",
    category: "Fibre Cement Systems",
    description:
      "The industry benchmark for fibre cement exteriors. HardiePlank lap siding, HardiePanel vertical, and HardieShingle — built to last in western Canadian climate.",
  },
  {
    id: "lp-smartside",
    name: "LP SmartSide",
    category: "Engineered Wood",
    description:
      "Engineered wood siding and trim with exceptional dimensional stability. Resistant to impact, moisture, and the full range of western Canadian weather conditions.",
  },
  {
    id: "allura",
    name: "Allura",
    category: "Fibre Cement Siding",
    description:
      "High-performance fibre cement siding built for the durability demands of the Okanagan and Alberta climates. A premium alternative with a full colour program.",
  },
  {
    id: "longboard",
    name: "Longboard",
    category: "Aluminum Cladding",
    description:
      "Architectural aluminum cladding and rainscreen systems precision-engineered for demanding commercial and high-end residential facades.",
  },
  {
    id: "convoy",
    name: "Convoy Supply",
    category: "Distribution",
    description:
      "Roofing and exterior distribution specialists supporting our BC and Alberta operations with consistent product availability across all six locations.",
  },
  {
    id: "woodtone",
    name: "Woodtone",
    category: "Wood Finishing",
    description:
      "Premium factory-finished wood and composite cladding systems — pre-coated for lasting colour integrity and dimensional stability.",
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectCategory = "residential" | "commercial" | "multifamily" | "gutters" | "renovation"

export type ProjectData = {
  id: string
  title: string
  location: string
  city: string
  category: ProjectCategory
  image: string
  material: string
  type: string
  year: number
  featured: boolean
  scope?: string[]
}

export const PROJECTS: ProjectData[] = [
  // ── Residential ──────────────────────────────────────────────────────────────
  {
    id: "okanagan-modern",
    title: "Okanagan Modern Residence",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/real-residential-modern.jpg",
    material: "Metal Panel · Cedar Accent",
    type: "Custom New Build",
    year: 2024,
    featured: true,
  },
  {
    id: "shuswap-custom-home",
    title: "Shuswap Custom Home",
    location: "Salmon Arm, BC",
    city: "salmon-arm",
    category: "residential",
    image: "/images/projects/real-residential-siding.jpg",
    material: "Vertical Fibre Cement",
    type: "New Build",
    year: 2023,
    featured: false,
  },
  {
    id: "revelstoke-cabin",
    title: "Revelstoke Mountain Cabin",
    location: "Revelstoke, BC",
    city: "revelstoke",
    category: "residential",
    image: "/images/projects/real-metal-siding.jpg",
    material: "Metal Standing Seam",
    type: "New Build · Mountain",
    year: 2024,
    featured: true,
  },
  {
    id: "west-kelowna-estate",
    title: "West Kelowna Estate",
    location: "West Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/siding-fibre-cement-9.jpg",
    material: "LP SmartSide Lap",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "kelowna-luxury-estate",
    title: "Kelowna Luxury Estate",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/residential-luxury.jpg",
    material: "Metal Cladding · Longboard",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "okanagan-lakehouse",
    title: "Okanagan Lakehouse",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/residential-lakehouse.jpg",
    material: "Mixed Cladding System",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "okanagan-chalet",
    title: "Okanagan Chalet",
    location: "Vernon, BC",
    city: "vernon",
    category: "residential",
    image: "/images/projects/residential-chalet.jpg",
    material: "Cedar · Fibre Cement Mix",
    type: "New Build",
    year: 2023,
    featured: false,
  },
  {
    id: "kelowna-farmhouse",
    title: "Kelowna Farmhouse Exterior",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/residential-farmhouse.jpg",
    material: "James Hardie Board & Batten",
    type: "New Build",
    year: 2022,
    featured: false,
  },
  {
    id: "calgary-night-build",
    title: "Calgary Custom Home",
    location: "Calgary, AB",
    city: "calgary",
    category: "residential",
    image: "/images/projects/residential-night.jpg",
    material: "Hardie Board · Metal Panel",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "kelowna-modern-entryway",
    title: "Kelowna Modern Custom",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/siding-metal-1.jpg",
    material: "Metal Panel · Cedar Accent",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "okanagan-fibre-cement-modern",
    title: "Okanagan Fibre Cement Home",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/siding-fibre-cement-4.jpg",
    material: "James Hardie Lap",
    type: "New Build",
    year: 2024,
    featured: false,
  },
  {
    id: "mixed-cladding-custom",
    title: "Mixed Cladding Custom Home",
    location: "Vernon, BC",
    city: "vernon",
    category: "residential",
    image: "/images/projects/residential-mixed-cladding.jpg",
    material: "James Hardie · Cedar Mix",
    type: "Full Exterior Package",
    year: 2024,
    featured: false,
  },
  {
    id: "metal-modern-exterior",
    title: "Modern Metal Exterior",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "residential",
    image: "/images/projects/residential-metal.jpg",
    material: "Metal Standing Seam",
    type: "Longboard + Cedar Accents",
    year: 2024,
    featured: false,
  },
  {
    id: "revelstoke-mountain-reno",
    title: "Revelstoke Mountain Residence",
    location: "Revelstoke, BC",
    city: "revelstoke",
    category: "residential",
    image: "/images/projects/siding-fibre-cement-6.jpg",
    material: "Fibre Cement Siding",
    type: "Step Code Envelope",
    year: 2023,
    featured: false,
  },
  {
    id: "calgary-new-development",
    title: "Calgary New Development",
    location: "Calgary, AB",
    city: "calgary",
    category: "residential",
    image: "/images/projects/siding-fibre-cement-3.jpg",
    material: "LP SmartSide Complete",
    type: "New Build · Windows · Gutters",
    year: 2024,
    featured: false,
  },
  {
    id: "vernon-custom-cedar",
    title: "Vernon Custom Cedar Exterior",
    location: "Vernon, BC",
    city: "vernon",
    category: "residential",
    image: "/images/projects/siding-cedar-3.jpg",
    material: "Cedar + Metal Panel",
    type: "Custom New Build",
    year: 2024,
    featured: false,
  },
  // ── Commercial & Multifamily ──────────────────────────────────────────────────
  {
    id: "real-multifamily-lowrise",
    title: "Multifamily Low-Rise",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "multifamily",
    image: "/images/projects/real-multifamily.jpg",
    material: "James Hardie · 48 Units",
    type: "Step Code Compliant",
    year: 2024,
    featured: true,
  },
  {
    id: "commercial-hotel",
    title: "Hotel Exterior Renovation",
    location: "Salmon Arm, BC",
    city: "salmon-arm",
    category: "commercial",
    image: "/images/projects/commercial-hotel.jpg",
    material: "ACM Panel System",
    type: "Commercial Envelope",
    year: 2023,
    featured: true,
  },
  {
    id: "commercial-lakeside",
    title: "Lakeside Commercial Complex",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "commercial",
    image: "/images/projects/commercial-lakeside.jpg",
    material: "Metal Panel Rainscreen",
    type: "Commercial Building",
    year: 2024,
    featured: false,
  },
  {
    id: "kelowna-strata",
    title: "Kelowna Strata Building",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "multifamily",
    image: "/images/projects/multifamily-kelowna.jpg",
    material: "Fibre Cement Full Envelope",
    type: "Strata Complex",
    year: 2023,
    featured: false,
  },
  // ── Gutters ───────────────────────────────────────────────────────────────────
  {
    id: "copper-crown-mould",
    title: "Copper Crown Mould Installation",
    location: "Vernon, BC",
    city: "vernon",
    category: "gutters",
    image: "/images/projects/gutters-copper-crown-closeup.jpg",
    material: "Copper Crown Mould",
    type: "Architectural Heritage Detail",
    year: 2024,
    featured: true,
  },
  {
    id: "copper-euro-tudor",
    title: "Copper Euro Round — Tudor Estate",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "gutters",
    image: "/images/projects/gutters-copper-euro-tudor.jpg",
    material: "Copper Euro Round",
    type: "Timber-Frame Estate",
    year: 2023,
    featured: false,
  },
  {
    id: "farmhouse-seamless",
    title: "Okanagan Farmhouse Seamless",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "gutters",
    image: "/images/projects/gutters-colonial-farmhouse.jpg",
    material: "Colonial Profile Seamless",
    type: "GutterGlove Guard",
    year: 2024,
    featured: false,
  },
  // ── Renovation ────────────────────────────────────────────────────────────────
  {
    id: "heritage-exterior-reno",
    title: "Heritage Exterior Renovation",
    location: "Vernon, BC",
    city: "vernon",
    category: "renovation",
    image: "/images/projects/siding-fibre-cement-12.jpg",
    material: "James Hardie Replacement",
    type: "Full Siding · Windows",
    year: 2023,
    featured: false,
  },
  {
    id: "soffit-fascia-package",
    title: "Soffit & Fascia Package",
    location: "Salmon Arm, BC",
    city: "salmon-arm",
    category: "renovation",
    image: "/images/projects/soffit-1.jpg",
    material: "Aluminum Vented Soffit",
    type: "Full Soffit Replacement",
    year: 2024,
    featured: false,
  },
  {
    id: "full-soffit-system",
    title: "Complete Soffit System",
    location: "Kelowna, BC",
    city: "kelowna",
    category: "renovation",
    image: "/images/projects/soffit-3.jpg",
    material: "Vinyl Vented Soffit",
    type: "Soffit + Fascia + Gutters",
    year: 2023,
    featured: false,
  },
]

// ─── Trust signals ────────────────────────────────────────────────────────────

export const TRUST_SIGNALS = [
  { label: "Family owned since 1994" },
  { label: "Gentek certified — 1 of 200 in Canada" },
  { label: "GutterGlove — Canada's #1 distributor" },
  { label: "$10M liability insurance" },
  { label: "Continuous WCB coverage since 1994" },
  { label: "Step Code compliant installer" },
]
