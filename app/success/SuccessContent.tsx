"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Clock3,
  Mail,
  ShieldCheck,
} from "lucide-react";

type PaymentState =
  | "checking"
  | "success"
  | "pending"
  | "failed"
  | "invalid";

export default function SuccessContent() {

  const params = useSearchParams();

  const orderId = params.get("order_id");

  const [paymentState, setPaymentState] =
    useState<PaymentState>("checking");

  const [status, setStatus] =
    useState("Checking Payment...");


 useEffect(() => {
  

  if (!orderId) return;

  async function verify() {

    try {

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

      if (!data.success) {

        setPaymentState("invalid");

        setStatus("Invalid Order");

        return;

      }

      const paymentStatus = data.order.order_status;

      switch (paymentStatus) {

        case "PAID":

          setPaymentState("success");

          setStatus("Payment Successful");

          break;

        case "PENDING":

          setPaymentState("pending");

          setStatus("Payment Pending");

          break;

        default:

          setPaymentState("failed");

          setStatus("Payment Failed");

          break;

      }

    } catch {

      setPaymentState("failed");

      setStatus("Unable to Verify Payment");

    }

  }

  verify();

}, [orderId]);
if (!orderId) {

  return (

    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FB]">

      <div className="rounded-3xl border border-red-200 bg-white p-10 shadow-xl text-center">

        <h1 className="text-3xl font-bold text-red-600">

          Invalid Order

        </h1>

        <p className="mt-4 text-neutral-500">

          No Order ID was found.

        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
        >
          Back Home
        </Link>

      </div>

    </main>

  );

}
    /* ============================
     CHECKING
  ============================ */

  if (paymentState === "checking") {

    return (

      <main className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-6">

        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-10 shadow-xl">

          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-[3px] border-neutral-300 border-t-black" />

          <h1 className="mt-8 text-center text-3xl font-bold text-black">

            Verifying Payment...

          </h1>

          <p className="mt-4 text-center leading-7 text-neutral-500">

            Please wait while we securely verify
            your payment.

          </p>

        </div>

      </main>

    );

  }

  /* ============================
      SUCCESS
  ============================ */

  if (paymentState === "success") {

    return (

      <main className="relative min-h-screen overflow-hidden bg-[#F8F9FB]">

        {/* Background */}

        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,.08),transparent_60%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        </div>

        <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-20">

          <div className="w-full max-w-2xl rounded-[30px] border border-neutral-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

            {/* Success */}

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

              <CheckCircle2
                size={50}
                className="text-green-600"
              />

            </div>

            <h1 className="mt-8 text-center text-4xl font-bold text-black">

              🎉 Payment Successful

            </h1>

            <p className="mx-auto mt-5 max-w-xl text-center leading-8 text-neutral-500">

              Welcome to AI Master Classes.

              <br />

              Your payment has been verified
              successfully and your secure
              reading link has been sent to
              your registered email address.

            </p>

            {/* Timeline */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-center">

                <CheckCircle2
                  className="mx-auto text-green-600"
                  size={24}
                />

                <h3 className="mt-3 font-semibold">

                  Payment

                </h3>

                <p className="mt-1 text-sm text-neutral-500">

                  Completed

                </p>

              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center">

                <Mail
                  className="mx-auto text-blue-600"
                  size={24}
                />

                <h3 className="mt-3 font-semibold">

                  Email

                </h3>

                <p className="mt-1 text-sm text-neutral-500">

                  Sent Successfully

                </p>

              </div>

              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-center">

                <ShieldCheck
                  className="mx-auto text-violet-600"
                  size={24}
                />

                <h3 className="mt-3 font-semibold">

                  Reader

                </h3>

                <p className="mt-1 text-sm text-neutral-500">

                  Lifetime Access

                </p>

              </div>

            </div>

            {/* Order */}

            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

              <div className="flex justify-between">

                <span className="text-neutral-500">

                  Order ID

                </span>

                <span className="font-semibold">

                  {orderId}

                </span>

              </div>

              <div className="mt-5 flex justify-between">

                <span className="text-neutral-500">

                  Amount Paid

                </span>

                <span className="font-semibold">

                  ₹149

                </span>

              </div>

              <div className="mt-5 flex justify-between">

                <span className="text-neutral-500">

                  Status

                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">

                  PAID

                </span>

              </div>

            </div>
                        {/* Email Notice */}

            <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">

              <div className="flex items-center gap-3">

                <Mail
                  className="text-blue-600"
                  size={22}
                />

                <h3 className="text-lg font-semibold text-black">

                  Check Your Email

                </h3>

              </div>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-blue-900">

                <li>✅ Your secure reader link has been sent.</li>

                <li>📥 Check your Inbox first.</li>

                <li>📂 If you dont find it, check Spam & Promotions.</li>

                <li>
                  🔒 For security reasons, downloading the
                  PDF is disabled.
                </li>

              </ul>

            </div>

            {/* CTA */}

            <div className="mt-10 flex justify-center">

              <Link
                href="/"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-black
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-neutral-900
                "
              >

                Return Home

              </Link>

            </div>

          </div>

        </div>

      </main>

    );

  }

  /* ============================
      PENDING
  ============================ */

  if (paymentState === "pending") {

    return (

      <main className="flex min-h-screen items-center justify-center bg-[#F8F9FB] px-6">

        <div className="w-full max-w-lg rounded-3xl border border-yellow-200 bg-white p-10 text-center shadow-xl">

          <Clock3
            size={52}
            className="mx-auto text-yellow-500"
          />

          <h1 className="mt-7 text-3xl font-bold text-black">

            Payment Pending

          </h1>

          <p className="mt-5 leading-7 text-neutral-500">

            Your payment is still being confirmed.

            Please wait a few moments and
            refresh this page.

          </p>

          <button
            onClick={() => window.location.reload()}
            className="
              mt-8
              rounded-xl
              bg-black
              px-8
              py-3
              font-semibold
              text-white
            "
          >

            Check Again

          </button>

        </div>

      </main>

    );

  }

  /* ============================
      FAILED / INVALID
  ============================ */

  return (

    <main className="flex min-h-screen items-center justify-center bg-[#F8F9FB] px-6">

      <div className="w-full max-w-lg rounded-3xl border border-red-200 bg-white p-10 text-center shadow-xl">

        <XCircle
          size={55}
          className="mx-auto text-red-500"
        />

        <h1 className="mt-7 text-3xl font-bold text-black">

          {paymentState === "invalid"
            ? "Invalid Order"
            : "Payment Failed"}

        </h1>

        <p className="mt-5 leading-7 text-neutral-500">

          {paymentState === "invalid"
            ? "This payment session could not be found."
            : "Unfortunately your payment could not be completed. If any amount was deducted, it will usually be refunded by your bank according to their processing timeline."}

        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/checkout"
            className="
              rounded-xl
              bg-black
              px-7
              py-3
              text-center
              font-semibold
              text-white
              transition
              hover:bg-neutral-900
            "
          >

            Try Again

          </Link>

          <Link
            href="/"
            className="
              rounded-xl
              border
              border-neutral-300
              px-7
              py-3
              text-center
              font-semibold
              text-black
              transition
              hover:bg-neutral-100
            "
          >

            Back Home

          </Link>

        </div>

      </div>

    </main>

  );

}