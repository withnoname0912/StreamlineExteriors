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

            {/* Phone quick-links below form */}
            <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-10 border-t border-white/[0.05]">
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

        {/* ── Right: photo panel ── */}
        <div className="hidden lg:block lg:w-[42%] xl:w-[46%] relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            <img
              src="/images/projects/real-residential-modern.jpg"
              alt="Streamline Exteriors project"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />
            {/* Blue accent gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 0% 100%, rgba(20,0,139,0.28) 0%, transparent 55%)",
              }}
            />

            {/* Locations overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-10 border-t border-white/[0.08]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/50 mb-4">
                Service Area
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-1.5">
                {CITIES.map((city) => (
                  <div key={city.id} className="flex items-baseline gap-1.5">
                    <span className="text-white/80 text-[11px] font-light tracking-wide truncate">{city.name}</span>
                    <span className="text-white/30 text-[8.5px] uppercase tracking-[0.16em] shrink-0">
                      {city.province === "British Columbia" ? "BC" : "AB"}
                    </span>
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
