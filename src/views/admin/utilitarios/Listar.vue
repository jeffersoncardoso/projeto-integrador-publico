<template>
  <div v-if="!isLoading">
    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-list v-if="filtro.length > 0">
      <span v-for="utilitario in filtro" :key="utilitario.id">
        <v-list-tile>
          <v-list-tile-avatar>
            <v-btn v-if="utilitario.link" target="_blank" :href="utilitario.link" icon ripple> <v-icon x-large>{{ utilitario.icone }}</v-icon> </v-btn>
            <v-btn v-else @click="mostrarInformacoes(utilitario)" icon ripple> <v-icon x-large>{{ utilitario.icone }}</v-icon> </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            {{ utilitario.nome }}
          </v-list-tile-content>

          <v-list-tile-action title="Editar">
            <v-btn :to="{ name: 'admin.utilitarios.editar', params: { id: utilitario.id }}" icon ripple> <v-icon small>edit</v-icon> </v-btn>
          </v-list-tile-action>

          <v-list-tile-action title="Excluir" @click="confirmarExcluir(utilitario)">
            <v-btn icon ripple> <v-icon small>clear</v-icon> </v-btn>
          </v-list-tile-action>

        </v-list-tile>

        <v-divider></v-divider>

      </span>
      <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} utilitários encontrados</h4>
    </v-list>

    <v-alert v-else :value="true" type="info"> Nenhum utilitário encontrado. </v-alert>

    <v-btn class="mb-5" :to="{ name: 'admin.utilitarios.cadastrar' }" color="teal" dark absolute bottom right fab large>
      <v-icon>add</v-icon>
    </v-btn>

    <ModalSimNao v-if="utilitario" name="excluir" titulo="Excluir utilitário" @sim="excluir">
      Deseja excluir <b>"{{ this.utilitario.nome }}"</b> da lista de utilitários?
    </ModalSimNao>

    <ModalFechar v-if="utilitario" name="mostrar" :titulo="utilitario.nome">
      <div class="mt-2">
        {{ this.utilitario.descricao }}
      </div>
    </ModalFechar>

  </div>
</template>

<script>

import { ENV } from "@env"
import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'

export default {
  data()  {
    return {
      nome: '',
      utilitario: null,
      utilitarios: []
    }
  },
  created() {
    this.$http.get(ENV['api.utilitario']).then((response) => { this.utilitarios = response.data })
  },
  methods: {
    mostrarInformacoes(utilitario) {
      this.utilitario = utilitario
      this.$nextTick(() => { this.$modal.show("mostrar") })
    },
    confirmarExcluir(utilitario) {
      this.utilitario = utilitario
      this.$nextTick(() => { this.$modal.show("excluir") })
    },
    excluir() {
      this.$http.delete(ENV['api.utilitario'] + this.utilitario.id).then((response) => { 
        this.utilitarios.splice(this.utilitarios.indexOf(this.utilitario), 1);
        this.utilitario = null
      })
    }
  },
  computed: {
    filtro() {
      if(this.nome == null || this.nome.length == 0) return this.utilitarios;

      return this.utilitarios.filter((utilitario) => {
        return utilitario.nome.toUpperCase().includes(this.nome.toUpperCase().trim());
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
