<template>
  <v-form ref="form" row>
    <v-layout row wrap>
      <v-flex lg9 md9 sm9>
        <v-text-field label="Nome" required autofocus></v-text-field>
      </v-flex>
      <v-flex lg3 md3 sm3>
        <v-text-field label="Nome abreviado" required></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex lg6 md6 sm6 xs12>
        <v-select :items="['Interno', 'Terceiro']" label="Tipo" required value="Interno"></v-select>
      </v-flex>
      <v-flex lg6 md6 sm6 xs12>
        <v-text-field label="Responsável" required></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout pb-3 row wrap>
      <v-flex lg6 md6 sm6>
        <v-checkbox label="Mostrar como serviço ao servidor"></v-checkbox>
      </v-flex>
      <v-flex lg6 md6 sm6>
        <v-checkbox label="Está em operação?"></v-checkbox>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field label="Desenvolvimento" required value="https://dsv.pmcanoas.rs.gov.br/"></v-text-field>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field label="Homologação" required value="https://dsv.pmcanoas.rs.gov.br/"></v-text-field>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field label="Produção" required value="https://sistemas.canoas.rs.gov.br/"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout pb-3>
      <v-flex> <input type="file"> </v-flex>
    </v-layout>
    <v-textarea rows="10" solo label="Sobre o sistema" required></v-textarea>



    <div class="text-xs-right">
      <v-btn color="secondary">Voltar</v-btn>
      <v-btn color="success">Salvar Sistema</v-btn>
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
