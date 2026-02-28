"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, clearCart } = useCart()
  const router = useRouter()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleCheckout = () => {
    if (items.length === 0) return

    alert("Order successful 🎉")
    clearCart()
    router.push("/")
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        Checkout
      </h1>

      {items.length === 0 && (
        <p>Your cart is empty.</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between border-b py-4"
        >
          <div>
            <h2 className="font-semibold">
              {item.title}
            </h2>
            <p>
              ${item.price} × {item.quantity}
            </p>
          </div>

          <p className="font-bold">
            ${item.price * item.quantity}
          </p>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <div className="text-right mt-6 text-xl font-bold">
            Total: ${total}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}