import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/" || path === "/login" || path === "/register"

  // Get the token from the cookies
  const token = request.cookies.get("token")?.value || ""

  // If the path is not public and there's no token, redirect to the home page
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // If the path is public and there's a token, redirect to the dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run only on specific paths
export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/register"],
}
