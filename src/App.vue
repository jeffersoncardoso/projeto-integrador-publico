<template>
  <v-app light>

    <v-toolbar color="teal" dark>
      <v-toolbar-side-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Administração</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="{name: 'servicos'}" flat>Serviços ao Servidor</v-btn>
        <v-btn flat>Avisos</v-btn>
        <v-btn flat>Usuários</v-btn>
        <v-btn :to="{name: 'admin.sistemas'}" flat>Sistemas</v-btn>
        <v-btn :to="{name: 'admin.utilitarios'}" flat>Utilitários</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container grid-list-md>
        <router-view/>
      </v-container>
    </v-content>

    <v-footer class="pa-3">
      <img width="80" alt="Prefeitura de Canoas" src="./assets/logo_canoastec.png">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
