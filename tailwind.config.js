/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    colors: {
      baseColor: '#fffd7f',
      dark_1: '#111111',
      dark_2: '#222222',
      dark_3: '#333333',
      black: '#000000',
      white: '#ffffff',
      transparent: 'transparent',
    },

    extend: {},
    screens: {
      xs: { min: '375px', max: '639px' },

      sm: { min: '640px', max: '767px' },

      md: { min: '768px', max: '1023px' },

      lg: { min: '1024px', max: '1279px' },

      xl: { min: '1280px', max: '1535px' },

      '2xl': { min: '1536px' },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
