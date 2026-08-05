"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const res = await fetch(
        "/api/admin/login",

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

console.log("Status:", res.status);
console.log("Response:", data);

if (!res.ok) {
  setError(data.message);
  return;
}

console.log("Before redirect");

window.location.href = "/admin";

console.log("After redirect");
    } catch {

      setError("Unable to login.");

    } finally {

      setLoading(false);

    }
  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">

      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-8 text-black">

        <h1 className="text-2xl font-semibold text-black">

          Admin Login

        </h1>

        <p className="mt-2 text-sm text-neutral-500 text-black">

          Sign in to continue.

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
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
              required
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-black">
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

          {error && (

            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">

              {error}

            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black py-2.5 text-sm font-medium text-white transition hover:bg-neutral-900 disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </main>

  );
}