/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        hero: "url('/assets/BG(1).png')",
      },
      colors: {
        NavBg: "#00215C1A",
      },
      fontFamily: {
        title: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
