<template>
  <div>
    <v-text-field v-model="nome" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <v-list>
      <template v-for="sistema in sistemas">
        <v-list-tile>
          <v-list-tile-avatar>
            <v-btn :href="sistema.url" icon ripple target="_blank"><v-icon x-large>{{ sistema.icone }}</v-icon></v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            {{ sistema.nome }}
          </v-list-tile-content>

          <v-list-tile-action title="Editar">
            <v-btn href="/admin/sistemas/cadastrar" icon ripple><v-icon small>edit</v-icon></v-btn>
          </v-list-tile-action>
          <v-list-tile-action title="Excluir">
            <v-btn icon ripple>
              <v-icon small>clear</v-icon>
            </v-btn>
          </v-list-tile-action>

          <v-list-tile-action title="Acessar sistema">
            <v-btn :href="sistema.url" flat icon target="_blank"><v-icon>call_missed_outgoing</v-icon></v-btn>
          </v-list-tile-action>


        </v-list-tile>

        <v-divider></v-divider>

      </template>
    </v-list>

    <v-btn href="/admin/sistemas/cadastrar" color="teal" dark absolute bottom right fab large style="bottom: 25px">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      sistemas: [
        { nome: 'SIGMA', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SAPC', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SIEI', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'SGM', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
        { nome: 'Diário Oficial', icone: 'apps', url: 'https://sistemas.canoas.rs.gov.br/sigma' },
      ]
    }
  }
}
</script>

<style>

</style>
