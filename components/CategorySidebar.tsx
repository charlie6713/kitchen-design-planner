type CategorySidebarProps = {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategorySidebar(props: CategorySidebarProps) {
  function handleAllProductsClick() {
    props.onCategoryChange("All products")
  }

  function handleBaseCabinetsClick() {
    props.onCategoryChange("Base cabinets")
  }

  function handleWallCabinetsClick() {
    props.onCategoryChange("Wall cabinets")
  }

  function handleTallCabinetsClick() {
    props.onCategoryChange("Tall cabinets")
  }

  function handleAppliancesClick() {
    props.onCategoryChange("Appliances")
  }

  return (
    <aside className="w-72 shrink-0">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Category
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-2">
        <button
          onClick={handleAllProductsClick}
          className={`w-full rounded-lg px-5 py-4 text-left ${
            props.selectedCategory === "All products"
              ? "border-l-4 border-green-900 bg-gray-100 font-medium text-green-950"
              : "text-gray-900"
          }`}
        >
          All products
        </button>

        <button
          onClick={handleBaseCabinetsClick}
          className={`w-full rounded-lg px-5 py-4 text-left ${
            props.selectedCategory === "Base cabinets"
              ? "border-l-4 border-green-900 bg-gray-100 font-medium text-green-950"
              : "text-gray-900"
          }`}
        >
          Base cabinets
        </button>

        <button
          onClick={handleWallCabinetsClick}
          className={`w-full rounded-lg px-5 py-4 text-left ${
            props.selectedCategory === "Wall cabinets"
              ? "border-l-4 border-green-900 bg-gray-100 font-medium text-green-950"
              : "text-gray-900"
          }`}
        >
          Wall cabinets
        </button>

        <button
          onClick={handleTallCabinetsClick}
          className={`w-full rounded-lg px-5 py-4 text-left ${
            props.selectedCategory === "Tall cabinets"
              ? "border-l-4 border-green-900 bg-gray-100 font-medium text-green-950"
              : "text-gray-900"
          }`}
        >
          Tall cabinets
        </button>

        <button
          onClick={handleAppliancesClick}
          className={`w-full rounded-lg px-5 py-4 text-left ${
            props.selectedCategory === "Appliances"
              ? "border-l-4 border-green-900 bg-gray-100 font-medium text-green-950"
              : "text-gray-900"
          }`}
        >
          Appliances
        </button>
      </div>
    </aside>
  )
}