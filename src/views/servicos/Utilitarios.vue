<template>
  <layout-servicos :voltar="true">
    <div class="utilitarios text-xs-center">
      <h2 class="pb-3">Selecione o utilitário desejado</h2>

      <v-text-field flat v-model="name" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>

      <v-layout row wrap>
        <v-flex md2 sm4 xs4 d-flex v-for="utilitario in filterUtilitarios" :key="utilitario.id">
          <card-utilitario :utilitario="utilitario" @mostrar="mostrar(utilitario)"></card-utilitario>
        </v-flex>
      </v-layout>

      <ModalUtilitario :utilitario="utilitarioSelecionado" name="utilitario" />
    </div>
  </layout-servicos>
</template>

<script>

import ModalUtilitario from '../../components/modal/ModalUtilitario'

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
    }
  },
  mounted() {
    this.$http.get(process.env.VUE_APP_API_UTILITARIO).then((response) => { this.utilitarios = response.data })
  },
  computed: {
    filterUtilitarios() {
      if(this.name == null || this.name.length == 0) return this.utilitarios;

      return this.utilitarios.filter((utilitario) => {
        return utilitario.nome.toUpperCase().includes(this.name.toUpperCase());
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
