"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSetupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(
        "/api/admin/setup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
            confirmPassword,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setSuccess(data.message);

      setTimeout(() => {
        router.push("/admin/login");
      }, 1500);

    } catch {

      setError("Something went wrong.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-8">

        <h1 className="text-2xl font-semibold text-black">

          Admin Setup

        </h1>

        <p className="mt-2 text-sm text-neutral-500 text-black">

          Create your administrator account.

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-black text-black">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-black text-black">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
              required
            />

          </div>

          {error && (

            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">

              {error}

            </div>

          )}

          {success && (

            <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">

              {success}

            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>

        </form>

      </div>

    </main>
  );
}
