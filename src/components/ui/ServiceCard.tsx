import Link from "next/link";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative min-h-72 overflow-hidden rounded-lg border border-slate-200 bg-navy-900 p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="absolute inset-0 service-card-bg" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/85 to-navy-900/45" aria-hidden="true" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-xl font-black text-white ring-1 ring-white/20" aria-hidden="true">
          {service.icon}
        </div>
        <h3 className="mt-7 text-2xl font-black text-white">{service.title}</h3>
        <p className="mt-4 min-h-24 text-sm leading-6 text-slate-200">{service.description}</p>
        <Link href={service.href} className="mt-6 inline-flex min-h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-bold text-navy-900 hover:text-accent-600">
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
