const fallbackFonts = [
  "system-ui",
  "-apple-system",
  "Helvetica Neue",
  "sans-serif",
];
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#ff2247",
      },
    },
    fontFamily: {
      sans: ["var(--font-manrope)", ...fallbackFonts],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
