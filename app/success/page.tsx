"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SuccessPage() {

  const params = useSearchParams();

  const orderId = params.get("order_id");

  const [status, setStatus] = useState("Checking Payment...");

  useEffect(() => {

    if (!orderId) return;

    verify();

    async function verify() {

      const res = await fetch("/api/cashfree/verify", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          orderId,
        }),

      });

      const data = await res.json();

      if (
        data.success &&
        data.order.order_status === "PAID"
      ) {

        setStatus("Payment Successful ✅");

      } else {

        setStatus("Payment Pending");

      }

    }

  }, [orderId]);

  return (

  <main className="relative min-h-screen overflow-hidden bg-white">

    {/* Background */}

    <div className="absolute inset-0 -z-10">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.05),transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

    </div>

    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-20">

      <div className="w-full max-w-2xl rounded-[28px] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.06)]">

        {/* Success Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

          <CheckCircle2
            size={42}
            className="text-green-600"
          />

        </div>

        {/* Heading */}

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-black">

          {status}

        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-7 text-neutral-600">

  Your payment has been verified successfully.

  Your AI Masterclass has been securely delivered to
  your registered email address.

  Please check your Inbox and, if you dont see it,
  also check your Spam or Promotions folder.

</p>

        {/* Status Cards */}

        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-100">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

            </div>

            <h3 className="mt-3 text-sm font-semibold text-black">

              Payment

            </h3>

            <p className="mt-1 text-xs text-neutral-500">

              Successfully Verified

            </p>

          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">

              📚

            </div>

            <h3 className="mt-3 text-sm font-semibold text-black">

              Library

            </h3>

            <p className="mt-1 text-xs text-neutral-500">

              Lifetime Access Enabled

            </p>

          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">

              🚀

            </div>

            <h3 className="mt-3 text-sm font-semibold text-black">

              Updates

            </h3>

            <p className="mt-1 text-xs text-neutral-500">

              Future Versions Included

            </p>

          </div>

        </div>

        {/* Order Summary */}

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">

          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">

            <span className="text-sm text-neutral-500">

              Order ID

            </span>

            <span className="font-medium text-black">

              {orderId || "—"}

            </span>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-neutral-500">

              Amount Paid

            </span>

            <span className="font-semibold text-black">

              ₹149

            </span>

          </div>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-neutral-500">

              Payment Status

            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

              PAID

            </span>

          </div>

        </div>
        {/* Email Notice */}

<div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">

  <p className="text-center text-sm leading-7 text-blue-900">

    📩 Your AI Masterclass access link has been sent to
    your registered email address.

    <br /><br />

    Please check your <strong>Inbox</strong> first.

    If you dont find the email within a few minutes,
    please check your <strong>Spam</strong> or
    <strong> Promotions</strong> folder as well.

    <br /><br />

    For security reasons, this book can only be read
    online using the secure link provided in your email.
    Downloading is disabled.

  </p>

</div>
                {/* CTA */}

        <div className="mt-10 flex flex-col items-center">

          <Link
            href="/library"
            className="
              group
              inline-flex
              h-12
              items-center
              justify-center
              gap-3
              rounded-full
              bg-black
              px-8
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-neutral-900
              hover:shadow-[0_18px_45px_rgba(0,0,0,.18)]
            "
          >

            Go To My Library

            <span className="transition-transform duration-300 group-hover:translate-x-1">

              →

            </span>

          </Link>

          <p className="mt-4 text-xs text-neutral-500">

            Your AI Masterclass is now permanently linked
            to your account.

          </p>

        </div>

        {/* Help */}

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-center">

          <h3 className="text-sm font-semibold text-black">

            Need Help?

          </h3>

          <p className="mt-2 text-[13px] leading-6 text-neutral-500">

            If you experience any issue accessing your
            purchase, contact our support team and we all
            help you as quickly as possible.

          </p>

          <a
            href="mailto:support@aimasterclass.com"
            className="
              mt-4
              inline-block
              text-sm
              font-medium
              text-violet-600
              transition
              hover:text-violet-700
            "
          >

            support@aimasterclass.com

          </a>

        </div>

      </div>

    </div>

    {/* Ambient Glow */}

    <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-300/20 blur-[170px]" />

    <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet-200/20 blur-[180px]" />

  </main>

);
}