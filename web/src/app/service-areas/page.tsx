import Link from "next/link";
import type { Metadata } from "next";
import { counties } from "@/lib/counties";

export const metadata: Metadata = {
  title: "Service Areas in Kenya | Kisam Technologies",
  description:
    "Kisam Technologies provides CCTV installation, alarm systems, smart gate automation, car alarms, and GPS tracking services across all 47 counties in Kenya.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-black text-white sm:text-4xl">Service Areas Across Kenya</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Headquartered in Nairobi, Kisam Technologies serves clients in all 47 counties with
          professional CCTV, alarm systems, smart gate automation, car alarms, and GPS tracking
          solutions.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/service-areas/${county.slug}`}
              className="rounded-lg border border-white/10 bg-black/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {county.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
