import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const token =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token")

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/checkout")

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/checkout"],
}