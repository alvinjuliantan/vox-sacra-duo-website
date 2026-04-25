import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f2e9",
        warmstone: "#e6ddcf",
        taupe: "#b8ab97",
        charcoal: "#2f2b28",
        mutedgold: "#9a875f",
        olive: "#747058",
        bronze: "#7c6950",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 18px 45px rgba(47, 43, 40, 0.12)",
        soft: "0 8px 20px rgba(47, 43, 40, 0.08)",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(150deg, rgba(47,43,40,0.72), rgba(47,43,40,0.44) 40%, rgba(116,112,88,0.38))",
      },
      borderRadius: {
        "2xl": "1.35rem",
      },
    },
  },
  plugins: [],
};

export default config;
