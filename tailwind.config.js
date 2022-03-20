module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        18: 'repeat(18, minmax(0, 1fr))'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
