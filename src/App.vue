<template>
  <!-- <v-app light> -->
    <!-- <v-toolbar color="teal" dark>
      <v-toolbar-title>
        <v-btn flat :to="{name: 'servicos'}">Serviços</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn flat icon :to="{name: 'admin.avisos'}"><v-icon>notifications</v-icon></v-btn>
        <v-btn flat icon :to="{name: 'admin.usuarios'}"><v-icon>account_circle</v-icon></v-btn>
        <v-btn flat icon :to="{name: 'admin.sistemas'}" ><v-icon>apps</v-icon></v-btn>
        <v-btn flat icon :to="{name: 'admin.utilitarios'}" ><v-icon>help</v-icon></v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :to="{name: 'admin.avisos'}" flat>Avisos</v-btn>
        <v-btn :to="{name: 'admin.usuarios'}" flat>Usuários</v-btn>
        <v-btn :to="{name: 'admin.sistemas'}" flat>Sistemas</v-btn>
        <v-btn :to="{name: 'admin.utilitarios'}" flat>Utilitários</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-progress-linear v-if="isLoading" height="7" style="margin: 0px" color="green" :indeterminate="true"></v-progress-linear>
    <v-progress-linear v-else height="7" style="margin: 0px" color="light" :indeterminate="false"></v-progress-linear>

    <v-content>
      <v-container grid-list-md> -->
        <router-view/>
      <!-- </v-container>
    </v-content>

    <v-footer class="pa-3">
      <img width="80" alt="Prefeitura de Canoas" src="./assets/logo_canoastec.png">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app> -->
</template>

<script>

export default {
  name: 'App',
  beforeCreate(){
    
  },
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  html {
    overflow-y:auto;
  }
</style>

