<template>
    <v-toolbar color="primary" flat dark>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
