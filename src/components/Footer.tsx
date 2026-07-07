import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-5 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="text-[18vw] font-black uppercase leading-none tracking-[-0.06em] text-white md:text-[11vw]">
            DIARTIS
          </p>
          <Link
            href="#top"
            aria-label="Back to top"
            className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <ArrowUp className="size-5" />
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DIARTIS. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
