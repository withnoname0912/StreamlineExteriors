import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, BUSINESS, CREDENTIALS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"
import RelatedServices from "@/components/ui/RelatedServices"
import LocationsGrid from "@/components/ui/LocationsGrid"
import PhotoShowcase from "@/components/ui/PhotoShowcase"
import DualVideoShowcase from "@/components/ui/DualVideoShowcase"

const service = SERVICES.find((s) => s.id === "commercial")!

export const metadata: Metadata = {
  title: "Commercial & Multifamily Exterior Contractor BC & Alberta | Streamline Exteriors",
  description:
    "Building envelope systems for commercial properties, strata complexes, low-rise apartments, and multi-family developments across BC and Alberta. Step Code compliant. $10M insured. Streamline Exteriors since 1994.",
  keywords: [
    "commercial exterior contractor BC",
    "multifamily exterior contractor BC",
    "strata siding contractor",
    "apartment building siding BC",
    "building envelope BC",
    "step code exterior insulation BC",
    "commercial siding Kelowna",
    "strata exterior renovation BC",
    "low rise apartment exterior BC",
  ],
  alternates: { canonical: "https://www.streamlineexteriors.ca/commercial" },
  openGraph: {
    title: "Commercial & Multifamily Exterior Contractor BC & Alberta | Streamline Exteriors",
    description:
      "Building envelope systems for commercial and multi-family developments across BC and Alberta. Step Code compliant. Strata coordination. $10M insured. Streamline Exteriors since 1994.",
    type: "website",
    url: "https://www.streamlineexteriors.ca/commercial",
  },
}

const COMBINED_FAQ = [
  {
    q: "Do you handle both commercial buildings and multifamily residential?",
    a: "Yes — Streamline Exteriors works across the full spectrum of large-scale exterior projects. This includes strata complexes, low-rise apartment buildings, commercial retail, hotels, institutional buildings, and mixed-use developments. Our installation teams and project management processes are the same regardless of project type.",
  },
  {
    q: "Can you work on occupied commercial buildings and strata properties?",
    a: "Yes. Streamline Exteriors has experience completing exterior work on occupied low-rise apartments, strata complexes, and commercial properties. We phase work around tenant schedules, maintain safe access, and coordinate with property managers throughout the project.",
  },
  {
    q: "What insurance and documentation do you carry for commercial work?",
    a: "We carry $10M commercial liability insurance and continuous WCB (WorkSafeBC) coverage since 1994. This meets the documentation threshold required by most property managers, strata corporations, and general contractors before exterior work begins. COI and WCB clearance letters are available on request.",
  },
  {
    q: "Are you Step Code compliant for commercial and multi-family projects?",
    a: "Yes. Streamline Exteriors is a certified Step Code compliant installer. We specify and install exterior insulation systems that meet BC's current energy code requirements — including vapour barriers, thermal bridging details, and envelope performance documentation for permit submission.",
  },
  {
    q: "Can you coordinate with strata councils and property managers?",
    a: "Yes. We're experienced working within strata governance structures — presenting scope proposals to strata councils, providing documentation for special levy approvals, and coordinating day-to-day communication through designated property managers. We understand the layers of approval that multi-family exterior work requires.",
  },
  {
    q: "Do you work directly with general contractors and developers?",
    a: "Yes. We're experienced working as an exterior sub-trade on new construction packages for general contractors, and as the primary contractor on building envelope renovation for developers and strata corporations. Early involvement during specification and design reduces envelope scope risk significantly.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMBINED_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial & Multifamily Exterior Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Streamline Exteriors Ltd.",
    telephone: "+12508320610",
    url: "https://www.streamlineexteriors.ca",
  },
  areaServed: ["Kelowna", "Vernon", "Salmon Arm", "Revelstoke", "Calgary"],
  description:
    "Commercial and multi-family exterior envelope systems in BC and Alberta. Low-rise apartments, strata complexes, and commercial facades. Step Code compliant. $10M liability insured.",
  serviceType: "Commercial & Multifamily Exterior Construction",
  url: "https://www.streamlineexteriors.ca/commercial",
}

const PROJECT_SCOPE = [
  {
    name: "Low-Rise Apartments",
    body: "4–6 storey wood-frame apartment buildings across BC and Alberta. Complete exterior envelope scopes: cladding, soffits, gutters, windows, and doors. Phased installation around occupied units.",
  },
  {
    name: "Strata & Townhouse",
    body: "Coordinated exterior renovation and replacement across multi-unit strata properties. Experience with strata council approvals, phased work schedules, and owner communication.",
  },
  {
    name: "Commercial Retail & Hotel",
    body: "Commercial building facades, strip mall re-cladding, mixed-use ground-floor commercial, and hotel exteriors. Longboard aluminum, fibre cement, and metal panel systems for demanding commercial applications.",
  },
  {
    name: "New Construction",
    body: "New construction exterior packages for developers and general contractors. Early specification, design collaboration, and envelope compliance for Step Code requirements.",
  },
  {
    name: "Building Envelope Assessment",
    body: "Independent assessment of existing multi-family envelopes for remediation planning or pre-purchase due diligence. We identify moisture ingress points, failed details, and envelope vulnerabilities before scope definition.",
  },
  {
    name: "Full Envelope Renovation",
    body: "Complete re-cladding of strata complexes and townhouse developments. We work within strata approval processes, coordinate with property managers, and schedule around occupied units to minimize disruption.",
  },
]

export default function CommercialMultifamilyPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/projects/real-multifamily.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 18% 62%, rgba(20,0,139,0.18) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 82% 22%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Commercial & Multifamily · BC & Alberta
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(48px, 7.5vw, 124px)" }}
          >
            Large-Scale.
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              No Shortcuts.
            </span>
          </h1>
          <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[580px] mb-10">
            Full building envelope systems for commercial properties, strata complexes, hotels, and multi-family developments across BC and Alberta. Step Code compliant. Strata-experienced. Phased delivery around occupied buildings.
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10 border-t border-white/[0.05] pt-8">
            {[
              { v: "$10M", l: "Liability Coverage" },
              { v: "4–6", l: "Storey Specialty" },
              { v: "Step Code", l: "Certified Installer" },
              { v: "1994", l: "Commercial Experience" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1" style={{ fontSize: "clamp(16px, 2vw, 28px)" }}>
                  {s.v}
                </p>
                <p className="text-white text-[10px] font-medium uppercase tracking-[0.26em]">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Discuss Your Project</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a
              href={BUSINESS.phone.primaryHref}
              className="inline-flex items-center gap-3 border border-white/[0.1] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
            >
              {BUSINESS.phone.primary}
            </a>
          </div>
        </div>
      </section>

      {/* ── Project Scope ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
            <div className="flex items-center gap-4 mb-14">
              <div className="h-px w-10 bg-[#14008B]" />
              <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Scope of Work
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
              {PROJECT_SCOPE.map((pt, i) => (
                <div key={i} className="bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[9px] tracking-[0.28em] text-white">
                      0{i + 1}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                  </div>
                  <h3 className="font-display font-bold text-white uppercase text-[14px] tracking-[0.06em] mb-4">
                    {pt.name}
                  </h3>
                  <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                    {pt.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/projects/real-multifamily.jpg", label: "Multifamily", caption: "Apartment complex · Vernon, BC" },
        { src: "/images/Commercial Exteriors/Streamline-Exteriors-Fairfield-Hotel-Exterior-Finished.jpg", label: "Commercial · Hotel", caption: "Fairfield by Marriott · Salmon Arm, BC" },
        { src: "/images/projects/siding-metal-3.jpg", label: "Mixed Cladding · Low-Rise" },
      ]} />

      <DualVideoShowcase
        videos={[
          {
            src: "/videos/vernon-college-housing.mp4",
            label: "Vernon College Housing",
            sublabel: "Vernon, BC",
          },
          {
            src: "/videos/cascara-residence-drone.mp4",
            label: "West Urban Cascara Residence",
            sublabel: "BC Interior",
          },
        ]}
      />

      {/* ── Why Streamline ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-10 bg-[#14008B]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                    Why Streamline
                  </span>
                </div>
                <p className="text-white text-[14.5px] font-light leading-[1.78] tracking-wide mb-6">
                  {service.description.split("\n\n")[0]}
                </p>
                {service.description.split("\n\n")[1] && (
                  <p className="text-white text-[13.5px] font-light leading-[1.78] tracking-wide mb-6">
                    {service.description.split("\n\n")[1]}
                  </p>
                )}
                <p className="text-white text-[13.5px] font-light leading-[1.78] tracking-wide">
                  Our large installation teams allow us to work efficiently on larger projects without sacrificing quality. We carry $10M liability insurance and maintain continuous WCB coverage — the documentation that property managers and developers require before work begins.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border border-white/[0.06] p-8">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-7">
                    What We Deliver
                  </p>
                  <ul className="space-y-5">
                    {service.keyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3.5">
                        <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                        <span className="text-white text-[13px] font-light leading-relaxed tracking-wide">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-white/[0.06] p-8">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                    Credentials & Coverage
                  </p>
                  <ul className="space-y-4">
                    {CREDENTIALS.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                        <span className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#030018] border-y border-[#14008B]/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display font-black text-white uppercase tracking-[-0.01em] mb-1.5" style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}>
                Ready to discuss your project?
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                Step Code certified · $10M insured · Strata-experienced · Free estimate
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Get a Free Estimate</span>
                <span className="relative w-7 h-7 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <a
                href={BUSINESS.phone.primaryHref}
                className="inline-flex items-center justify-center border border-white/[0.1] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
              >
                {BUSINESS.phone.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQGrid items={COMBINED_FAQ} label="Project Questions" />

      <LocationsGrid />

      <RelatedServices serviceIds={["residential", "gutters"]} />

      {/* ── Final CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Commercial & Multifamily
                </span>
              </div>
              <h2
                className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
                style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
              >
                Let's Scope
                <br />
                <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                  Your Build.
                </span>
              </h2>
              <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
                Early contractor involvement on commercial and multi-family exterior scopes keeps envelope budgets accurate and reduces re-work. Contact us to discuss your project.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:min-w-[260px]">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Start a Conversation</span>
                <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <div className="pt-2 border-t border-white/[0.06]">
                <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-2">Direct line</p>
                <a href={BUSINESS.phone.primaryHref} className="text-white text-[13px] tracking-wide hover:text-white transition-colors duration-300">
                  {BUSINESS.phone.primary}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
