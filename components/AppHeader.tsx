import Link from "next/link"

export default function AppHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center px-8">
        <Link href="/products" className="text-2xl font-bold text-gray-900">
          Kitchen Design Planner
        </Link>

        <nav className="ml-16 flex h-full items-center gap-10">
          <Link
            href="/products"
            className="flex h-full items-center border-b-2 border-green-900 font-semibold text-green-900"
          >
            Catalog
          </Link>

          <Link href="/designs" className="text-gray-900">
            My Designs
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/designs"
            className="rounded-md border border-amber-700 px-7 py-2 text-amber-800"
          >
            Open Design
          </Link>

          <Link
            href="/designs/create"
            className="rounded-md bg-green-900 px-7 py-2 text-white"
          >
            Start a design
          </Link>
        </div>
      </div>
    </header>
  )
}