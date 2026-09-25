"use client";

import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

type MagneticLinkProps = { children: React.ReactNode; className?: string; href: string; target?: string; rel?: string };

export function MagneticLink({ children, className, ...props }: MagneticLinkProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 18, mass: 0.22 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  return <motion.a ref={ref} className={className} style={reduce ? undefined : { x: springX, y: springY }}
      onPointerMove={(event) => {
      if (!reduce && event.pointerType === "mouse" && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * .11);
        y.set((event.clientY - rect.top - rect.height / 2) * .11);
      }
    }}
      onPointerLeave={() => { x.set(0); y.set(0); }}
    {...props}>{children}</motion.a>;
}
