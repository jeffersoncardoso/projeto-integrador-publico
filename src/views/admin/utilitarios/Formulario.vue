<template>
  <v-form ref="form">
    <v-layout row wrap>
      <v-flex lg6 md6 sm12 xs12>
        <v-text-field label="Nome" v-model="utilitario.nome" autofocus></v-text-field>
      </v-flex>
      <v-flex lg4 md4 sm10 xs10>
        <v-select v-model="utilitario.icone" :items="icones" label="Ícone" required value="apps"></v-select>
      </v-flex>
      <v-flex lg2 md2 sm2 xs2 mt-3>
        <v-icon large>{{ utilitario.icone}}</v-icon>
      </v-flex>
    </v-layout>

    <v-textarea rows="10" label="Conteúdo" v-model="utilitario.descricao"></v-textarea>

    <div class="text-xs-right">
      <v-btn @click="save()" color="success">Salvar Utilitário</v-btn>
    </div>
  </v-form>
</template>

<script>
import { ENV } from "@env"

export default {
  data() {
    return {
      utilitario: {
        nome: "",
        icone: "description",
        link: "",
        descricao: "",
        tipo: "Página"
      },
      icones: [
        { text: "Documento", value: "description" },
        { text: "Aplicativo", value: "apps" },
        { text: "Link", value: "launch" },
        { text: "Ajuda", value: "help" },
        { text: "Ínicio", value: "home" },
        { text: "Telefone", value: "call" },
        { text: "Local", value: "location_on" },
        { text: "Mensagem", value: "mail" }
      ]
    }
  },
  created() {
    
  },
  beforeCreate() {
    if(this.$router.currentRoute.name == 'admin.utilitarios.editar') {
      let id = this.$router.currentRoute.params.id
      this.$http.get(ENV['api.utilitario'] + id).then((response) => { this.utilitario = response.data })
    }
  },
  methods: {
    save() {
      this.$http.post(ENV['api.utilitario'], this.utilitario)
        .then((response) => { 
        this.$router.push({'name': 'admin.utilitarios.listar'})    
      })
    }
  }
}
</script>

<style>

</style>
