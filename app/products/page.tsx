import ProductList from "@/components/ProductList"

const products = [
  { id: 1, name: "Base Cabinet", priceCents: 30000, category: "Cabinets" },
  { id: 2, name: "Wall Cabinet", priceCents: 22000, category: "Cabinets" },
  { id: 3, name: "Kitchen Oven", priceCents: 65000, category: "Appliances" },
]

export default function ProductsPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Products</h1>

      <ProductList products={products} />
    </div>
  )
}