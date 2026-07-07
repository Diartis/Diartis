"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const headline = "DIARTIS".split("");

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 160]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.15]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen overflow-hidden px-5 pt-32 md:px-8"
      aria-labelledby="hero-title"
    >
      <div className="grain" aria-hidden="true" />
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-x-6 top-28 h-64 rounded-[100%] border border-white/[0.05] md:inset-x-20 md:h-96"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end pb-10 md:pb-16">
        <div className="mb-9 flex items-center justify-between gap-6 border-y border-white/10 py-4 text-xs uppercase tracking-[0.18em] text-white/55">
          <span>Graphic Design</span>
          <span className="hidden md:inline">Motion Design</span>
          <span>Video Editing</span>
        </div>
        <h1
          id="hero-title"
          className="max-w-[12ch] text-[19vw] font-black uppercase leading-[0.78] tracking-[-0.04em] text-white md:text-[14vw] xl:text-[184px]"
        >
          {headline.map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ y: 120, opacity: 0, filter: "blur(16px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-[1fr_0.78fr] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.75 }}
            className="max-w-3xl text-balance text-xl leading-8 text-white/78 md:text-3xl md:leading-[1.2]"
          >
            Multidisciplinary Designer specializing in Graphic Design, Motion Design, and Video
            Editing-bringing ideas to life through impactful visuals and storytelling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.75 }}
            className="flex flex-wrap gap-3 md:justify-end"
          >
            <MagneticButton href="#work">View Work</MagneticButton>
            <MagneticButton href="#contact" variant="dark">
              Contact
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
