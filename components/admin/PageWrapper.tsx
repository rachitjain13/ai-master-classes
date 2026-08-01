"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <main className="ml-72 min-h-screen bg-[#050816]">
      <div className="p-8">{children}</div>
    </main>
  );
}