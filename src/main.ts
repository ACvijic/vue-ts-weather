import Vue from 'vue'
import App from './App.vue'
import store from './storage/store'
import axios from 'axios'

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.API_URL;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
