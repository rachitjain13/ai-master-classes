import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest) {
  try {

    await connectDB();

    const {
      email,
      password,
      confirmPassword,
    } = await req.json();

    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Passwords do not match.",
        },
        {
          status: 400,
        }
      );
    }

    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized email.",
        },
        {
          status: 401,
        }
      );
    }

    const adminExists = await Admin.findOne();

    if (adminExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin already exists.",
        },
        {
          status: 403,
        }
      );
    }
        const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully.",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );

  }
}
