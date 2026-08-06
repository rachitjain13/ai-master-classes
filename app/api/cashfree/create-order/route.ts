import { NextRequest, NextResponse } from "next/server";
import { cashfree } from "@/lib/cashfree";
import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { name, email, amount, affiliateCode, phone } = await req.json();

    const orderId = uuid();

    const response = await cashfree.post("/orders", {
      order_id: orderId,
      order_amount: amount,
      order_currency: "INR",

      customer_details: {
        customer_id: orderId,
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
      },

      order_meta: {
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?order_id={order_id}`,
      },
    });

    console.log("Cashfree Response:");
    console.dir(response.data, { depth: null });

    // Connect MongoDB
    await connectDB();

    // Save customer with PENDING status
    await Customer.create({
      name,
      email,
      orderId,
      cfOrderId: response.data.cf_order_id,
      amount,
       affiliateCode,
      paymentStatus: "PENDING",
    });

    return NextResponse.json({
      success: true,
      data: response.data,
    });

  } catch (error) {
    console.error("Create Order Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create Cashfree order",
      },
      {
        status: 500,
      }
    );
  }
}