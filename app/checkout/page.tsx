"use client";

import { useState } from "react";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { load } from "@cashfreepayments/cashfree-js";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  async function handlePayment(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone") as string;
    const affiliateCode =
  document.cookie
    .split("; ")
    .find((row) =>
      row.startsWith("affiliate_ref=")
    )
    ?.split("=")[1] || null;
    try {
      const response = await fetch(
        "/api/cashfree/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            amount: 149,
            affiliateCode,
          }),
        }
      );

      const data = await response.json();

if (!data.success) {
  alert(data.message || "Unable to create order");
  return;
}
  
const cashfree = await load({
  mode: "production",
});

const checkoutOptions = {
  paymentSessionId: data.data.payment_session_id,
  redirectTarget: "_self",
};

const result = await cashfree.checkout(checkoutOptions);

console.log(result);

// const cashfree = await load({
//   mode: "sandbox",
// });

// await cashfree.checkout({
//   paymentSessionId: data.data.payment_session_id,
//   redirectTarget: "_self",
// });

    } catch (err) {

      console.log(err);

      alert("Payment Failed");

    }

    setLoading(false);
  }

  return (
  <main className="min-h-screen bg-white">

    {/* Background */}

    <div className="absolute inset-0 -z-10">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.05),transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

    </div>

    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* Heading */}

      <div className="mx-auto max-w-2xl text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-violet-700">

          <ShieldCheck size={14} />

          Secure Checkout

        </span>

        <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-4xl xl:text-[40px]">

          Complete Your
          <br />

          Purchase

        </h1>

        <p className="mx-auto mt-4 max-w-lg text-[14px] leading-6 text-neutral-600">

          One secure payment unlocks lifetime access to
          AI Masterclass with all future updates included.

        </p>

      </div>

      {/* Content */}

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_360px]">

        {/* Left */}

        <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,.05)]">

          <h2 className="text-xl font-semibold text-black">

            Customer Details

          </h2>

          <p className="mt-2 text-[14px] text-neutral-500">

            Enter your information to receive instant access.

          </p>

          <form
            onSubmit={handlePayment}
            className="mt-8 space-y-5"
          >

            {/* Name */}

            <div>

              <label className="mb-2 block text-[13px] font-medium text-neutral-700">

                Full Name

              </label>

              <input
                required
                name="name"
                placeholder="John Doe"
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-neutral-200
                  bg-white
                  px-4
                  text-black
                  outline-none
                  transition-all
                  focus:border-violet-500
                  focus:ring-4
                  focus:ring-violet-100
                "
              />

            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-[13px] font-medium text-neutral-700">
  Phone Number
  <span className="ml-1 text-red-500">*</span>
</label>

<input
  type="tel"
  name="phone"
  placeholder="+91 9876543210"
  required
  pattern="[0-9]{10}"
  minLength={10}
  maxLength={10}
  inputMode="numeric"
  className="
    h-12
    w-full
    rounded-xl
    border
    border-neutral-200
    bg-white
    px-4
    text-sm
    outline-none
    transition-all
    focus:border-violet-500
    focus:ring-4
    focus:ring-violet-100
  "
/>

            </div>
                        {/* Pay Button */}

            <button
              type="submit"
              disabled={loading}
              className="
                group
                mt-2
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-black
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-neutral-900
                hover:shadow-[0_18px_45px_rgba(0,0,0,.18)]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >

              {loading
                ? "Creating Secure Session..."
                : "Pay ₹149 "}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            {/* Security */}

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-neutral-500">

              <Lock size={14} />

              256-bit encrypted payment powered by Cashfree

            </div>

          </form>

        </div>

        {/* RIGHT */}

        <div className="lg:sticky lg:top-24 lg:self-start">

          <div className="rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,.05)]">

            <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.30em] text-violet-700">

              ORDER SUMMARY

            </span>

            <h3 className="mt-5 text-xl font-semibold text-black">

              AI Masterclass

            </h3>

            <p className="mt-2 text-[14px] leading-6 text-neutral-500">

              Complete AI learning roadmap with
              lifetime access and all future updates.

            </p>

            {/* Price */}

            <div className="mt-6 flex items-end gap-3">

              <span className="text-4xl font-bold tracking-tight text-black">

                ₹149

              </span>

              <span className="pb-1 text-base text-neutral-400 line-through">

                ₹999

              </span>

            </div>

            {/* Features */}

            <div className="mt-8 space-y-3">

              {[
                
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3"
                >

                  <span className="text-sm text-neutral-700">

                    {item}

                  </span>

                  <ShieldCheck
                    size={16}
                    className="text-violet-600"
                  />

                </div>

              ))}

            </div>

            {/* Total */}

            <div className="mt-8 border-t border-neutral-200 pt-6">

              <div className="flex items-center justify-between">

                <span className="text-[15px] font-medium text-neutral-700">

                  Total

                </span>

                <span className="text-2xl font-bold text-black">

                  ₹149

                </span>

              </div>

            </div>

            {/* Trust */}

            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">

                <ShieldCheck
                  size={16}
                  className="mx-auto text-violet-600"
                />

                <p className="mt-2 text-[11px] font-medium text-neutral-600">

                  Secure

                </p>

              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">

                <Lock
                  size={16}
                  className="mx-auto text-violet-600"
                />

                <p className="mt-2 text-[11px] font-medium text-neutral-600">

                  Private

                </p>

              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">

                <ArrowRight
                  size={16}
                  className="mx-auto text-violet-600"
                />

                <p className="mt-2 text-[11px] font-medium text-neutral-600">

                  Instant

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </main>
);
}