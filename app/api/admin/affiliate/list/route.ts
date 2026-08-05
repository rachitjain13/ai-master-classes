import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";
import { verifyAdmin } from "@/lib/auth/verifyAdmin";

export async function GET() {
  try {
    await verifyAdmin();

    await connectDB();

    const affiliates = await Affiliate.find({})
      .select("-password")
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      affiliates,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch affiliates.",
      },
      {
        status: 500,
      }
    );
  }
}