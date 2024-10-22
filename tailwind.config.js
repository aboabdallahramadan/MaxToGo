/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primaryColor)",
        secondary: "var(--secondaryColor)",
        hoverPrimary: "var(--hoverPrimaryColor)"
      },
    },
  },
  plugins: [],
};
