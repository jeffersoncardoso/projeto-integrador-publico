<template>
  <v-form ref="form" row>
    <v-layout row wrap>
      <v-flex lg6 md6 sm6>
        <v-text-field v-model="sistema.nome" label="Nome" required autofocus></v-text-field>
      </v-flex>
      <v-flex lg3 md3 sm3>
        <v-text-field v-model="sistema.nome_abreviado" label="Nome abreviado" required></v-text-field>
      </v-flex>
      <v-flex lg3 md3 sm3 xs12>
        <v-select v-model="sistema.tipo" :items="['Interno', 'Terceiro']" label="Tipo" required value="Interno"></v-select>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex lg4 md4 sm4 xs12>
        <v-text-field v-model="sistema.responsavel" label="Responsável" required></v-text-field>
      </v-flex>
      <v-flex lg3 md3 sm3 xs12>
        <v-switch v-model="sistema.servico" label="Mostrar como serviço"></v-switch>
      </v-flex>
      <v-flex lg3 md3 sm3 xs12>
        <v-switch v-model="sistema.operacao" label="Está em operação?"></v-switch>
      </v-flex>
      <v-flex lg2 md2 sm2 xs12>
        <v-switch v-model="sistema.status" label="Ativo"></v-switch>
      </v-flex>
    </v-layout>

    <v-layout pb-3 row wrap>
      
      
      
    </v-layout>

    <v-layout row wrap>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field v-model="sistema.desenvolvimento" label="Desenvolvimento" required value="https://dsv.pmcanoas.rs.gov.br/"></v-text-field>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field v-model="sistema.homologacao" label="Homologação" required value="https://dsv.pmcanoas.rs.gov.br/"></v-text-field>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-text-field v-model="sistema.producao" label="Produção" required value="https://sistemas.canoas.rs.gov.br/"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout pb-3>
      <v-flex> <input type="file"> </v-flex>
    </v-layout>
    <v-textarea v-model="sistema.sobre" rows="10" solo label="Sobre o sistema" required></v-textarea>

    <div class="text-xs-right">
      <v-btn @click="save()" color="success">Salvar Sistema</v-btn>
    </div>
  </v-form>
</template>

<script>
import { ENV } from "@env"
const axios = require('axios');

export default {
  data() {
    return {
      sistema: {
        nome: "",
        nome_abreviado: "",
        tipo: "",
        icone: "",
        responsavel: "",
        responsavel: "",
        sobre: "",
        desenvolvimento: "",
        homologacao: "",
        producao: "",
        servico: true,
        operacao: true,
        status: true
      }
    }
  },
  beforeCreate() {
    if(this.$router.currentRoute.name == 'admin.sistemas.editar') {
      axios.get(ENV['api.sistema.buscar']).then((response) => { this.sistema = response.data })
    }
  },
  methods: {
    save() {
      axios.post(ENV['api.sistema.cadastrar']).then((response) => { this.sistemas = response.data })
      this.$router.push({'name': 'admin.sistemas.listar'})
    }
  }
}
</script>

<style>

</style>
