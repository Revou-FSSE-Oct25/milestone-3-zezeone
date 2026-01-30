"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Product } from "@/types/product"

type CartItem = Product & {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // ✅ adding product
  const addToCart = (product: Product) => {
    setItems((prev) => {
      const exist = prev.find((item) => item.id === product.id)

      if (exist) {
        // kalau sudah ada → tambah quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // if nothing → add new
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // remove product
  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  // empty cart
  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used inside CartProvider")
  }

  return context
}
