import Link from "next/link";
import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Kisam Technologies | Security Services in Kenya",
  description:
    "Professional CCTV installation, alarm systems, smart gate automation, car alarms, and GPS tracking solutions across Kenya.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Professional Security Surveillance
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Advanced Security Solutions You Can Trust
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            Protecting homes, businesses, and vehicles with modern CCTV, alarm, automation, and
            tracking technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-black text-cyan-100 sm:text-3xl">Core Services</h2>
            <Link href="/services" className="text-sm font-semibold text-cyan-200 hover:underline">
              View all services
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-3">
          {[
            { value: "500+", label: "Installations" },
            { value: "300+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-black/70 p-5 text-center">
              <p className="text-3xl font-black text-cyan-200">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-6xl rounded-2xl border border-cyan-300/30 bg-black/70 p-7 text-center sm:p-10">
          <h3 className="text-2xl font-black text-white sm:text-3xl">Secure What Matters Most Today</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Speak with our team for a custom security plan tailored to your property and operations.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
          >
            Start Your Security Upgrade
          </Link>
        </div>
      </section>
    </main>
  );
}
