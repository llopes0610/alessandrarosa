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
        /* ===== Brand Tokens ===== */
        primary: "#4f3f2f",
        primaryMuted: "#6a5946",

        secondary: "#cdb9a1",
        secondarySoft: "#e6d8c8",

        border: "#e7e5e4",

        /* ===== Neutral Base ===== */
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },

        /* ===== Warm Palette (support) ===== */
        sand: {
          50: "#faf7f2",
          100: "#f3ede3",
          200: "#e7dccb",
          300: "#d9c7ad",
          400: "#c5aa8a",
          500: "#b08f6a",
          600: "#9a7854",
          700: "#7d5f45",
          800: "#5f4635",
          900: "#3f2e24",
        },
      },

      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },


      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
