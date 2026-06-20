"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BUSINESS } from "@/lib/site-content"

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const NAV_COLS = [
  {
    heading: "Services",
    links: [
      { label: "Residential", href: "/residential" },
      { label: "Commercial & Multifamily", href: "/commercial" },
      { label: "Gutters", href: "/gutters" },
      { label: "Renovation", href: "/renovation" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Locations", href: "/locations" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "Kelowna, BC", href: "/locations/kelowna" },
      { label: "Vernon, BC", href: "/locations/vernon" },
      { label: "Salmon Arm, BC", href: "/locations/salmon-arm" },
      { label: "Revelstoke, BC", href: "/locations/revelstoke" },
      { label: "Calgary, AB", href: "/locations/calgary" },
    ],
  },
  {
    heading: "Suppliers",
    links: [
      { label: "James Hardie", href: "/residential" },
      { label: "LP SmartSide", href: "/residential" },
      { label: "Allura", href: "/residential" },
      { label: "Longboard", href: "/commercial" },
      { label: "GutterGlove", href: "/gutters" },
    ],
  },
]

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/streamline.exteriors/",
    viewBox: "0 0 16 16",
    path: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/streamline-exteriors/",
    viewBox: "0 0 16 16",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/streamlineexteriorscanada/",
    viewBox: "0 0 16 16",
    path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
  },
]

const SUPPLIERS = [
  "James Hardie",
  "LP SmartSide",
  "Allura",
  "Longboard",
  "Lux Products",
  "Westform",
  "Woodtone",
  "Convoy Supply",
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, margin: "-8%" })

  return (
    <footer ref={footerRef} className="relative bg-black overflow-hidden border-t border-white/[0.055]">

      {/* Subtle brand ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse at 0% 100%, rgba(20,0,139,0.07) 0%, transparent 50%)",
            "radial-gradient(ellipse at 100% 0%, rgba(20,0,139,0.04) 0%, transparent 45%)",
          ].join(", "),
        }}
      />

      {/* Ghost watermark */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <p
          className="font-display font-black text-white uppercase leading-none tracking-[-0.04em]"
          style={{
            fontSize: "clamp(100px, 14vw, 220px)",
            opacity: 0.016,
            transform: "translate(6%, 22%)",
          }}
        >
          Exteriors
        </p>
      </div>

      {/* ── Brand section ── */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 pt-20 pb-16 border-b border-white/[0.05]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">

          {/* Wordmark + contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.85, ease: EASE }}
          >
            <div className="mb-6">
              <img
                src="/images/logo-cutout.png"
                alt="Streamline Exteriors"
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.88 }}
              />
            </div>

            <p className="text-white text-[12.5px] font-light leading-relaxed tracking-wide max-w-[310px] mb-6">
              Premium exterior systems for residential and commercial
              projects across British Columbia and Alberta.
            </p>

            <div className="space-y-2">
              <a
                href={BUSINESS.phone.primaryHref}
                className="flex items-center gap-3 text-white text-[12px] tracking-wide hover:text-white transition-colors duration-300 group"
              >
                <span className="w-3.5 h-px bg-[#14008B]/50 group-hover:w-5 transition-all duration-300" />
                {BUSINESS.phone.primary} · Salmon Arm
              </a>
              <a
                href={BUSINESS.phone.vernonHref}
                className="flex items-center gap-3 text-white text-[12px] tracking-wide hover:text-white transition-colors duration-300 group"
              >
                <span className="w-3.5 h-px bg-[#14008B]/50 group-hover:w-5 transition-all duration-300" />
                {BUSINESS.phone.vernon} · Vernon
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-white text-[12px] tracking-wide hover:text-white transition-colors duration-300 group"
              >
                <span className="w-3.5 h-px bg-[#14008B]/50 group-hover:w-5 transition-all duration-300" />
                {BUSINESS.email}
              </a>
            </div>
          </motion.div>

          {/* Center: credentials block */}
          <motion.div
            className="hidden lg:flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.85, ease: EASE }}
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="h-px w-4 shrink-0 bg-[#14008B]/55" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.44em] text-white">Why Streamline</span>
            </div>
            {[
              "Family owned since 1994",
              "Gentek Certified — 1 of 200 in Canada",
              "Bonded",
              "$10M Liability Insurance",
              "Continuous WCB Coverage",
              "Step Code Compliant Installer",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <div className="w-[3px] h-[3px] rounded-full bg-[#14008B]/60 shrink-0" />
                <span className="text-white text-[11.5px] font-light tracking-wide">{line}</span>
              </div>
            ))}
          </motion.div>

          {/* Right: credentials + social */}
          <motion.div
            className="flex flex-col lg:items-end gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.85, ease: EASE }}
          >
            <div className="lg:text-right">
              <p className="text-white text-[9px] font-medium uppercase tracking-[0.44em] mb-2">
                Licensed & Insured
              </p>
              <p className="text-white text-[11.5px] font-light tracking-wide">
                BC & Alberta Operations
              </p>
              <div className="flex items-center lg:justify-end gap-2 mt-3">
                <span className="text-white text-[9px] uppercase tracking-[0.32em]">Since</span>
                <span
                  className="font-display font-black text-white/55 uppercase leading-none"
                  style={{ fontSize: "clamp(18px, 2vw, 28px)" }}
                >
                  1994
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/[0.1] flex items-center justify-center text-white hover:text-white hover:border-white/22 transition-all duration-300"
                >
                  <svg width="14" height="14" viewBox={s.viewBox} fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Navigation columns ── */}
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {NAV_COLS.map((col, ci) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.14 + ci * 0.07, duration: 0.78, ease: EASE }}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="h-px w-4 shrink-0 bg-[#14008B]/55" />
                <h3 className="text-[9px] font-semibold uppercase tracking-[0.44em] text-white">
                  {col.heading}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex text-white text-[12.5px] font-light tracking-wide hover:text-white transition-colors duration-200"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-px left-0 h-px w-0 bg-[#14008B] group-hover:w-full transition-all duration-[320ms] ease-out" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="relative border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <motion.p
            className="text-white text-[10px] font-light tracking-[0.18em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.54, duration: 0.7, ease: EASE }}
          >
            © {new Date().getFullYear()} Streamline Exteriors Ltd. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: EASE }}
          >
            {[{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Projects", href: "/projects" }].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-[9.5px] font-medium uppercase tracking-[0.28em] hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
