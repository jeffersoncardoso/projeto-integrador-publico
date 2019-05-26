<template>
  <layout-servicos :voltar="true">
    <v-alert outline :value="true" type="info" > Troque aqui a sua senha de rede, que é a mesma senha utilizada para entrar no seu computador, email e para acessar os sistemas. </v-alert>
    
    <v-layout row wrap>
      <v-flex>
        <v-password label="Digite sua senha atual" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>
    
    <v-layout row wrap>
      <v-flex md6 sm6>
        <v-password label="Nova senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
      <v-flex md6 sm6>
        <v-password label="Repetir senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>

    <v-alert outline :value="true" type="warning" > Sua nova senha deve. </v-alert>

    <div class="text-xs-center">
      <v-btn large color="success">Alterar senha</v-btn>
    </div>

  </layout-servicos>
</template>

<script>
export default {

}
</script>

<style>

</style>
