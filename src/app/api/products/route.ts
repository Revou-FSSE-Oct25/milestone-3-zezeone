import { NextResponse } from "next/server"
import {
  getProducts,
  addProduct,
} from "@/lib/db"

export async function GET() {
  return NextResponse.json(getProducts())
}

export async function POST(request: Request) {
  const body = await request.json()

  if (!body.title || !body.price) {
    return NextResponse.json(
      { error: "Title and price required" },
      { status: 400 }
    )
  }

  const newProduct = addProduct({
    title: body.title,
    price: Number(body.price),
  })

  return NextResponse.json(newProduct, {
    status: 201,
  })
}

import {
  updateProduct,
  deleteProduct,
} from "@/lib/db"

export async function PUT(request: Request) {
  const body = await request.json()

  if (!body.id) {
    return NextResponse.json(
      { error: "Product ID required" },
      { status: 400 }
    )
  }

  const updated = updateProduct(body.id, body)

  return NextResponse.json(updated)
}

export async function DELETE(request: Request) {
  const body = await request.json()

  if (!body.id) {
    return NextResponse.json(
      { error: "Product ID required" },
      { status: 400 }
    )
  }

  deleteProduct(body.id)

  return NextResponse.json({
    message: "Product deleted",
  })
}