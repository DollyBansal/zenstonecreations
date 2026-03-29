import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=90"
          alt="ZenStone Creations — Luxury Stone Sculptures"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-charcoal/50 via-stone-charcoal/30 to-stone-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="h-[1px] w-12 bg-stone-gold/60" />
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold-light">
            Hand-Carved Natural Stone
          </p>
          <span className="h-[1px] w-12 bg-stone-gold/60" />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Timeless Stone.
          <br />
          <em className="font-serif italic font-normal text-stone-gold-light">Sculpted Elegance.</em>
        </h1>

        {/* Subline */}
        <p
          className="font-body text-base md:text-lg text-white/70 max-w-md mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Buddha statues, abstract sculptures, and stone planters — crafted for those who seek permanence in beauty.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <Link href="/collections/buddha" className="btn-gold">
            Explore Collections
          </Link>
          <Link
            href="/contact"
            className="font-body text-[11px] tracking-[0.22em] uppercase text-white/70 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors duration-300"
          >
            Request Pricing
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-shimmer" />
      </div>
    </section>
  )
}
