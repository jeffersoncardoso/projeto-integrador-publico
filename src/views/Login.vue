<template>
  <div class="login text-xs-center">
    <v-layout>
      <v-flex>
        <fa icon="users" size="10x" color="#006b85" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
          <v-text-field label="Usuário" required></v-text-field>
          <v-text-field type="password" label="Senha" required></v-text-field>

          <v-btn color="info" :to="{ name: 'servicos' }">Entrar</v-btn>
      </v-flex>
    </v-layout>

    <br /><br />
    <img width="200" alt="Prefeitura de Canoas" src="../assets/logo_canoas.png">
    <br />
    <img width="100" alt="CANOASTEC" src="../assets/logo_canoastec.png">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
