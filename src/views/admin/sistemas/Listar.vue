<template>
  <div>
    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-list v-if="filtro.length > 0">
      <span v-for="sistema in filtro" :key="sistema">
        <v-list-tile>
          <v-list-tile-avatar @click="mostrarInformacoes(sistema)">
            <v-btn icon ripple> <v-icon x-large>{{ sistema.icone }}</v-icon> </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <strong>{{ sistema.nome_abreviado }}</strong>
            <small class="hidden-xs-only">{{ sistema.nome }}</small>
          </v-list-tile-content>

          <v-list-tile-action title="Editar">
            <v-btn :to="{ name: 'admin.sistemas.editar', params: { id: sistema.id }}" icon ripple> <v-icon small>edit</v-icon> </v-btn>
          </v-list-tile-action>

          <v-list-tile-action title="Excluir" @click="confirmarExcluir(sistema)">
            <v-btn icon ripple> <v-icon small>clear</v-icon> </v-btn>
          </v-list-tile-action>

        </v-list-tile>

        <v-divider></v-divider>

      </span>
      <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} sistemas encontrados</h4>
    </v-list>

    <v-alert v-else :value="true" type="info"> Nenhum sistema encontrado. </v-alert>

    <v-btn class="mb-5" :to="{ name: 'admin.sistemas.cadastrar' }" color="teal" dark absolute bottom right fab large>
      <v-icon>add</v-icon>
    </v-btn>

    <ModalSimNao v-if="sistema" v-model="modalExcluir" titulo="Excluir sistema" @sim="excluir" @nao="cancelarExclusao">
      Deseja excluir <b>"{{ this.sistema.nome }}"</b> da lista de sistemas?
    </ModalSimNao>

    <ModalFechar v-if="sistema" v-model="modalMostrar" @fechar="modalMostrar = false" :titulo="sistema.nome + ' - ' + sistema.nome_abreviado">
      <div class="mb-2">
        <a class="pr-2" target="_blank" :href="sistema.desenvolvimento">Desenvolvimento</a>
        <a class="pr-2" target="_blank" :href="sistema.homologacao">Homologação</a>
        <a class="pr-2" target="_blank" :href="sistema.producao">Produção</a>
      </div>
      <v-layout my-2>
        <v-flex>
          <strong>Tipo: </strong>
          <span>{{ sistema.tipo }}</span>
        </v-flex>
        <v-flex>
          <strong>Responsável: </strong>
          <span>{{ sistema.responsavel }}</span>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <div class="my-2">
        <h3>Arquivos</h3>
      </div>

      <v-divider></v-divider>

      <div class="mt-2">
        {{ this.sistema.sobre }}
      </div>
    </ModalFechar>

  </div>
</template>

<script>

import { ENV } from "@env"
import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'
const axios = require('axios');

export default {
  data() {
    return {
      nome: '',
      modalExcluir: false,
      modalMostrar: false,
      sistema: null,
      conteudo: null,
      sistemas: []
    }
  },
  created() {
    axios.get(ENV['api.sistema.listar']).then((response) => { this.sistemas = response.data })
  },
  methods: {
    mostrarInformacoes(sistema) {
      this.sistema = sistema
      this.modalMostrar = true
    },
    confirmarExcluir(sistema) {
      this.modalExcluir = true
      this.sistema = sistema
    },
    excluir() {
      this.sistemas.splice(this.sistemas.indexOf(this.sistema), 1);
      this.sistema = null
      this.modalExcluir = false
    },
    cancelarExclusao() {
      this.sistema = null
      this.modalExcluir = false
    }
  },
  computed: {
    filtro() {
      if(this.nome == null || this.nome.length == 0) return this.sistemas;

      return this.sistemas.filter((sistema) => {
        return sistema.nome.toUpperCase().includes(this.nome.toUpperCase().trim());
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
