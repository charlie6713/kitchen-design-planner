import { notFound } from "next/navigation"

type Product = {
  id: number
  name: string
  priceCents: number
  category: string
}

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

const products: Product[] = [
  { id: 1, name: "Base Cabinet", priceCents: 30000, category: "Cabinets" },
  { id: 2, name: "Wall Cabinet", priceCents: 22000, category: "Cabinets" },
  { id: 3, name: "Kitchen Oven", priceCents: 65000, category: "Appliances" },
]

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params

  const id = params.id

  const productId = Number(id)

  const product = products.find((currentProduct) => {
    return currentProduct.id === productId
  })

  if (product === undefined) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <p>Category: {product.category}</p>

      <p>Price: ${product.priceCents / 100}</p>
    </div>
  )
}