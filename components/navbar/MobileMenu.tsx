"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_ITEMS } from "./nav-data"
import { BUSINESS } from "@/lib/site-content"

type Props = {
  isOpen: boolean
  onClose: () => void
}

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const containerVariants = {
  closed: { opacity: 0, x: "100%" },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.4, ease: EASE },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: 24 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 + i * 0.055, duration: 0.45, ease: EASE },
  }),
}

const accordionVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1, transition: { duration: 0.35, ease: EASE } },
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id))
  }

  const handleLinkClick = (href: string) => {
    onClose()
    if (href === pathname) {
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#000000] overflow-y-auto"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/[0.07]">
              <Link href="/" onClick={onClose} className="flex items-center">
                <img
                  src="/images/logo-cutout.png"
                  alt="Streamline Exteriors"
                  className="h-7 w-auto"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
                />
              </Link>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center text-white hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-6 pt-8 pb-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    {item.columns ? (
                      <div>
                        <button
                          onClick={() => toggle(item.id)}
                          className="flex w-full items-center justify-between py-4 border-b border-white/[0.06] group"
                        >
                          <span className="text-white text-2xl font-black tracking-[-0.01em] uppercase leading-none group-hover:text-white transition-colors duration-200">
                            {item.label}
                          </span>
                          <motion.div
                            animate={{ rotate: expanded === item.id ? 45 : 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 3V15M3 9H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expanded === item.id && (
                            <motion.div
                              variants={accordionVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="overflow-hidden"
                            >
                              <div className="py-4 space-y-6">
                                {item.columns.map((col) => (
                                  <div key={col.heading}>
                                    <p className="text-white/40 text-[10px] font-semibold tracking-[0.3em] uppercase mb-3">
                                      {col.heading}
                                    </p>
                                    <ul className="space-y-2">
                                      {col.items.map((sub) => (
                                        <li key={sub.href}>
                                          <Link
                                            href={sub.href}
                                            onClick={onClose}
                                            className="text-white text-sm tracking-wide hover:text-white transition-colors duration-200 block py-1"
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className="flex items-center justify-between py-4 border-b border-white/[0.06] group"
                      >
                        <span className="text-white text-2xl font-black tracking-[-0.01em] uppercase leading-none group-hover:text-white transition-colors duration-200">
                          {item.label}
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="text-white group-hover:text-white transition-colors duration-200 -rotate-45"
                        >
                          <path d="M3 9H15M15 9L9 3M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <motion.div
              className="px-6 pb-10 pt-4 border-t border-white/[0.07]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6 shrink-0 bg-[#14008B]" />
                <p className="text-white text-[9.5px] tracking-[0.38em] uppercase">
                  Start Your Project
                </p>
              </div>
              <Link
                href="/contact"
                onClick={onClose}
                className="group relative block w-full overflow-hidden border border-[#14008B] text-white text-[11px] font-semibold tracking-[0.22em] uppercase text-center py-[15px] transition-colors duration-300"
              >
                <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Get Estimate</span>
              </Link>
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col gap-2.5">
                <div>
                  <p className="text-white text-[9px] uppercase tracking-[0.32em] mb-1">Salmon Arm · Shuswap</p>
                  <a
                    href={BUSINESS.phone.primaryHref}
                    className="text-white text-[12.5px] tracking-wide hover:text-white transition-colors duration-200"
                  >
                    {BUSINESS.phone.primary}
                  </a>
                </div>
                <div>
                  <p className="text-white text-[9px] uppercase tracking-[0.32em] mb-1">Vernon · Okanagan</p>
                  <a
                    href={BUSINESS.phone.vernonHref}
                    className="text-white text-[12.5px] tracking-wide hover:text-white transition-colors duration-200"
                  >
                    {BUSINESS.phone.vernon}
                  </a>
                </div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-white text-[11px] tracking-wide hover:text-white transition-colors duration-200"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
