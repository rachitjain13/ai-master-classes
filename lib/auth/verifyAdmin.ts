import { cookies } from "next/headers";
import { jwtVerify } from "jose";

import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET!
);

export async function verifyAdmin() {
  await connectDB();

  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const { payload } = await jwtVerify(
    token,
    secret
  );

  const admin = await Admin.findById(
    payload.id
  ).select("-password");

  if (!admin) {
    throw new Error("Unauthorized");
  }

  return admin;
}