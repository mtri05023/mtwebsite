type MobileContactBarProps = {
  phone: string;
  zalo: string;
};

export function MobileContactBar({ phone, zalo }: MobileContactBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_25px_rgba(7,29,51,0.08)] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a href={`tel:${phone}`} className="rounded-md bg-navy-900 px-2 py-3 text-center text-sm font-bold text-white">
          Gọi ngay
        </a>
        <a href={`https://zalo.me/${zalo}`} className="rounded-md border border-slate-200 px-2 py-3 text-center text-sm font-bold text-navy-900">
          Zalo
        </a>
        <a href="/lien-he" className="rounded-md bg-accent-500 px-2 py-3 text-center text-sm font-bold text-white">
          Báo giá
        </a>
      </div>
    </div>
  );
}
