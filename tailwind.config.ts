import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"]
      },
      colors: {
        bg: "#050510",
        "accent-purple": "#a855f7",
        "accent-cyan": "#22d3ee",
        "accent-blue": "#3b82f6"
      },
      boxShadow: {
        neon: "0 0 30px rgba(168, 85, 247, 0.7)",
        "neon-blue": "0 0 40px rgba(59,130,246,0.8)"
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(148,163,184,0.25), rgba(15,23,42,0.75))"
      },
      backdropBlur: {
        glass: "18px"
      }
    }
  },
  plugins: []
};

export default config;

