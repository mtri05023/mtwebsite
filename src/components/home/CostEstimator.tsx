"use client";

import { useState } from "react";
import { estimatorOptions, formatVnd, websiteTypes } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CostEstimator() {
  const [websiteType, setWebsiteType] = useState(websiteTypes[1].label);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(["SEO cơ bản", "Form liên hệ", "Zalo"]);
  const selectedType = websiteTypes.find((type) => type.label === websiteType) ?? websiteTypes[1];
  const optionsTotal = estimatorOptions
    .filter((option) => selectedOptions.includes(option.label))
    .reduce((total, option) => total + option.price, 0);
  const lowPrice = selectedType.basePrice === null ? null : selectedType.basePrice + optionsTotal;
  const highPrice = lowPrice === null ? null : Math.ceil((lowPrice * 1.18) / 100000) * 100000;

  function toggleOption(option: string) {
    setSelectedOptions((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option]
    );
  }

  return (
    <section className="section-spacing bg-navy-50">
      <div className="container-page">
        <SectionTitle title="Ước tính chi phí" description="Giao diện Phase 1 để khách chọn nhu cầu. Logic tính giá thật có thể thêm ở Phase 2." />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <label htmlFor="website-type" className="text-sm font-bold text-navy-900">
              Loại website
            </label>
            <select
              id="website-type"
              value={websiteType}
              onChange={(event) => setWebsiteType(event.target.value)}
              className="mt-3 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-navy-900 outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            >
              {websiteTypes.map((type) => (
                <option key={type.label}>{type.label}</option>
              ))}
            </select>
            <fieldset className="mt-7">
              <legend className="text-sm font-bold text-navy-900">Các tùy chọn</legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {estimatorOptions.map((option) => (
                  <label key={option.label} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-md border border-slate-200 px-4 text-sm font-medium text-slate-700 hover:border-accent-500">
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(option.label)}
                      onChange={() => toggleOption(option.label)}
                      className="h-4 w-4 accent-accent-500"
                    />
                    <span className="flex flex-1 items-center justify-between gap-3">
                      <span>{option.label}</span>
                      <span className="text-xs text-slate-500">
                        {option.price === 0 ? "Miễn phí" : `+${formatVnd(option.price)}${option.suffix ?? ""}`}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <aside className="rounded-lg border border-accent-500 bg-white p-6 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Chi phí dự kiến</p>
            <p className="mt-4 text-3xl font-black text-navy-900">
              {lowPrice === null || highPrice === null ? "Cần tư vấn" : `${formatVnd(lowPrice)} – ${formatVnd(highPrice)}`}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Dựa trên lựa chọn: <strong>{websiteType}</strong> và {selectedOptions.length} tùy chọn đang chọn.
            </p>
            <p className="mt-4 rounded-md bg-navy-50 p-4 text-sm leading-6 text-slate-600">
              Đây là mức ước tính. Giá chính xác sẽ được báo sau khi trao đổi yêu cầu.
            </p>
            <Button href="/lien-he" className="mt-7 w-full">Nhận báo giá chính xác</Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
