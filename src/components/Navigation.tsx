"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/content";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("home");
  useEffect(() => { const obs = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55%" }); navItems.forEach(n => { const el = document.getElementById(n.toLowerCase()); if (el) obs.observe(el); }); return () => obs.disconnect(); }, []);
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Primary navigation"><button className="logo" onClick={() => go("home")} aria-label="Back to top">AT<span>.</span></button><div className="nav-links">{navItems.map(n => <button key={n} className={active === n.toLowerCase() ? "active" : ""} onClick={() => go(n.toLowerCase())}>{n}</button>)}</div><div className="nav-actions"><ThemeToggle/><button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu size={19}/></button></div></nav><AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }} animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }} exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}><button className="menu-close" onClick={() => setOpen(false)} aria-label="Close menu"><X/></button>{navItems.map((n,i) => <motion.button key={n} initial={{ opacity:0,y:20 }} animate={{opacity:1,y:0}} transition={{delay:i*.04}} onClick={() => go(n.toLowerCase())}><span>0{i+1}</span>{n}</motion.button>)}</motion.div>}</AnimatePresence></header>;
}
