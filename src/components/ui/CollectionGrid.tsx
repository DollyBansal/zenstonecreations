import ProductCard from './ProductCard'
import { Product } from '@/lib/data'

interface CollectionGridProps {
  products: Product[]
  columns?: 2 | 3 | 4
}

export default function CollectionGrid({ products, columns = 4 }: CollectionGridProps) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <div className={`grid ${colClass} gap-8 lg:gap-10`}>
      {products.map((product, i) => (
        <div
          key={product.id}
          className="reveal"
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
