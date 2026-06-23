"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useInView } from "framer-motion"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

// ─── Data ─────────────────────────────────────────────────────────────────────

type City = {
  id: string
  name: string
  province: string
  region: string
  description: string
  href: string
  x: number
  y: number
  labelSide: "left" | "right"
  pulseDelay: number
}

const CITIES: City[] = [
  {
    id: "kelowna",
    name: "Kelowna",
    province: "British Columbia",
    region: "Central Okanagan",
    description:
      "Our primary Okanagan market — 30+ years of residential and commercial exterior installations across the Central Okanagan Valley.",
    href: "/locations/kelowna",
    x: 23, y: 70,
    labelSide: "right",
    pulseDelay: 0,
  },
  {
    id: "vernon",
    name: "Vernon",
    province: "British Columbia",
    region: "North Okanagan",
    description:
      "Home of our North Okanagan office since 1994. Serving Vernon, Coldstream, Armstrong, Enderby, and the upper North Okanagan with the full residential and commercial exterior scope.",
    href: "/locations/vernon",
    x: 28, y: 54,
    labelSide: "right",
    pulseDelay: 0.4,
  },
  {
    id: "salmon-arm",
    name: "Salmon Arm",
    province: "British Columbia",
    region: "Shuswap",
    description:
      "Our founding home since 1994 — the Shuswap's longest-serving exterior contractor. Serving Salmon Arm, Eagle Bay, Sicamous, and surrounding communities.",
    href: "/locations/salmon-arm",
    x: 15, y: 34,
    labelSide: "right",
    pulseDelay: 1.2,
  },
  {
    id: "revelstoke",
    name: "Revelstoke",
    province: "British Columbia",
    region: "Columbia–Shuswap",
    description:
      "Mountain-climate specialists. Heated IceBreaker gutter systems, Step Code building envelopes, and snow guards for Revelstoke's extreme conditions.",
    href: "/locations/revelstoke",
    x: 47, y: 18,
    labelSide: "right",
    pulseDelay: 1.6,
  },
  {
    id: "calgary",
    name: "Calgary",
    province: "Alberta",
    region: "Southern Alberta",
    description:
      "Three decades of BC exterior expertise brought to Alberta. Full residential and commercial scope across Calgary and the surrounding metro area.",
    href: "/locations/calgary",
    x: 81, y: 24,
    labelSide: "left",
    pulseDelay: 2.0,
  },
]

type Connection = { from: string; to: string; dashed?: boolean }

const CONNECTIONS: Connection[] = [
  { from: "kelowna", to: "vernon" },
  { from: "vernon", to: "salmon-arm" },
  { from: "salmon-arm", to: "revelstoke" },
  { from: "revelstoke", to: "calgary", dashed: true },
]

const TERRAIN: string[] = [
  "M 0,48 Q 14,40 28,44 Q 42,48 56,38 Q 68,28 82,34 Q 92,38 100,32",
  "M 0,63 Q 12,57 26,61 Q 40,65 54,57 Q 66,49 80,55 Q 92,59 100,53",
  "M 8,27 Q 22,21 36,25 Q 50,29 62,21 Q 74,13 90,19",
]

// ─── City hotspot ──────────────────────────────────────────────────────────────

function CityHotspot({
  city,
  isActive,
  isInView,
  onEnter,
  onLeave,
  onClick,
}: {
  city: City
  isActive: boolean
  isInView: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}) {
  return (
    <motion.button
      className="absolute focus:outline-none group"
      style={{ left: `${city.x}%`, top: `${city.y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.9 + city.pulseDelay * 0.25, duration: 0.5, ease: EASE }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={`Select ${city.name}`}
    >
      {/* Outer pulse ring */}
      <motion.span
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: 44, height: 44,
          top: "50%", left: "50%",
          marginTop: -22, marginLeft: -22,
          borderColor: isActive ? "rgba(20,0,139,0.7)" : "rgba(255,255,255,0.2)",
        }}
        animate={{ scale: [1, 2.2], opacity: [0.55, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: city.pulseDelay }}
      />

      {/* Secondary pulse (active only) */}
      {isActive && (
        <motion.span
          className="absolute rounded-full border border-[#14008B]/40 pointer-events-none"
          style={{ width: 60, height: 60, top: "50%", left: "50%", marginTop: -30, marginLeft: -30 }}
          animate={{ scale: [1, 1.7], opacity: [0.35, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Centre dot */}
      <motion.span
        className="relative block rounded-full z-10"
        animate={{
          width: isActive ? 11 : 7,
          height: isActive ? 11 : 7,
          backgroundColor: isActive ? "#14008B" : "rgba(255,255,255,0.72)",
          boxShadow: isActive
            ? "0 0 0 2.5px rgba(20,0,139,0.35), 0 0 14px 4px rgba(20,0,139,0.5)"
            : "0 0 6px 1px rgba(255,255,255,0.18)",
        }}
        transition={{ duration: 0.3, ease: EASE }}
      />

      {/* Label */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap ${
          city.labelSide === "right" ? "left-4 text-left" : "right-4 text-right"
        }`}
      >
        <motion.span
          className="block text-[10.5px] font-medium uppercase tracking-[0.2em] leading-none"
          animate={{ color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)" }}
          transition={{ duration: 0.22 }}
        >
          {city.name}
        </motion.span>
        <motion.span
          className="block text-[8.5px] tracking-[0.16em] mt-[3px] leading-none text-white"
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.22 }}
        >
          {city.region}
        </motion.span>
      </span>
    </motion.button>
  )
}

// ─── City info panel ───────────────────────────────────────────────────────────

function CityInfoPanel({ city }: { city: City | null }) {
  if (!city) {
    return (
      <div className="py-2">
        <p className="text-white text-[11px] font-medium uppercase tracking-[0.34em] mb-3">
          Select a location
        </p>
        <p className="text-white text-sm font-light leading-relaxed max-w-[280px]">
          Hover a city on the map to explore our services in that area.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-[3px] h-5 bg-[#14008B] shrink-0" />
        <p className="text-[9.5px] font-semibold uppercase tracking-[0.36em] text-white/40">
          {city.province} · {city.region}
        </p>
      </div>
      <h3
        className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-5"
        style={{ fontSize: "clamp(38px, 4.2vw, 68px)" }}
      >
        {city.name}
      </h3>
      <p className="text-white text-[14px] font-light leading-[1.74] tracking-wide max-w-[320px] mb-8">
        {city.description}
      </p>
      <Link
        href={city.href}
        className="group inline-flex items-center gap-3 border border-[#14008B]/55 px-7 py-[13px] text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:bg-[#14008B] transition-colors duration-300"
      >
        <span>View {city.name}</span>
        <svg
          width="11" height="11" viewBox="0 0 11 11" fill="none"
          className="group-hover:translate-x-0.5 transition-transform duration-300"
        >
          <path d="M1.5 5.5H9.5M9.5 5.5L5.5 1.5M9.5 5.5L5.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>
  )
}

// ─── Map ──────────────────────────────────────────────────────────────────────

function RegionMap({
  activeCity,
  mapRef,
  mapInView,
  onEnter,
  onLeave,
  onClick,
}: {
  activeCity: string | null
  mapRef: React.RefObject<HTMLDivElement | null>
  mapInView: boolean
  onEnter: (id: string) => void
  onLeave: () => void
  onClick: (id: string) => void
}) {
  const activeCityData = CITIES.find((c) => c.id === activeCity)

  return (
    <motion.div
      ref={mapRef}
      className="relative w-full"
      style={{ aspectRatio: "4 / 3" }}
      initial={{ opacity: 0 }}
      animate={mapInView ? { opacity: 1 } : {}}
      transition={{ delay: 0.3, duration: 1.1, ease: EASE }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse at 28% 72%, rgba(20,0,139,0.14) 0%, transparent 48%)",
            "radial-gradient(ellipse at 76% 24%, rgba(26,16,84,0.12) 0%, transparent 44%)",
            "linear-gradient(158deg, #010010 0%, #000000 55%, #000810 100%)",
          ].join(", "),
        }}
      />

      {/* Active city radial glow */}
      <AnimatePresence>
        {activeCityData && (
          <motion.div
            key={activeCityData.id}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at ${activeCityData.x}% ${activeCityData.y}%, rgba(20,0,139,0.18) 0%, transparent 38%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* SVG layer — grid, terrain, connections, labels, compass */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern id="locGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.016)" strokeWidth="0.2" />
          </pattern>
        </defs>

        {/* Grid */}
        <rect width="100" height="100" fill="url(#locGrid)" />

        {/* Terrain hints */}
        {TERRAIN.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.55" />
        ))}

        {/* Province boundary */}
        <motion.path
          d="M 65,1 L 65,99"
          fill="none"
          stroke="rgba(255,255,255,0.055)"
          strokeWidth="0.35"
          strokeDasharray="1.8 5"
          initial={{ pathLength: 0 }}
          animate={mapInView ? { pathLength: 1 } : {}}
          transition={{ delay: 1.6, duration: 2.8, ease: EASE }}
        />

        {/* Province labels */}
        <text x="32" y="95.5" fontSize="3.1" fill="rgba(255,255,255,0.07)" fontWeight="700" letterSpacing="1.8" textAnchor="middle">
          BRITISH COLUMBIA
        </text>
        <text x="82" y="95.5" fontSize="3.1" fill="rgba(255,255,255,0.07)" fontWeight="700" letterSpacing="1.8" textAnchor="middle">
          ALBERTA
        </text>

        {/* Connection lines */}
        {CONNECTIONS.map((conn, i) => {
          const from = CITIES.find((c) => c.id === conn.from)
          const to = CITIES.find((c) => c.id === conn.to)
          if (!from || !to) return null
          return (
            <motion.path
              key={i}
              d={`M ${from.x},${from.y} L ${to.x},${to.y}`}
              fill="none"
              stroke={conn.dashed ? "rgba(20,0,139,0.3)" : "rgba(255,255,255,0.09)"}
              strokeWidth={conn.dashed ? "0.28" : "0.22"}
              strokeDasharray={conn.dashed ? "2 4.5" : undefined}
              initial={{ pathLength: 0 }}
              animate={mapInView ? { pathLength: 1 } : {}}
              transition={{ delay: 1.1 + i * 0.18, duration: 1.1, ease: EASE }}
            />
          )
        })}

        {/* Compass — top right */}
        <g transform="translate(94, 7)">
          <line x1="0" y1="3.5" x2="0" y2="-0.5" stroke="rgba(255,255,255,0.18)" strokeWidth="0.35" />
          <polygon points="0,-1.5 -0.6,0.5 0.6,0.5" fill="rgba(255,255,255,0.18)" />
          <text x="0" y="-2.5" fontSize="2.4" fill="rgba(255,255,255,0.2)" textAnchor="middle" fontWeight="600" letterSpacing="0.4">N</text>
        </g>

        {/* Scale bar — bottom left */}
        <g transform="translate(5, 92)">
          <line x1="0" y1="0" x2="12" y2="0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.25" />
          <line x1="0" y1="-1" x2="0" y2="1" stroke="rgba(255,255,255,0.15)" strokeWidth="0.25" />
          <line x1="12" y1="-1" x2="12" y2="1" stroke="rgba(255,255,255,0.15)" strokeWidth="0.25" />
          <text x="6" y="-2" fontSize="2" fill="rgba(255,255,255,0.15)" textAnchor="middle" letterSpacing="0.3">~100 KM</text>
        </g>
      </svg>

      {/* City hotspots */}
      {CITIES.map((city) => (
        <CityHotspot
          key={city.id}
          city={city}
          isActive={activeCity === city.id}
          isInView={mapInView}
          onEnter={() => onEnter(city.id)}
          onLeave={onLeave}
          onClick={() => onClick(city.id)}
        />
      ))}

      {/* Frame border */}
      <div className="absolute inset-0 border border-white/[0.055] pointer-events-none" />

      {/* Corner accent — top left */}
      <div className="absolute top-0 left-0 w-6 h-px bg-[#14008B]/60 pointer-events-none" />
      <div className="absolute top-0 left-0 w-px h-6 bg-[#14008B]/60 pointer-events-none" />

      {/* Corner accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-6 h-px bg-[#14008B]/60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-px h-6 bg-[#14008B]/60 pointer-events-none" />
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Locations() {
  const [activeCity, setActiveCity] = useState<string | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(sectionRef, { once: true, margin: "-10%" })
  const mapInView = useInView(mapRef, { once: true, margin: "-5%" })

  const handleEnter = (id: string) => setActiveCity(id)
  const handleLeave = () => setActiveCity(null)
  const handleClick = (id: string) =>
    setActiveCity((prev) => (prev === id ? null : id))

  const activeCityData = CITIES.find((c) => c.id === activeCity) ?? null

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-14 lg:gap-20 items-start">

          {/* ── Left: Content ── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, x: -14 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE }}
            >
              <div className="h-px w-10 shrink-0 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Where We Work
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(46px, 5.2vw, 84px)" }}
              initial={{ opacity: 0, y: 22 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.82, ease: EASE }}
            >
              Western<br />Canada
            </motion.h2>

            {/* Intro */}
            <motion.p
              className="text-white text-[14.5px] font-light leading-[1.72] tracking-wide max-w-[320px] mb-12"
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.82, ease: EASE }}
            >
              Six service areas built around the same standard — from the Okanagan Valley to Southern Alberta.
            </motion.p>

            {/* Mobile city selector */}
            <motion.div
              className="flex lg:hidden gap-2 flex-wrap mb-8"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            >
              {CITIES.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleClick(city.id)}
                  className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] border transition-all duration-200 ${
                    activeCity === city.id
                      ? "border-[#14008B] bg-[#14008B]/20 text-white"
                      : "border-white/10 text-white hover:border-white/25 hover:text-white"
                  }`}
                >
                  {city.name}
                </button>
              ))}
            </motion.div>

            {/* City info panel */}
            <motion.div
              className="border-t border-white/[0.06] pt-8 min-h-[230px]"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.32, duration: 0.8, ease: EASE }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCity ?? "idle"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  <CityInfoPanel city={activeCityData} />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-8 pt-7 border-t border-white/[0.06]"
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.42, duration: 0.8, ease: EASE }}
            >
              <Link
                href="/locations"
                className="group inline-flex items-center gap-3 text-white text-[11px] font-semibold uppercase tracking-[0.28em] hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  View All Locations
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-[#14008B] group-hover:w-full transition-all duration-300 ease-out" />
                </span>
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Map ── */}
          <RegionMap
            activeCity={activeCity}
            mapRef={mapRef}
            mapInView={mapInView}
            onEnter={handleEnter}
            onLeave={handleLeave}
            onClick={handleClick}
          />
        </div>
      </div>

      {/* Ambient gradient — bleed from hero blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(20,0,139,0.06) 0%, transparent 60%)",
        }}
      />
    </section>
  )
}
