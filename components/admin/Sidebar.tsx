"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/admin",
  },
  {
    name: "Orders",
    href: "/admin/orders",
  },
  {
    name: "Customers",
    href: "/admin/customers",
  },
  {
    name: "Affiliates",
    href: "/admin/affiliate",
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
  },
  {
    name: "Settings",
    href: "/admin/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      router.replace("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-neutral-200 bg-white">

      {/* Logo */}

      <div className="border-b border-neutral-200 px-6 py-5">

        <h1 className="text-lg font-semibold text-black">
          AI Masterclasses
        </h1>

        <p className="mt-1 text-xs text-neutral-500">
          Admin Panel
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        <div className="space-y-1">

          {links.map((link) => {

            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-black text-white"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {link.name}
              </Link>
            );

          })}

        </div>

      </nav>

      {/* Footer */}

      <div className="border-t border-neutral-200 p-4">

        <button
          onClick={logout}
          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-100"
        >
          Logout
        </button>

      </div>

    </aside>
  );
}