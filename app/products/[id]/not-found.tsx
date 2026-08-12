import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Product Not Found</h1>

      <p>This product does not exist.</p>

      <Link href="/products" className="underline">
        Back to Products
      </Link>
    </div>
  )
}