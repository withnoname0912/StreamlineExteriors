import type { Metadata } from "next"
import Services from "@/components/services/Services"
import SuppliersGrid from "@/components/suppliers/SuppliersGrid"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Exterior Services — Siding, Gutters, Renovation | Streamline Exteriors",
  description: "Residential siding, commercial facades, multifamily envelopes, seamless gutters, and full exterior renovations across BC and Alberta since 1994.",
  alternates: { canonical: "https://www.streamlineexteriors.ca/services" },
}

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen">

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
            <h1
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
              style={{ fontSize: "clamp(56px, 8vw, 118px)" }}
            >
              Our
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "rgba(0,0,0,0)" }}>
                Services.
              </span>
            </h1>
          </div>
          <p className="text-white text-[14px] font-light leading-[1.78] tracking-wide max-w-[360px] sm:pb-2">
            Four services. One standard.<br />
            BC and Alberta since 1994.
          </p>
        </div>
      </section>

      {/* ── Services accordion ── */}
      <Services showHeader={false} />

      {/* ── Partners ── */}
      <SuppliersGrid />

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.05]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <p
              className="font-display font-black text-white uppercase leading-[0.92] tracking-[-0.02em] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
            >
              One Call.
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Every Scope.
              </span>
            </p>
            <p className="text-white text-[15px] font-light leading-relaxed tracking-wide max-w-[440px]">
              We assess your project and recommend the right scope — at no charge. One contractor across all four services.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-[220px]">
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
              href="/projects"
              className="inline-flex items-center justify-center border border-white/[0.1] px-7 py-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:text-white hover:border-white/25 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
