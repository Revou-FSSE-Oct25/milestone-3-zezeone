"use client"

import { Product } from "@/types/product"
import { useCart } from "@/context/CartContext"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Add To Cart
    </button>
  )
}
