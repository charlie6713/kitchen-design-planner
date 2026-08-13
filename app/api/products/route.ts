const products = [
  { id: 1, name: "Base Cabinet", priceCents: 30000 },
  { id: 2, name: "Wall Cabinet", priceCents: 22000 },
]

export async function GET() {
  return Response.json(products)
}

export async function POST(request: Request) {
  const body = await request.json()

  console.log("New Product:", body)

  return Response.json({
    message: "Product created",
    product: body,
  })
}