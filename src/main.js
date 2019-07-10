import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import Toasted from 'vue-toasted';
import VModal from 'vue-js-modal';
import VeeValidate from "vee-validate";

import LayoutAdmin from './components/layout/LayoutAdmin'
import LayoutServicos from './components/layout/LayoutServicos'
import LayoutLogin from './components/layout/LayoutLogin'

Vue.component('layout-admin', LayoutAdmin)
Vue.component('layout-servicos', LayoutServicos)
Vue.component('layout-login', LayoutLogin)

import VPassword from './components/input/v-password'
Vue.component('v-password', VPassword)

import CardServico from './components/card/card-servico'
Vue.component('card-servico', CardServico)

import CardSistema from './components/card/card-sistema'
Vue.component('card-sistema', CardSistema)

import CardUtilitario from './components/card/card-utilitario'
Vue.component('card-utilitario', CardUtilitario)

Vue.use(Toasted)
Vue.use(VModal)
Vue.use(VeeValidate, { inject: false });
Vue.prototype.$http = axios

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Vue.toasted.show(error.message, { position: 'bottom-center', duration: 2000 })
  return Promise.reject(error);
});

Vue.config.productionTip = false

let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
