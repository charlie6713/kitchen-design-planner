import CategorySidebar from "@/components/CategorySidebar"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] px-8 py-10">
      <div className="mx-auto flex max-w-[1450px] gap-14">
        <CategorySidebar />

        <section className="flex-1">
          <h1 className="text-5xl font-bold tracking-tight text-gray-950">
            Product Catalog
          </h1>

          <p className="mt-2 text-lg text-gray-600">
            Cabinets and appliances for your kitchen
          </p>

          <div className="mt-5 max-w-2xl">
            <input
              type="text"
              placeholder="Search products"
              className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 text-base outline-none"
            />
          </div>

          <div className="mt-6">
            <p className="text-gray-500">
              Product cards will go here.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}