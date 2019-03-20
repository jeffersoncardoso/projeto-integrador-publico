import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Services from './views/Services.vue'
import TrocaSenha from './views/services/TrocaSenha.vue'

import Sistemas from './views/services/Sistemas.vue'


import { default as AdminCadastrarSistemas } from './views/admin/sistemas/Cadastrar.vue'
import { default as AdminListarSistemas } from './views/admin/sistemas/Listar.vue'

import { default as AdminCadastrarUtilitarios } from './views/admin/utilitarios/Cadastrar.vue'
import { default as AdminListarUtilitarios } from './views/admin/utilitarios/Listar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
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
    },

    { path: '/admin', name: 'admin', component: Services },

    { path: '/admin/sistemas', name: 'admin.sistemas', component: AdminListarSistemas },
    { path: '/admin/sistemas/cadastrar', name: 'admin.sistemas.cadastrar', component: AdminCadastrarSistemas },
    { path: '/admin/sistemas/listar', name: 'admin.sistemas.listar', component: AdminListarSistemas },

    { path: '/admin/utilitarios', name: 'admin.utilitarios', component: AdminListarUtilitarios },
    { path: '/admin/utilitarios/cadastrar', name: 'admin.utilitarios.cadastrar', component: AdminCadastrarUtilitarios },
    { path: '/admin/utilitarios/listar', name: 'admin.utilitarios.listar', component: AdminListarUtilitarios },
  ]
})
