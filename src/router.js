import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import ResetarSenha from './views/ResetarSenha.vue'
import Servicos from './views/Servicos.vue'

import TrocaSenha from './views/servicos/TrocaSenha.vue'
import Sistemas from './views/servicos/Sistemas.vue'
import MuralAvisos from './views/servicos/MuralAvisos.vue'
import Utilitarios from './views/servicos/Utilitarios.vue'
import BuscaFuncionarios from './views/servicos/BuscaFuncionarios.vue'
import MeusDados from './views/servicos/MeusDados.vue'
import LinksUteis from './views/servicos/LinksUteis.vue'
import Rh24h from './views/servicos/externo/rh24h.vue'
import Atendimento from './views/servicos/externo/atendimento.vue'
import Memorandos from './views/servicos/externo/memorandos.vue'
import DiarioOficial from './views/servicos/externo/diario-oficial.vue'
import Telefones from './views/servicos/Telefones.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/resetar-senha', name: 'resetar-senha', component: ResetarSenha },

    { path: '/', name: 'servicos', component: Servicos },
    { path: '/busca-funcionarios', name: 'busca-funcionarios', component: BuscaFuncionarios },
    { path: '/mural-avisos', name: 'mural-avisos', component: MuralAvisos },
    { path: '/troca-senha', name: 'troca-senha', component: TrocaSenha },
    { path: '/sistemas', name: 'sistemas', component: Sistemas },
    { path: '/utilitarios', name: 'utilitarios', component: Utilitarios },
    { path: '/meus-dados', name: 'meus-dados', component: MeusDados },
    { path: '/links-uteis', name: 'links-uteis', component: LinksUteis },
    { path: '/telefones', name: 'telefones', component: Telefones },
    { path: '/rh24h', name: 'rh24h', component: Rh24h },
    { path: '/atendimento', name: 'atendimento', component: Atendimento },
    { path: '/memorandos', name: 'memorandos', component: Memorandos },
    { path: '/diario-oficial', name: 'diario-oficial', component: DiarioOficial }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.fullPath === '/login' || to.fullPath === '/resetar-senha')
    return next();

  if(sessionStorage.getItem("usuario") === null)
    return next('/login');

  return next();
});

export default router
