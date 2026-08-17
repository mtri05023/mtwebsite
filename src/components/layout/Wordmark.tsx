import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-baseline gap-1.5 font-black tracking-wide ${className}`}>
      <span className="text-accent-600">MT</span>
      <span className="text-navy-900">WEBSITE</span>
    </Link>
  );
}
