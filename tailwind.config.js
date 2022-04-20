// ./tailwind.config.js

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
     darkMode: false,
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [
      require('tw-elements/dist/plugin')
     ],
   }