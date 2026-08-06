import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { affiliateCode } = await req.json();

    if (!affiliateCode) {
      return NextResponse.json({
        success: false,
        message: "Affiliate code missing",
      });
    }

    const affiliate = await Affiliate.findOne({
      affiliateCode,
    });

    if (!affiliate) {
      return NextResponse.json({
        success: false,
        message: "Affiliate not found",
      });
    }

    affiliate.clicks += 1;

    await affiliate.save();

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}