import { getProducts } from "@/services/ProductService"
import ProductCard from "@/components/product/ProductCard"

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
