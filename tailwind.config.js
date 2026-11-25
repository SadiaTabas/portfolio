/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F3EEEA",
          light: "#FBF9F7",
          dark: "#E8E2DC",
        },
        charcoal: {
          DEFAULT: "#171717",
          light: "#242424",
          card: "#1E1E1E",
          dark: "#0F0F0F",
        },
        brandOrange: {
          DEFAULT: "#FF8500",
          hover: "#E67700",
          light: "#FFF1E5",
          muted: "rgba(255, 133, 0, 0.12)",
        },
        editorialBlack: "#171717",
        editorialGray: {
          DEFAULT: "#777777",
          light: "#999999",
          dark: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
