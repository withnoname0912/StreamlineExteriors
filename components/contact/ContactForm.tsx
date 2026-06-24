"use client"

import { useState } from "react"

type FormState = {
  name: string
  company: string
  phone: string
  email: string
  location: string
  service: string
  message: string
}

const SERVICES = [
  "Residential Exterior",
  "Commercial / Multifamily",
  "Gutters & Leaf-guards",
  "Full Renovation",
  "Windows & Doors",
  "Other / Not Sure",
]

const LOCATIONS = [
  "Kelowna, BC",
  "Vernon, BC",
  "Salmon Arm, BC",
  "Revelstoke, BC",
  "Calgary, AB",
  "Other",
]

const INPUT_BASE =
  "w-full bg-transparent border border-white/[0.1] px-4 py-3.5 text-white text-[13px] font-light tracking-wide placeholder:text-white focus:outline-none focus:border-[#14008B] transition-colors duration-200"

const LABEL_BASE =
  "block text-[9.5px] font-semibold uppercase tracking-[0.36em] text-white mb-2.5"

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    try {
      const res = await fetch("https://formspree.io/f/mlgygrre", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data?.error || data?.errors?.[0]?.message || `Error ${res.status}`)
      } else {
        setSubmitted(true)
      }
    } catch {
      setError("Network error. Please call us or try again.")
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="border border-white/[0.07] p-12 flex flex-col items-start gap-6">
        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-[#14008B]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.42em] text-white">
            Message Received
          </span>
        </div>
        <h3
          className="font-display font-black text-white uppercase leading-[0.9] tracking-[-0.02em]"
          style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
        >
          We'll Be
          <br />
          <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.28)", color: "rgba(0,0,0,0)" }}>
            In Touch.
          </span>
        </h3>
        <p className="text-white text-[13.5px] font-light leading-relaxed tracking-wide max-w-[400px]">
          Thank you for reaching out. One of our team members will contact you within one business day to discuss your project.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", company: "", phone: "", email: "", location: "", service: "", message: "" }) }}
          className="text-white text-[11px] uppercase tracking-[0.28em] hover:text-white transition-colors duration-200 mt-2"
        >
          Send another message →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={LABEL_BASE}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={INPUT_BASE}
          />
        </div>
        <div>
          <label htmlFor="company" className={LABEL_BASE}>Company / Property</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Optional"
            className={INPUT_BASE}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={LABEL_BASE}>Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(250) 000-0000"
            className={INPUT_BASE}
          />
        </div>
        <div>
          <label htmlFor="email" className={LABEL_BASE}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={INPUT_BASE}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className={LABEL_BASE}>Service Required</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={INPUT_BASE + " cursor-pointer"}
          >
            <option value="" className="bg-black">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-black">{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className={LABEL_BASE}>Your Location</label>
          <select
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            className={INPUT_BASE + " cursor-pointer"}
          >
            <option value="" className="bg-black">Select your city</option>
            {LOCATIONS.map((l) => (
              <option key={l} value={l} className="bg-black">{l}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={LABEL_BASE}>Project Description *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project — scope, materials, timeline, any specific requirements..."
          className={INPUT_BASE + " resize-none"}
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="text-white text-[11px] font-light tracking-wide">
          {error ? <span className="text-red-400">{error}</span> : "We respond within one business day."}
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group relative inline-flex items-center justify-between gap-5 overflow-hidden border border-[#14008B] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          <span className="absolute inset-0 translate-y-full bg-[#14008B] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          <span className="relative">{submitting ? "Sending..." : "Send Message"}</span>
          <span className="relative w-8 h-8 border border-white/20 group-hover:border-white/40 flex items-center justify-center shrink-0 transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5H11M11 6.5L6.5 2M11 6.5L6.5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  )
}
