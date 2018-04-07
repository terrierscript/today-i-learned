import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";

const theme = {
  baseFontSize: "18px",
  googleFonts: [
    {
      name: "Quicksand",
      styles: ["400", "500", "700"]
      // styles: [400, 500]
    }
  ],
  headerFontFamily: ["Quicksand", "Helvetica"],
  bodyFontFamily: [
    "-apple-system,BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  ],
  baseLineHeight: 1.45,
  includeNormalize: true
};

const typography = new Typography(theme);

export default typography;