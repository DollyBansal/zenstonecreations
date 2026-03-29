'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionDivider from '@/components/ui/SectionDivider'

const inquiryTypes = [
  'Product Pricing',
  'Wholesale Enquiry',
  'Bespoke Commission',
  'Interior Design Collaboration',
  'General Information',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    type: inquiryTypes[0], message: '', collection: 'Any',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85"
            alt="Contact ZenStone"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-charcoal/80 via-stone-charcoal/40 to-stone-charcoal/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-14 w-full">
          <p className="eyebrow text-stone-gold-light mb-3">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
            Begin Your Enquiry
          </h1>
        </div>
      </section>

      {/* ── Main ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-gold mb-5">
              How We Work
            </p>
            <h2 className="font-serif text-3xl text-stone-charcoal leading-tight mb-6">
              Personal Service.<br />
              <em className="italic font-normal text-stone-gold">Every Enquiry.</em>
            </h2>
            <p className="font-body text-sm text-stone-slate leading-relaxed mb-8">
              We do not operate on automated pricing. Every enquiry is handled personally by our team, who will guide you through material selection, sizing, lead times, and logistics for your specific project.
            </p>

            <SectionDivider className="my-10" />

            <div className="space-y-8">
              {[
                {
                  title: 'Response Time',
                  body: 'We aim to respond to all enquiries within 48 hours.',
                },
                {
                  title: 'Minimum Order',
                  body: 'No minimum for residential clients. Volume pricing available for trade and wholesale.',
                },
                {
                  title: 'Lead Times',
                  body: 'Standard pieces: 6–10 weeks. Bespoke commissions: 12–20 weeks depending on complexity.',
                },
                {
                  title: 'Worldwide Shipping',
                  body: 'We ship to 38+ countries via specialist art and stone freight partners.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="font-body text-[11px] tracking-[0.2em] uppercase text-stone-gold mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-stone-slate leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-stone-sand/40">
              <p className="font-body text-[11px] tracking-wide text-stone-muted mb-2 uppercase">Direct Contact</p>
              <a href="mailto:hello@zenstone.com" className="font-serif text-lg text-stone-charcoal hover:text-stone-gold transition-colors">
                hello@zenstone.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-14 h-14 border border-stone-gold/40 rounded-full flex items-center justify-center mb-8">
                  <span className="text-stone-gold text-xl">✦</span>
                </div>
                <h3 className="font-serif text-3xl text-stone-charcoal mb-4">
                  Thank You, {form.name.split(' ')[0]}.
                </h3>
                <p className="font-body text-stone-slate max-w-sm leading-relaxed">
                  Your enquiry has been received. A member of our team will be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                  <FormField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>

                {/* Company + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField label="Company / Studio" name="company" value={form.company} onChange={handleChange} />
                  <FormField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block font-body text-[10px] tracking-[0.25em] uppercase text-stone-muted mb-2">
                    Enquiry Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border border-stone-sand/60 bg-transparent font-body text-sm text-stone-charcoal px-4 py-3 focus:outline-none focus:border-stone-gold transition-colors appearance-none"
                  >
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Collection */}
                <div>
                  <label className="block font-body text-[10px] tracking-[0.25em] uppercase text-stone-muted mb-2">
                    Collection of Interest
                  </label>
                  <select
                    name="collection"
                    value={form.collection}
                    onChange={handleChange}
                    className="w-full border border-stone-sand/60 bg-transparent font-body text-sm text-stone-charcoal px-4 py-3 focus:outline-none focus:border-stone-gold transition-colors appearance-none"
                  >
                    {['Any', 'Buddha Collection', 'Abstract Sculptures', 'Stone Planters'].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-body text-[10px] tracking-[0.25em] uppercase text-stone-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Please describe your project, preferred sizes, quantities, or any specific requirements..."
                    className="w-full border border-stone-sand/60 bg-transparent font-body text-sm text-stone-charcoal px-4 py-3 focus:outline-none focus:border-stone-gold transition-colors resize-none placeholder:text-stone-muted/60"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center py-5 text-[11px]">
                  Submit Enquiry
                </button>

                <p className="font-body text-[11px] text-stone-muted text-center leading-relaxed">
                  Your information is kept strictly confidential and will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ── Reusable input field ─────────────────────────────────────────────────────
interface FieldProps {
  label: string
  name: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

function FormField({ label, name, type = 'text', value, onChange, required }: FieldProps) {
  return (
    <div>
      <label className="block font-body text-[10px] tracking-[0.25em] uppercase text-stone-muted mb-2">
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-stone-sand/60 bg-transparent font-body text-sm text-stone-charcoal px-4 py-3 focus:outline-none focus:border-stone-gold transition-colors"
      />
    </div>
  )
}
