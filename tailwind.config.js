/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // To center the container by default
        padding: "1rem", // Add default padding
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1400px", // Increase the max width for xl
          "2xl": "1600px", // Add a custom larger breakpoint
        },
      },
    },
  },
  plugins: [],
};
