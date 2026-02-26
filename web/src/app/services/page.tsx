import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-black text-white sm:text-4xl">Security Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          We deliver complete surveillance and protection solutions with clear implementation plans,
          professional installation, and dependable support.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
}
