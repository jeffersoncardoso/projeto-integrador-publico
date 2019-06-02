<template>
    <layout-admin>
      <div v-if="!isLoading">
          <v-text-field v-model="cpf" placeholder="Digite o cpf..." solo clearable append-icon="search"></v-text-field>

          <v-list v-if="filtro.length > 0">
          <span v-for="usuario in filtro" :key="usuario.id">
              <v-list-tile>
                
              <v-list-tile-content>
                  <strong>{{ usuario.login }}</strong>
                  <small>{{ buscarNomePerfil(usuario.idperfil) }}</small>
              </v-list-tile-content>

              <v-list-tile-action title="Editar">
                  <v-btn :to="{ name: 'admin.usuarios.editar', params: { id: usuario.id }}" icon ripple> <v-icon small>edit</v-icon> </v-btn>
              </v-list-tile-action>

              <v-list-tile-action title="Excluir" @click="confirmarExcluir(usuario)">
                  <v-btn icon ripple> <v-icon small>clear</v-icon> </v-btn>
              </v-list-tile-action>

              </v-list-tile>

              <v-divider></v-divider>

          </span>
          <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} usuarios encontrados</h4>
          </v-list>

          <v-alert v-else :value="true" type="info"> Nenhum usuario encontrado. </v-alert>

          <v-btn class="mb-5" :to="{ name: 'admin.usuarios.cadastrar' }" color="teal" dark absolute bottom right fab large>
          <v-icon>add</v-icon>
          </v-btn>

          <ModalSimNao v-if="usuario" name="excluir" titulo="Excluir usuario" @sim="excluir">
              Deseja excluir <b>"{{ this.usuario.login }}"</b> da lista de usuarios?
          </ModalSimNao>

          <ModalFechar v-if="usuario" name="mostrar" :titulo="usuario.nome">
              Informações do usuário
          </ModalFechar>

      </div>
    </layout-admin>
</template>

<script>
import { ENV } from "../../../env.js"
import ModalSimNao from '../../../components/modal/ModalSimNao'
import ModalFechar from '../../../components/modal/ModalFechar'

export default {
  data() {
    return {
      cpf: '',
      usuario: null,
      usuarios: [],
      perfis: []
    }
  },
  created() {
    this.$http.get(ENV['api.perfil']).then((result) => {
      this.perfis = result.data
    })

    this.$http.get(ENV['api.usuario']).then((response) => { 
      this.usuarios = response.data
    })
  },
  methods: {
    buscarNomePerfil(idPerfil) {
      let perfil = this.perfis.find((perfil) => {
        return perfil.id == idPerfil
      })

      if(perfil) return perfil.nome
    },
    mostrarInformacoes(usuario) {
      this.usuario = usuario
      this.$nextTick(() => { this.$modal.show("mostrar") })
    },
    confirmarExcluir(usuario) {
      this.usuario = usuario
      this.$nextTick(() => { this.$modal.show("excluir") })
    },
    excluir() {
      this.$http.delete(ENV['api.usuario'] + this.usuario.id).then((response) => { 
        this.usuarios.splice(this.usuarios.indexOf(this.usuario), 1);
        this.usuario = null
      })
    }
  },
  computed: {
    filtro() {
      if(this.login == null || this.login.trim().length == 0) return this.usuarios;

      return this.usuarios.filter((usuario) => {
        let filtro = this.login.trim()
        return usuario.login.toString().includes(filtro)
      })
    }
  },
  components: {
    ModalSimNao, ModalFechar
  }
}
</script>

<style>

</style>
