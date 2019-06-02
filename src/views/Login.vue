<template>
  <layout-login>
    <div class="login text-xs-center">
      <h2 class="accent--text">Serviços e sistemas integrados em um só lugar</h2>
      <h3 class="accent--text pt-3">Faça o login</h3>
      <v-layout justify-center>
        <v-flex md6 xs12>
            <v-text-field solo flat v-model="usuario" label="Digite seu usuário" required></v-text-field>
            <v-text-field solo flat v-model="senha" type="password" label="Digite sua senha" required @keyup.enter="login()"></v-text-field>

            <v-btn @click="login" color="primary">Entrar</v-btn>
        </v-flex>
      </v-layout>

      <br /><br />
      <img width="200" alt="Prefeitura de Canoas" src="../assets/logo_canoas.png">
      <br />
      <img width="100" alt="CANOASTEC" src="../assets/logo_canoastec.png">
    </div>
  </layout-login>
</template>

<script>
import { ENV } from "../env.js"

export default {
  data(){
    return {
      usuario: "",
      senha: ""
    }  
  },
  methods: {
    login() {
      this.$http.post(ENV['api.login'], {
        'username' : this.usuario,
        'password': this.senha
      }, {
        headers: { Authorization: ENV['apikey'] }
      }).then((response) => {
        
        sessionStorage.setItem("usuario", JSON.stringify(response.data.user));

        this.$router.push({'name': 'servicos'})

      }).catch((error) => {
        
        if(error.response.status == 422) {
          this.$toasted.show(error.response.data.error, { position: 'bottom-center', duration: 2000 })
        }
        
      });
    }
  }
}
</script>

<style>

</style>
