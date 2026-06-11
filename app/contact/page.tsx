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
    label: "Primary Office",
    phone: BUSINESS.phone.primary,
    href: BUSINESS.phone.primaryHref,
    note: "Salmon Arm · Revelstoke · Shuswap",
  },
  {
    city: "Vernon",
    province: "BC",
    label: "Vernon Office",
    phone: BUSINESS.phone.vernon,
    href: BUSINESS.phone.vernonHref,
    note: "Vernon · Kelowna · Okanagan",
  },
]

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-16 border-b border-white/[0.05] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 18% 70%, rgba(20,0,139,0.12) 0%, rgba(0,0,0,0) 52%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-10 bg-[#14008B]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
              Free Estimates · BC & Alberta
            </span>
          </div>
          <h1
            className="font-display font-black text-white uppercase leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(52px, 7vw, 112px)" }}
          >
            Get in
            <br />
            <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
              Touch.
            </span>
          </h1>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-20">
          <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">

            {/* Form */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px w-10 bg-[#14008B]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
                  Project Enquiry
                </span>
              </div>
              <ContactForm />
            </div>

            {/* Contact sidebar */}
            <div className="space-y-5 lg:pt-[62px]">

              {/* Phones */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-6">
                  Call Us
                </p>
                <div className="space-y-5">
                  {OFFICES.map((o) => (
                    <div key={o.city}>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/40 mb-1.5">{o.note}</p>
                      <a href={o.href} className="text-white text-[15px] font-light tracking-wide hover:text-white transition-colors duration-200 block">
                        {o.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-4">
                  Email
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-white text-[13px] font-light tracking-wide hover:text-white transition-colors duration-200"
                >
                  {BUSINESS.email}
                </a>
              </div>

              {/* Locations */}
              <div className="border border-white/[0.06] p-7">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.42em] text-white mb-5">
                  Locations
                </p>
                <div className="space-y-1.5">
                  {CITIES.map((city) => (
                    <div key={city.id} className="flex items-center justify-between">
                      <span className="text-white text-[12px] font-light tracking-wide">{city.name}</span>
                      <span className="text-white/40 text-[10px] uppercase tracking-[0.24em]">{city.province}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          </FadeIn>
        </div>
      </section>

    </main>
  )
}
