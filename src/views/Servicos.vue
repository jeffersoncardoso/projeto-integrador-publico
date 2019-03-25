<template>
  <div class="servicos text-xs-center">
    <h1 class="pb-3">Bem-vindo(a) Jefferson</h1>

    <h2 class="pb-3">Selecione o serviço desejado</h2>

    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-layout row wrap>
      <v-flex md2 sm3 xs4 v-for="servico in filtro" d-flex>
        <v-card style="cursor:pointer" :href="servico.link">
            <v-card-text class="px-0 text-xs-center">
              <v-icon color="blue-grey darken-3" large>{{ servico.icone }}</v-icon> <br> {{ servico.nome }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      nome: '',
      servicos: [
        { nome: 'Troca de senha', icone: 'vpn_key', link: 'servicos/troca-senha' },
        { nome: 'Buscar servidores', icone: 'search', link: 'servicos/buscar-servidores' },
        { nome: 'Mural de avisos', icone: 'info', link: 'servicos/mural-avisos' },
        { nome: 'Meus dados', icone: 'person', link: 'servicos/meus-dados' },
        { nome: 'Sistemas', icone: 'apps', link: 'servicos/sistemas '},
        { nome: 'Utilitários', icone: 'help', link: 'servicos/utilitarios '}
      ]
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
