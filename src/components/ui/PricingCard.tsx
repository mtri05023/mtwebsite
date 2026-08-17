import type { PricingPlan } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className={`relative rounded-lg border bg-white p-6 shadow-sm ${plan.popular ? "border-accent-500 shadow-soft" : "border-slate-200"}`}>
      {plan.popular ? (
        <span className="absolute right-5 top-5 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">Phổ biến</span>
      ) : null}
      <h3 className="pr-24 text-xl font-bold text-navy-900">{plan.name}</h3>
      <p className="mt-4 text-3xl font-bold text-navy-900">{plan.price}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">Số trang tham khảo: {plan.pages}</p>
      <p className="mt-6 text-sm font-semibold text-slate-700">Phù hợp:</p>
      <ul className="mt-3 space-y-3 text-sm text-slate-600">
        {plan.suitableFor.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent-600" aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm font-semibold text-slate-700">Bao gồm:</p>
      <ul className="mt-3 space-y-3 text-sm text-slate-600">
        {plan.features.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent-600" aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button href="/lien-he" className="mt-7 w-full" variant={plan.popular ? "primary" : "secondary"}>
        {plan.cta}
      </Button>
    </article>
  );
}
