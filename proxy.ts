import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

async function verifyToken(token: string) {
  try {
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const adminToken =
    req.cookies.get("admin_token")?.value;

  const affiliateToken =
    req.cookies.get("affiliate_token")?.value;

  // ==========================
  // ADMIN LOGIN / SETUP
  // ==========================

  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/setup")
  ) {
    if (
      adminToken &&
      (await verifyToken(adminToken))
    ) {
      return NextResponse.redirect(
        new URL("/admin", req.url)
      );
    }

    return NextResponse.next();
  }

  // ==========================
  // ADMIN PROTECTED
  // ==========================

  if (
    pathname.startsWith("/admin")
  ) {
    if (
      !adminToken ||
      !(await verifyToken(adminToken))
    ) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }

    return NextResponse.next();
  }

  // ==========================
  // AFFILIATE LOGIN
  // ==========================

  if (
    pathname.startsWith("/affiliate/login")
  ) {
    if (
      affiliateToken &&
      (await verifyToken(
        affiliateToken
      ))
    ) {
      return NextResponse.redirect(
        new URL(
          "/affiliate/dashboard",
          req.url
        )
      );
    }

    return NextResponse.next();
  }

  // ==========================
  // AFFILIATE PROTECTED
  // ==========================

  if (
    pathname.startsWith(
      "/affiliate/dashboard"
    )
  ) {
    if (
      !affiliateToken ||
      !(await verifyToken(
        affiliateToken
      ))
    ) {
      return NextResponse.redirect(
        new URL(
          "/affiliate/login",
          req.url
        )
      );
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/affiliate/:path*",
  ],
};