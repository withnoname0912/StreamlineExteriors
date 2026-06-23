import type { Metadata } from "next"
import PhotoShowcase from "@/components/ui/PhotoShowcase"
import Link from "next/link"
import { CITIES, BUSINESS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Locations | Exterior Contractor BC & Alberta | Streamline Exteriors",
  description:
    "Streamline Exteriors serves six locations across BC and Alberta: Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary. Residential and commercial exterior systems in every market.",
  keywords: [
    "exterior contractor locations BC",
    "Streamline Exteriors locations",
    "siding contractor BC Alberta",
    "exterior contractor Okanagan Shuswap",
    "exterior contractor Calgary",
    "exterior contractor western Canada",
  ],
  alternates: { canonical: "https://www.streamlineexteriors.ca/locations" },
  openGraph: {
    title: "Locations | Exterior Contractor BC & Alberta | Streamline Exteriors",
    description:
      "Six locations across BC and Alberta — Kelowna, Vernon, Salmon Arm, Revelstoke, Calgary. The same installation standard in every market since 1994.",
    type: "website",
    url: "https://www.streamlineexteriors.ca/locations",
  },
}

const bcCities = CITIES.filter((c) => c.provinceCode === "BC")
const abCities = CITIES.filter((c) => c.provinceCode === "AB")

const SERVICE_TAGS = ["Siding & Cladding", "Seamless Gutters", "Windows & Doors", "Full Renovation"]

const LOCATIONS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Streamline Exteriors Ltd.",
  url: "https://www.streamlineexteriors.ca",
  telephone: "+12508320610",
  email: "sales@streamlineexteriors.ca",
  areaServed: CITIES.map((city) => ({
    "@type": "City",
    name: city.name,
    containedInPlace: { "@type": "AdministrativeArea", name: city.province },
  })),
  hasMap: CITIES.map((city) => ({
    "@type": "Map",
    name: `Streamline Exteriors — ${city.name}`,
    url: `https://www.streamlineexteriors.ca/locations/${city.slug}`,
  })),
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.streamlineexteriors.ca" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.streamlineexteriors.ca/locations" },
  ],
}

export default function LocationsPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCATIONS_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-20 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 16% 62%, rgba(20,0,139,0.14) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 84% 20%, rgba(26,16,84,0.07) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Service Locations · British Columbia & Alberta
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 items-end">
            <div>
              <h1
                className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-6"
                style={{ fontSize: "clamp(48px, 7.5vw, 120px)" }}
              >
                Close To Home.
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                    color: "rgba(0,0,0,0)",
                  }}
                >
                  Wherever Home Is.
                </span>
              </h1>
              <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[540px] mb-10">
                From the Shuswap to Southern Alberta — the same installation crews, product standards, and warranty coverage in every market we operate.
              </p>
              {/* Proof strip */}
              <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/[0.05] pt-8">
                {[
                  { v: "30+", l: "Years Operating" },
                  { v: "BC & AB", l: "Two Provinces" },
                  { v: "$10M", l: "Liability Coverage" },
                  { v: "1994", l: "Est. Salmon Arm" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1" style={{ fontSize: "clamp(16px, 1.8vw, 26px)" }}>
                      {s.v}
                    </p>
                    <p className="text-white text-[10px] font-medium uppercase tracking-[0.26em]">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-1">
              {SERVICE_TAGS.map((tag) => (
                <div key={tag} className="flex items-center gap-3 py-2">
                  <div className="w-[3px] h-[3px] rounded-full bg-[#14008B]/70 shrink-0" />
                  <span className="text-white text-[12px] font-light tracking-wide">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BC Cities ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              British Columbia
            </span>
            <span className="text-white text-[9px] uppercase tracking-[0.3em]">{bcCities.length} locations</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {bcCities.map((city, i) => (
              <Link
                key={city.id}
                href={`/locations/${city.slug}`}
                className="group bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300 relative overflow-hidden"
              >
                {/* Ghost number */}
                <div
                  className="absolute bottom-4 right-6 font-display font-black text-white uppercase leading-none pointer-events-none select-none"
                  style={{ fontSize: "clamp(72px, 8vw, 110px)", opacity: 0.04 }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Blue left accent on hover */}
                <div className="absolute left-0 inset-y-0 w-[3px] bg-[#14008B] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500" />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/40">
                    {city.region}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.24em] text-white">BC</span>
                </div>

                <h2
                  className="font-display font-black text-white group-hover:text-white uppercase leading-[0.9] tracking-[-0.01em] mb-4 transition-colors duration-300"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  {city.name}
                </h2>

                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide mb-6 group-hover:text-white transition-colors duration-300">
                  {city.shortDescription}
                </p>

                <div className="flex items-center gap-2 text-[#14008B]/70 group-hover:text-[#14008B] text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors duration-300">
                  <span>View Location</span>
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Alberta ── editorial index format ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Alberta
            </span>
            <span className="text-white text-[9px] uppercase tracking-[0.3em]">{abCities.length} locations</span>
          </div>

          <div className="divide-y divide-white/[0.05]">
            {abCities.map((city, i) => (
              <Link
                key={city.id}
                href={`/locations/${city.slug}`}
                className="group flex items-center justify-between gap-6 py-5 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-200"
              >
                <div className="flex items-center gap-6 min-w-0">
                  <span className="font-mono text-[10px] tracking-[0.22em] text-white shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2
                      className="font-display font-black text-white group-hover:text-white uppercase leading-none tracking-[-0.01em] transition-colors duration-200"
                      style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}
                    >
                      {city.name}
                    </h2>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-8 shrink-0">
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white group-hover:text-white transition-colors duration-200">
                    {city.region}
                  </span>
                  <div className="flex items-center gap-2 text-[#14008B]/60 group-hover:text-[#14008B] transition-colors duration-200">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">View</span>
                    <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                      <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/projects/siding-fibre-cement-9.jpg", label: "BC & Alberta", caption: "Serving 6 locations across Western Canada" },
        { src: "/images/projects/siding-fibre-cement-6.jpg", label: "Revelstoke, BC" },
        { src: "/images/projects/siding-fibre-cement-3.jpg", label: "Alberta" },
      ]} />

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#030018] border-y border-[#14008B]/15">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-display font-black text-white uppercase tracking-[-0.01em] mb-1.5" style={{ fontSize: "clamp(18px, 2.2vw, 28px)" }}>
                Your project. Our region.
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                If your location isn&apos;t listed — reach out. We assess projects across all of Western Canada.
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

      {/* ── Coverage note ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-16">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Service Coverage
                </span>
              </div>
              <p className="text-white text-[14.5px] font-light leading-[1.78] tracking-wide mb-5">
                Our six locations are not just service hubs — they're the communities where our crews live and work. That local presence means shorter mobilization times, familiarity with local suppliers and permit processes, and crews who understand the specific climate demands of your area.
              </p>
              <p className="text-white text-[13px] font-light leading-[1.78] tracking-wide">
                Projects near our service areas are assessed individually. Contact us if you're not sure whether we cover your location — we often do.
              </p>
            </div>
            <div className="border border-white/[0.06] p-8">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                Contact by Location
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white mb-1.5">Salmon Arm · Revelstoke · Shuswap</p>
                  <a href={BUSINESS.phone.primaryHref} className="text-white text-[14px] font-light tracking-wide hover:text-white transition-colors duration-200">
                    {BUSINESS.phone.primary}
                  </a>
                </div>
                <div className="h-px bg-white/[0.05]" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white mb-1.5">Vernon · Kelowna</p>
                  <a href={BUSINESS.phone.vernonHref} className="text-white text-[14px] font-light tracking-wide hover:text-white transition-colors duration-200">
                    {BUSINESS.phone.vernon}
                  </a>
                </div>
                <div className="h-px bg-white/[0.05]" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white mb-1.5">Calgary · Alberta</p>
                  <a href={`mailto:${BUSINESS.email}`} className="text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-[520px]">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Free Estimates
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 62px)" }}
            >
              Start Your
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Project.
              </span>
            </h2>
            <p className="text-white text-[13.5px] font-light leading-[1.72] tracking-wide">
              Select your city above to see regional services, or contact us directly to discuss your project.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[240px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get a Free Estimate</span>
              <span className="relative w-8 h-8 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <div className="pt-2 border-t border-white/[0.06]">
              <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-1.5">Or call us directly</p>
              <a href={BUSINESS.phone.primaryHref} className="text-white text-[12px] tracking-wide hover:text-white transition-colors duration-300">
                {BUSINESS.phone.primary}
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
