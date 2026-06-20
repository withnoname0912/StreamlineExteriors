"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

type HeroProps = {
  imageSrc?: string
  imageAlt?: string
  slides?: string[]
}

type Ease4 = [number, number, number, number]
const EASE: Ease4 = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
}

const lineUp = {
  hidden: { y: "105%" },
  show: { y: "0%", transition: { duration: 1.1, ease: EASE } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
}

const SLIDE_DURATION = 6000

export default function Hero({ imageSrc, imageAlt, slides }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const isCarousel = slides && slides.length > 0
  const isLight = !imageSrc && !isCarousel

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!isCarousel || shouldReduceMotion) return
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [isCarousel, slides, shouldReduceMotion])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"])
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "22%"])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-black"
      aria-label="Hero"
    >
      {/* ── Background ─────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        {isCarousel ? (
          /* ── Carousel slides ── */
          <>
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                className="absolute"
                style={{ inset: "-8%", zIndex: 1 }}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1.0, transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] } }}
                exit={{ opacity: 0, scale: 1.0, transition: { duration: 1.0, ease: [0.4, 0, 1, 1] } }}
              >
                <img
                  src={slides[activeIndex]}
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden
                />
              </motion.div>
            </AnimatePresence>

            {/* Slide dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="transition-all duration-400"
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === activeIndex ? "20px" : "5px",
                    height: "2px",
                    backgroundColor: i === activeIndex ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.28)",
                  }}
                />
              ))}
            </div>
          </>
        ) : (
          /* ── Static background (single image or gradient) ── */
          <motion.div
            className="absolute"
            style={{
              inset: "-8%",
              backgroundImage: imageSrc
                ? `url(${imageSrc})`
                : isLight
                ? [
                    "radial-gradient(ellipse at 22% 68%, rgba(20,0,139,0.05) 0%, transparent 52%)",
                    "radial-gradient(ellipse at 80% 22%, rgba(26,16,84,0.04) 0%, transparent 46%)",
                    "linear-gradient(158deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)",
                  ].join(", ")
                : [
                    "radial-gradient(ellipse at 22% 68%, rgba(20,0,139,0.24) 0%, transparent 52%)",
                    "radial-gradient(ellipse at 80% 22%, rgba(26,16,84,0.16) 0%, transparent 46%)",
                    "radial-gradient(ellipse at 55% 100%, rgba(20,0,80,0.12) 0%, transparent 40%)",
                    "linear-gradient(158deg, #000000 0%, #030016 50%, #000000 100%)",
                  ].join(", "),
              backgroundSize: imageSrc ? "cover" : undefined,
              backgroundPosition: imageSrc ? "center" : undefined,
            }}
            role={imageSrc ? "img" : undefined}
            aria-label={imageSrc ? imageAlt : undefined}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 9, ease: [0, 0, 0.18, 1] }}
          />
        )}

        {/* Architectural grid — light mode only */}
        {isLight && (
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.028,
              backgroundImage: [
                "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px)",
                "linear-gradient(to right, rgba(0,0,0,1) 1px, transparent 1px)",
              ].join(", "),
              backgroundSize: "76px 76px",
            }}
          />
        )}
      </motion.div>

      {/* ── Overlays ───────────────────────────────────────────────────────── */}

      {/* Dark overlays for photo readability */}
      {!isLight && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/85 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black/60 via-black/18 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-black/22" />
        </>
      )}

      {/* Light hero: Apple-level white → black transition */}
      {isLight && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: "560px",
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 18%, rgba(0,0,0,0.04) 36%, rgba(0,0,0,0.48) 62%, rgba(0,0,0,0.93) 82%, #000000 100%)",
          }}
        />
      )}

      {/* ── Main content ───────────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-1 flex-col justify-center px-6 pb-36 pt-44 sm:px-10 lg:px-20 xl:px-28"
        style={{ y: contentY }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[920px]"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-10 flex items-center gap-4">
            <div className="h-px w-10 shrink-0 bg-[#14008B]" />
            <p
              className="text-[10px] font-medium uppercase tracking-[0.42em]"
              style={{ color: isLight ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.78)" }}
            >
              Western Canadian Exterior Systems
            </p>
          </motion.div>

          {/* Headline line 1 — solid fill */}
          <div className="overflow-hidden">
            <motion.h1
              variants={lineUp}
              className="font-display font-black uppercase leading-[0.88] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(58px, 8.5vw, 130px)",
                color: isLight ? "rgba(0,0,0,0.88)" : "white",
              }}
            >
              Built For Climate.
            </motion.h1>
          </div>

          {/* Headline line 2 — stroke outline */}
          <div className="overflow-hidden mb-10">
            <motion.h1
              variants={lineUp}
              className="font-display font-black uppercase leading-[0.88] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(58px, 8.5vw, 130px)",
                WebkitTextStroke: isLight
                  ? "1.5px rgba(0,0,0,0.22)"
                  : "1.5px rgba(255,255,255,0.36)",
                color: "rgba(0,0,0,0)",
              }}
            >
              Designed To Last.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mb-12 max-w-[400px] text-[15px] font-light leading-relaxed tracking-wide"
            style={{ color: isLight ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.85)" }}
          >
            Premium residential and commercial exterior solutions
            <br className="hidden sm:block" /> across BC &amp; Alberta.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col items-start gap-4 sm:flex-row">
            {/* Primary — Get Estimate */}
            {isLight ? (
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-[#14008B] px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.26em] text-white"
              >
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative">Get Estimate</span>
                <span className="relative"><ArrowRight /></span>
              </Link>
            ) : (
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-white/22 px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.26em] text-white"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative group-hover:text-black transition-colors duration-300">Get Estimate</span>
                <span className="relative group-hover:text-black transition-colors duration-300"><ArrowRight /></span>
              </Link>
            )}

            {/* Secondary — View Projects */}
            {isLight ? (
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden border border-black/40 px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.26em] text-black/75"
              >
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative group-hover:text-white transition-colors duration-300">View Projects</span>
                <span className="relative group-hover:text-white transition-colors duration-300"><ArrowRight /></span>
              </Link>
            ) : (
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.26em] text-white transition-colors duration-300 hover:text-white"
              >
                <span className="relative">
                  View Projects
                  <span className="absolute -bottom-px left-0 h-px w-0 bg-white/40 transition-all duration-300 ease-out group-hover:w-full" />
                </span>
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5">
                  <ArrowRight />
                </span>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(20,0,139,0.6) 30%, rgba(20,0,139,0.6) 70%, transparent 100%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1.5, ease: EASE }}
      />
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2 6H10M10 6L6 2M10 6L6 10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
