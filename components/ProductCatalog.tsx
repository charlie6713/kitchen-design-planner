"use client"

import { useState } from "react"
import CategorySidebar from "@/components/CategorySidebar"
import ProductGrid from "@/components/ProductGrid"
import type { Product } from "@/data/products"

type ProductCatalogProps = {
  products: Product[]
}

export default function ProductCatalog(props: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("All products")
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(category: string) {
    setSelectedCategory(category)
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  const filteredProducts = props.products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All products" ||
      product.category === selectedCategory

    const productName = product.name.toLowerCase()
    const searchValue = searchText.toLowerCase()

    const matchesSearch = productName.includes(searchValue)

    return matchesCategory && matchesSearch
  })

  return (
    <div className="mx-auto flex max-w-[1450px] gap-14">
      <CategorySidebar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="flex-1">
        <h1 className="text-5xl font-bold tracking-tight text-gray-950">
          Product Catalog
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          Cabinets and appliances for your kitchen
        </p>

        <div className="mt-5 max-w-2xl">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search products"
            className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base outline-none"
          />
        </div>

        <div className="mt-6">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </div>
  )
}