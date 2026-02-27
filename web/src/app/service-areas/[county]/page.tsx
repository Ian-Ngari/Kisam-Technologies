import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { counties, getCountyBySlug } from "@/lib/counties";

type Params = {
  county: string;
};

export function generateStaticParams() {
  return counties.map((county) => ({ county: county.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { county } = await params;
  const countyData = getCountyBySlug(county);

  if (!countyData) {
    return {
      title: "County Not Found | Kisam Technologies",
    };
  }

  return {
    title: `${countyData.name} Security Services | Kisam Technologies`,
    description: `Professional CCTV installation, alarm systems, smart gate automation, car alarm systems, and GPS tracking services in ${countyData.name} County, Kenya.`,
    alternates: {
      canonical: `/service-areas/${countyData.slug}`,
    },
    keywords: [
      `${countyData.name} CCTV installation`,
      `${countyData.name} alarm systems`,
      `${countyData.name} smart gate automation`,
      `${countyData.name} car alarm installation`,
      `${countyData.name} GPS tracking`,
      `${countyData.name} security company`,
      "Kisam Technologies",
      "Kenya security services",
    ],
  };
}

export default async function CountyPage({ params }: { params: Promise<Params> }) {
  const { county } = await params;
  const countyData = getCountyBySlug(county);

  if (!countyData) {
    notFound();
  }

  const faqs = [
    {
      question: `Do you provide CCTV installation in ${countyData.name} County?`,
      answer: `Yes. Kisam Technologies provides CCTV installation and remote monitoring support in ${countyData.name} County for homes, businesses, and industrial sites.`,
    },
    {
      question: `Can I get alarm and smart gate automation services in ${countyData.name}?`,
      answer: `Yes. We install intrusion/fire alarm systems and smart gate automation with access control solutions across ${countyData.name} County.`,
    },
    {
      question: `How do I request a quote in ${countyData.name} County?`,
      answer: `Use our contact page with your location and security needs. Our Nairobi-based team will share a practical recommendation and quotation for ${countyData.name} County.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto w-full max-w-6xl">
        <Link href="/service-areas" className="text-sm font-semibold text-cyan-200 hover:underline">
          ← Back to Service Areas
        </Link>

        <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          Security Services in {countyData.name} County
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Kisam Technologies provides reliable, professional, and fast security installations in {" "}
          {countyData.name} County. Our Nairobi-based technical team supports both residential and
          commercial clients with complete surveillance and protection solutions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "CCTV installation and remote monitoring",
            "Intrusion and fire alarm systems",
            "Smart gate automation and access control",
            "Car alarm systems and anti-theft protection",
            "GPS vehicle and fleet tracking",
            "Preventive maintenance and ongoing support",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-black/70 p-4 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-300/30 bg-black/70 p-6">
          <h2 className="text-xl font-bold text-cyan-100">Request a Quote in {countyData.name}</h2>
          <p className="mt-3 text-sm text-slate-300">
            Tell us your site type, location, and preferred security setup. We will provide a
            practical recommendation and pricing.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950"
          >
            Contact Kisam Technologies
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-black/70 p-6">
          <h2 className="text-xl font-bold text-cyan-100">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-white/10 bg-black/60 p-4">
                <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
