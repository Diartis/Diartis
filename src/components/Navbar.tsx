"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(11,11,11,0)", "rgba(11,11,11,0.72)"],
  );

  return (
    <motion.header
      style={{ background }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/0 px-5 py-4 backdrop-blur-xl md:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Primary navigation">
        <Link
          href="#top"
          className="text-sm font-black uppercase tracking-[0.24em] text-white focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          DIARTIS
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-[73px] z-40 bg-[#0b0b0b]/98 px-6 py-10 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-5 text-4xl font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
