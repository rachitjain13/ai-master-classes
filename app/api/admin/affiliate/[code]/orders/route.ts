import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    await connectDB();

    const { code } = await params;

    const orders = await Customer.find({
      affiliateCode: code,
    })
      .sort({
        createdAt: -1,
      })
      .select(
        "name email amount paymentStatus createdAt orderId"
      );

    return NextResponse.json({
      success: true,
      orders,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}