import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          Loading...
        </main>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
