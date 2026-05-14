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
          800: "#1e180f",
          700: "#2a2215",
        },
        amber: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        cream: {
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
        },
        rose: {
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 30% 20%, hsla(38,92%,50%,0.12) 0px, transparent 50%), radial-gradient(at 80% 10%, hsla(0,84%,60%,0.08) 0px, transparent 50%), radial-gradient(at 10% 70%, hsla(38,80%,40%,0.08) 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "spin-slow": "spin 12s linear infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
