import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nordic: {
          bg: "#F8FAFA",      // Pearl background
          ice: "#E7F1F3",     // Soft ice-blue section background
          navy: "#122A38",    // Midnight navy text & headings
          aqua: "#70AEB3",    // Muted aqua accent & primary CTAs
          "aqua-dark": "#5A9499",
          border: "#DDE4E6",  // Pale grey border
          sand: "#D6B99A",    // Warm sand accent
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'nordic-soft': '0 4px 20px -2px rgba(18, 42, 56, 0.05)',
        'nordic-card': '0 10px 30px -4px rgba(18, 42, 56, 0.07)',
        'nordic-elevated': '0 20px 40px -10px rgba(18, 42, 56, 0.12)',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
    },
  },
  plugins: [],
};

export default config;
