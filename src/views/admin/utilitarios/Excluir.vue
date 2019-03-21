<template>
  <v-card>
    <v-card-title class="headline">Excluir sistema</v-card-title>

    <v-card-text v-if="utilitario">
      Deseja excluir o utilitário {{ utilitario.nome }} da lista de utilitários?
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat="flat" @click="nao()"> NÃO </v-btn>

        <v-btn color="green darken-1" flat="flat" @click="sim()"> SIM </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['utilitario'],
  data() {
    return {

    }
  },
  methods: {
    nao() { this.$emit('nao') },
    sim() { this.$emit('sim', this.utilitario) },
  }
}
</script>

<style>

</style>
