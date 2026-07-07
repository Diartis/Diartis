"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
  external?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "light",
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${x * 0.14}px, ${y * 0.22}px)`;
  }

  function onLeave() {
    const node = ref.current;
    if (node) node.style.transform = "translate(0px, 0px)";
  }

  const classes =
    variant === "light"
      ? "border-white bg-white text-black hover:bg-zinc-200"
      : "border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative inline-flex h-13 items-center justify-center overflow-hidden rounded-full border px-6 text-sm font-semibold uppercase tracking-[0.18em] transition-[transform,background,color,border-color] duration-300 focus:outline-none focus:ring-2 focus:ring-white/60 ${classes}`}
    >
      <span className="absolute inset-0 scale-0 rounded-full bg-white/20 opacity-0 transition duration-500 group-hover:scale-125 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2">
        {children}
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
