<template>
  <v-form ref="form">
    <v-layout>
      <v-flex lg6 md6 sm12 xs12>
        <v-text-field label="Nome" required></v-text-field>
      </v-flex>
      <v-flex lg6 md6 sm12 xs12>
        <v-select :items="['Link', 'Texto']" label="Tipo" required></v-select>
      </v-flex>
    </v-layout>
    <v-layout pb-3>
      <v-flex> <input type="file"> </v-flex>
    </v-layout>

    <v-textarea rows="10" solo label="Conteúdo" required></v-textarea>

    <div class="text-xs-right">
      <v-btn color="secondary">Voltar</v-btn>
      <v-btn color="success">Salvar Utilitário</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>

</style>
