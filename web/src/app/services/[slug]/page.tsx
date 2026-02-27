import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Kisam Technologies",
    };
  }

  return {
    title: `${service.title} | Kisam Technologies`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    keywords: [
      service.title,
      `${service.title} Kenya`,
      "security services Kenya",
      "Kisam Technologies",
    ],
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link href="/services" className="text-sm font-semibold text-cyan-200 hover:underline">
          ← Back to Services
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/70">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="block h-72 w-full object-cover sm:h-80"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/70 p-5 sm:p-6">
            <h1 className="text-2xl font-black text-white sm:text-3xl">{service.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{service.description}</p>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-cyan-200">What You Get</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm text-slate-300">
              <span className="font-semibold text-cyan-200">Recent Project:</span> {service.sampleProject}
            </p>
            <p className="mt-2 text-sm text-slate-300">
              <span className="font-semibold text-cyan-200">Response Time:</span> {service.responseTime}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
            >
              Request This Service
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
