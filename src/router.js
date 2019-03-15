import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Services from './views/Services.vue'
import TrocaSenha from './views/services/TrocaSenha.vue'
import Sistemas from './views/services/Sistemas.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: Services
    },
    {
      path: '/servicos/troca-senha',
      name: 'troca-senha',
      component: TrocaSenha
    },
    {
      path: '/servicos/sistemas',
      name: 'sistemas',
      component: Sistemas
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
