import Link from "next/link"
import type { KitchenDesign } from "@/data/designs"

type DesignCardProps = {
  design: KitchenDesign
}

export default function DesignCard(props: DesignCardProps) {
  const design = props.design
  const totalPrice = design.totalPriceCents / 100

  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative flex h-52 items-center justify-center bg-[#f4f1ec]">
        {design.isCurrent && (
          <span className="absolute left-4 top-4 rounded-md bg-green-900 px-3 py-1 text-sm text-white">
            Current
          </span>
        )}

        <p className="text-sm text-gray-400">
          Kitchen preview
        </p>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-950">
          {design.name}
        </h2>

        <div className="mt-3 flex items-center gap-5 text-gray-600">
          <span>{design.wallWidthMm} mm wall</span>

          <span className="text-gray-300">|</span>

          <span>{design.productCount} products</span>

          <span className="text-gray-300">|</span>

          <span className="font-semibold text-amber-700">
            ${totalPrice.toLocaleString()}
          </span>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          {design.updatedText}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/designs/${design.id}`}
            className="flex-1 rounded-lg bg-green-900 px-5 py-3 text-center font-medium text-white"
          >
            Continue editing
          </Link>

          <button
            type="button"
            className="rounded-lg border border-gray-300 px-4 py-3"
          >
            ...
          </button>

          <button
            type="button"
            className="px-4 py-3 text-green-900"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}