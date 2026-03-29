import { notFound } from 'next/navigation'
import Image from 'next/image'
import { collections, products } from '@/lib/data'
import CollectionGrid from '@/components/ui/CollectionGrid'
import SectionDivider from '@/components/ui/SectionDivider'
import CTASection from '@/components/ui/CTASection'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: Props) {
  const collection = collections.find((c) => c.slug === params.slug)
  if (!collection) return {}
  return {
    title: `${collection.title} — ZenStone Creations`,
    description: collection.description,
  }
}

const collectionMeta: Record<string, {
  material: string[]
  sizes: string[]
  idealFor: string[]
}> = {
  buddha: {
    material: ['Natural Stone Marble', 'Sandstone', 'Granite'],
    sizes: ['24"', '36"', '48"', 'Custom sizes available'],
    idealFor: ['Home entrances', 'Meditation spaces', 'Luxury interiors', 'Garden sanctuaries'],
  },
  abstract: {
    material: ['Carrara White Marble', 'Nero Marquina', 'Green Onyx', 'Black Granite'],
    sizes: ['24"', '36"', '48"', 'Custom sizes available'],
    idealFor: ['Contemporary interiors', 'Art collections', 'Corporate lobbies', 'Gallery installations'],
  },
  planters: {
    material: ['Roman Travertine', 'Grey Limestone', 'Black Granite', 'Makrana White Marble'],
    sizes: ['24"', '36"', '48"', 'Custom sizes available'],
    idealFor: ['Terraces & gardens', 'Interior foyers', 'Landscape architecture', 'Private estates'],
  },
}

export default function CollectionPage({ params }: Props) {
  const collection = collections.find((c) => c.slug === params.slug)
  if (!collection) notFound()

  const collectionProducts = products.filter((p) => p.collection === params.slug)
  const meta = collectionMeta[params.slug]

  return (
    <>
      <RevealOnScroll />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={collection.heroImage}
            alt={collection.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-charcoal/80 via-stone-charcoal/30 to-stone-charcoal/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <p className="eyebrow text-stone-gold-light mb-4">ZenStone Creations</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            {collection.title}
          </h1>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-4">
            {collection.tagline}
          </p>
          <p className="font-sans text-xl lg:text-2xl text-stone-slate leading-relaxed font-light">
            {collection.description}
          </p>
        </div>

        <SectionDivider className="my-16" />
      </section>

      {/* ── Product Grid ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <CollectionGrid products={collectionProducts} columns={4} />
      </section>

      {/* ── Collection Specs ──────────────────────────── */}
      <section className="bg-stone-warm py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionDivider className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Material */}
            <div className="reveal">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-5">
                Material
              </h3>
              <ul className="space-y-2">
                {meta.material.map((m) => (
                  <li key={m} className="font-sans text-lg text-stone-charcoal font-light">
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizes */}
            <div className="reveal reveal-delay-2">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-5">
                Available Sizes
              </h3>
              <ul className="space-y-2">
                {meta.sizes.map((s) => (
                  <li key={s} className="font-sans text-lg text-stone-charcoal font-light">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="reveal reveal-delay-3">
              <h3 className="font-body text-[10px] tracking-[0.35em] uppercase text-stone-gold mb-5">
                Ideal For
              </h3>
              <ul className="space-y-2">
                {meta.idealFor.map((u) => (
                  <li key={u} className="font-sans text-lg text-stone-charcoal font-light flex gap-3 items-start">
                    <span className="text-stone-gold mt-1">•</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <CTASection
        title="Enquire About This Collection"
        subtitle="Custom sizing, material variations, and bespoke commissions are available across all collections. We ship worldwide with specialist art freight handlers."
        buttonText="Request Pricing"
        buttonHref="/contact"
        theme="dark"
      />
    </>
  )
}
