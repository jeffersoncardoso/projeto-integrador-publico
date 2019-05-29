import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Servicos from './views/Servicos.vue'
import TrocaSenha from './views/servicos/TrocaSenha.vue'

import Sistemas from './views/servicos/Sistemas.vue'
import MuralAvisos from './views/servicos/MuralAvisos.vue'
import Utilitarios from './views/servicos/Utilitarios.vue'
import BuscaFuncionarios from './views/servicos/BuscaFuncionarios.vue'
import MeusDados from './views/servicos/MeusDados.vue'

import { default as Admin } from './views/admin/Admin.vue'
import { default as AdminFormSistemas } from './views/admin/sistemas/Formulario.vue'
import { default as AdminListarSistemas } from './views/admin/sistemas/Listar.vue'
import { default as AdminFormUtilitarios } from './views/admin/utilitarios/Formulario.vue'
import { default as AdminListarUtilitarios } from './views/admin/utilitarios/Listar.vue'
import { default as AdminFormUsuarios } from './views/admin/usuarios/Formulario.vue'
import { default as AdminListarUsuarios } from './views/admin/usuarios/Listar.vue'
import { default as AdminFormAvisos } from './views/admin/avisos/Formulario.vue'
import { default as AdminListarAvisos } from './views/admin/avisos/Listar.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'servicos', component: Servicos },
    { path: '/busca-funcionarios', name: 'busca-funcionarios', component: BuscaFuncionarios },
    { path: '/mural-avisos', name: 'mural-avisos', component: MuralAvisos },
    { path: '/troca-senha', name: 'troca-senha', component: TrocaSenha },
    { path: '/sistemas', name: 'sistemas', component: Sistemas },
    { path: '/utilitarios', name: 'utilitarios', component: Utilitarios },
    { path: '/meus-dados', name: 'meus-dados', component: MeusDados },

    { path: '/admin', name: 'admin', component: Admin },
    { path: '/admin/usuarios', name: 'admin.usuarios', component: AdminListarUsuarios },
    { path: '/admin/usuarios/cadastrar', name: 'admin.usuarios.cadastrar', component: AdminFormUsuarios },
    { path: '/admin/usuarios/:id/editar', name: 'admin.usuarios.editar', component: AdminFormUsuarios },
    { path: '/admin/usuarios/listar', name: 'admin.usuarios.listar', component: AdminListarUsuarios },

    { path: '/admin/avisos', name: 'admin.avisos', component: AdminListarAvisos },
    { path: '/admin/avisos/cadastrar', name: 'admin.avisos.cadastrar', component: AdminFormAvisos },
    { path: '/admin/avisos/:id/editar', name: 'admin.avisos.editar', component: AdminFormAvisos },
    { path: '/admin/avisos/listar', name: 'admin.avisos.listar', component: AdminListarAvisos },

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
