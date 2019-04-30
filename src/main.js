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


var firebase = require("firebase/app");
require("firebase/messaging");

var config = {
  apiKey: "AIzaSyDJuNPUNA12NKyosaMlyI52Tn23gQFl3SA",
  authDomain: "projeto-integrador-6962f.firebaseapp.com",
  databaseURL: "https://projeto-integrador-6962f.firebaseio.com",
  projectId: "projeto-integrador-6962f",
  storageBucket: "projeto-integrador-6962f.appspot.com",
  messagingSenderId: "593639466370"
};
firebase.initializeApp(config);

firebase.messaging().onMessage((payload) => {
  console.log(payload)
  Vue.toasted.show(payload.notification.title, { 
    href: payload.notification.click_action,
    position: 'bottom-center', 
    duration: 10000
  })
})
Vue.prototype.$messaging = firebase.messaging();


let vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
