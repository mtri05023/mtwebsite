const trustItems = ["Báo giá trước khi làm", "Responsive", "Hỗ trợ sau bàn giao"];

export function TrustValueStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-5">
      <div className="container-page grid gap-3 text-sm font-bold text-navy-900 sm:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl bg-navy-50 px-4 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs text-white" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
