module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
      },
      colors: {
        oceanblue: '#3fe0d0',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
      fontSize: ['hover', 'focus'],
      textColor: ['active'],
      textOpacity: ['active'],
      transform: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      scale: ['hover', 'active'],
      rotate: ['hover', 'active'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};