import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Cog, Radar, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Kisam Technologies | Security Specialists",
  description:
    "Learn about Kisam Technologies, a Nairobi-based security surveillance company serving clients across Kenya.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-black text-white sm:text-4xl">About Kisam Technologies</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Kisam Technologies is a professional security surveillance company focused on dependable,
          high-performance systems for homes, businesses, and vehicles.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, label: "Trusted Security" },
            { icon: Cog, label: "Smart Automation" },
            { icon: Radar, label: "Live Monitoring" },
            { icon: Lock, label: "Reliable Support" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-black/70 p-5">
              <item.icon className="text-cyan-200" size={22} />
              <p className="mt-3 text-sm font-semibold text-slate-100">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/70 p-6">
            <h2 className="text-xl font-bold text-cyan-100">Mission</h2>
            <p className="mt-3 text-sm text-slate-300">
              To safeguard people and property using intelligent, reliable, and scalable security
              systems backed by responsive technical support.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/70 p-6">
            <h2 className="text-xl font-bold text-cyan-100">Vision</h2>
            <p className="mt-3 text-sm text-slate-300">
              To become the most trusted security technology partner in the region through quality,
              innovation, and consistent client outcomes.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </main>
  );
}
