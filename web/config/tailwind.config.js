module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'redwood-red': '#CB452B',
      },
      backgroundImage: {
        forest: "url('/public/forest.svg')",
        icon: "url('/public/redwood-icon.svg')",
      },
    },
  },
  plugins: [],
}
