import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#d4a574",
        studio: {
          bg: "rgb(var(--studio-bg-rgb) / <alpha-value>)",
          card: "rgb(var(--studio-card-rgb) / <alpha-value>)",
          border: "rgb(var(--studio-border-rgb) / <alpha-value>)",
          ivory: "rgb(var(--studio-ivory-rgb) / <alpha-value>)",
          muted: "rgb(var(--studio-muted-rgb) / <alpha-value>)",
          gold: "#d4a574",
          crimson: "rgb(var(--studio-crimson-rgb) / <alpha-value>)",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;