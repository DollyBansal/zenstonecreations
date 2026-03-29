import Link from 'next/link'
import Image from 'next/image'

const previews = [
  {
    slug: 'buddha',
    title: 'Buddha',
    subtitle: 'Sacred Form',
    desc: 'Hand-carved statues that bring stillness and spiritual presence into any space.',
    image: 'https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=900&q=85',
    align: 'left',
  },
  {
    slug: 'abstract',
    title: 'Abstract',
    subtitle: 'Contemporary Form',
    desc: 'Stone sculptures that explore tension, balance, and the beauty of pure form.',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?w=900&q=85',
    align: 'center',
  },
  {
    slug: 'planters',
    title: 'Planters',
    subtitle: 'Living Stone',
    desc: 'Carved from single blocks of natural stone — a permanent home for living things.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=85',
    align: 'right',
  },
]

export default function CollectionPreview() {
  return (
    <section className="py-28 lg:py-36 px-6 bg-stone-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="eyebrow mb-5">Our Collections</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-stone-charcoal">
            Three Disciplines.{' '}
            <em className="italic font-normal text-stone-gold">One Philosophy.</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {previews.map((item, i) => (
            <Link
              key={item.slug}
              href={`/collections/${item.slug}`}
              className={`group block reveal reveal-delay-${i + 1}`}
            >
              {/* Image */}
              <div className="img-zoom-wrap relative overflow-hidden aspect-[3/4] bg-stone-mist mb-7">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-charcoal/20 group-hover:bg-stone-charcoal/30 transition-colors duration-500" />

                {/* Overlay label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-gold-light mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="font-body text-sm text-stone-muted leading-relaxed mb-4">{item.desc}</p>
              <span className="font-body text-[11px] tracking-[0.22em] uppercase text-stone-gold border-b border-stone-gold/30 pb-0.5 group-hover:border-stone-gold transition-colors duration-300">
                View Collection →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
