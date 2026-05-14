import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0f0d0a",
          900: "#161209",
          800: "#1a1510",
          700: "#211a12",
          600: "#2e2212",
        },
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
        },
        rose: {
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
        },
        cream: {
          50:  "#fffbf0",
          100: "#fef3c7",
          200: "#fde68a",
        },
      },
      fontFamily: {
        sans:    ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        "dish":     "0 32px 64px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5)",
        "dish-sm":  "0 16px 40px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4)",
        "amber-glow": "0 0 48px rgba(217,119,6,0.22), 0 0 96px rgba(217,119,6,0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
