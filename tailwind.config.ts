import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f3eb",
        stone: "#d9cfbf",
        taupe: "#b6aa98",
        charcoal: "#2b2a27",
        gold: "#a58b58",
        olive: "#59614e",
        bronze: "#7d6a52",
        warmblack: "#1b1916",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        mist: "0 18px 60px rgba(24, 21, 18, 0.08)",
        float: "0 12px 28px rgba(24, 21, 18, 0.10)",
      },
      backgroundImage: {
        veil: "radial-gradient(circle at 20% 10%, rgba(247,243,235,0.55), transparent 45%), linear-gradient(130deg, rgba(27,25,22,0.54), rgba(43,42,39,0.72))",
      },
    },
  },
  plugins: [],
};

export default config;
