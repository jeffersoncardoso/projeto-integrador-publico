<template>
  <layout-servicos :voltar="true">
    <v-alert outline :value="true" type="info" > Troque aqui a sua senha de rede, que é a mesma senha utilizada para entrar no seu computador, email e para acessar os sistemas. </v-alert>

    <v-layout row wrap>
      <v-flex>
        <v-password :error-messages="erroSenha" @blur="verificarSenha()" v-model="senha" label="Digite sua senha atual" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md6 sm6>
        <v-password v-model="nova" label="Nova senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
      <v-flex md6 sm6>
        <v-password :error-messages="this.nova != this.repetir ? ['Senhas não conferem'] : []" v-model="repetir" label="Repetir senha" hint="Pelo menos 8 caracteres" counter></v-password>
      </v-flex>
    </v-layout>

    <v-alert outline :value="true" type="info">
      A senha deve ter no mínimo 8 caracteres e cumprir três das quatro categorias a seguir:
      <ul>
        <div>
          Caracteres maiúsculos (A-Z)
          <v-icon v-if="possuiMaiusculos(this.nova)" class="primary--text">check</v-icon>
        </div>
        <div>
          Caracteres minúsculos (a-z)
          <v-icon v-if="possuiMinusculos(this.nova)" class="primary--text">check</v-icon>
        </div>
        <div>
          Dígitos numéricos (0-9)
          <v-icon v-if="possuiNumeros(this.nova)" class="primary--text">check</v-icon>
        </div>
        <div>
          Caracteres especiais (por exemplo, @, !, $, #, %)
          <v-icon v-if="possuiCaracteresEspeciais(this.nova)" class="primary--text">check</v-icon>
        </div>
      </ul>
    </v-alert>

    <div class="text-xs-center">
      <v-btn large color="success" @click="trocarSenha()" :disabled="senhaInvalida()">Alterar senha</v-btn>
    </div>

  </layout-servicos>
</template>

<script>
export default {
  created() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuario"))
  },
  data() {
    return {
      usuario: {},

      senha: '',
      erroSenha: [],

      nova: '',
      repetir: ''
    }
  },
  methods: {
    verificarNovaSenha() {

    },
    verificarSenha() {
      if(this.senha.length == 0)
        return;

      this.$http.post(process.env.VUE_APP_API_LOGIN, {
        'username' : this.usuario.login,
        'password': this.senha
      }).then(result => {
        this.erroSenha = []
      }).catch((error) => {
        this.erroSenha = [error.response.data.error]
      })
    },
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

      return categorias < 3 || this.nova.length < 8 || this.nova != this.repetir;
    },
    trocarSenha() {
      let url = process.env.VUE_APP_API_SENHA.replace("{login}", this.usuario.login)

      this.$http.post(url, {
        old: this.senha,
        new: this.nova
      }).then(result => {
        if(result.data.success) {
          this.$toasted.show("Senha alterada com sucesso", { position: 'bottom-center', duration: 2000 })
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
