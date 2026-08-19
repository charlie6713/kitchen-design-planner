import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import ProductActions from "@/components/ProductActions"
import { products } from "@/data/products"

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params
  const productId = Number(params.id)

  const product = products.find((currentProduct) => {
    return currentProduct.id === productId
  })

  if (product === undefined) {
    notFound()
  }

  const price = product.priceCents / 100

  return (
    <main className="min-h-screen bg-[#faf9f7] px-10 py-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-6 flex items-center gap-3 text-sm">
          <Link href="/products" className="text-green-900">
            Catalog
          </Link>

          <span>/</span>

          <span className="text-green-900">
            {product.category}
          </span>

          <span>/</span>

          <span className="text-gray-600">
            {product.name}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <section>
            <div className="relative h-[580px] overflow-hidden rounded-xl border border-gray-200 bg-white">
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                sizes="50vw"
                className="object-contain p-10"
              />
            </div>
          </section>

          <section className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-950">
              {product.name}
            </h1>

            <p className="mt-3 text-3xl font-semibold text-amber-700">
              ${price.toLocaleString()}
            </p>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white px-5 py-3">
              <div className="flex border-b border-gray-200 py-3">
                <span className="w-1/2 font-medium">Width</span>
                <span>{product.widthMm} mm</span>
              </div>

              <div className="flex border-b border-gray-200 py-3">
                <span className="w-1/2 font-medium">Height</span>
                <span>{product.heightMm} mm</span>
              </div>

              <div className="flex border-b border-gray-200 py-3">
                <span className="w-1/2 font-medium">Depth</span>
                <span>{product.depthMm} mm</span>
              </div>

              <div className="flex border-b border-gray-200 py-3">
                <span className="w-1/2 font-medium">Finish</span>
                <span>{product.finish}</span>
              </div>

              <div className="flex py-3">
                <span className="w-1/2 font-medium">SKU</span>
                <span>{product.sku}</span>
              </div>
            </div>

            <ProductActions productId={product.id} />
          </section>
        </div>
      </div>
    </main>
  )
}