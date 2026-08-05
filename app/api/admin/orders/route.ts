import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    const status = searchParams.get("status") || "ALL";
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const match: Record<string, unknown> = {};

    if (status !== "ALL") {
      match.paymentStatus = status;
    }

    if (search.trim()) {
      match.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          orderId: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const [orders, total] = await Promise.all([
      Customer.find(match)
        .sort({
          createdAt: -1,
        })
        .skip(skip)
        .limit(limit)
        .lean(),

      Customer.countDocuments(match),
    ]);

    return NextResponse.json({
      success: true,

      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },

      orders,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load orders.",
      },
      {
        status: 500,
      }
    );
  }
}