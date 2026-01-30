"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart()

  // hitung total harga
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  // kalau kosong
  if (items.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">🛒 Cart is empty</h2>
        <p className="text-gray-500">Add some products first</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {/* LIST ITEMS */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border p-4 rounded-lg"
          >
            {/* image */}
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            {/* info */}
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>

            {/* subtotal */}
            <div className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            {/* remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>

        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-black"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}
