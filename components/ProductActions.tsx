"use client"

import { useState } from "react"

type ProductActionsProps = {
  productId: number
}

export default function ProductActions(props: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1)
  }

  function handleAddToDesign() {
    console.log("Add product:", props.productId)
    console.log("Quantity:", quantity)
  }

  function handleReplaceProduct() {
    console.log("Replace with product:", props.productId)
    console.log("Quantity:", quantity)
  }

  return (
    <div className="mt-6">
      <div className="flex w-40 items-center rounded-lg border border-gray-200 bg-white">
        <button
          type="button"
          onClick={handleDecrease}
          className="flex-1 px-4 py-3 text-green-900"
        >
          −
        </button>

        <span className="border-x border-gray-200 px-5 py-3">
          {quantity}
        </span>

        <button
          type="button"
          onClick={handleIncrease}
          className="flex-1 px-4 py-3 text-green-900"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAddToDesign}
        className="mt-3 w-full rounded-lg bg-green-900 py-3 font-medium text-white"
      >
        Add to current design
      </button>

      <button
        type="button"
        onClick={handleReplaceProduct}
        className="mt-3 w-full rounded-lg border border-green-900 py-3 font-medium text-green-900"
      >
        Replace selected product
      </button>
    </div>
  )
}