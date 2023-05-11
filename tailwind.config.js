/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        neu: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;'
      },
    },
  },
  plugins: [],

}

