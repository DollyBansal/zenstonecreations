import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
  size?: 'default' | 'large'
}

export default function ProductCard({ product, size = 'default' }: ProductCardProps) {
  const isLarge = size === 'large'

  return (
    <Link href={`/product/${product.id}`} className="group block product-card">
      {/* Image */}
      <div className={`img-zoom-wrap bg-stone-mist relative overflow-hidden ${isLarge ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-stone-charcoal/0 group-hover:bg-stone-charcoal/10 transition-colors duration-500" />

        {/* Enquire badge on hover */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
          <span className="bg-white/90 backdrop-blur-sm font-body text-[10px] tracking-[0.22em] uppercase text-stone-charcoal px-5 py-2.5">
            Enquire Now →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-5 pb-2">
        <p className="font-body text-[10px] tracking-[0.25em] uppercase text-stone-gold mb-1.5">
          {product.material}
        </p>
        <h3 className="font-serif text-lg text-stone-charcoal leading-snug group-hover:text-stone-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-body text-sm text-stone-muted mt-2 leading-relaxed line-clamp-2">
          {product.shortDesc}
        </p>
        <div className="flex gap-2 mt-3">
          {product.sizes.slice(0, 3).map((s) => (
            <span
              key={s}
              className="font-body text-[10px] tracking-wide text-stone-muted border border-stone-sand/40 px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
