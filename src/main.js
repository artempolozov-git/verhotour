import Vue from 'vue'
import App from './App.vue'

import router from './router'

import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'
Vue.use(VueScrollProgressBar);

import '@morioh/v-lightbox/dist/lightbox.css';
import Lightbox from '@morioh/v-lightbox'
Vue.use(Lightbox);

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');