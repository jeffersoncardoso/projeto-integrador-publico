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
    <v-layout pb-3>
      <v-flex lg6 md6 sm6 xs12>
        <v-select v-model="utilitario.tipo" :items="['Página', 'Site']" label="Tipo" required></v-select>
      </v-flex>
    </v-layout>

    <v-text-field v-if="utilitario.tipo == 'Site'" label="Link do Site" v-model="utilitario.link"></v-text-field>

    <v-textarea v-if="utilitario.tipo == 'Página'" rows="10" label="Conteúdo" v-model="utilitario.conteudo"></v-textarea>

    <div class="text-xs-right">
      <v-btn color="secondary">Voltar</v-btn>
      <v-btn color="success">Salvar Utilitário</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      utilitario: {
        nome: "",
        icone: "description",
        link: "",
        conteudo: "",
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
  computed: {
    tipo() {
      return (this.utilitario.conteudo) ? 'Página' : 'Site'
    }
  }
}
</script>

<style>

</style>
