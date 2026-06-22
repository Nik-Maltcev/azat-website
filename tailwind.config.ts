import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003e7b",
        "primary-container": "#0055a5",
        "on-primary": "#ffffff",
        "on-primary-container": "#b0ccff",
        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#a8c8ff",
        "inverse-primary": "#a8c8ff",

        secondary: "#a04100",
        "secondary-container": "#fe6b00",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#572000",
        "secondary-fixed": "#ffdbcc",
        "secondary-fixed-dim": "#ffb693",

        tertiary: "#353f50",
        "tertiary-container": "#4c5668",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#c1cbe1",
        "tertiary-fixed": "#d9e3f9",
        "tertiary-fixed-dim": "#bdc7dc",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        surface: "#f7f9fb",
        "surface-dim": "#d8dadc",
        "surface-bright": "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef0",
        "surface-container-high": "#e6e8ea",
        "surface-container-highest": "#e0e3e5",
        "surface-variant": "#e0e3e5",
        "surface-tint": "#175eae",

        "on-surface": "#191c1e",
        "on-surface-variant": "#424751",
        "on-background": "#191c1e",
        background: "#f7f9fb",

        outline: "#727783",
        "outline-variant": "#c2c6d3",

        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eff1f3",
      },
      spacing: {
        "margin-desktop": "64px",
        base: "8px",
        "margin-mobile": "16px",
        gutter: "24px",
        "max-width": "1280px",
      },
      maxWidth: {
        content: "1280px",
      },
      fontFamily: {
        headline: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "technical-label": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
