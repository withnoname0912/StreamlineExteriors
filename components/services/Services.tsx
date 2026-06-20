"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useInView } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

// ─── Data ─────────────────────────────────────────────────────────────────────

type Service = {
  id: string
  num: string
  name: string
  tag: string
  description: string
  cta: string
  href: string
  gradient: string
  photo: string
  photoPos: string
}

const SERVICES: Service[] = [
  {
    id: "commercial",
    num: "01",
    name: "Commercial & Multifamily",
    tag: "BC & Alberta",
    description:
      "Building envelope systems for commercial properties, strata complexes, and low-rise multi-family developments. Step Code compliant exterior insulation. Siding, gutters, windows — coordinated across every unit, delivered on schedule.",
    cta: "Explore Commercial",
    href: "/commercial",
    gradient:
      "radial-gradient(ellipse at 86% 38%, rgba(20,0,139,0.22) 0%, rgba(0,0,0,0) 52%), radial-gradient(ellipse at 28% 82%, rgba(10,0,60,0.16) 0%, rgba(0,0,0,0) 48%)",
    photo: "/images/projects/real-multifamily.jpg",
    photoPos: "center 40%",
  },
  {
    id: "residential",
    num: "02",
    name: "Residential",
    tag: "Okanagan · Shuswap · Calgary",
    description:
      "Custom exterior design and cladding solutions for single-family and custom homes. From design consultation and 3D renderings to expert installation of fibre cement, engineered wood, metal cladding, and cedar, we help homeowners create distinctive, high-performance exteriors. Serving the Okanagan, Shuswap, and Alberta since 1994.",
    cta: "Explore Residential",
    href: "/residential",
    gradient:
      "radial-gradient(ellipse at 78% 50%, rgba(26,16,84,0.28) 0%, rgba(0,0,0,0) 55%), radial-gradient(ellipse at 22% 18%, rgba(14,0,80,0.18) 0%, rgba(0,0,0,0) 44%)",
    photo: "/images/projects/residential-night.jpg",
    photoPos: "center 35%",
  },
  {
    id: "gutters",
    num: "03",
    name: "Gutters & Leaf-guards",
    tag: "All 6 Locations",
    description:
      "Complete eavestrough and drainage systems for residential and commercial projects. Featuring seamless eavestroughs in multiple profiles, stainless steel micro-mesh gutter guards, heated gutter protection systems, and architectural gutter solutions. Delivering reliable water management solutions across Western Canada since 1994.",
    cta: "Explore Gutters",
    href: "/gutters",
    gradient:
      "radial-gradient(ellipse at 82% 55%, rgba(18,0,110,0.2) 0%, rgba(0,0,0,0) 50%), radial-gradient(ellipse at 44% 14%, rgba(8,0,50,0.2) 0%, rgba(0,0,0,0) 44%)",
    photo: "/images/projects/gutters-copper.jpg",
    photoPos: "center 50%",
  },
  {
    id: "renovation",
    num: "04",
    name: "Renovation",
    tag: "Full Exterior Scope",
    description:
      "Transform your home's exterior with confidence. From siding replacement and window and door packages to custom decks, covered outdoor living spaces, soffits, fascia, trim, and structural enhancements, we provide expert consultation and complimentary 3D renderings so you can see your vision come to life before construction begins.",
    cta: "Explore Renovation",
    href: "/renovation",
    gradient:
      "radial-gradient(ellipse at 72% 42%, rgba(20,0,139,0.18) 0%, rgba(0,0,0,0) 48%), radial-gradient(ellipse at 18% 72%, rgba(15,0,80,0.22) 0%, rgba(0,0,0,0) 52%)",
    photo: "/images/projects/real-residential-modern.jpg",
    photoPos: "center 40%",
  },
]

// ─── Row ──────────────────────────────────────────────────────────────────────

function ServiceRow({
  service,
  index,
  isActive,
  isDimmed,
  isInView,
  onEnter,
  onLeave,
}: {
  service: Service
  index: number
  isActive: boolean
  isDimmed: boolean
  isInView: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <Link href={service.href}>
    <motion.div
      className="relative border-b border-white/[0.06] overflow-hidden cursor-pointer select-none"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.08 + index * 0.07, duration: 0.7, ease: EASE }}
    >
      {/* ── Background gradient ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: service.gradient }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      />

      {/* ── Left accent bar ── */}
      <motion.div
        className="absolute left-0 inset-y-0 w-[3px] bg-[#14008B] origin-top"
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.38, ease: EASE }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-14 2xl:px-20">
        {/* Main row */}
        <div className="flex items-center gap-5 sm:gap-10 py-9 sm:py-10 lg:py-12">
          {/* Number label */}
          <span className="font-mono text-[11px] tracking-[0.28em] text-white shrink-0 w-8 hidden sm:block">
            {service.num}
          </span>

          {/* Service name */}
          <div className="flex-1 min-w-0">
            <motion.h3
              className="font-display font-black uppercase leading-[0.88] tracking-[-0.015em]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 78px)",
                color: isDimmed
                  ? "rgba(255,255,255,0.26)"
                  : isActive
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.82)",
                transition: "color 0.28s ease",
              }}
            >
              {service.name}
            </motion.h3>
          </div>

          {/* Right: tag + arrow */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Location tag — desktop only */}
            <motion.span
              className="text-[10px] font-medium uppercase tracking-[0.34em] text-white hidden lg:block"
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : 14,
              }}
              transition={{ duration: 0.32, ease: EASE }}
            >
              {service.tag}
            </motion.span>

            {/* Arrow indicator */}
            <motion.div
              className="w-10 h-10 shrink-0 flex items-center justify-center border border-white/10"
              animate={{
                borderColor: isActive
                  ? "rgba(20,0,139,0.7)"
                  : "rgba(255,255,255,0.08)",
                backgroundColor: isActive
                  ? "rgba(20,0,139,0.18)"
                  : "rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                animate={{ rotate: isActive ? -45 : 0 }}
                transition={{ duration: 0.38, ease: EASE }}
              >
                <path
                  d="M2 7H12M12 7L7 2M12 7L7 12"
                  stroke="white"
                  strokeOpacity={isActive ? 0.9 : 0.4}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>

        {/* ── Expanded description ── */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="expanded"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: EASE }}
              className="overflow-hidden"
            >
              <motion.p
                className="text-white text-[14.5px] sm:text-[15px] font-light leading-[1.72] tracking-wide max-w-[500px] pb-10 pt-1"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 6, opacity: 0 }}
                transition={{ delay: 0.06, duration: 0.36, ease: EASE }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Services({ showHeader = true }: { showHeader?: boolean }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: "-12%" })
  const listInView = useInView(listRef, { once: true, margin: "-4%" })

  const activeService = hoveredId
    ? SERVICES.find((s) => s.id === hoveredId) ?? SERVICES[0]
    : SERVICES[0]

  return (
    <section className="relative bg-black">
      {/* ── Section header ─────────────────────────────────────────────────── */}
      <div
        ref={headerRef}
        className={`max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-32 pb-20${showHeader ? "" : " hidden"}`}
      >
        <div className="flex items-end justify-between">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, x: -14 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                What We Build
              </span>
            </motion.div>

            <motion.h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(46px, 5.5vw, 86px)" }}
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
            >
              Our Services
            </motion.h2>
          </div>

          <motion.span
            className="font-display font-black text-white leading-none tracking-[-0.04em] select-none hidden lg:block"
            style={{ fontSize: "clamp(100px, 13vw, 190px)", opacity: 0.05 }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 0.05 } : {}}
            transition={{ delay: 0.2, duration: 1.1, ease: EASE }}
            aria-hidden
          >
            04
          </motion.span>
        </div>
      </div>

      {/* ── Two-column body: list + sticky photo ───────────────────────────── */}
      <div className="border-t border-white/[0.06] xl:flex">

        {/* Service list */}
        <div ref={listRef} className="xl:flex-1 min-w-0">
          {SERVICES.map((service, i) => {
            const isActive = hoveredId === service.id
            const isDimmed = hoveredId !== null && hoveredId !== service.id

            return (
              <ServiceRow
                key={service.id}
                service={service}
                index={i}
                isActive={isActive}
                isDimmed={isDimmed}
                isInView={listInView}
                onEnter={() => setHoveredId(service.id)}
                onLeave={() => setHoveredId(null)}
              />
            )
          })}
        </div>

        {/* Sticky photo panel — xl screens only */}
        <div className="hidden xl:block xl:w-[40%] shrink-0 relative border-l border-white/[0.05]">
          <div className="sticky top-20" style={{ height: "calc(100vh - 80px)" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId ? 1 : 0.42 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <motion.img
                  src={activeService.photo}
                  alt={activeService.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: activeService.photoPos }}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1.0 }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/35" />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Service label overlay */}
                <AnimatePresence>
                  {hoveredId && (
                    <motion.div
                      className="absolute bottom-10 left-10 right-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-5 bg-[#14008B]" />
                        <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#14008B]/80">
                          {activeService.tag}
                        </span>
                      </div>
                      <p className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
                        style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
                        {activeService.name}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>

            {/* Default idle state overlay */}
            {!hoveredId && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-px h-16 bg-white/10 mx-auto mb-6" />
                  <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-white">
                    Hover to explore
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ── Bottom CTA strip ───────────────────────────────────────────────── */}
      <motion.div
        className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-16 flex items-center justify-between gap-8"
        initial={{ opacity: 0 }}
        animate={listInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.45, duration: 0.8, ease: EASE }}
      >
        <p className="text-white text-[12px] font-medium uppercase tracking-[0.32em]">
          Serving BC &amp; Alberta
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 text-white text-[11px] font-semibold uppercase tracking-[0.28em] hover:text-white transition-colors duration-300"
        >
          <span className="relative">
            Free Estimate
            <span className="absolute -bottom-px left-0 h-px w-0 bg-[#14008B] group-hover:w-full transition-all duration-300 ease-out" />
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              d="M2 6H10M10 6L6 2M10 6L6 10"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.div>
    </section>
  )
}
