<template>
  <layout-login class="text-xs-center">
    <h2 class="accent--text py-3">Redefina aqui sua senha</h2>
    <v-layout justify-center>
      <v-flex md6 xs12>
        <v-alert color="success" outline v-model="mensagemRedefinicao.length > 0">{{ mensagemRedefinicao }}</v-alert>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex md6 xs12>
          <v-text-field solo flat clearable v-model="login" label="Digite seu usuário" required></v-text-field>
          <v-text-field solo flat clearable v-model="cpf" label="Digite seu CPF (somente números)" required></v-text-field>
          <v-text-field solo flat clearable v-model="email" label="Digite seu e-mail funcional" required></v-text-field>

          <div class="pt-2">
            <v-btn :to="{ name: 'login' }" color="light" large>Voltar</v-btn>
            <v-btn @click="redefinirSenha()" color="primary" large>Redefinir Senha</v-btn>
          </div>
      </v-flex>
    </v-layout>
  </layout-login>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      cpf: '',
      email: '',
      mensagemRedefinicao: ''
    }
  },
  methods: {
    redefinirSenha() {
      this.$http.get(process.env.VUE_APP_API_RESETAR_SENHA.replace('{login}', this.login), {
        params: {
          cpf: this.cpf,
          email: this.email
        }
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error.response.data)
      })
      // this.mensagemRedefinicao = "Um e-mail de redefinição de senha foi enviado para '" + this.email + "'"
    }
  }
}
</script>

<style>

</style>
