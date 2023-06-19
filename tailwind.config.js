/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      containers: {
        xs: "190px",
        sm: "250px",
        lg: "390px",
        xl: "450px",
        "2xl": "500px",
        "3xl": "800px",
        "4xl": "900px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
