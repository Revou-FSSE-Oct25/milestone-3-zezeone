import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://api.escuelajs.co/api/v1/products")
    
    if (!res.ok) {
        throw new Error("Failed to fetch products")
    }

    return await res.json()
}

export async function getProductById(id: number) {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  )

  if (!res.ok) {
    return null
  }

  return res.json()
}
