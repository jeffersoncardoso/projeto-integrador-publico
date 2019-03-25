<template>
  <div>
    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-list v-if="filtro.length > 0">
      <template v-for="utilitario in filtro">
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

      </template>
      <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} utilitários encontrados</h4>
    </v-list>

    <v-alert v-else :value="true" type="info"> Nenhum utilitário encontrado. </v-alert>

    <v-btn class="mb-5" :to="{ name: 'admin.utilitarios.cadastrar' }" color="teal" dark absolute bottom right fab large>
      <v-icon>add</v-icon>
    </v-btn>

    <ModalSimNao v-if="utilitario" v-model="modalExcluir" titulo="Excluir utilitário" @sim="excluir" @nao="cancelarExclusao">
      Deseja excluir <b>"{{ this.utilitario.nome }}"</b> da lista de utilitários?
    </ModalSimNao>

    <ModalFechar v-if="utilitario" v-model="modalMostrar" @fechar="modalMostrar = false" :titulo="utilitario.nome">
      <div class="mb-2">
        <h3>Arquivos</h3>
      </div>

      <v-divider></v-divider>

      <div class="mt-2">
        {{ this.utilitario.conteudo }}
      </div>
    </ModalFechar>

  </div>
</template>

<script>

import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'

export default {
  data()  {
    return {
      nome: '',
      modalExcluir: false,
      modalMostrar: false,
      utilitario: null,
      conteudo: null,
      utilitarios: []
    }
  },
  created() {
    fetch('/json/Utilitarios.json').then((response) => {
      response.json().then((utilitarios) => { this.utilitarios = utilitarios })
    })
  },
  methods: {
    mostrarInformacoes(utilitario) {
      fetch('https://baconipsum.com/api/?type=meat-and-filler').then((response) => {
        response.text().then((text) => {
          utilitario.conteudo = text
          this.modalMostrar = true
          this.utilitario = utilitario
        })
      })
    },
    confirmarExcluir(utilitario) {
      this.modalExcluir = true
      this.utilitario = utilitario
    },
    excluir() {
      this.utilitarios.splice(this.utilitarios.indexOf(this.utilitario), 1);
      this.utilitario = null
      this.modalExcluir = false
    },
    cancelarExclusao() {
      this.utilitario = null
      this.modalExcluir = false
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
