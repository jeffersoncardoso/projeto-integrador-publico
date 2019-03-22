<template>
  <div>
    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-list v-if="filtro.length > 0">
      <template v-for="sistema in filtro">
        <v-list-tile>
          <v-list-tile-avatar @click="mostrarInformacoes(sistema)">
              <v-btn icon ripple> <v-icon x-large>{{ sistema.icone }}</v-icon> </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            {{ sistema.nome }}
          </v-list-tile-content>

          <v-list-tile-action title="Editar">
            <v-btn icon ripple> <v-icon small>edit</v-icon> </v-btn>
          </v-list-tile-action>

          <v-list-tile-action title="Excluir" @click="confirmarExcluir(sistema)">
            <v-btn icon ripple> <v-icon small>clear</v-icon> </v-btn>
          </v-list-tile-action>

        </v-list-tile>

        <v-divider></v-divider>

      </template>
      <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} sistemas encontrados</h4>
    </v-list>

    <v-alert v-else :value="true" type="info"> Nenhum sistema encontrado. </v-alert>

    <v-btn class="mb-5" href="/admin/sistemas/cadastrar" color="teal" dark absolute bottom right fab large>
      <v-icon>add</v-icon>
    </v-btn>

    <ModalSimNao v-if="sistema" v-model="modalExcluir" titulo="Excluir sistema" @sim="excluir" @nao="cancelarExclusao">
      Deseja excluir {{ this.sistema.nome }} da lista de sistemas?
    </ModalSimNao>

    <ModalFechar v-if="sistema" v-model="modalMostrar" @fechar="modalMostrar = false" :titulo="sistema.nome">
      <div class="mb-2">
        <h3>Arquivos</h3>
      </div>

      <v-divider></v-divider>

      <div class="mt-2">
        {{ this.sistema.conteudo }}
      </div>
    </ModalFechar>

  </div>
</template>

<script>

import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'

export default {
  data: () => {
    return {
      nome: '',
      modalExcluir: false,
      modalMostrar: false,
      sistema: null,
      conteudo: null,
      sistemas: [
        { nome: 'SIGMA', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SAPC', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SIEI', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SGM', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'Diário Oficial', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
      ]
    }
  },
  methods: {
    mostrarInformacoes(sistema) {
      fetch('https://baconipsum.com/api/?type=meat-and-filler').then((response) => {
        response.text().then((text) => {
          sistema.conteudo = text
          this.modalMostrar = true
          this.sistema = sistema
        })
      })
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
