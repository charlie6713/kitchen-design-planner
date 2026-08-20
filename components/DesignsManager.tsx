"use client"

import { useState } from "react"
import type { ChangeEvent } from "react"
import Link from "next/link"
import DesignCard from "@/components/DesignCard"
import type { KitchenDesign } from "@/data/designs"

type DesignsManagerProps = {
  designs: KitchenDesign[]
}

export default function DesignsManager(props: DesignsManagerProps) {
  const [currentDesigns, setCurrentDesigns] = useState(props.designs)
  const [searchText, setSearchText] = useState("")
  const [sortOption, setSortOption] = useState("recent")

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortOption(event.target.value)
  }

  function handleDelete(designId: number) {
    const remainingDesigns = currentDesigns.filter((design) => {
      return design.id !== designId
    })

    setCurrentDesigns(remainingDesigns)
  }

  const filteredDesigns = currentDesigns.filter((design) => {
    return design.name.toLowerCase().includes(searchText.toLowerCase())
  })

  const sortedDesigns = [...filteredDesigns]

  if (sortOption === "recent") {
    sortedDesigns.sort((designA, designB) => {
      return new Date(designB.updatedAt).getTime() - new Date(designA.updatedAt).getTime()
    })
  }

  if (sortOption === "name") {
    sortedDesigns.sort((designA, designB) => {
      return designA.name.localeCompare(designB.name)
    })
  }

  if (sortOption === "highest") {
    sortedDesigns.sort((designA, designB) => {
      return designB.totalPriceCents - designA.totalPriceCents
    })
  }

  if (sortOption === "lowest") {
    sortedDesigns.sort((designA, designB) => {
      return designA.totalPriceCents - designB.totalPriceCents
    })
  }

  const totalProducts = currentDesigns.reduce((total, design) => {
    return total + design.productCount
  }, 0)

  const totalCostCents = currentDesigns.reduce((total, design) => {
    return total + design.totalPriceCents
  }, 0)

  let averageCost = 0

  if (currentDesigns.length > 0) {
    averageCost = Math.round(totalCostCents / currentDesigns.length / 100)
  }

  return (
    <>
      <section className="flex items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-gray-950">
            My Designs
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            Reopen, continue, or manage your saved kitchen plans.
          </p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search designs"
            className="w-72 rounded-lg border border-gray-300 bg-white px-5 py-3 outline-none"
          />

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="rounded-lg border border-gray-300 bg-white px-5 py-3"
          >
            <option value="recent">Recently updated</option>
            <option value="name">Name</option>
            <option value="highest">Highest cost</option>
            <option value="lowest">Lowest cost</option>
          </select>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-3 rounded-xl border border-gray-200 bg-white py-5">
        <div className="text-center">
          {currentDesigns.length} saved designs
        </div>

        <div className="border-x border-gray-200 text-center">
          {totalProducts} products planned
        </div>

        <div className="text-center">
          Average cost{" "}
          <span className="font-semibold text-amber-700">
            ${averageCost.toLocaleString()}
          </span>
        </div>
      </section>

      <section className="mt-6 grid grid-cols-3 gap-6">
        {sortedDesigns.map((design) => {
          return (
            <DesignCard
              key={design.id}
              design={design}
              onDelete={handleDelete}
            />
          )
        })}

        <div className="flex min-h-[390px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <h2 className="text-xl font-semibold">
            Start a new kitchen design
          </h2>

          <p className="mt-2 text-gray-500">
            Set a wall width and add your first product.
          </p>

          <Link
            href="/designs/create"
            className="mt-8 rounded-lg bg-green-900 px-12 py-3 text-white"
          >
            Create design
          </Link>
        </div>
      </section>
    </>
  )
}