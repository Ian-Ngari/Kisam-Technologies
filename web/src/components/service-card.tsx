import Link from "next/link";
import { Car, Camera, MapPin, ShieldAlert, Waypoints } from "lucide-react";
import type { Service } from "@/lib/services";

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const className = "text-cyan-200";

  if (icon === "camera") return <Camera size={22} className={className} />;
  if (icon === "alarm") return <ShieldAlert size={22} className={className} />;
  if (icon === "gate") return <Waypoints size={22} className={className} />;
  if (icon === "car") return <Car size={22} className={className} />;
  return <MapPin size={22} className={className} />;
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black/70 p-5 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="text-lg font-bold text-white">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex rounded-lg border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
      >
        Learn More
      </Link>
    </article>
  );
}
