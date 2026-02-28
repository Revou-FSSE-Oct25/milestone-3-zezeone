"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { items } = useCart()
  const { data: session } = useSession()

  const totalQty = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-200"
        >
          LapakShop
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          {/* HOME */}
          <Link
            href="/"
            className="relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="relative group"
          >
            🛒 Cart
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                {totalQty}
              </span>
            )}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* AUTH */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-4 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          )}

        </div>
      </div>
    </nav>
  )
}