import Vue from 'vue';
import App from './App.vue';
import router from './router';
import $ from 'jquery';
import axios from './axios'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
