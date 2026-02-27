import type { Metadata } from "next"
import "./globals.css"

import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/nav/Navbar"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "LapakShop",
  description: "Simple e-commerce with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}