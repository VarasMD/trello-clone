/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        danger: colors.red,
        secondary: colors.gray,
      },
      container: {
        screen: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          '2x1': '1536px',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

