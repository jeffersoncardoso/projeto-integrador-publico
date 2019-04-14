<template>
  <div class="utilitarios text-xs-center">
    <h1 class="pb-3">Bem-vindo(a) {{ getNomeUsuario() }}</h1>

    <h2 class="pb-3">Selecione o utilitário desejado</h2>

    <v-text-field v-model="name" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>

    <v-layout row wrap>
      <v-flex md2 sm4 xs4 d-flex v-for="utilitario in filterUtilitarios" :key="utilitario.id">
        <v-card style="cursor:pointer;" @click="mostrar(utilitario)">
            <v-card-text class="px-0">
              <v-icon color="blue-grey darken-3" large>{{ utilitario.icone }}</v-icon> <br> {{ utilitario.nome }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <ModalUtilitario :utilitario="utilitarioSelecionado" name="utilitario" />

    <br><br>

    <v-btn fab dark color="teal" large :to="{ name: 'servicos' }">
      <v-icon dark>arrow_back</v-icon>
    </v-btn>
  </div>
</template>

<script>

import ModalUtilitario from '../../components/ModalUtilitario'
import { ENV } from "@env"

export default {
  data: () => {
    return {
      name: '',
      utilitarioSelecionado: null,
      utilitarios: []
    }
  },
  methods: {
    mostrar(utilitario) {
      this.utilitarioSelecionado = utilitario
      this.$modal.show("utilitario")
    },
    getNomeUsuario() {
      return localStorage.getItem("nome");
    }
  },
  created() {
    this.$http.get(ENV['api.utilitario']).then((response) => { this.utilitarios = response.data })
  },
  computed: {
    filterUtilitarios() {
      if(this.name == null || this.name.length == 0) return this.utilitarios;

      return this.utilitarios.filter((utilitario) => {
        return utilitario.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  },
  components: {
    ModalUtilitario
  }
}
</script>

<style>

</style>
