import { ReactNode } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#f8f9fb]">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="flex-1 overflow-auto p-8">

          {children}

        </main>

      </div>

    </div>
  );
}