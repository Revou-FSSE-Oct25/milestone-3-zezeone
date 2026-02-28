export interface ProductDB {
  id: number
  title: string
  price: number
}

let products: ProductDB[] = [
  { id: 1, title: "Sample Product 1", price: 100 },
  { id: 2, title: "Sample Product 2", price: 200 },
]

export function getProducts() {
  return products
}

export function addProduct(product: Omit<ProductDB, "id">) {
  const newProduct = {
    id: Date.now(),
    ...product,
  }

  products.push(newProduct)
  return newProduct
}

export function updateProduct(id: number, data: Partial<ProductDB>) {
  products = products.map((p) =>
    p.id === id ? { ...p, ...data } : p
  )

  return products.find((p) => p.id === id)
}

export function deleteProduct(id: number) {
  products = products.filter((p) => p.id !== id)
}