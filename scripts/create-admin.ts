import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";

async function createAdmin() {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL!;

    // 👇 Apna admin password yahan likho (baad me login ke liye use hoga)
    const password = "Admin@123";

    const exists = await Admin.findOne({ email });

    if (exists) {
      console.log("✅ Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully.");
    console.log("Email:", email);
    console.log("Password:", password);

    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();