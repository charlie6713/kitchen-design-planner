import AddProductButton from "./AddProductButton"

type ProductCardProps = {
  name: string
  priceCents: number
}

export default function ProductCard({
  name,
  priceCents,
}: ProductCardProps) {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">{name}</h2>

      <p>${priceCents / 100}</p>

      <AddProductButton productName={name} />
    </div>
  )
}