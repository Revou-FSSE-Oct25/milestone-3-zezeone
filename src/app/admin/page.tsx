"use client"

import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  price: number
}

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  const fetchProducts = async () => {
    const res = await fetch("/api/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAdd = async () => {
    if (!title || !price) {
      alert("Title & price required")
      return
    }

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price: Number(price),
      }),
    })

    setTitle("")
    setPrice("")
    fetchProducts()
  }

  const handleDelete = async (id: number) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })

    fetchProducts()
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">
        Admin Panel
      </h1>

      {/* Add Form */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-3 py-2 rounded w-32"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Product List */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between border-b py-3"
        >
          <div>
            {product.title} - ${product.price}
          </div>

          <button
            onClick={() => handleDelete(product.id)}
            className="bg-red-600 text-white px-3 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}