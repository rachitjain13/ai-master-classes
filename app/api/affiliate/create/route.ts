import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";

function generateCode(name: string) {
  const random = Math.random().toString(36).substring(2, 8);

  return (
    name
      .toLowerCase()
      .replace(/\s+/g, "") +
    "-" +
    random
  );
}

export async function POST(req: NextRequest) {
  try {

    await connectDB();

    const {
      name,
      email,
      phone,
      commissionType,
      commissionValue,
    } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and Email are required",
        },
        {
          status: 400,
        }
      );
    }

    const exists = await Affiliate.findOne({
      email,
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Affiliate already exists",
        },
        {
          status: 400,
        }
      );
    }

    const affiliateCode = generateCode(name);

    const affiliate = await Affiliate.create({
      name,
      email,
      phone,
      affiliateCode,
      commissionType,
      commissionValue,
    });

    return NextResponse.json({
      success: true,

      affiliate,

      affiliateLink:
        `${process.env.NEXT_PUBLIC_BASE_URL}?ref=${affiliateCode}`,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );

  }
}