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
        brand: {
          red: "#E01F26",
          "red-dark": "#B8171D",
          "red-light": "#FF3B42",
          black: "#0A0A0A",
          "black-pure": "#050505",
          "black-card": "#111111",
          dark: "#141414",
          "dark-2": "#1A1A1A",
          "dark-3": "#242424",
          gray: "#737373",
          "gray-light": "#A3A3A3",
          "gray-ultra": "#E5E5E5",
          white: "#FAFAFA",
        },
      },
      fontFamily: {
        racing: ["var(--font-anton)", "var(--font-bebas)", "Impact", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wave-drift": "waveDrift 15s ease-in-out infinite alternate",
        "glow-pulse": "glowPulse 3s ease-in-out infinite alternate",
        "scroll-left": "scrollLeft 25s linear infinite",
      },
      keyframes: {
        waveDrift: {
          "0%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "50%": { transform: "translate(-30px, 20px) scale(1.08) rotate(3deg)" },
          "100%": { transform: "translate(20px, -25px) scale(0.95) rotate(-2deg)" },
        },
        glowPulse: {
          "0%": { opacity: "0.25", filter: "blur(40px)" },
          "100%": { opacity: "0.6", filter: "blur(60px)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
