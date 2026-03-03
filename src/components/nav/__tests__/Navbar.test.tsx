import { render, screen } from "@testing-library/react"
import Navbar from "../Navbar"
import { CartProvider } from "@/context/CartContext"
import { SessionProvider } from "next-auth/react"

describe("Navbar Component", () => {
  it("renders logo text", () => {
    render(
      <SessionProvider session={null}>
        <CartProvider>
          <Navbar />
        </CartProvider>
      </SessionProvider>
    )

    expect(screen.getByText("LapakShop")).toBeInTheDocument()
  })
})