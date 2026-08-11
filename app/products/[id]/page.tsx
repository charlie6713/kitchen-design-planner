const products = [
  { id: 1, name: "Base Cabinet", priceCents: 30000, category: "Cabinets" },
  { id: 2, name: "Wall Cabinet", priceCents: 22000, category: "Cabinets" },
  { id: 3, name: "Kitchen Oven", priceCents: 65000, category: "Appliances" },
]

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params
  const id = params.id
  const productId = Number(id)

  const product = products.find((currentProduct) => currentProduct.id === productId)

  if (product === undefined) {
    return <p>Product not found</p>
  }

  const name = product.name
  const category = product.category
  const price = product.priceCents / 100

  return (
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>

      <p>Category: {category}</p>

      <p>Price: ${price}</p>
    </div>
  )
}