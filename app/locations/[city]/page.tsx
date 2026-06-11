import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { CITIES, SERVICES, PROJECTS, BUSINESS } from "@/lib/site-content"
import FadeIn from "@/components/ui/FadeIn"

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = CITIES.find((c) => c.slug === slug)
  if (!city) return {}
  return {
    title: city.seo.title,
    description: city.seo.description,
    keywords: city.seo.keywords,
    alternates: {
      canonical: `https://www.streamlineexteriors.ca/locations/${city.slug}`,
    },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      type: "website",
      url: `https://www.streamlineexteriors.ca/locations/${city.slug}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = CITIES.find((c) => c.slug === slug)
  if (!city) notFound()

  const cityServices = SERVICES.filter((s) =>
    city.services.includes(s.id)
  )

  const cityProjects = PROJECTS.filter((p) => p.city === city.slug)

  // Show Vernon office number for Okanagan cities
  const OKANAGAN_CITIES = ["kelowna", "vernon"]
  const phone = OKANAGAN_CITIES.includes(city.slug)
    ? { number: BUSINESS.phone.vernon, href: BUSINESS.phone.vernonHref }
    : { number: BUSINESS.phone.primary, href: BUSINESS.phone.primaryHref }

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Streamline Exteriors — ${city.name}`,
    url: `https://www.streamlineexteriors.ca/locations/${city.slug}`,
    telephone: "+12508320610",
    email: "sales@streamlineexteriors.ca",
    description: city.seo.description,
    areaServed: { "@type": "City", name: city.name, containedInPlace: { "@type": "AdministrativeArea", name: city.province } },
    address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.provinceCode, addressCountry: "CA" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Exterior Services in ${city.name}`,
      itemListElement: cityServices.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.summary },
      })),
    },
    parentOrganization: { "@type": "Organization", name: "Streamline Exteriors Ltd.", url: "https://www.streamlineexteriors.ca" },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.streamlineexteriors.ca" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.streamlineexteriors.ca/locations" },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://www.streamlineexteriors.ca/locations/${city.slug}` },
    ],
  }

  return (
    <main className="bg-black min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero ── */}
      <section className="relative bg-black border-b border-white/[0.05] pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 60%, rgba(20,0,139,0.18) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 80% 20%, rgba(26,16,84,0.10) 0%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/locations"
              className="text-white text-[10px] font-medium uppercase tracking-[0.34em] hover:text-white transition-colors"
            >
              Locations
            </Link>
            <span className="text-white text-[9px]">·</span>
            <span className="text-white text-[10px] font-medium uppercase tracking-[0.34em]">
              {city.name}
            </span>
          </div>

          {/* Province tag */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              {city.region} · {city.provinceCode}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-8"
            style={{ fontSize: "clamp(44px, 7vw, 120px)" }}
          >
            {city.name},
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                color: "rgba(0,0,0,0)",
              }}
            >
              {city.province}.
            </span>
          </h1>

          {/* Description */}
          <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[560px] mb-10">
            {city.longDescription.split("\n\n")[0]}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
            >
              <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Get a Free Estimate</span>
              <span className="relative w-8 h-8 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <a
              href={phone.href}
              className="inline-flex items-center gap-3 border border-white/[0.1] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {phone.number}
            </a>
          </div>
        </div>
      </section>

      {/* ── Long description ── */}
      {city.longDescription.split("\n\n").length > 1 && (
        <section className="border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
            <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10 bg-[#14008B]" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                    About This Location
                  </span>
                </div>
                <p className="text-white text-[14.5px] font-light leading-[1.78] tracking-wide">
                  {city.longDescription.split("\n\n")[1]}
                </p>
              </div>
              <div className="border border-white/[0.06] p-8">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                  Why {city.name} Chooses Streamline
                </p>
                <ul className="space-y-4">
                  {city.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[7px] shrink-0" />
                      <span className="text-white text-[13px] font-light leading-relaxed tracking-wide">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Services in this location ── */}
      <section className="border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-10 bg-[#14008B]" />
            <h2 className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Services in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05]">
            {cityServices.map((service, i) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="group relative bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-white">
                    0{i + 1}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#14008B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.tag}
                  </span>
                </div>
                <h3
                  className="font-display font-black text-white group-hover:text-white uppercase leading-[0.9] tracking-[-0.01em] mb-4 transition-colors duration-300"
                  style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
                >
                  {service.name}
                </h3>
                <p className="text-white lg:text-white text-[12.5px] font-light leading-relaxed tracking-wide transition-colors duration-300 mb-5 lg:group-hover:text-white">
                  {service.summary}
                </p>
                <div className="flex items-center gap-2 text-[#14008B] text-[10px] font-semibold uppercase tracking-[0.3em]">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Service
                  </span>
                  <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Local Projects ── */}
      {cityProjects.length > 0 && (
        <section className="border-b border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Recent Work in {city.name}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
                {cityProjects.map((project) => (
                  <Link
                    key={project.id}
                    href="/projects"
                    className="group relative bg-black p-8 lg:p-10 hover:bg-[#030018] transition-colors duration-300 overflow-hidden"
                  >
                    <div className="flex items-start justify-between gap-4 mb-8">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#14008B] opacity-60">
                        {project.category}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.28em] text-white group-hover:text-white transition-colors duration-300">
                        {project.year}
                      </span>
                    </div>

                    <h3
                      className="font-display font-black text-white group-hover:text-white uppercase leading-[0.9] tracking-[-0.01em] mb-5 transition-colors duration-300"
                      style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-white text-[11px] font-light uppercase tracking-[0.28em] mb-5">
                      {project.location}
                    </p>

                    <div className="space-y-1.5 mb-8">
                      <p className="text-white text-[12px] font-light leading-snug tracking-wide flex items-start gap-2.5">
                        <div className="w-[3px] h-[3px] rounded-full bg-[#14008B] mt-[5px] shrink-0" />
                        {project.material}
                      </p>
                      <p className="text-white/50 text-[11px] font-light leading-snug tracking-wide flex items-start gap-2.5">
                        <div className="w-[3px] h-[3px] rounded-full bg-white/20 mt-[5px] shrink-0" />
                        {project.type}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#14008B] text-[10px] font-semibold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Projects</span>
                      <svg width="10" height="10" viewBox="0 0 13 13" fill="none">
                        <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Ghost year watermark */}
                    <span className="absolute bottom-4 right-6 font-display font-black text-white/[0.03] leading-none select-none pointer-events-none" style={{ fontSize: "clamp(60px, 8vw, 100px)" }}>
                      {project.year.toString().slice(-2)}
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24">
        <FadeIn className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                {city.name} Projects
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(36px, 4.5vw, 72px)" }}
            >
              Start Your
              <br />
              <span
                style={{
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.28)",
                  color: "rgba(0,0,0,0)",
                }}
              >
                {city.name} Project.
              </span>
            </h2>
            <p className="text-white text-[14px] font-light leading-[1.72] tracking-wide">
              Free estimates for all exterior services in {city.name} and surrounding{" "}
              {city.region} communities.
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
              <a
                href={phone.href}
                className="text-white text-[13px] tracking-wide hover:text-white transition-colors duration-300"
              >
                {phone.number}
              </a>
            </div>
          </div>
        </FadeIn>
        </div>
      </section>

    </main>
  )
}
