/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#BCA60E",
        secondary: "#272343",
        tertiary: "#FFFFFF",
        background: "#f7f7f4",
      },
      backgroundImage: () => ({
        gradientYellow: "linear-gradient(to right, #BCA60E, #C2B450)",
        gradientBlue: "linear-gradient(to right, #72EDF2, #5151E5)",
      }),
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        Montserrat: ["var(--font-montserrat)"],
        Inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
