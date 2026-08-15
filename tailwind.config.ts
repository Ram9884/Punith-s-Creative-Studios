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
        studio: {
          bg: "#0A0A0A",
          card: "#141414",
          border: "#242424",
          ivory: "#F4F1EA",
          muted: "#9CA3AF",
          gold: "#D4AF37",
          crimson: "#8B1E2D",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;