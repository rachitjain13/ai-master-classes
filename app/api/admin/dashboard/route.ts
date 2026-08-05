import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Customer from "@/models/Customer";

export async function GET() {
  try {

    await connectDB();

    const customers = await Customer.find()
      .sort({ createdAt: -1 });

    const revenue = customers
      .filter(c => c.paymentStatus === "PAID")
      .reduce((sum, c) => sum + c.amount, 0);

    const orders = customers.length;

    const paidOrders = customers.filter(
      c => c.paymentStatus === "PAID"
    ).length;

    const pendingOrders = customers.filter(
      c => c.paymentStatus === "PENDING"
    ).length;

    const failedOrders = customers.filter(
      c => c.paymentStatus === "FAILED"
    ).length;

    const recentOrders = customers
      .slice(0, 10)
      .map(customer => ({
        id: customer._id,
        name: customer.name,
        email: customer.email,
        amount: customer.amount,
        paymentStatus: customer.paymentStatus,
        createdAt: customer.createdAt,
      }));

    return NextResponse.json({
      success: true,

      stats: {
        revenue,
        orders,
        customers: orders,
        paidOrders,
        pendingOrders,
        failedOrders,
      },

      recentOrders,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load dashboard.",
      },
      {
        status: 500,
      }
    );

  }
}