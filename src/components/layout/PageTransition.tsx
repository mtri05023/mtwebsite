"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    setIsEntering(false);
    const frame = requestAnimationFrame(() => setIsEntering(true));

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <main key={pathname} className={`page-transition ${isEntering ? "is-entering" : ""}`}>
      {children}
    </main>
  );
}
