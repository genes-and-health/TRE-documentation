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