/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require('tailwindcss-animated')],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        black: {
          ...require('daisyui/src/theming/themes')['[data-theme=black]'],
          'primary-content': '#141110',
          neutral: '#131315',
          accent: '#C18C5D',
          'base-100': '#0B0B0B',
          secondary: '#255957',
        },
        aqua: {
          ...require('daisyui/src/theming/themes')['aqua'],
          'info-content': '#234076',
          neutral: '#357db1',
          accent: '#5448C8',
        },
      },
    ],
  },
  theme: {
    extend: {
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        98: '0.98',
      },
      screens: {
        xs: '500px',
      },
    },
  },
};
