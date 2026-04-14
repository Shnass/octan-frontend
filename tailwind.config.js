module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        octanred: '#de1f17',
        octanblack: '#010101',
      },
    },
  },
  plugins: [],
  safelist: [
    "w-1/2",
    "w-1/3",
    "w-1/4",
    "w-1/5"
  ],
};