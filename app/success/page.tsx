import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export default function Page() {
  return (
    <Suspense
      fallback={
  <main className="flex min-h-screen items-center justify-center bg-[#F8F9FB] px-6">

    <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-10 shadow-xl">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black">

        <svg
          className="h-8 w-8 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />

          <path
            className="opacity-90"
            fill="currentColor"
            d="M12 2a10 10 0 00-10 10h3a7 7 0 017-7V2z"
          />
        </svg>

      </div>

      <h2 className="mt-8 text-center text-3xl font-bold text-black">

        Preparing Your Order

      </h2>

      <p className="mt-4 text-center leading-7 text-neutral-500">

        Please wait while we verify your payment
        and prepare your secure access.

      </p>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-neutral-200">

        <div className="h-full w-1/2 animate-pulse rounded-full bg-black" />

      </div>

    </div>

  </main>
}
    >
      <SuccessContent />
    </Suspense>
  );
}
