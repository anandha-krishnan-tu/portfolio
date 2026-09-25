import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://anandhakrishnan.dev"),
  title: "Anandhakrishnan T U — Frontend Engineer & UI/UX Developer",
  description: "Frontend Engineer based in Kochi creating scalable web and mobile applications with React, React Native and thoughtful UI/UX design.",
  keywords: ["Frontend Engineer", "React Developer", "React Native", "UI UX", "Kochi"],
  authors: [{ name: "Anandhakrishnan T U" }],
  openGraph: { title: "Anandhakrishnan T U — Frontend Engineer & UI/UX Developer", description: "Scalable digital products shaped by thoughtful UI/UX, technology and interaction.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "Anandhakrishnan T U — Frontend Engineer", description: "Frontend engineering, UI/UX and creative digital experiences." },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f4f4ef" }, { media: "(prefers-color-scheme: dark)", color: "#090d0e" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()` }} /></head><body className={manrope.variable}>{children}</body></html>;
}
