import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const {
  email,
  name,
  // downloadToken,
  readerToken,
} = await req.json();

   const readerLink =
`${process.env.NEXT_PUBLIC_BASE_URL}/reader/${readerToken}`;

// const downloadLink =
// `${process.env.NEXT_PUBLIC_BASE_URL}/api/download/${downloadToken}`;

    await transporter.sendMail({
      from: `"AI Masterclass" <${process.env.EMAIL_USER}>`,
      to: email,

      subject: "🎉 Your AI Masterclass Ebook is Ready",

      html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:30px;background:#f8f8f8;border-radius:10px">

        <h1 style="color:#111;">
          Thank You for Your Purchase 🎉
        </h1>

        <p>Hello <strong>${name}</strong>,</p>

        <p>
          Your payment has been verified successfully.
        </p>

        <p>
Your payment has been verified successfully.
</p>

<p>
Click below to start reading your book instantly in our secure reader.
</p>

<a
href="${readerLink}"
style="
display:inline-block;
background:#000;
color:#fff;
padding:15px 30px;
text-decoration:none;
border-radius:8px;
font-weight:bold;
margin-top:20px;
"
>
📖 Read My Book
</a>

        <p style="margin-top:30px;color:#666">
          This download link is secure and may expire after a limited time.
        </p>

        <hr style="margin:30px 0"/>

        <p style="font-size:14px;color:#777">
          AI Masterclass Team
        </p>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Send Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Email sending failed",
      },
      {
        status: 500,
      }
    );
  }
}