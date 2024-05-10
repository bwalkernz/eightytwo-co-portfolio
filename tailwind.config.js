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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        red: "#ff2247",
      },
    },
    fontFamily: {
      //sans: ["var(--font-wix_madefor_text)", ...fallbackFonts],
      serif: ["var(--font-items_font)", ...fallbackFonts],
      sans: ["var(--font-mont_font)", ...fallbackFonts],
      sansReg: ["var(--font-mont_reg_font)", ...fallbackFonts],
    },
  },
  plugins: [],
};
