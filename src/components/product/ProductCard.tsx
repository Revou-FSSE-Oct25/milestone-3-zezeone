import { Product } from "@/types/product"
import Link from "next/link"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">

        {/* IMAGE ONLY */}
        <div className="h-48 w-full overflow-hidden rounded-md bg-gray-100">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* TEXT */}
        <h2 className="mt-3 font-semibold text-sm line-clamp-2">
          {product.title}
        </h2>

        <p className="text-blue-600 font-bold mt-2">
          ${product.price}
        </p>

      </div>
    </Link>
  )
}
