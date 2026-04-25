import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f5f2ea",
        parchment: "#ece5d8",
        stone: "#d7d2c7",
        taupe: "#8d857a",
        charcoal: "#2f2d2a",
        warmblack: "#1b1917",
        bronze: "#7b6854",
        antique: "#a88f63",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 22px 48px rgba(27, 25, 23, 0.12)",
        soft: "0 10px 28px rgba(27, 25, 23, 0.08)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(148deg, rgba(27,25,23,0.78), rgba(27,25,23,0.52) 42%, rgba(123,104,84,0.36))",
      },
      borderRadius: {
        xl: "0.85rem",
        "2xl": "1.15rem",
      },
    },
  },
  plugins: [],
};

export default config;
