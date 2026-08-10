"use client"

import { useState } from "react"

type AddProductButtonProps = {
  productName: string
}

export default function AddProductButton({
  productName,
}: AddProductButtonProps) {
  const [added, setAdded] = useState(false)

  function handleClick() {
    setAdded(true)
  }

  return (
    <button
      onClick={handleClick}
      className="mt-3 border px-4 py-2"
    >
      {added ? `${productName} Added` : "Add to Design"}
    </button>
  )
}