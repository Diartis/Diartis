"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { workCategories } from "@/data/site";
import { SectionReveal } from "./SectionReveal";
import { WorkVisual } from "./WorkVisual";

type WorkCategory = (typeof workCategories)[number];

export function WorkSection() {
  const [active, setActive] = useState<WorkCategory | null>(null);

  return (
    <section id="work" className="section-shell bg-[#0b0b0b]" aria-labelledby="work-title">
      <SectionReveal className="section-heading">
        <p className="eyebrow">Selected Disciplines</p>
        <h2 id="work-title">Category-led work, built for flexible visual systems.</h2>
      </SectionReveal>
      <div className="masonry mt-16">
        {workCategories.map((item, index) => (
          <SectionReveal key={item.title} delay={index * 0.035}>
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group block w-full overflow-hidden rounded-lg border border-white/10 bg-[#141414] text-left shadow-2xl shadow-black/35 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
                  <WorkVisual tone={item.tone} label={item.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="mb-4 flex items-center justify-between text-white/55">
                    <span className="text-xs uppercase tracking-[0.18em]">0{index + 1}</span>
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">{item.description}</p>
                </div>
              </div>
            </button>
          </SectionReveal>
        ))}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end bg-black/75 p-3 backdrop-blur-xl md:items-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} gallery`}
          >
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 80, opacity: 0, scale: 0.97 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="mx-auto max-h-[88vh] w-full max-w-6xl overflow-y-auto rounded-lg border border-white/10 bg-[#0f0f0f] p-4 shadow-2xl md:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow">Gallery</p>
                  <h3 className="mt-3 text-4xl font-semibold text-white md:text-6xl">{active.title}</h3>
                  <p className="mt-4 max-w-2xl text-white/62">{active.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close gallery"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {active.images.map((image, index) => (
                  <div key={image} className={index === 1 ? "md:pt-10" : ""}>
                    <div className="overflow-hidden rounded-lg border border-white/10">
                      <WorkVisual tone={active.tone} label={image} />
                    </div>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/45">{image}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
