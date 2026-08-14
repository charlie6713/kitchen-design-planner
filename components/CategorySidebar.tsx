export default function CategorySidebar() {
  return (
    <aside className="w-72 shrink-0">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Category
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
        <button className="w-full rounded-lg border-l-4 border-green-900 bg-gray-100 px-5 py-4 text-left font-medium text-green-950">
          All products
        </button>

        <button className="w-full px-6 py-4 text-left text-gray-900">
          Base cabinets
        </button>

        <button className="w-full px-6 py-4 text-left text-gray-900">
          Wall cabinets
        </button>

        <button className="w-full px-6 py-4 text-left text-gray-900">
          Tall cabinets
        </button>

        <button className="w-full px-6 py-4 text-left text-gray-900">
          Appliances
        </button>
      </div>
    </aside>
  )
}