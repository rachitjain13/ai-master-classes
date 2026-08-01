import { NextRequest, NextResponse } from "next/server";
import { cashfree } from "@/lib/cashfree";
import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { orderId } = await req.json();

    await connectDB();

    const response = await cashfree.get(`/orders/${orderId}`);

    const order = response.data;

    if (order.order_status !== "PAID") {
      return NextResponse.json({
        success: true,
        order,
      });
    }

    // Customer Fetch
    const customer = await Customer.findOne({
  orderId: order.order_id,
});

    if (!customer) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer not found",
        },
        {
          status: 404,
        }
      );
    }

    // Already processed
    if (customer.emailSent) {
      return NextResponse.json({
        success: true,
        order,
        message: "Already Verified",
      });
    }

    // Tokens
    const downloadToken = uuid();
    const readerToken = uuid();

    const expires = new Date();
    expires.setDate(expires.getDate() + 7);

    customer.cfOrderId = order.cf_order_id;
    customer.amount = order.order_amount;

    customer.paymentStatus = "PAID";

    customer.downloadToken = downloadToken;
    customer.downloadExpiresAt = expires;
    customer.downloadCount = 0;

    // Reader
    customer.bookAccess = true;
    customer.readerToken = readerToken;
    customer.readerTokenExpiry = null;

    customer.emailSent = false;

    await customer.save();

    // Send Email
    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cashfree/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: customer.email,
          name: customer.name,

          // अभी download system चलने देंगे
          readerToken: customer.readerToken

          // future
        
        }),
      }
    );

    if (emailResponse.ok) {
      customer.emailSent = true;
      await customer.save();

      console.log("✅ Email Sent Successfully");
    } else {
      console.log("❌ Email API Failed");
    }

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {
    console.error("Verify Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Verification Failed",
      },
      {
        status: 500,
      }
    );
  }
}