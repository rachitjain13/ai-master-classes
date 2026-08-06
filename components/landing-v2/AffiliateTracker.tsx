"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AffiliateTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
  const ref = searchParams.get("ref");

  if (!ref) return;

  // Save Cookie
  document.cookie = `affiliate_ref=${ref}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;

  console.log("Affiliate Saved:", ref);

  // Update Click Count
  fetch("/api/affiliate/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      affiliateCode: ref,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Click Updated:", data);
    })
    .catch((err) => {
      console.error("Click Update Failed:", err);
    });

}, [searchParams]);
return null;
}