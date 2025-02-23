/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        gray: '#e2e8f0',
        black: '#000000',
        alpha: '#2A25CC',
        alphaDark: '#151366',
        alphaLight: '#bfbef0',
        bravo: '#DB0BB2',
        bravoDark: '#6e0659',
        charly: '#8D1EE3',
        delta: '#1E7DE3',
        epsilon: '#1CD9D9',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-in both',
        'fade-out': 'fadeOut 400mx ease-in both',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      franklin: ['Libre Franklin', 'sans-serif'],
    },
  },
};
