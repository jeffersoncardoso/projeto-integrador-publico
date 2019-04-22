<template>
    <div v-if="!isLoading">
        <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>

        <v-list v-if="filtro.length > 0">
        <span v-for="usuario in filtro" :key="usuario.id">
            <v-list-tile>
            <v-list-tile-avatar @click="mostrarInformacoes(usuario)">
                <v-btn icon ripple> <v-icon x-large>{{ usuario.icone }}</v-icon> </v-btn>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <strong>{{ usuario.nome_abreviado }}</strong>
                <small class="hidden-xs-only">{{ usuario.nome }}</small>
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
            Deseja excluir <b>"{{ this.usuario.nome }}"</b> da lista de usuarios?
        </ModalSimNao>

        <ModalFechar v-if="usuario" name="mostrar" :titulo="usuario.nome">
            Informações do usuário
        </ModalFechar>

    </div>
</template>

<script>
import { ENV } from "../../../env.js"
import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'

export default {
  data() {
    return {
      nome: '',
      usuario: null,
      usuarios: []
    }
  },
  created() {
    this.$http.get(ENV['api.usuario']).then((response) => { 
      this.usuarios = response.data
    })
  },
  methods: {
    mostrarInformacoes(usuario) {
      this.usuario = usuario
      this.$nextTick(() => { this.$modal.show("mostrar") })
    },
    confirmarExcluir(usuario) {
      this.usuario = usuario
      this.$nextTick(() => { this.$modal.show("excluir") })
    },
    excluir() {
      this.modalExcluir = false
      this.$http.delete(ENV['api.usuario'] + this.usuario.id).then((response) => { 
        this.usuarios.splice(this.usuarios.indexOf(this.usuario), 1);
        this.usuario = null
      })
    }
  },
  computed: {
    filtro() {
      if(this.nome == null || this.nome.length == 0) return this.usuarios;

      return this.usuarios.filter((usuario) => {
        let filtro = this.nome.toUpperCase().trim();
        return usuario.nome.toUpperCase().includes(filtro) ||
               usuario.nome_abreviado.toUpperCase().includes(filtro);
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
