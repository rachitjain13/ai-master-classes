"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAffiliatePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    affiliateCode: "",
    commissionType: "PERCENTAGE",
    commissionValue: "",
    status: "ACTIVE",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "/api/admin/affiliate/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...form,
            commissionValue: Number(
              form.commissionValue
            ),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Affiliate created successfully.");

      router.push("/admin/affiliate");

    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-2xl font-semibold text-black">

        Create Affiliate

      </h1>

      <p className="mt-1 text-sm text-neutral-500 text-black">

        Add a new affiliate partner.

      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6 rounded-xl border border-neutral-200 bg-white p-8 text-black"
      >

        <div>

          <label className="mb-2 block text-sm font-medium text-black">

            Full Name

          </label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-black">

            Email

          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-black">

            Password

          </label>

          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-black">

            Affiliate Code

          </label>

          <input
            name="affiliateCode"
            value={form.affiliateCode}
            onChange={handleChange}
            required
            placeholder="AMAN20"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm uppercase outline-none focus:border-black text-black"
          />

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="mb-2 block text-sm font-medium text-black">

              Commission Type

            </label>

            <select
              name="commissionType"
              value={form.commissionType}
              onChange={handleChange}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm"
            >
              <option value="PERCENTAGE">

                Percentage

              </option>

              <option value="FIXED">

                Fixed Amount

              </option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-black">

              Commission Value

            </label>

            <input
              type="number"
              name="commissionValue"
              value={form.commissionValue}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black text-black"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">

            Status

          </label>

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm"
          >
            <option value="ACTIVE">

              Active

            </option>

            <option value="INACTIVE">

              Inactive

            </option>

          </select>

        </div>

        <button
          disabled={loading}
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
        >
          {loading
            ? "Creating..."
            : "Create Affiliate"}
        </button>

      </form>

    </div>
  );
}