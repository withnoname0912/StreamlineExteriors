import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, BUSINESS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"
import RelatedServices from "@/components/ui/RelatedServices"
import LocationsGrid from "@/components/ui/LocationsGrid"
import PhotoShowcase from "@/components/ui/PhotoShowcase"

const service = SERVICES.find((s) => s.id === "residential")!

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
  alternates: { canonical: "https://www.streamlineexteriors.ca/residential" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
    url: "https://www.streamlineexteriors.ca/residential",
  },
}

const RES_FAQ = [
  {
    q: "What siding materials perform best in the BC Okanagan and Shuswap climate?",
    a: "Fibre cement (James Hardie, Allura) is the most specified product for the Okanagan and Shuswap — it handles the region's high-UV summers, cold winters, and freeze-thaw cycles better than vinyl or cedar. LP SmartSide engineered wood is the second most common choice for its dimensional stability and paintability. We specify each material to the specific climate zone and orientation of your home.",
  },
  {
    q: "Do you install James Hardie fibre cement siding?",
    a: "Yes. Streamline Exteriors is an authorized James Hardie installer with over 30 years of fibre cement installation experience in BC and Alberta. We install HardiePlank, HardiePanel, HardieShake, and board-and-batten profiles in both pre-finished and site-finished options.",
  },
  {
    q: "Do you provide design visualization before committing to a siding replacement?",
    a: "Yes. We photograph your home and produce computer-rendered visualizations showing the finished result in your selected materials and colours — included at no charge before any commitment is made. This service is available across our full residential scope including windows, doors, and soffits.",
  },
  {
    q: "What is your warranty on residential siding installation?",
    a: "All Streamline Exteriors residential siding installations carry a standard 5-year workmanship warranty. Lifetime warranty is available on qualifying projects. Manufacturer product warranties are separate and typically range from 15 to 50 years depending on the system.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: RES_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Exterior Siding & Cladding",
  provider: {
    "@type": "LocalBusiness",
    name: "Streamline Exteriors Ltd.",
    telephone: "+12508320610",
    url: "https://www.streamlineexteriors.ca",
  },
  areaServed: ["Kelowna", "Vernon", "Salmon Arm", "Revelstoke", "Calgary"],
  description:
    "Premium residential exterior siding and cladding installation in BC and Alberta. Fibre cement, engineered wood, vinyl, metal, and cedar systems. Family owned since 1994.",
  serviceType: "Exterior Siding & Cladding",
  url: "https://www.streamlineexteriors.ca/residential",
}

const SIDING_TYPES = [
  {
    name: "Fibre Cement",
    brands: "James Hardie · Allura",
    body: "The most specified exterior cladding for western Canadian climate. HardiePlank, HardiePanel, shakes, and board-and-batten — installed by manufacturer-approved crews. Available in pre-finished and site-finished options.",
  },
  {
    name: "Engineered Wood",
    brands: "LP SmartSide",
    body: "Exceptional dimensional stability and impact resistance. LP SmartSide siding and trim performs consistently across the full range of Okanagan and Alberta temperature cycles.",
  },
  {
    name: "Vinyl Siding",
    brands: "Kaycan · Gentek",
    body: "Installed in the Okanagan and Shuswap since 1994. We're familiar with the expansion behaviour of vinyl in high-temperature climates — and how to install it so it performs for decades.",
  },
  {
    name: "Metal Cladding",
    brands: "Longboard · Lux",
    body: "Architectural aluminum and steel cladding systems for modern and contemporary residences. Maintenance-free, fire-resistant, and precision-fabricated.",
  },
  {
    name: "Cedar Siding",
    brands: "Natural Cedar",
    body: "Conscientiously installed with proper ventilation and staining, cedar siding achieves the lifespan of modern alternatives — and an aesthetic that's never out of style.",
  },
]

export default function ResidentialPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/projects/siding-fibre-cement-9.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 65%, rgba(20,0,139,0.18) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 85% 20%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Residential Exteriors
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 130px)" }}
          >
            BC Homes.
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              Built to Last.
            </span>
          </h1>
          <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[560px] mb-10">
            {service.summary}
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10 border-t border-white/[0.05] pt-8">
            {[
              { v: "30+", l: "Years in the Okanagan" },
              { v: "5", l: "Cladding Systems" },
              { v: "6", l: "BC & Alberta Locations" },
              { v: "1994", l: "Est. Salmon Arm" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1" style={{ fontSize: "clamp(18px, 2.2vw, 30px)" }}>
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
              <span className="relative">Get a Free Estimate</span>
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

      {/* ── What we install ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Siding Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {/* Featured first card — Fibre Cement gets primary placement */}
            <div className="sm:col-span-2 bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[9px] tracking-[0.28em] text-white">01</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/40">Primary System</span>
              </div>
              <h3 className="font-display font-bold text-white uppercase text-[18px] tracking-[0.05em] mb-1.5">
                {SIDING_TYPES[0].name}
              </h3>
              <p className="text-white/40 text-[9px] font-semibold uppercase tracking-[0.32em] mb-5">
                {SIDING_TYPES[0].brands}
              </p>
              <p className="text-white text-[13px] font-light leading-relaxed tracking-wide max-w-[660px]">
                {SIDING_TYPES[0].body}
              </p>
            </div>

            {/* Remaining 4 siding systems */}
            {SIDING_TYPES.slice(1).map((s, i) => (
              <div key={i} className="bg-black p-8 lg:p-9 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">0{i + 2}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[14px] tracking-[0.06em] mb-1.5">
                  {s.name}
                </h3>
                <p className="text-white/40 text-[9px] font-semibold uppercase tracking-[0.32em] mb-4">
                  {s.brands}
                </p>
                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/projects/siding-fibre-cement-9.jpg", label: "Residential", caption: "Lake house · Okanagan, BC" },
        { src: "/images/projects/siding-fibre-cement-6.jpg", label: "Craftsman · Revelstoke" },
        { src: "/images/projects/siding-cedar-3.jpg", label: "Cedar · BC Interior" },
      ]} />


      {/* ── Key points ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Our Standard
                </span>
              </div>
              <p className="text-white text-[14.5px] font-light leading-[1.78] tracking-wide mb-8">
                {service.description.split("\n\n")[0]}
              </p>
              {service.description.split("\n\n")[1] && (
                <p className="text-white text-[13.5px] font-light leading-[1.78] tracking-wide">
                  {service.description.split("\n\n")[1]}
                </p>
              )}
            </div>
            <div className="border border-white/[0.06] p-8">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-7">
                What Every Project Includes
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
          </div>
          </FadeIn>
        </div>
      </section>

      <LocationsGrid />

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#030018] border-y border-[#14008B]/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display font-black text-white uppercase tracking-[-0.01em] mb-1.5" style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}>
                Ready to get a free estimate?
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                Response within one business day · Serving BC & Alberta since 1994
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

      <FAQGrid items={RES_FAQ} label="Siding Questions" />

      <RelatedServices serviceIds={["gutters", "renovation"]} />

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Free Estimates
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              Your Exterior.
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Our Standard.
              </span>
            </h2>
            <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
              Tell us about your project. We'll assess the scope, specify the right
              materials, and provide a fixed estimate.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[260px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get a Free Estimate</span>
              <span className="relative w-9 h-9 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <div className="pt-2 border-t border-white/[0.06]">
              <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-2">Or call directly</p>
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
