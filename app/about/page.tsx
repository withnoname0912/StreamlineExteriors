import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS, CREDENTIALS } from "@/lib/site-content"

const ABOUT_STATS = [
  { value: "30+", label: "Years in Business" },
  { value: "#1", label: "GutterGlove Distributor" },
  { value: "$10M", label: "Liability Insured" },
  { value: "100%", label: "Warranty Backed" },
]
import FadeIn from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "About Streamline Exteriors | BC & Alberta Exterior Contractor Since 1994",
  description:
    "Family owned since 1994. Streamline Exteriors is the Okanagan–Shuswap's longest-serving exterior contractor. Gentek-certified, WCB-covered, $10M insured — serving BC and Alberta.",
  keywords: [
    "Streamline Exteriors about",
    "exterior contractor BC since 1994",
    "family owned exterior contractor BC",
    "Gentek certified renovator BC",
    "Okanagan exterior contractor history",
    "Curtis Poustie Streamline Exteriors",
  ],
  alternates: { canonical: "https://www.streamlineexteriors.ca/about" },
  openGraph: {
    title: "About Streamline Exteriors | BC & Alberta Exterior Contractor Since 1994",
    description:
      "Family owned since 1994. The Okanagan–Shuswap's longest-serving exterior contractor. Gentek-certified, .",
    type: "website",
    url: "https://www.streamlineexteriors.ca/about",
  },
}

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Streamline Exteriors",
  url: "https://www.streamlineexteriors.ca/about",
  description:
    "Family owned since 1994. Streamline Exteriors is the Okanagan–Shuswap's longest-serving exterior contractor. Gentek-certified, WCB-covered, $10M insured.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Streamline Exteriors Ltd.",
    foundingDate: "1994",
    founder: { "@type": "Person", name: "Curtis Poustie" },
    telephone: "+12508320610",
    email: "sales@streamlineexteriors.ca",
    url: "https://www.streamlineexteriors.ca",
    areaServed: ["Kelowna", "Vernon", "Salmon Arm", "Revelstoke", "Calgary"],
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
  },
}

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Assessment",
    body: "Every project begins with a thorough assessment of the existing building envelope — identifying moisture points, failed details, and the full scope of what's needed.",
  },
  {
    num: "02",
    title: "Specification",
    body: "We specify products matched to your climate zone, building type, and aesthetic. Design visualization renders the finished result before any commitment is made.",
  },
  {
    num: "03",
    title: "Installation",
    body: "Journeyman-led installation crews. We don't subcontract the work — the team you meet at estimate is the team that installs your exterior.",
  },
  {
    num: "04",
    title: "Warranty",
    body: "Standard 5-year warranty on all installations. Lifetime warranty available. $10M liability insurance and continuous WCB coverage since 1994.",
  },
]

const CREDENTIAL_DETAILS = [
  {
    title: "Gentek Certified Premium Renovator",
    body: "One of only 200 Gentek-certified premium renovators in Canada. This certification governs our window and door installation method — specifically the LePage Quad Max seal technique, the industry benchmark for weathertight openings.",
  },
  {
    title: "Bonded & Insured",
    body: "Streamline Exteriors carries $10M commercial general liability insurance and has maintained continuous bonding since 1994. This coverage level is required by most property managers and general contractors for multi-family and commercial exterior work — and we carry it on every project, residential or commercial.",
  },
  {
    title: "Step Code Compliant Installer",
    body: "We are certified installers for BC's Step Code energy requirements. This means proper vapour barriers, exterior insulation, and thermal bridge detailing that meets current provincial code — essential for any new or renovated building envelope.",
  },
  {
    title: "$10M Liability Insurance",
    body: "Full $10M commercial liability coverage. This is the threshold required by most property managers and general contractors for multi-family and commercial exterior work — and we carry it on every project, residential or commercial.",
  },
  {
    title: "Continuous WCB Coverage",
    body: "WorkSafeBC coverage maintained continuously since 1994. Our crews are never working outside of WorkSafeBC jurisdiction — giving property owners and general contractors the documentation they need before work begins.",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-28 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 60%, rgba(20,0,139,0.14) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 80% 10%, rgba(26,16,84,0.08) 0%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              About Streamline · Est. 1994
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-14 items-end">
            <div>
              <h1
                className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
                style={{ fontSize: "clamp(52px, 8vw, 128px)" }}
              >
                30 Years.
                <br />
                <span
                  style={{
                    WebkitTextStroke: "2.5px rgba(255,255,255,0.65)",
                    color: "rgba(0,0,0,0)",
                  }}
                >
                  One Standard.
                </span>
              </h1>
              <p className="text-white text-[16px] font-light leading-[1.72] tracking-wide max-w-[580px] mb-8">
                Family owned since 1994. The Okanagan–Shuswap's longest-serving exterior contractor,. From Salmon Arm to Calgary — one standard.
              </p>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 overflow-hidden border border-[#14008B] px-7 py-4 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white mb-10 lg:mb-0"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Get a Free Estimate</span>
                <span className="relative w-7 h-7 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              {/* Mobile stats — shown below description on small screens */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.05] lg:hidden mt-10">
                {ABOUT_STATS.map((s) => (
                  <div key={s.label} className="bg-black px-6 py-5">
                    <p
                      className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1"
                      style={{ fontSize: "clamp(22px, 5vw, 34px)" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-white text-[10px] font-medium uppercase tracking-[0.22em]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-px bg-white/[0.05] shrink-0">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="bg-black px-8 py-6">
                  <p
                    className="font-display font-black text-white uppercase leading-none tracking-[-0.02em] mb-1"
                    style={{ fontSize: "clamp(24px, 2.5vw, 38px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-white text-[10px] font-medium uppercase tracking-[0.24em]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 items-start">
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Our Story
                </span>
              </div>
              <p className="text-white text-[15.5px] font-light leading-[1.78] tracking-wide mb-6">
                Streamline Exteriors was founded in Salmon Arm in 1994 with a simple premise: that exterior construction deserved the same precision and accountability that was expected inside a home. Thirty years later, that standard hasn't changed — though the scale of our operations has.
              </p>
              <p className="text-white text-[14px] font-light leading-[1.78] tracking-wide mb-6">
                We began with residential siding and gutter installations across the Shuswap. As our reputation built, so did the scope of work — expanding into the Okanagan, then into commercial and multi-family developments, and eventually into Alberta. Today, we operate from six locations across BC and Alberta, with installation teams scaled to both single-home renovations and 50-unit strata complexes.
              </p>
              <p className="text-white text-[13.5px] font-light leading-[1.78] tracking-wide">
                What hasn't changed is the ownership structure. Streamline Exteriors remains family owned and operated — which means the accountability lives with the people who built it. When you call Streamline, you reach people who care about the result. Not because of policy, but because it's their name on the work.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
            <div className="space-y-5">
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                  Credentials
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
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-4">
                  Contact
                </p>
                <div className="space-y-2">
                  <a href={BUSINESS.phone.primaryHref} className="flex items-center gap-3 text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200 group">
                    <span className="w-3 h-px bg-[#14008B]/50 group-hover:w-4 transition-all duration-300" />
                    {BUSINESS.phone.primary} · Salmon Arm
                  </a>
                  <a href={BUSINESS.phone.vernonHref} className="flex items-center gap-3 text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200 group">
                    <span className="w-3 h-px bg-[#14008B]/50 group-hover:w-4 transition-all duration-300" />
                    {BUSINESS.phone.vernon} · Vernon
                  </a>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200 group">
                    <span className="w-3 h-px bg-[#14008B]/50 group-hover:w-4 transition-all duration-300" />
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Brand Photos ── */}
      <section className="border-b border-white/[0.05]">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-px bg-white/[0.04]"
          style={{ height: "clamp(420px, 58vh, 640px)" }}
        >
          {/* Left — residential night */}
          <div className="group relative overflow-hidden h-full">
            <img
              src="/images/projects/residential-night.jpg"
              alt="Luxury residential exterior — night"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.44em] text-white">
                Residential
              </p>
            </div>
          </div>

          {/* Centre — commercial lakeside */}
          <div className="group relative overflow-hidden h-full">
            <img
              src="/images/projects/commercial-lakeside.jpg"
              alt="Commercial exterior — BC"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.44em] text-white">
                Commercial
              </p>
            </div>
          </div>

          {/* Right — multifamily strata */}
          <div className="group relative overflow-hidden h-full">
            <img
              src="/images/projects/multifamily-strata.jpg"
              alt="Multifamily strata exterior — BC"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.44em] text-white">
                Multifamily
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-end">
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-10 bg-[#14008B]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                    Client Testimonial
                  </span>
                </div>
                {/* Large quotation mark */}
                <div
                  className="font-display font-black text-[#14008B] leading-none mb-6 select-none"
                  style={{ fontSize: "clamp(80px, 10vw, 140px)", lineHeight: 0.7 }}
                  aria-hidden
                >
                  "
                </div>
                <blockquote
                  className="font-display font-black text-white uppercase leading-[1.06] tracking-[-0.01em] mb-10"
                  style={{ fontSize: "clamp(22px, 3vw, 42px)" }}
                >
                  Thank you for your team's amazing work and commitment to the project. You have an incredible lead with an eye for detail and the willingness to be part of the team.
                </blockquote>
                <div className="flex items-start gap-6">
                  <div className="w-px self-stretch bg-[#14008B]" />
                  <div>
                    <p className="text-white text-[13px] font-semibold uppercase tracking-[0.22em] mb-1">
                      Lance Wilson
                    </p>
                    <p className="text-white text-[11px] font-light uppercase tracking-[0.28em]">
                      Superintendent · Chandos Construction
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-white/[0.06] p-8 self-start">
                <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white mb-5">
                  About Chandos
                </p>
                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                  Chandos Construction is one of Canada's largest and most respected general contractors, operating across Western Canada with multi-billion dollar project portfolios spanning commercial, institutional, and industrial sectors.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="bg-black p-8 lg:p-9 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">{step.num}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[15px] tracking-[0.06em] mb-4">
                  {step.title}
                </h3>
                <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide">
                  {step.body}
                </p>
              </div>
            ))}
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
                Thirty years. One standard.
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                Free estimates · BC & Alberta · Family owned since 1994
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
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border border-white/[0.1] px-7 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
          <FadeIn>
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Certifications & Coverage
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
            {/* Featured first credential — Gentek is the flagship certification */}
            <div className="sm:col-span-2 bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[9px] tracking-[0.28em] text-white">01</span>
                <div className="h-px flex-1 bg-white/[0.06]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#14008B] opacity-60">Flagship Certification</span>
              </div>
              <h3 className="font-display font-bold text-white uppercase text-[17px] tracking-[0.05em] mb-4 leading-snug">
                {CREDENTIAL_DETAILS[0].title}
              </h3>
              <p className="text-white text-[13px] font-light leading-relaxed tracking-wide max-w-[620px]">
                {CREDENTIAL_DETAILS[0].body}
              </p>
            </div>

            {/* Remaining 5 credentials */}
            {CREDENTIAL_DETAILS.slice(1).map((cred, i) => (
              <div key={i} className="bg-black p-8 lg:p-9 hover:bg-[#030018] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">0{i + 2}</span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>
                <h3 className="font-display font-bold text-white uppercase text-[13px] tracking-[0.06em] mb-4 leading-snug">
                  {cred.title}
                </h3>
                <p className="text-white text-[12px] font-light leading-relaxed tracking-wide">
                  {cred.body}
                </p>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Start a Project
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              Thirty Years.
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                One Standard.
              </span>
            </h2>
            <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
              Contact us to discuss your project. We'll assess the scope, specify the right materials, and provide a fixed estimate — no obligation.
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
            <Link
              href="/projects"
              className="inline-flex items-center justify-between gap-4 border border-white/[0.1] px-8 py-5 text-[11.5px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
            >
              <span>View Our Projects</span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
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
