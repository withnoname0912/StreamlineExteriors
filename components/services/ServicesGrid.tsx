import Link from "next/link"

const SERVICES = [
  {
    id: "commercial",
    num: "01",
    href: "/commercial",
    label: "Commercial & Multifamily",
    headline: "Building Envelopes",
    sub: "Metal Panel · Rainscreen · ACM · Longboard · Strata · Low-Rise",
    body: "Complete building envelope systems for commercial, institutional, strata, and multi-family developments. Specializing in exterior insulation, thermal sub-framing, girts, ACM panels, rainscreen systems, metal and fibre cement cladding. Delivering Step Code-compliant building envelope systems with quality workmanship—on budget and on schedule.",
    photo: "/images/projects/real-multifamily.jpg",
    photoPos: "center 30%",
  },
  {
    id: "residential",
    num: "02",
    href: "/residential",
    label: "Residential",
    headline: "Siding & Cladding",
    sub: "James Hardie · LP SmartSide · Metal · Cedar · Vinyl",
    body: "Custom exterior design and cladding solutions for single-family and custom homes. From design consultation and 3D renderings to expert installation of fibre cement, engineered wood, metal cladding, and cedar, we help homeowners create distinctive, high-performance exteriors. Serving the Okanagan, Shuswap, and Alberta since 1994.",
    photo: "/images/projects/real-residential-modern.jpg",
    photoPos: "center 40%",
  },
  {
    id: "gutters",
    num: "03",
    href: "/gutters",
    label: "Gutters & Leaf-guards",
    headline: "Seamless Systems",
    sub: "GutterGlove · IceBreaker · Euro · Seamless",
    body: "Complete eavestrough and drainage systems for residential and commercial projects. Featuring seamless eavestroughs in multiple profiles, stainless steel micro-mesh gutter guards, heated gutter protection systems, and architectural gutter solutions. Delivering reliable water management solutions across Western Canada since 1994.",
    photo: "/images/projects/real-metal-siding.jpg",
    photoPos: "center 50%",
  },
  {
    id: "renovation",
    num: "04",
    href: "/renovation",
    label: "Full Renovation",
    headline: "Complete Exterior",
    sub: "Gentek · Windows · Doors · Soffits · Siding",
    body: "Transform your home's exterior with confidence. From siding replacement and window and door packages to custom decks, covered outdoor living spaces, soffits, fascia, trim, and structural enhancements, we provide expert consultation and complimentary 3D renderings so you can see your vision come to life before construction begins.",
    photo: "/images/projects/real-residential-siding.jpg",
    photoPos: "center 35%",
  },
]

export default function ServicesGrid() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-40 pb-16 px-6 sm:px-10 lg:px-20 xl:px-28 border-b border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-7">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.44em] text-white">
                What We Do
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(56px, 8vw, 118px)" }}
            >
              Built For
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "rgba(0,0,0,0)" }}>
                Permanence.
              </span>
            </h2>
          </div>
          <p className="text-white text-[14px] font-light leading-[1.78] tracking-wide max-w-[360px] sm:pb-2">
            Five services. One standard.<br />
            BC and Alberta since 1994.
          </p>
        </div>
      </section>

      {/* ── Services — full-bleed alternating split ── */}
      <section
        className="flex flex-col"
        style={{ gap: "1px", background: "rgba(255,255,255,0.05)" }}
      >
        {SERVICES.map((s, i) => {
          const photoRight = i % 2 === 1

          return (
            <Link
              key={s.id}
              href={s.href}
              className="group flex flex-col lg:flex-row bg-black overflow-hidden"
              style={{ minHeight: "clamp(440px, 72vh, 860px)" }}
            >
              {/* ── Photo ── */}
              <div
                className={`relative h-[62vw] max-h-[520px] lg:max-h-none lg:h-auto lg:w-1/2 shrink-0 overflow-hidden${photoRight ? " lg:order-2" : ""}`}
              >
                <img
                  src={s.photo}
                  alt={s.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: s.photoPos }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/08 transition-colors duration-700" />

                {/* Blue edge accent */}
                <div
                  className="absolute inset-y-0 w-[2px] bg-[#14008B] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={photoRight ? { right: 0 } : { left: 0 }}
                />

                {/* Index */}
                <span className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.32em] text-white">
                  {s.num}
                </span>
              </div>

              {/* ── Content ── */}
              <div
                className={`relative flex flex-col justify-center flex-1 lg:w-1/2 overflow-hidden${photoRight ? " lg:order-1" : ""}`}
              >
                {/* Large watermark number */}
                <span
                  className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-white/[0.028] leading-none tracking-[-0.04em] select-none pointer-events-none"
                  style={{ fontSize: "clamp(140px, 22vw, 320px)" }}
                  aria-hidden
                >
                  {s.num}
                </span>

                <div className="relative z-10 px-10 py-14 sm:px-14 lg:px-16 xl:px-20 2xl:px-24">

                  {/* Service name */}
                  <h3
                    className="font-display font-black uppercase leading-[0.88] tracking-[-0.02em] text-white mb-10"
                    style={{ fontSize: "clamp(52px, 6vw, 96px)" }}
                  >
                    {s.label}
                  </h3>

                  {/* Body */}
                  <p className="text-white text-[14px] font-light leading-[1.86] tracking-wide max-w-[400px] mb-10">
                    {s.body}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-white group-hover:text-white transition-colors duration-300">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.38em]">
                      Learn More
                    </span>
                    <span className="w-0 group-hover:w-7 h-px bg-white/30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 13 13"
                      fill="none"
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      <path
                        d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                </div>
              </div>

            </Link>
          )
        })}
      </section>
    </>
  )
}
