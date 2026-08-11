"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"

type Product = {
  id: number
  name: string
  priceCents: number
  category: string
}

type ProductListProps = {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  const [category, setCategory] = useState("All")

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category)

  return (
    <div>
      <div className="mb-6 flex gap-3">
        <button onClick={() => setCategory("All")}>All</button>
        <button onClick={() => setCategory("Cabinets")}>Cabinets</button>
        <button onClick={() => setCategory("Appliances")}>Appliances</button>
      </div>

      <div className="space-y-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} id={product.id} name={product.name} priceCents={product.priceCents} />
        ))}
      </div>
    </div>
  )
}