import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kisam Technologies | Nairobi, Kenya",
  description:
    "Contact Kisam Technologies in Nairobi for CCTV installation, alarm systems, smart gate automation, car alarms, and GPS tracking services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-black text-white sm:text-4xl">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Tell us your security needs and we will provide a practical recommendation and quote.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <form className="space-y-4 rounded-xl border border-white/10 bg-black/70 p-5 sm:p-6">
            <input
              className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="Full Name"
              aria-label="Full Name"
            />
            <input
              className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="Email Address"
              type="email"
              aria-label="Email Address"
            />
            <input
              className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />
            <textarea
              className="h-32 w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
              placeholder="What do you need secured?"
              aria-label="Message"
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
            >
              Send Message
            </button>
          </form>

          <div className="rounded-xl border border-white/10 bg-black/70 p-5 sm:p-6">
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-cyan-200">Phone:</span> +254 701 841 358
            </p>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-cyan-200">Email:</span> kisamtechnology@gmail.com
            </p>
            <p className="mt-3 text-sm text-slate-300">
              <span className="font-semibold text-cyan-200">Location:</span> Nairobi, Kenya
            </p>

            <iframe
              title="Kisam Technologies Location"
              src="https://www.google.com/maps?q=Nairobi&output=embed"
              className="mt-5 h-64 w-full rounded-lg border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
