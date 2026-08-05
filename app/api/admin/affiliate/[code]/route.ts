import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";
import { verifyAdmin } from "@/lib/auth/verifyAdmin";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    await verifyAdmin();

    await connectDB();

    const { code } = await params;

    const affiliate = await Affiliate.findOne({
      affiliateCode: code.toUpperCase(),
    }).select("-password");

    if (!affiliate) {
      return NextResponse.json(
        {
          success: false,
          message: "Affiliate not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      affiliate,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch affiliate.",
      },
      {
        status: 500,
      }
    );
  }
}