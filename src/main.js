import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import axios from 'axios'
import Toasted from 'vue-toasted';
import VModal from 'vue-js-modal';
import VeeValidate from "vee-validate";

Vue.use(Toasted)
Vue.use(VModal)
Vue.use(VeeValidate, { inject: false });
Vue.prototype.$http = axios;

Vue.mixin({
  data: function() {
    return {
      isLoading: false
    }
  }
})

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  Vue.toasted.show(error.message, { position: 'bottom-center', duration: 2000 })
  return Promise.reject(error);
});

Vue.mixin({
  data(){
    return {
      isLoading: false
    }
  },
  created(){
    this.$http.interceptors.request.use((config) => { 
      this.isLoading = true
      return config
    }, (error) => {  return Promise.reject(error)  })
    this.$http.interceptors.response.use((response) => {
      this.isLoading = false
      return response
    }, (error) => { 
      this.isLoading = false
      return Promise.reject(error) 
    })
  }
})

Vue.config.productionTip = false

let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
