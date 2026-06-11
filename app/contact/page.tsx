import type { Metadata } from "next"
import { BUSINESS, CITIES } from "@/lib/site-content"
import ContactForm from "@/components/contact/ContactForm"
import FadeIn from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Contact Streamline Exteriors | Free Exterior Estimate — BC & Alberta",
  description:
    "Get a free exterior estimate from Streamline Exteriors. Serving Kelowna, Vernon, Salmon Arm, Revelstoke, and Calgary. Call (250) 832-0610 or send us a message.",
  alternates: { canonical: "https://www.streamlineexteriors.ca/contact" },
}

const OFFICES = [
  {
    city: "Salmon Arm",
    province: "BC",
    phone: BUSINESS.phone.primary,
    href: BUSINESS.phone.primaryHref,
    note: "Salmon Arm · Revelstoke · Shuswap",
  },
  {
    city: "Vernon",
    province: "BC",
    phone: BUSINESS.phone.vernon,
    href: BUSINESS.phone.vernonHref,
    note: "Vernon · Kelowna · Okanagan",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* ── Full-bleed split layout ── */}
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* ── Left: form panel ── */}
        <div className="flex-1 flex flex-col pt-40 pb-20 px-6 sm:px-10 lg:px-16 xl:px-20 border-r border-white/[0.05]">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Free Estimates · BC & Alberta
              </span>
            </div>

            <h1
              className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em] mb-14"
              style={{ fontSize: "clamp(48px, 5.5vw, 96px)" }}
            >
              Get in
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
                Touch.
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-[#14008B]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                Project Enquiry
              </span>
            </div>

            <ContactForm />

            {/* Phone quick-links — mobile only (shown on right panel on desktop) */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-10 border-t border-white/[0.05] lg:hidden">
              {OFFICES.map((o) => (
                <div key={o.city}>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35 mb-1.5">{o.note}</p>
                  <a href={o.href} className="text-white text-[14px] font-light tracking-wide hover:text-white/70 transition-colors duration-200">
                    {o.phone}
                  </a>
                </div>
              ))}
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/35 mb-1.5">Email</p>
                <a href={`mailto:${BUSINESS.email}`} className="text-white text-[14px] font-light tracking-wide hover:text-white/70 transition-colors duration-200">
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Right: photo + info panel ── */}
        <div className="hidden lg:flex lg:flex-col lg:w-[42%] xl:w-[46%] sticky top-0 h-screen overflow-hidden">

          {/* Photo */}
          <div className="relative overflow-hidden" style={{ flex: "0 0 48%" }}>
            <img
              src="/images/projects/real-residential-siding.jpg"
              alt="Streamline Exteriors project"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 100%, rgba(20,0,139,0.2) 0%, transparent 55%)" }} />
            <div className="absolute bottom-5 left-7">
              <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-white/40 mb-0.5">Shuswap Custom Home</p>
              <p className="text-white/55 text-[11px] font-light tracking-wide">Vertical Fibre Cement · Salmon Arm, BC</p>
            </div>
          </div>

          {/* Info below photo */}
          <div className="flex flex-col flex-1 px-10 py-7 border-t border-white/[0.06] space-y-5 overflow-y-auto">

            {/* Phones */}
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/40 mb-4">Call Us</p>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.city}>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-white/30 mb-1">{o.note}</p>
                    <a href={o.href} className="text-white text-[15px] font-light tracking-wide hover:text-white/70 transition-colors duration-200">
                      {o.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/40 mb-3">Email</p>
              <a href={`mailto:${BUSINESS.email}`} className="text-white text-[13px] font-light tracking-wide hover:text-white/70 transition-colors duration-200">
                {BUSINESS.email}
              </a>
            </div>

            {/* Locations */}
            <div className="pt-6 border-t border-white/[0.06]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/40 mb-4">Locations</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                {CITIES.map((city) => (
                  <div key={city.id} className="flex items-baseline gap-1.5 min-w-0">
                    <span className="text-white/70 text-[11px] font-light tracking-wide truncate">{city.name}</span>
                    <span className="text-white/25 text-[8.5px] uppercase tracking-[0.16em] shrink-0">{city.province === "British Columbia" ? "BC" : "AB"}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </main>
  )
}
