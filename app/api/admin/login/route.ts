import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

export async function POST(req: NextRequest) {
  try {

    await connectDB();

    const {
      email,
      password,
    } = await req.json();

    if (!email || !password) {

      return NextResponse.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        {
          status: 400,
        }
      );

    }

    const admin = await Admin.findOne({
      email,
    });

    if (!admin) {

      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials.",
        },
        {
          status: 401,
        }
      );

    }

    const validPassword =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!validPassword) {

      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials.",
        },
        {
          status: 401,
        }
      );

    }
        const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {

    console.error("ADMIN LOGIN ERROR:", error);

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