import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    await connectDB();

    const { token } = await params;

    const customer = await Customer.findOne({
      readerToken: token,
    });

    if (!customer) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid reader link",
        },
        { status: 404 }
      );
    }

    if (customer.paymentStatus !== "PAID") {
      return NextResponse.json(
        {
          success: false,
          message: "Payment not completed",
        },
        { status: 403 }
      );
    }

    if (!customer.bookAccess) {
      return NextResponse.json(
        {
          success: false,
          message: "Book access denied",
        },
        { status: 403 }
      );
    }

    if (
      customer.readerTokenExpiry &&
      new Date() > customer.readerTokenExpiry
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Reader link expired",
        },
        { status: 403 }
      );
    }

    const { data, error } = await supabaseAdmin.storage
      .from(process.env.SUPABASE_BUCKET!)
      .createSignedUrl(
        "AI-Masterclass.pdf",
        60
      );

    if (error || !data?.signedUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to generate signed url",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,

      pdfUrl: data.signedUrl,

      customer: {
        id: customer._id,

        name: customer.name,

        email: customer.email,

        lastReadPage:
          customer.lastReadPage ?? 1,

        totalPages:
          customer.totalPages ?? 0,

        completed:
          customer.completed ?? false,
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}