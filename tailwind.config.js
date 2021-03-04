// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active', 'group-focus'],
      divideColor: ['group-hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
};
