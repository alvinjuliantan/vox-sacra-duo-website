import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f4ec",
        stone: "#d9cdbc",
        burgundy: "#5a1e2b",
        charcoal: "#2d2a28",
        gold: "#a58f63",
        warmblack: "#171412"
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        elegant: "0 10px 35px rgba(23, 20, 18, 0.12)",
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg, rgba(90,30,43,0.92), rgba(23,20,18,0.78))'
      }
    },
  },
  plugins: [],
};
export default config;
