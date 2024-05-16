const fs = require("fs");
const path = require("path");
const themePath = path.join(__dirname, "data/theme.json");
const themeRead = fs.readFileSync(themePath, "utf8");
const theme = JSON.parse(themeRead);

let fontPrimary, fontPrimaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Make sure this matches your actual project files
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        purple: "#312849",
        green: "#45BF87",
        blue: "#32449B",
        pink: "#C13F81",
        red: "#FF8070",
        white: "#FFFFFF",
        black: "#000000",
        light: "#f6f6f6",
        primary: '#121212', // dark shade for primary elements
        secondary: '#FF6347', // vibrant color for secondary elements
        accent: '#4CAF50', // accent color for interactive elements
        background: '#f0f0f0', // background color for general areas
        text: '#444444', // default text color
        dark: '#040404', // almost black text color
        border: '#eaeaea', // border color for elements
        'theme-light': '#f6f6f6', // light version of theme
        'theme-dark': '' // dark version of theme, define if needed
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
      },
      backgroundSize: {
        "hero-md": "460px 350px", // Custom width and height
        "cta-chevron": "11px 22px", // Custom width and height
      },
      backgroundPosition: {
        "cta-chevron-right": "92% 58%", // Position the image
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
};