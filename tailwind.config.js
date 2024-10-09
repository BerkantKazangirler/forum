/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      'colors': {
        'main-bg': '#1E252B',
        'element-bg': '#262D34',
        'input-bg': '#2C353D',
        'placeholder': '#858EAD',
        'button-bg': '#FF6934',
      },
      'width': {
        '128': '49rem',
      }
    },
  },
  plugins: [],
}

