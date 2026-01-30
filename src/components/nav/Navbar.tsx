"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"

export default function Navbar() {
  const { items } = useCart()

  const totalQty = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          LapakShop
        </Link>

        {/* MENU */}
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/cart" className="relative hover:text-blue-600">
            🛒 Cart

            {totalQty > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {totalQty}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
