<template>
  <layout-servicos :voltar="true">
    <v-alert outline type="info" :value="true">Atualize seus dados cadastrais regularmente</v-alert>

    <v-layout row wrap>
      <v-flex>
        <h3>{{ usuario.nome }}</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h4>Matrícula: {{ usuario.matricula }} </h4>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h4> Email: {{ usuario.email }} </h4>
      </v-flex>
      <v-flex>
        <h4>Cargo: {{ usuario.cargo }} </h4>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <label for="setor">Setor</label>
        <v-text-field solo flat v-model="usuario.setor"></v-text-field>
      </v-flex>
      <v-flex md2>
        <label for="celular">Celular</label>
        <v-text-field :mask="'(##) #####-####'"  solo flat v-model="usuario.celular"></v-text-field>
      </v-flex>
      <v-flex md2>
        <label for="telefone">Telefone</label>
        <v-text-field :mask="'(##) ####-####'" solo flat v-model="usuario.telefone"></v-text-field>
      </v-flex>
      <v-flex md1>
        <label for="ramal">Ramal</label>
        <v-text-field :mask="'####'" solo flat v-model="usuario.ramal"></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex md6>
        <label for="endereco">Endereço</label>
        <v-text-field solo flat v-model="usuario.endereco"></v-text-field>
      </v-flex>
      <v-flex>
        <label for="bairro">Bairro</label>
        <v-text-field solo flat v-model="usuario.bairro"></v-text-field>
      </v-flex>
      <v-flex md2>
        <label for="cep">CEP</label>
        <v-text-field :mask="'#####-###'" solo flat v-model="usuario.cep"></v-text-field>
      </v-flex>
    </v-layout>

    <div class="text-xs-center">
      <v-btn large color="success" @click="atualizarCadastro()">Atualizar cadastro</v-btn>
    </div>

  </layout-servicos>
</template>

<script>

export default {
  created() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuario"))
  },
  methods: {
    atualizarCadastro(){
      let url = process.env.VUE_APP_API_CADASTRO.replace("{login}", this.usuario.login)
      this.$http.post(url, {
        setor: this.usuario.setor,
        endereco: this.usuario.endereco,
        bairro: this.usuario.bairro,
        cep: this.usuario.cep,
        celular: this.usuario.celular,
        telefone: this.usuario.telefone,
        ramal: this.usuario.ramal
      }).then((response) => {
        this.usuario = response.data.user
        sessionStorage.setItem("usuario", JSON.stringify(this.usuario))

        this.$toasted.show("Cadastro atualizado com sucesso", { position: 'bottom-center', duration: 2000 })
      })
    }
  },
  data() {
    return {
      usuario: {}
    }
  }
}
</script>

<style>

</style>
