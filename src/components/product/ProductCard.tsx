"use client"

import { Product } from "@/types/product"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useState } from "react"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    if (loading) return

    setLoading(true)
    addToCart(product)

    setShowToast(true)

    setTimeout(() => {
      setLoading(false)
      setShowToast(false)
    }, 1000)
  }

  return (
    <div className="relative border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-black text-white">

      {/* IMAGE */}
      <Link href={`/product/${product.id}`}>
        <div className="h-48 w-full overflow-hidden rounded-md bg-gray-100 cursor-pointer">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      {/* TEXT */}
      <h2 className="mt-3 font-semibold text-sm line-clamp-2">
        {product.title}
      </h2>

      <p className="text-blue-500 font-bold mt-2">
        ${product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={handleAddToCart}
        disabled={loading}
        className={`mt-3 w-full py-2 rounded-lg transition flex items-center justify-center gap-2
        ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        🛒 {loading ? "Adding..." : "Add To Cart"}
      </button>

      {/* TOAST */}
      {showToast && (
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded shadow-lg animate-bounce">
          Added to cart!
        </div>
      )}

    </div>
  )
}