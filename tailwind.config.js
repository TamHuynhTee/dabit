/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  mode: 'jit',
  darkMode: 'media',
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
