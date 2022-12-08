/** @type {import('tailwindcss').Config} */

/* eslint-disable */ 

module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './src/*.html',
    './src/script/component/*.js'
  ],
  // content: [
  //   './dist/*.html',
  //   "./node_modules/flowbite/**/*.js"
  //   ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
