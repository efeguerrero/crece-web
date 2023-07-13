/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        gray: '#e2e8f0',
        black: '#000000',
        alpha: '#2A25CC',
        alphaDark: '#151366',
        bravo: '#DB0BB2',
        charly: '#8D1EE3',
        delta: '#1E7DE3',
        epsilon: '#1CD9D9',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
};
