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
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      franklin: ['Libre Franklin', 'sans-serif'],
    },
  },
};
