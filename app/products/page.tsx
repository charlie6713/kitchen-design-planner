import ProductCatalog from "@/components/ProductCatalog"
import { products } from "@/data/products"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] px-8 py-10">
      <ProductCatalog products={products} />
    </div>
  )
}