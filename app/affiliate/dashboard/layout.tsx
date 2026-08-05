import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function AffiliateDashboardLayout({
  children,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {children}
    </div>
  );
}