import { ReactNode } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import PageWrapper from "@/components/admin/PageWrapper";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <Sidebar />

      <div className="ml-72 flex min-h-screen flex-col">

        <Topbar />

        <PageWrapper>
          {children}
        </PageWrapper>

      </div>

    </div>
  );
}