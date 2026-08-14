import ProductCard from "@/components/ProductCard"
import type { Product } from "@/data/products"

type ProductGridProps = {
  products: Product[]
}

export default function ProductGrid(props: ProductGridProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      })}
    </div>
  )
}