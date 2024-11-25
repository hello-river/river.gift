/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/index.html',
      './src/**/*.svelte'
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}

