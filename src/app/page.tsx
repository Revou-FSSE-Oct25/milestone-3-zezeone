"use client"

import { useEffect, useState } from "react"
import { getProducts } from "@/services/ProductService"
import ProductCard from "@/components/product/ProductCard"
import { Product } from "@/types/product"

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
