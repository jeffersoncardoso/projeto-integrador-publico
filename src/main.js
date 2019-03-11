import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faKey, faInfo, faUser, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUsers, faKey, faInfo, faSitemap, faUser)
Vue.component('fa', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
