import { cookies } from "next/headers";
import { jwtVerify } from "jose";

import { connectDB } from "@/lib/db";
import Affiliate from "@/models/Affiliate";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

export async function verifyAffiliate() {
  await connectDB();

  const cookieStore = await cookies();

  const token =
    cookieStore.get("affiliate_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const { payload } = await jwtVerify(
    token,
    secret
  );

  const affiliate = await Affiliate.findById(
    payload.id
  ).select("-password");

  if (!affiliate) {
    throw new Error("Unauthorized");
  }

  if (affiliate.status !== "ACTIVE") {
    throw new Error("Affiliate account is inactive.");
  }

  return affiliate;
}