module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 900: "#0b438d", A400: "#1f7bf4" },
        orange: { A200: "#ffa043", A700: "#ff5f00" },
        blue_gray: { 400: "#84818a", 700: "#46467f" },
        light_blue: { A400: "#00aaff" },
        gray: {
          100: "#f6f6f6",
          200: "#e8e8e8",
          800: "#484848",
          900: "#202020",
          "900_b7": "#202020b7",
        },
        green: { A700: "#0aa630" },
        red: { A700_01: "#eb001b", A700: "#fc0000" },
        black: { "900_14": "#00000014" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", roboto: "Roboto" },
      boxShadow: { bs: "0px 1px  3px 0px #00000014" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
