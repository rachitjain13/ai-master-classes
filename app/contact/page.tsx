export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      <section className="mx-auto max-w-4xl px-6 py-20">

        <h1 className="text-3xl font-bold">
          Contact Us
        </h1>

        <p className="mt-3 text-sm leading-7 text-zinc-600">
          If you have any questions regarding your purchase,
          payment, access to the AI Masterclass book,
          or any technical issue, feel free to contact us.
        </p>

        <div className="mt-10 space-y-6 rounded-2xl border border-zinc-200 p-8">

          <div>

            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Business
            </h2>

            <p className="mt-2 text-sm">
              AI Master Classes
            </p>

          </div>

          <div>

            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Email
            </h2>

            <p className="mt-2 text-sm">
              arihantlala830@gmail.com
            </p>

          </div>

          <div>

            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Support Hours
            </h2>

            <p className="mt-2 text-sm">
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM (IST)
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}