<template>
  <layout-servicos :voltar="true">
    <div class="sistemas text-xs-center">
      <h2 class="pb-3">Selecione o sistema desejado</h2>

      <v-text-field flat v-model="name" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>

      <v-layout row wrap>
        <v-flex md2 sm4 xs4 v-for="sistema in filterSistemas" :key="sistema.id" d-flex>
          <card-sistema :sistema="sistema" @abrir="abrir(sistema)" @ajuda="ajuda(sistema)"></card-sistema>
        </v-flex>
      </v-layout>

      <ModalSistema :sistema="sistemaSelecionado" name="sistema" />
    </div>
  </layout-servicos>
</template>

<script>

import ModalSistema from '../../components/modal/ModalSistema'

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
    abrir(sistema) {
      window.open(sistema.producao, '_blank')
    },
    ajuda(sistema) {
      this.sistemaSelecionado = sistema
      this.$modal.show("sistema")
    },
    getNomeUsuario() {
      return localStorage.getItem("nome");
    }
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_SISTEMA).then((response) => {
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
