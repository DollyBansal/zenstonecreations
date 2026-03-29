import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
  theme?: 'light' | 'dark' | 'gold'
}

export default function CTASection({
  title = 'Request Pricing & Wholesale Enquiries',
  subtitle = 'We work with interior designers, architects, landscape professionals, and private collectors worldwide. Bespoke sizes and finishes available on request.',
  buttonText = 'Begin Your Enquiry',
  buttonHref = '/contact',
  theme = 'dark',
}: CTASectionProps) {
  const bg = {
    light: 'bg-stone-warm',
    dark: 'bg-stone-charcoal',
    gold: 'bg-stone-gold',
  }[theme]

  const textColor = theme === 'light' ? 'text-stone-charcoal' : 'text-white'
  const subColor = theme === 'light' ? 'text-stone-slate' : 'text-white/60'

  return (
    <section className={`${bg} py-24 lg:py-32 px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="eyebrow mb-6 text-stone-gold-light">
          {theme === 'light' ? 'Wholesale & Bespoke' : 'For Collectors & Trade'}
        </p>
        <h2 className={`font-serif text-3xl lg:text-5xl ${textColor} leading-tight mb-6`}>
          {title}
        </h2>
        <p className={`font-body text-base ${subColor} leading-relaxed max-w-xl mx-auto mb-12`}>
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className={theme === 'dark' ? 'btn-outline border-white/30 text-white hover:bg-white hover:text-stone-charcoal' : 'btn-gold'}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
