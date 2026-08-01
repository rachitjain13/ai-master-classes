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
      downloadToken: token,
    });

    if (!customer) {
      return NextResponse.json(
        { message: "Invalid download link" },
        { status: 404 }
      );
    }

    if (customer.paymentStatus !== "PAID") {
      return NextResponse.json(
        { message: "Payment not completed" },
        { status: 403 }
      );
    }

    if (
      customer.downloadExpiresAt &&
      new Date() > customer.downloadExpiresAt
    ) {
      return NextResponse.json(
        { message: "Download link expired" },
        { status: 403 }
      );
    }

    if (customer.downloadCount >= 3) {
      return NextResponse.json(
        { message: "Download limit exceeded" },
        { status: 403 }
      );
    }

    customer.downloadCount += 1;
    await customer.save();

    const { data, error } = await supabaseAdmin.storage
      .from(process.env.SUPABASE_BUCKET!)
      .createSignedUrl("AI-Masterclass.pdf", 60);

    console.log("Bucket:", process.env.SUPABASE_BUCKET);
    console.log("Data:", data);
    console.log("Error:", error);

    if (error || !data?.signedUrl) {
      return NextResponse.json(
        {
          message: "Unable to generate download link",
          error: error?.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.redirect(data.signedUrl);

  } catch (error) {
    console.error("Download API Error:", error);

    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}