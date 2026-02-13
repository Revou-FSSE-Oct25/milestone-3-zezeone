import { getProductById } from "@/services/ProductService"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/product/AddToCartButton"


export async function generateStaticParams() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products")
  const products = await res.json()

  return products.slice(0, 20).map((product: any) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  // SSR
  const product = await getProductById(Number(params.id))

  if (!product) return notFound()

  return (
    <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-10">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="w-full rounded-xl"
      />

      <div>
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

        <p className="text-xl text-blue-600 font-semibold mb-4">
          ${product.price}
        </p>

        <p className="text-gray-600 mb-6">{product.description}</p>

        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
