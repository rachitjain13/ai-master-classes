import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {

  const token =
    req.cookies.get("admin_token")?.value;

  const pathname = req.nextUrl.pathname;

  // Allow login & setup pages
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/setup")
  ) {

    if (token) {
      try {
        jwt.verify(
          token,
          process.env.JWT_SECRET!
        );

        return NextResponse.redirect(
          new URL("/admin", req.url)
        );

      } catch {}

    }

    return NextResponse.next();

  }

  // Protect every admin page
  if (pathname.startsWith("/admin")) {

    if (!token) {

      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );

    }

    try {

      jwt.verify(
        token,
        process.env.JWT_SECRET!
      );

      return NextResponse.next();

    } catch {

      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );

    }

  }

  return NextResponse.next();

}

export const config = {

  matcher: ["/admin/:path*"],

};