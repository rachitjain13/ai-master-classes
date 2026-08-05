"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AffiliateLoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const res = await fetch(
        "/api/affiliate/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      router.push("/affiliate/dashboard");

    } catch {
      setError("Unable to login.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f9fb] px-6 py-12 text-black">

      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-8 shadow-sm text-black">

        <h1 className="text-2xl font-semibold text-black">
          Affiliate Login
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Login to your affiliate dashboard.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="mb-2 block text-sm font-medium text-black">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-black text-black"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-black">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:border-black text-black"
            />

          </div>

          {error && (

            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 text-black">

              {error}

            </div>

          )}

          <button
            disabled={loading}
            className="w-full rounded-lg bg-black py-3 text-white hover:bg-neutral-900 disabled:opacity-60 text-black"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}