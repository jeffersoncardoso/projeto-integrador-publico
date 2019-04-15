<template>
  <div class="sistemas text-xs-center">
    <h1 class="pb-3">Bem-vindo(a) {{ getNomeUsuario() }}</h1>

    <h2 class="pb-3">Selecione o sistema desejado</h2>

    <v-text-field v-model="name" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>

    <v-layout row wrap>
      <v-flex md2 sm4 xs4 v-for="sistema in filterSistemas" :key="sistema.id" d-flex>
        <v-card style="cursor:pointer;" @click="mostrar(sistema)">
            <v-card-text class="px-0">
              <v-icon color="blue-grey darken-3" large>{{ sistema.icone }}</v-icon> <br> {{ sistema.nome_abreviado }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <ModalSistema :sistema="sistemaSelecionado" name="sistema" />

    <br><br>

    <v-btn fab dark color="teal" large :to="{ name: 'servicos' }">
      <v-icon dark>arrow_back</v-icon>
    </v-btn>
  </div>
</template>

<script>

import ModalSistema from '../../components/ModalSistema'
import { ENV } from "../../env.js"

export default {
  name: 'sistemas',
  data: () => {
    return {
      name: '',
      sistemaSelecionado: null,
      sistemas: []
    }
  },
  methods: {
    mostrar(sistema) {
      this.sistemaSelecionado = sistema
      this.$modal.show("sistema")
    },
    getNomeUsuario() {
      return localStorage.getItem("nome");
    }
  },
  created() {
    this.$http.get(ENV['api.sistema']).then((response) => { 
      this.sistemas = response.data
    })
  },
  computed: {
    filterSistemas() {
      if(this.name == null || this.name.length == 0) return this.sistemas;

      return this.sistemas.filter((sistema) => {
        return sistema.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  },
  components: {
    ModalSistema
  }
}
</script>

<style>

</style>
