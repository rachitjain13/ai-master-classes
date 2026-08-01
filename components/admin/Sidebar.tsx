"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  BarChart3,
  Mail,
  Settings,
  User,
  LogOut,
  BookOpen,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Emails",
    href: "/admin/emails",
    icon: Mail,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    href: "/admin/profile",
    icon: User,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/10 bg-[#060816]/95 backdrop-blur-xl">
      <div className="flex h-full flex-col justify-between">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-3 px-8 py-8">

            <div className="rounded-xl bg-cyan-500/20 p-3">

              <BookOpen className="h-7 w-7 text-cyan-400" />

            </div>

            <div>

              <h1 className="text-xl font-bold text-white">
                AI Master Classes
              </h1>

              <p className="text-xs text-gray-400">
                Admin Dashboard
              </p>

            </div>

          </div>

          <nav className="mt-8 flex flex-col gap-2 px-4">

            {menuItems.map((item) => {

              const active =
                pathname === item.href;

              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: .98 }}
                    className={`relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300

                    ${
                      active
                        ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                    `}
                  >

                    {active && (
                      <motion.div
                        layoutId="active"
                        className="absolute left-0 top-3 h-8 w-1 rounded-full bg-black"
                      />
                    )}

                    <Icon className="h-5 w-5" />

                    <span className="font-medium">
                      {item.title}
                    </span>

                  </motion.div>
                </Link>
              );
            })}

          </nav>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 p-6">

          <button className="flex w-full items-center gap-4 rounded-xl bg-red-500/10 px-5 py-4 text-red-400 transition hover:bg-red-500 hover:text-white">

            <LogOut className="h-5 w-5" />

            Logout

          </button>

        </div>

      </div>
    </aside>
  );
}