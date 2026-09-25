"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px -8%" }} transition={{ duration: .62, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) { const reduce=useReducedMotion();return <motion.div className="section-label" initial={reduce?false:{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-8% 0px -8%"}} transition={{duration:.45,ease:[.22,1,.36,1]}}><span>/{number}</span><span>{children}</span></motion.div>; }
export function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(x => <span key={x}>{x}</span>)}</div>; }
