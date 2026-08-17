import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/data/products"

type ProductCardProps = {
  product: Product
}

export default function ProductCard(props: ProductCardProps) {
  const product = props.product
  const price = product.priceCents / 100

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="relative h-56 overflow-hidden rounded-lg bg-[#f3efe9]">
        <Image
          src={product.imagePath}
          alt={product.name}
          fill
          sizes="33vw"
          className="object-contain p-3"
        />
      </div>

      <div className="px-1 pb-1 pt-4">
        <h2 className="text-lg font-semibold text-gray-950">
          {product.name}
        </h2>

        <p className="mt-1 text-gray-500">
          {product.widthMm} W × {product.heightMm} H × {product.depthMm} D mm
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-semibold text-amber-700">
            ${price.toLocaleString()}
          </p>

          <Link
            href={`/products/${product.id}`}
            className="rounded-md border border-green-800 px-6 py-2 text-green-900"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}