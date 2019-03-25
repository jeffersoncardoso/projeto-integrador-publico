import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Servicos from './views/Servicos.vue'
import TrocaSenha from './views/services/TrocaSenha.vue'

import Sistemas from './views/services/Sistemas.vue'
import Utilitarios from './views/services/Utilitarios.vue'

import { default as AdminFormSistemas } from './views/admin/sistemas/Formulario.vue'
import { default as AdminListarSistemas } from './views/admin/sistemas/Listar.vue'

import { default as AdminFormUtilitarios } from './views/admin/utilitarios/Formulario.vue'
import { default as AdminListarUtilitarios } from './views/admin/utilitarios/Listar.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Login },
    { path: '/login', name: 'login', component: Login },
    { path: '/servicos', name: 'servicos', component: Servicos },
    { path: '/servicos/troca-senha', name: 'troca-senha', component: TrocaSenha },
    { path: '/servicos/sistemas', name: 'sistemas', component: Sistemas },
    { path: '/servicos/utilitarios', name: 'utilitarios', component: Utilitarios },

    { path: '/admin', name: 'admin', component: Servicos },

    { path: '/admin/sistemas', name: 'admin.sistemas', component: AdminListarSistemas },
    { path: '/admin/sistemas/cadastrar', name: 'admin.sistemas.cadastrar', component: AdminFormSistemas },
    { path: '/admin/sistemas/:id/editar', name: 'admin.sistemas.editar', component: AdminFormSistemas },
    { path: '/admin/sistemas/listar', name: 'admin.sistemas.listar', component: AdminListarSistemas },

    { path: '/admin/utilitarios', name: 'admin.utilitarios', component: AdminListarUtilitarios },
    { path: '/admin/utilitarios/cadastrar', name: 'admin.utilitarios.cadastrar', component: AdminFormUtilitarios },
    { path: '/admin/utilitarios/:id/editar', name: 'admin.utilitarios.editar', component: AdminFormUtilitarios },
    { path: '/admin/utilitarios/listar', name: 'admin.utilitarios.listar', component: AdminListarUtilitarios },
  ]
})
