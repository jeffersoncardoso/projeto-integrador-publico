import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import Toasted from 'vue-toasted';

Vue.use(Toasted)
Vue.prototype.$http = axios;

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  Vue.toasted.show(error.message, { position: 'bottom-center', duration: 2000 })
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
