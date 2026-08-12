"use client"

type ProductsErrorProps = {
  error: Error
  reset: () => void
}

export default function ProductsError(props: ProductsErrorProps) {
  function handleRetry() {
    props.reset()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Something Went Wrong</h1>

      <p>We could not load the products.</p>

      <button onClick={handleRetry} className="border px-4 py-2">
        Try Again
      </button>
    </div>
  )
}