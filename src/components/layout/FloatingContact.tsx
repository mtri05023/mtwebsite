type FloatingContactProps = {
  phone: string;
  zalo: string;
};

export function FloatingContact({ phone, zalo }: FloatingContactProps) {
  return (
    <div className="floating-contact fixed bottom-6 right-6 z-30 hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Liên hệ nhanh</p>
      <div className="mt-3 grid gap-2">
        <a href={`tel:${phone}`} className="rounded-md bg-navy-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-navy-700">
          Gọi ngay
        </a>
        <a href={`https://zalo.me/${zalo}`} className="rounded-md border border-slate-200 px-3 py-2 text-center text-sm font-semibold text-navy-900 hover:border-accent-500 hover:text-accent-600">
          Zalo
        </a>
        <a href="/lien-he" className="rounded-md bg-accent-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-accent-600">
          Báo giá
        </a>
      </div>
    </div>
  );
}
