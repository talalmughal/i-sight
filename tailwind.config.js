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
        "gray-900": {
          background: "#000000",
          opacity: "0.7",
        },
        "blue-500": "#2745EA",
        primary: "#2745EA",
        background: "#121212",
        black: "#000000",
        white: "#ffffff",
        sidebarBg: "#010101",
        gray: "#72767C",
        cardsBg: "#090909",
      },
      screens: {
        xxl: "1440px",
        xxxl: "1720px",
        1920: "1920px",
        mobile: "500px",
      },
      backgroundImage: {
        footer:
          "linear-gradient(151.46deg, rgba(39, 69, 234, 0.2) 2.82%, rgba(207, 123, 244, 0.2) 106.9%)",
        landing: "url(/svgs/LandingBg.svg)",
        landingBanner: "url(/svgs/LandingPageBannerBg.svg)",
        coins: "linear-gradient(90deg, #2745EA 2.94%, #CF7BF4 100%)",
        cardBg: "linear-gradient(90deg, #2745EA 0%, #CF7BF4 100%)",
        helpCenter: "url(/svgs/sidebar/HelpCenter.svg)",
      },
    },
  },
  plugins: [],
};
