import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      name,
      email,
      password,
      affiliateCode,
      commissionType,
      commissionValue,
    } = await req.json();

    // -----------------------------
    // Validation
    // -----------------------------

    if (
      !name ||
      !email ||
      !password ||
      !affiliateCode ||
      !commissionType ||
      commissionValue === undefined
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 8 characters.",
        },
        { status: 400 }
      );
    }

    if (
      commissionType !== "PERCENTAGE" &&
      commissionType !== "FIXED"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid commission type.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Duplicate Email
    // -----------------------------

    const existingEmail = await Affiliate.findOne({
      email: email.toLowerCase(),
    });

    if (existingEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email already exists.",
        },
        { status: 409 }
      );
    }

    // -----------------------------
    // Duplicate Code
    // -----------------------------

    const existingCode = await Affiliate.findOne({
      affiliateCode: affiliateCode.toUpperCase(),
    });

    if (existingCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Affiliate code already exists.",
        },
        { status: 409 }
      );
    }

    // -----------------------------
    // Hash Password
    // -----------------------------

    const hashedPassword = await bcrypt.hash(password, 10);

    // -----------------------------
    // Create Affiliate
    // -----------------------------

    await Affiliate.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,

      affiliateCode: affiliateCode.toUpperCase(),

      commissionType,
      commissionValue,

      status: "ACTIVE",

    });

    return NextResponse.json({
      success: true,
      message: "Affiliate created successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      { status: 500 }
    );
  }
}