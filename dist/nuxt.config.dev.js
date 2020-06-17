"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  mode: 'universal',

  /*
  ** Headers of the page
  * Title is the title shown in the tab/top of the page
  */
  head: {
    title: 'Jonah Arts',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'Jonah Arts',
      name: 'Jonah Arts',
      content: 'Jonah Arts Store/Portfolio'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],

  /*
  ** Nuxt.js modules
  */
  modules: [// Doc: https://bootstrap-vue.js.org
  'bootstrap-vue/nuxt'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend: function extend(config, ctx) {}
  }
};
exports["default"] = _default;