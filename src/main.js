import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

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
