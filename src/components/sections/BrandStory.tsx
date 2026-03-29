import Image from 'next/image'
import SectionDivider from '@/components/ui/SectionDivider'

export default function BrandStory() {
  return (
    <section className="py-28 lg:py-36 bg-stone-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div className="reveal">
            <p className="eyebrow mb-7">Our Philosophy</p>

            <h2 className="font-serif text-4xl lg:text-5xl text-stone-charcoal leading-tight mb-8">
              Every Piece Holds
              <br />
              <em className="italic font-normal text-stone-gold">a Thousand Years.</em>
            </h2>

            <SectionDivider />

            <div className="space-y-5 font-body text-base text-stone-slate leading-relaxed">
              <p>
                Stone does not lie. It carries within it the record of geological time — pressures, temperatures, the slow crystallisation of mineral into form. At ZenStone Creations, we begin with this truth.
              </p>
              <p>
                Each sculpture emerges from single blocks of natural marble, sandstone, and granite, sourced from the same quarries that have supplied artisans for centuries. Our craftsmen work without templates — only hand tools, an intimate knowledge of the stone, and a deep respect for what each block wishes to become.
              </p>
              <p>
                The result is not decoration. It is presence.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-stone-sand/50">
              {[
                { num: '20+', label: 'Years of Craft' },
                { num: '400+', label: 'Pieces Created' },
                { num: '38', label: 'Countries Served' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-stone-gold mb-1">{s.num}</div>
                  <div className="font-body text-[11px] tracking-[0.2em] uppercase text-stone-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal reveal-delay-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=85"
                alt="Artisan carving stone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Accent block */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-gold/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-stone-gold/20 -z-10" />

            {/* Small quote card */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 shadow-card max-w-[200px]">
              <p className="font-serif text-sm italic text-stone-charcoal leading-relaxed">
                "Stone does not age. It deepens."
              </p>
              <p className="font-body text-[10px] tracking-wide text-stone-gold mt-3 uppercase">
                — Master Craftsman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
