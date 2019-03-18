<template>
  <div class="login">
    <b-row align-v="start" align-h="center">
      <b-col>
        <fa icon="users" size="10x" color="#006b85" />
      </b-col>
    </b-row>

    <br />

    <b-row align-v="center" align-h="center">
      <b-col>
      
        <!-- <b-form @submit.prevent action="/servicos">  -->
        <b-form action="/servicos">
          <label for="usuario">Usuário</label>
          <b-input id="usuario" size="lg"/>

          <label for="senha">Senha</label>
          <b-input type="password" id="senha" size="lg"/>

          <br/>

          <b-button type="submit" size="lg" variant="primary">Entrar</b-button>
        </b-form>
      </b-col>
    </b-row>

    <br /><br /><br />
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
