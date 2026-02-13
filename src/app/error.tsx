"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-20 text-center">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Try Again
      </button>
    </div>
  )
}
