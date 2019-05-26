<template>
  <layout-servicos :logo="true">
    <div class="servicos text-xs-center pt-2">
      <v-text-field flat v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search"></v-text-field>
      <v-layout row wrap>
        <v-flex flat md2 sm3 xs4 v-for="servico in filtro" :key="servico.id" d-flex>
          <card-servico :servico="servico"></card-servico>
        </v-flex>
      </v-layout>
    </div>
  </layout-servicos>
</template>

<script>
export default {
  data: () => {
    return {
      nome: '',
      servicos: [
        { nome: 'Troca de senha', icone: 'vpn_key', link: 'servicos/troca-senha' },
        { nome: 'Buscar servidores', icone: 'search', link: 'servicos/busca-funcionarios' },
        { nome: 'Mural de avisos', icone: 'info', link: 'servicos/mural-avisos' },
        { nome: 'Meus dados', icone: 'person', link: 'servicos/meus-dados' },
        { nome: 'Sistemas', icone: 'apps', link: 'servicos/sistemas'},
        { nome: 'Utilitários', icone: 'help', link: 'servicos/utilitarios'}
      ]
    }
  },
  methods: {
    getNomeUsuario() {
      return localStorage.getItem("nome");
    }
  },
  computed: {
    filtro() {
      if(this.nome == null || this.nome.length == 0) return this.servicos;

      return this.servicos.filter((servico) => {
        return servico.nome.toUpperCase().includes(this.nome.toUpperCase());
      })
    }
  }
}
</script>

<style>

</style>
