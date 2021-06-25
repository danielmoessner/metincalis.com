const typography = require('@tailwindcss/typography');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Primary
        'yellow-050': '#FFFBEA',
        'yellow-100': '#FFF3C4',
        'yellow-200': '#FCE588',
        'yellow-300': '#FADB5F',
        'yellow-400': '#F7C948',
        'yellow-500': '#F0B429',
        'yellow-600': '#DE911D',
        'yellow-700': '#CB6E17',
        'yellow-800': '#B44D12',
        'yellow-900': '#8D2B0B',

        'blue-050': '#E3F8FF',
        'blue-100': '#B3ECFF',
        'blue-200': '#81DEFD',
        'blue-300': '#5ED0FA',
        'blue-400': '#40C3F7',
        'blue-500': '#2BB0ED',
        'blue-600': '#1992D4',
        'blue-700': '#127FBF',
        'blue-800': '#0B69A3',
        'blue-900': '#035388',

        // Neutrals
        'gray-050': '#F7F7F7',
        'gray-100': '#E1E1E1',
        'gray-200': '#CFCFCF',
        'gray-300': '#B1B1B1',
        'gray-400': '#9E9E9E',
        'gray-500': '#7E7E7E',
        'gray-600': '#626262',
        'gray-700': '#515151',
        'gray-800': '#3B3B3B',
        'gray-900': '#222222',

        // Supporting
        'red-050': '#FFE3E3',
        'red-100': '#FFBDBD',
        'red-200': '#FF9B9B',
        'red-300': '#F86A6A',
        'red-400': '#EF4E4E',
        'red-500': '#E12D39',
        'red-600': '#CF1124',
        'red-700': '#AB091E',
        'red-800': '#8A041A',
        'red-900': '#610316',

        'teal-050': '#EFFCF6',
        'teal-100': '#C6F7E2',
        'teal-200': '#8EEDC7',
        'teal-300': '#65D6AD',
        'teal-400': '#3EBD93',
        'teal-500': '#27AB83',
        'teal-600': '#199473',
        'teal-700': '#147D64',
        'teal-800': '#0C6B58',
        'teal-900': '#014D40',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [typography, aspectRatio, forms],
};
