// src/styles/theme/colors.ts

export const colors = {
    //   Base Backgrounds
    background: {
        page: "#F9FAFB",        // main app background
        section: "#FFFFFF",     // cards / sections
        subtle: "#F1F5F9",      // alternate sections
    },

    //   Text Colors
    text: {
        primary: "#0F172A",     // titles, headings
        secondary: "#334155",   // body text
        muted: "#64748B",       // captions, labels
        disabled: "#94A3B8",    // disabled text
        inverse: "#FFFFFF",    // text on dark / accent bg
    },

    //    Accent / Brand
    brand: {
        primary: "#2563EB",     // main accent
        hover: "#1D4ED8",       // hover state
        soft: "#DBEAFE",        // light bg for tags, hovers
    },

    //   Borders & Dividers
    border: {
        default: "#E5E7EB",
        active: "#2563EB",
        subtle: "#CBD5E1",
    },

    //   Status Colors
    status: {
        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626",
        info: "#0EA5E9",
    },

    //   Shadows (used in CSS-in-JS)
    shadow: {
        sm: "0 1px 2px rgba(15, 23, 42, 0.05)",
        md: "0 4px 6px rgba(15, 23, 42, 0.08)",
    },
} as const;