"use client"

import { useState } from "react"
import Link from "next/link"
import { PROJECTS, type ProjectCategory } from "@/lib/site-content"

type FilterValue = "all" | ProjectCategory | "commercial-multifamily"

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial & Multifamily", value: "commercial-multifamily" },
  { label: "Gutters", value: "gutters" },
  { label: "Renovation", value: "renovation" },
]

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  residential: "Residential",
  commercial: "Commercial",
  multifamily: "Multifamily",
  gutters: "Gutters",
  renovation: "Renovation",
}

export default function ProjectsPage() {
  const [active, setActive] = useState<FilterValue>("all")

  const filtered =
    active === "all"
      ? PROJECTS
      : active === "commercial-multifamily"
        ? PROJECTS.filter((p) => p.category === "commercial" || p.category === "multifamily")
        : PROJECTS.filter((p) => p.category === active)

  return (
    <main className="bg-black min-h-screen">

      {/* ── Header ── */}
      <section className="pt-44 pb-12 px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Project Gallery · BC & Alberta
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h1
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
            >
              The Work
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}>
                Speaks.
              </span>
            </h1>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.26em] border transition-all duration-200 ${
                    active === f.value
                      ? "bg-[#14008B] border-[#14008B] text-white"
                      : "border-white/[0.12] text-white hover:border-white/30"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="px-6 sm:px-10 lg:px-20 xl:px-28 pb-28">
        <div className="max-w-[1400px] mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Link
                  key={project.id}
                  href="/contact"
                  className="group block bg-[#0a0a0a] hover:bg-[#0f0f18] transition-colors duration-300"
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category chip */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-black/70 backdrop-blur-sm text-white text-[9px] font-semibold uppercase tracking-[0.28em] px-3 py-1.5 border border-white/[0.12]">
                        {CATEGORY_LABELS[project.category]}
                      </span>
                    </div>

                    {/* Featured dot */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#14008B]" />
                    )}
                  </div>

                  {/* Info panel */}
                  <div className="px-5 pt-5 pb-6">
                    <h2 className="font-display font-black text-white uppercase leading-[0.94] tracking-[-0.01em] mb-2.5" style={{ fontSize: "clamp(17px, 1.6vw, 22px)" }}>
                      {project.title}
                    </h2>

                    <div className="flex items-center gap-1.5 mb-4">
                      <svg width="9" height="9" viewBox="0 0 10 12" fill="none" className="shrink-0 opacity-40">
                        <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5Zm0 6.5A1.5 1.5 0 1 1 5 3.5a1.5 1.5 0 0 1 0 3Z" fill="white"/>
                      </svg>
                      <span className="text-white/40 text-[11px] tracking-wide">{project.location}</span>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                      <div>
                        <p className="text-white text-[11.5px] font-medium tracking-wide leading-snug">
                          {project.material}
                        </p>
                        <p className="text-white/40 text-[10px] tracking-wide mt-0.5">
                          {project.type}
                        </p>
                      </div>
                      <span className="font-mono text-[9px] tracking-[0.22em] text-white/25 shrink-0">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-white/40 text-[14px] font-light tracking-wide py-24 text-center">
              No projects in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Start Your Project
              </span>
            </div>
            <h2
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-5"
              style={{ fontSize: "clamp(32px, 4.5vw, 72px)" }}
            >
              Your Exterior
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}>
                Next.
              </span>
            </h2>
            <p className="text-white text-[15px] font-light leading-[1.72] tracking-wide max-w-[440px]">
              Free estimates. Fixed scopes. 30 years across BC and Alberta.
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
            <Link
              href="/locations"
              className="inline-flex items-center justify-center border border-white/[0.12] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:border-white/28 transition-all duration-300"
            >
              View Locations
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
