<template>
  <div class="sistemas">
    <h1>Bem-vindo(a) Jefferson</h1>

    <br />

    <h2>Selecione o sistema desejado</h2>

    <br />

    <v-text-field v-model="name" placeholder="Digite o nome..."></v-text-field>

    <br />

    <v-layout row wrap>
      <v-flex md2 sm4 xs6 v-for="sistema in filterSistemas">
        <v-card style="cursor:pointer; min-width:9em;">
            <v-card-text class="px-0">
              <fa :icon="sistema.icon" /> <br> {{ sistema.name }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <br><br>

    <v-btn fab dark color="teal" large href="/servicos">
      <v-icon dark>arrow_back</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'sistemas',
  data: () => {
    return {
      name: '',
      sistemas: [
        { name: 'SIGMA', icon: 'key' },
        { name: 'SAPC', icon: 'users' },
        { name: 'Memorandos', icon: 'info' },
        { name: 'Diário Oficial', icon: 'user' },
        { name: 'SGM', icon: 'sitemap' },
        { name: 'Frotas', icon: 'sitemap' },
        { name: 'MCMV', icon: 'sitemap' },
        { name: 'CTM', icon: 'sitemap' },
        { name: 'BDO', icon: 'sitemap' }
      ]
    }
  },
  computed: {
    filterSistemas() {
      if(this.name.length == 0) return this.sistemas;

      return this.sistemas.filter((sistema) => {
        return sistema.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  }
}
</script>

<style>

</style>
