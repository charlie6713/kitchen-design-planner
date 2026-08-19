import Link from "next/link"
import DesignCard from "@/components/DesignCard"
import { designs } from "@/data/designs"

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7] px-10 py-10">
      <div className="mx-auto max-w-[1450px]">
        <section className="flex items-start justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-950">
              My Designs
            </h1>

            <p className="mt-2 text-lg text-gray-600">
              Reopen, continue, or manage your saved kitchen plans.
            </p>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search designs"
              className="w-72 rounded-lg border border-gray-300 bg-white px-5 py-3 outline-none"
            />

            <select className="rounded-lg border border-gray-300 bg-white px-5 py-3">
              <option>Recently updated</option>
              <option>Name</option>
              <option>Highest cost</option>
              <option>Lowest cost</option>
            </select>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-3 rounded-xl border border-gray-200 bg-white py-5">
          <div className="text-center">
            <p className="text-lg">
              {designs.length} saved designs
            </p>
          </div>

          <div className="border-x border-gray-200 text-center">
            <p className="text-lg">
              {designs.reduce((total, design) => {
                return total + design.productCount
              }, 0)} products planned
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg">
              Average cost{" "}
              <span className="font-semibold text-amber-700">
                $
                {Math.round(
                  designs.reduce((total, design) => {
                    return total + design.totalPriceCents
                  }, 0) /
                    designs.length /
                    100
                ).toLocaleString()}
              </span>
            </p>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-3 gap-6">
          {designs.map((design) => {
            return (
              <DesignCard
                key={design.id}
                design={design}
              />
            )
          })}

          <div className="flex min-h-[390px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
            <h2 className="text-xl font-semibold text-gray-950">
              Start a new kitchen design
            </h2>

            <p className="mt-2 text-gray-500">
              Set a wall width and add your first product.
            </p>

            <Link
              href="/designs/create"
              className="mt-8 rounded-lg bg-green-900 px-12 py-3 font-medium text-white"
            >
              Create design
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}