import Link from "next/link"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
  id: number
  name: string
  priceCents: number
}

export default function ProductCard(props: ProductCardProps) {
  const id = props.id
  const name = props.name
  const priceCents = props.priceCents

  const productUrl = `/products/${id}`

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{name}</h2>

      <p>${priceCents / 100}</p>

      <Link href={productUrl} className="mr-4 underline">
        View Product
      </Link>

      <AddProductButton productName={name} />
    </div>
  )
}