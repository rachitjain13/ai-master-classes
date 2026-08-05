import { NextResponse } from "next/server";

import { verifyAffiliate } from "@/lib/auth/verifyAffiliate";

export async function GET() {
  try {
    const affiliate = await verifyAffiliate();

    return NextResponse.json({
      success: true,
      affiliate,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );

  }
}