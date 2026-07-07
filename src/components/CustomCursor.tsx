"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 45 });
  const springY = useSpring(y, { stiffness: 700, damping: 45 });

  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };
    const enter = (event: Event) => {
      if ((event.target as HTMLElement).closest("a, button, [data-cursor]")) {
        setHovered(true);
      }
    };
    const leave = () => setHovered(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", enter);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden size-5 rounded-full border border-white/80 mix-blend-difference lg:block"
      style={{ x: springX, y: springY }}
      animate={{ scale: hovered ? 2.7 : 1, opacity: hovered ? 0.9 : 0.7 }}
      transition={{ duration: 0.22 }}
    />
  );
}
