/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        teal: {
          "100": "#3d8085",
          "200": "rgba(61, 128, 133, 0.87)",
        },
        darkturquoise: {
          "100": "rgba(59, 217, 233, 0.45)",
          "200": "rgba(59, 217, 233, 0.01)",
          "300": "rgba(59, 217, 233, 0.3)",
        },
        white: "#fff",
        gray: "#fbfbfa",
        writing: "#8d8a8a",
        black: "#000",
        cadetblue: "#57999e",
        darkslateblue: "#2052ac",
      },
      spacing: {},
      fontFamily: {
        syne: "Syne",
        inter: "Inter",
      },
      borderRadius: {
        "21xl": "40px",
        "3xs": "10px",
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      lgi: "19px",
      xl: "20px",
      base: "16px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


