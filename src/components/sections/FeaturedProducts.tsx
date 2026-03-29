import Link from 'next/link'
import { products } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="py-28 lg:py-36 px-6 bg-stone-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <p className="eyebrow mb-5">Selected Works</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-stone-charcoal">
              Featured Pieces
            </h2>
          </div>
          <Link
            href="/collections/buddha"
            className="reveal reveal-delay-2 font-body text-[11px] tracking-[0.22em] uppercase text-stone-gold border-b border-stone-gold/30 hover:border-stone-gold pb-0.5 transition-colors whitespace-nowrap"
          >
            View All Collections →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Materials strip */}
        <div className="mt-20 pt-14 border-t border-stone-sand/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Marble', desc: 'Makrana · Carrara · Nero Marquina' },
              { label: 'Sandstone', desc: 'Aged · Weathered · Raw Finish' },
              { label: 'Granite', desc: 'Black · Grey · Polished or Raw' },
              { label: 'Limestone', desc: 'Pale Grey · Travertine · Roman' },
            ].map((m, i) => (
              <div key={m.label} className={`reveal reveal-delay-${i + 1}`}>
                <h4 className="font-serif text-xl text-stone-charcoal mb-1">{m.label}</h4>
                <p className="font-body text-xs text-stone-muted tracking-wide leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
