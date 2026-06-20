import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, BUSINESS, CREDENTIALS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"
import FAQGrid from "@/components/ui/FAQGrid"
import RelatedServices from "@/components/ui/RelatedServices"
import LocationsGrid from "@/components/ui/LocationsGrid"
import PhotoShowcase from "@/components/ui/PhotoShowcase"

const service = SERVICES.find((s) => s.id === "renovation")!

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
  alternates: { canonical: "https://www.streamlineexteriors.ca/renovation" },
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    type: "website",
    url: "https://www.streamlineexteriors.ca/renovation",
  },
}

const RENO_FAQ = [
  {
    q: "What is a Gentek-certified premium renovator?",
    a: "Gentek is the parent company of window and door systems including Ply Gem, Vytec, and associated brands. The Gentek Premium Renovator certification is granted to fewer than 200 contractors across Canada and governs the installation methodology — specifically the LePage Quad Max seal technique for window and door openings. It is the industry benchmark for weathertight installations.",
  },
  {
    q: "Can I see what my exterior renovation will look like before you start?",
    a: "Yes. We photograph your property and produce computer-rendered visualizations showing the completed exterior in your selected materials, profiles, and colours. The renders are emailed to you with revision rounds included — and there is no obligation. This service is included in our renovation process at no charge.",
  },
  {
    q: "What does a full exterior renovation include?",
    a: "Scope varies by project but typically includes siding replacement, window and door installation, soffit and fascia, gutters and downspouts, and wherever relevant, sundecks and railings. We always begin with a building envelope assessment to identify hidden moisture damage or failed flashing before specifying the full scope.",
  },
  {
    q: "How do you handle window and door installation?",
    a: "Window and door openings are the most common cause of building envelope failure. Our window installation follows the LePage Quad Max seal method and Gentek-certified approach — ensuring every opening is fully flashed, sealed, and backed by our certification. We do not subcontract window installation.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: RENO_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Full Exterior Renovation — Siding, Windows, Doors & Decks",
  provider: {
    "@type": "LocalBusiness",
    name: "Streamline Exteriors Ltd.",
    telephone: "+12508320610",
    url: "https://www.streamlineexteriors.ca",
  },
  areaServed: ["Kelowna", "Vernon", "Salmon Arm", "Revelstoke", "Calgary"],
  description:
    "Complete exterior renovation including siding replacement, Gentek-certified window and door installation, soffits, fascia, sundecks, railings, and design visualization. One of only 200 Gentek premium renovators in Canada.",
  serviceType: "Exterior Renovation",
  url: "https://www.streamlineexteriors.ca/renovation",
}

const RENO_SCOPE = [
  { name: "Siding Replacement", body: "Full re-cladding in fibre cement, engineered wood, vinyl, cedar, or metal. Includes building envelope assessment, moisture barrier, and exterior insulation where required." },
  { name: "Windows & Doors", body: "Gentek-certified installation — one of only 200 premium renovators in Canada. LePage Quad Max seal method. Properly flashed and sealed openings are the most critical factor in envelope longevity." },
  { name: "Soffits & Fascia", body: "Aluminum, Longboard extruded aluminum, cedar, fibre cement, and composite soffit systems. Proper ventilation and pest exclusion built into every installation." },
  { name: "Sundecks", body: "Vinyl, cedar, and composite decking in the Okanagan and Shuswap. Fastener selection, surface preparation, and drainage design that reduce maintenance for the life of the deck." },
  { name: "Railings", body: "Aluminum, glass, wood, and cable railing systems — designed to complement the exterior cladding and meet local code requirements." },
  { name: "Design Visualization", body: "Before any commitment, we photograph your property and produce computer renderings showing the finished result in your chosen materials and colours. Emailed to you with revision rounds included." },
]

export default function RenovationPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/heroes/renovation.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 22% 65%, rgba(20,0,139,0.16) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 80% 18%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 48%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Exterior Renovation · Full Scope
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 130px)" }}
          >
            Exterior
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              Reimagined.
            </span>
          </h1>
          <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[560px] mb-10">
            {service.summary}
          </p>

          {/* Proof strip */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10 border-t border-white/[0.05] pt-8">
            {[
              { v: "#200", l: "Gentek Premium Renovators" },
              { v: "30+", l: "Years Full Renovation" },
              { v: "6", l: "Service Locations" },
              { v: "$10M", l: "Liability Coverage" },
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
              <span className="relative">Start Your Renovation</span>
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

      {/* ── Scope grid ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Renovation Scope
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {/* Featured first card — Siding Replacement is the primary renovation scope */}
            <div className="sm:col-span-2 bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[9px] tracking-[0.28em] text-white">01</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#14008B] opacity-60">Primary Scope</span>
              </div>
              <h3 className="font-display font-bold text-white uppercase text-[18px] tracking-[0.05em] mb-4">
                {RENO_SCOPE[0].name}
              </h3>
              <p className="text-white text-[13px] font-light leading-relaxed tracking-wide max-w-[660px]">
                {RENO_SCOPE[0].body}
              </p>
            </div>

            {/* Remaining 5 renovation services */}
            {RENO_SCOPE.slice(1).map((rs, i) => (
              <div key={i} className="bg-black p-8 lg:p-9 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">0{i + 2}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[14px] tracking-[0.06em] mb-4">
                  {rs.name}
                </h3>
                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                  {rs.body}
                </p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      <PhotoShowcase photos={[
        { src: "/images/projects/siding-metal-1.jpg", label: "Renovation", caption: "Metal + Cedar cladding · BC" },
        { src: "/images/design-renders/render-front.jpg", label: "Free CGI Visualization" },
        { src: "/images/projects/siding-metal-4.jpg", label: "Full Exterior Reimagine" },
      ]} />

      {/* ── Credentials + description ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  The Standard
                </span>
              </div>
              {service.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-white text-[14px] font-light leading-[1.78] tracking-wide mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
            <div className="space-y-6">
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                  Every Renovation Includes
                </p>
                <ul className="space-y-4">
                  {service.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                      <span className="text-white text-[13px] font-light leading-relaxed tracking-wide">{pt}</span>
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
                See your exterior reimagined — free
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                Computer-rendered visualization included · Gentek certified · One of 200 in Canada
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Start Your Renovation</span>
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

      <FAQGrid items={RENO_FAQ} label="Renovation Questions" />

      <LocationsGrid />

      <RelatedServices serviceIds={["residential", "gutters"]} />

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[540px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Free Consultation
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              See It Before
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                You Build It.
              </span>
            </h2>
            <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
              We photograph your property and render the finished result before any commitment. No obligation — just clarity.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:min-w-[260px]">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 overflow-hidden border border-[#14008B] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Request Design Consult</span>
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
