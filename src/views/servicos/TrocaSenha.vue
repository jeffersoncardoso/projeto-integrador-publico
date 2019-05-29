<template>
  <layout-servicos :voltar="true">
    <v-alert outline :value="true" type="info" > Troque aqui a sua senha de rede, que é a mesma senha utilizada para entrar no seu computador, email e para acessar os sistemas. </v-alert>
    
    <v-layout row wrap>
      <v-flex>
        <v-password v-model="senha" label="Digite sua senha atual" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>
    
    <v-layout row wrap>
      <v-flex md6 sm6>
        <v-password v-model="nova" label="Nova senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
      <v-flex md6 sm6>
        <v-password v-model="repetir" label="Repetir senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>

    <v-alert outline :value="true" type="info"> 
      A senha deve cumprir três das quatro categorias a seguir:
      <ul>
        <div>
          Caracteres maiúsculos (A-Z)
          <v-icon v-if="possuiMaiusculos(this.nova)" style="color: green !important;">check</v-icon>
        </div>
        <div>
          Caracteres minúsculos (a-z)
          <v-icon v-if="possuiMinusculos(this.nova)" style="color: green !important;">check</v-icon>
        </div>
        <div>
          Dígitos numéricos (0-9)
          <v-icon v-if="possuiNumeros(this.nova)" style="color: green !important;">check</v-icon>
        </div>
        <div>
          Caracteres especiais (por exemplo, @, !, $, #, %)
          <v-icon v-if="possuiCaracteresEspeciais(this.nova)" style="color: green !important;">check</v-icon>
        </div>
      </ul>
    </v-alert>

    <div class="text-xs-center">
      <v-btn large color="success" @click="trocarSenha()" :disabled="senhaInvalida()">Alterar senha</v-btn>
    </div>

  </layout-servicos>
</template>

<script>
import { ENV } from "../../env.js"

export default {
  created() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuario"))
  },
  data() {
    return {
      usuario: {},
      senha: '',
      nova: '',
      repetir: ''
    }
  },
  methods: {
    possuiMaiusculos(senha) {
      const regex = /[A-Z]/;
      return regex.test(senha);
    },
    possuiMinusculos(senha) {
      const regex = /[a-z]/;
      return regex.test(senha);
    },
    possuiNumeros(senha) {
      const regex = /[0-9]/;
      return regex.test(senha);
    },
    possuiCaracteresEspeciais(senha) {
      const regex = /[@!$#%]/;
      return regex.test(senha);
    },
    senhaInvalida() {
      let categorias = 0;
      categorias += this.possuiMaiusculos(this.nova);
      categorias += this.possuiMinusculos(this.nova);
      categorias += this.possuiNumeros(this.nova);
      categorias += this.possuiCaracteresEspeciais(this.nova);

      return categorias < 3 || this.nova.length < 8;
    },
    trocarSenha() {
      let url = ENV['api.senha'].replace("{login}", this.usuario.login)

      this.$http.post(url, {
        old: this.senha,
        new: this.nova
      }, {
        headers: { Authorization: ENV['apikey'] }
      }).then(result => {
        if(result.data.success) {
          this.$router.push({'name': 'servicos'})
        }
      }).catch(error => {
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
