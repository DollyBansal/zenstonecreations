import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products, collections } from '@/lib/data'
import ProductCard from '@/components/ui/ProductCard'
import SectionDivider from '@/components/ui/SectionDivider'
import CTASection from '@/components/ui/CTASection'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.id === params.id)
  if (!product) return {}
  return {
    title: `${product.name} — ZenStone Creations`,
    description: product.shortDesc,
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  const collection = collections.find((c) => c.slug === product.collection)
  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <RevealOnScroll />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="pt-28 pb-4 px-6 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-stone-muted">
          <Link href="/" className="hover:text-stone-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href={`/collections/${product.collection}`} className="hover:text-stone-gold transition-colors">
            {collection?.title}
          </Link>
          <span>/</span>
          <span className="text-stone-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* ── Product Main ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Image */}
          <div className="reveal relative">
            <div className="img-zoom-wrap aspect-[4/5] bg-stone-mist relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-stone-gold/20 -z-10" />
          </div>

          {/* Right: Details */}
          <div className="reveal reveal-delay-2 lg:pt-8 lg:sticky lg:top-28">
            {/* Collection label */}
            <Link
              href={`/collections/${product.collection}`}
              className="eyebrow hover:text-stone-gold-dark transition-colors mb-4 inline-block"
            >
              ← {collection?.title}
            </Link>

            {/* Name */}
            <h1 className="font-serif text-4xl lg:text-5xl text-stone-charcoal leading-tight mb-5">
              {product.name}
            </h1>

            {/* Material tag */}
            <div className="flex items-center gap-3 mb-7">
              <span className="h-[1px] w-8 bg-stone-gold/50" />
              <span className="font-body text-[11px] tracking-[0.25em] uppercase text-stone-gold">
                {product.material}
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-base text-stone-slate leading-relaxed mb-10">
              {product.description}
            </p>

            <SectionDivider className="my-8" />

            {/* Sizes */}
            <div className="mb-8">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-muted mb-4">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className="font-body text-xs tracking-wide text-stone-charcoal border border-stone-sand hover:border-stone-gold hover:text-stone-gold px-4 py-2 transition-colors duration-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact" className="btn-gold flex-1 justify-center">
                Request Pricing
              </Link>
              <Link href="/contact" className="btn-outline flex-1 justify-center">
                Enquire Now
              </Link>
            </div>

            {/* Assurances */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-stone-sand/40">
              {[
                { icon: '◇', label: 'Hand-Carved', sub: 'No two pieces identical' },
                { icon: '◈', label: 'Natural Stone', sub: 'Single-block origin' },
                { icon: '◉', label: 'Worldwide Shipping', sub: 'Art freight specialists' },
                { icon: '○', label: 'Bespoke Sizes', sub: 'Custom on request' },
              ].map((a) => (
                <div key={a.label} className="flex gap-3 items-start">
                  <span className="text-stone-gold text-sm mt-0.5">{a.icon}</span>
                  <div>
                    <p className="font-body text-xs font-medium text-stone-charcoal tracking-wide">{a.label}</p>
                    <p className="font-body text-[11px] text-stone-muted mt-0.5">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs ─────────────────────────────────────── */}
      <section className="bg-stone-warm py-20 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-4">Material</h3>
              <p className="font-sans text-xl text-stone-charcoal font-light">{product.material}</p>
            </div>
            <div className="reveal reveal-delay-2">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-4">Sizes</h3>
              <p className="font-sans text-xl text-stone-charcoal font-light">
                {product.sizes.join(' • ')}
              </p>
            </div>
            <div className="reveal reveal-delay-3">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-4">Ideal For</h3>
              <ul className="space-y-1.5">
                {product.useCases.map((u) => (
                  <li key={u} className="font-sans text-lg text-stone-charcoal font-light flex gap-2">
                    <span className="text-stone-gold">•</span> {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lifestyle Image ───────────────────────────── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden reveal">
        <Image
          src={product.lifestyleImage}
          alt={`${product.name} in situ`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-charcoal/30" />
        <div className="absolute bottom-10 left-6 lg:left-12">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/60">In Situ</p>
          <p className="font-serif text-2xl text-white mt-1">{product.name}</p>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────── */}
      {related.length > 0 && (
        <section className="py-28 px-6 bg-stone-cream">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14 reveal">
              <p className="eyebrow mb-4">You May Also Consider</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-stone-charcoal">Related Pieces</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {related.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Request Pricing or Commission a Bespoke Piece"
        subtitle="Every piece can be made to order in custom dimensions and finishes. Our team is available for consultation on residential, commercial, and landscape projects."
        buttonText="Contact Us"
        buttonHref="/contact"
        theme="dark"
      />
    </>
  )
}
