"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getProductById } from "@/services/ProductService"
import { useCart } from "@/context/CartContext"

export default function ProductDetailPage() {
  const { addToCart } = useCart()
  const params = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await getProductById(Number(params.id))
      setProduct(data)
    }

    fetchData()
  }, [params.id])

  if (!product) return <div>Loading...</div>

  return (
    <button onClick={() => addToCart(product)}>
      Add To Cart
    </button>
  )
}
