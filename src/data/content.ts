import { Code2, PenTool, Database, Cog, Box } from "lucide-react";

export const navItems = ["Home", "About", "Experience", "Work", "Playground", "Skills", "Education", "Contact"];

export const experiences = [
  { company: "UST", role: "Frontend Designer and Developer", location: "Trivandrum", date: "January 2024 — Present", title: "Enterprise Healthcare Information Platform", client: "Confidential US Healthcare Client", description: "Modernized a 15-year-old enterprise healthcare metadata platform for a confidential US healthcare client.", achievement: "Recognized by the client for introducing useful features that reduced effort and improved workflows.", tech: ["React", "TypeScript", "Figma", "Azure DevOps", "Bitbucket"] },
  { company: "NTRL", role: "Full Stack Developer · Web Designer and Developer · Mobile Designer and Developer", location: "Remote", date: "January 2026 — July 2026", description: "Built an end-to-end digital fitness ecosystem comprising public website, admin portal, coach portal and mobile application.", achievement: "Designed and developed the complete platform, including a 60+ screen production app released on the Apple App Store and Google Play Store.", tech: ["React", "React Native", "TypeScript", "Figma", "GitHub"] },
];

export const skills = [
  { title: "Frontend Engineering", icon: Code2, items: ["React.js", "TypeScript", "JavaScript ES6+", "Next.js", "React Native", "Expo", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Bootstrap", "Vite"] },
  { title: "UI/UX Design", icon: PenTool, items: ["Figma", "Adobe XD", "Adobe Photoshop", "Design Systems", "Wireframing", "Prototyping", "Responsive Design", "User Experience", "User Interface"] },
  { title: "Backend & APIs", icon: Database, items: ["RESTful APIs", "Swagger", "Supabase", "PostgreSQL", "MySQL"] },
  { title: "DevOps & Tools", icon: Cog, items: ["Azure DevOps", "Agile", "Git", "GitHub", "Vercel", "Google Play Console", "Apple App Store Connect"] },
  { title: "Modern Technologies", icon: Box, items: ["Three.js", "React Three Fiber", "Generative AI", "Prompt Engineering"] },
];
