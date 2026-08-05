"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AffiliateTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");

    if (!ref) return;

    document.cookie = `affiliate_ref=${ref}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

    console.log("Affiliate Saved:", ref);
  }, [searchParams]);

  return null;
}