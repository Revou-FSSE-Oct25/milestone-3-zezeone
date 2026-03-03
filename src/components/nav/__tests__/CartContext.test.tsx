import { renderHook, act } from "@testing-library/react"
import { CartProvider, useCart } from "@/context/CartContext"

beforeEach(() => {
  localStorage.clear()
})

describe("CartContext", () => {
  const wrapper = ({ children }: any) => (
    <CartProvider>{children}</CartProvider>
  )

  it("adds product to cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: "Test",
      price: 100,
      images: [],
    } as any

    act(() => {
      result.current.addToCart(product)
    })

    expect(result.current.items.length).toBe(1)
  })

  it("increments quantity if product exists", () => {
    const { result } = renderHook(() => useCart(), { wrapper })

    const product = {
      id: 1,
      title: "Test",
      price: 100,
      images: [],
    } as any

    act(() => {
      result.current.addToCart(product)
      result.current.addToCart(product)
    })

    expect(result.current.items[0].quantity).toBe(2)
  })
})