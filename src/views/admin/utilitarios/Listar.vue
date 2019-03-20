<template>
  <div>
    <v-text-field placeholder="Digite o nome..."></v-text-field>

    <v-list>
      <template v-for="utilitario in utilitarios">
        <v-list-tile>
          <v-list-tile-avatar>
              <v-btn @click="mostrarDados(utilitario)" icon ripple>
                <v-icon x-large>{{ utilitario.icone }}</v-icon>
              </v-btn>
          </v-list-tile-avatar>

          <v-list-tile-content>
            {{ utilitario.nome }}
          </v-list-tile-content>

          <v-list-tile-action @click="editar(utilitario)" title="Editar">
            <v-btn icon ripple>
              <v-icon small>edit</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action title="Excluir">
            <v-btn icon ripple>
              <v-icon small>clear</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider></v-divider>

      </template>
    </v-list>

    <v-btn href="/admin/utilitarios/cadastrar" color="teal" dark absolute bottom right fab large style="bottom: 25px">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="mostrar" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
      <v-card tile v-if="mostrar">
        <v-toolbar card dark color="teal">
          <v-btn icon dark @click="mostrar = false">
            <v-icon>close</v-icon>
          </v-btn>

          <v-toolbar-title>{{ utilitario.nome }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          Texto
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="mostrarEditar" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
      <v-card tile v-if="mostrarEditar">
        <v-toolbar card dark color="teal">
          <v-btn icon dark @click="mostrarEditar = false">
            <v-icon>close</v-icon>
          </v-btn>

          <v-toolbar-title>Editar {{ utilitario.nome }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
export default {
  data()  {
    return {
      mostrar: false,
      mostrarEditar: false,
      excluir: false,
      utilitario: null,
      utilitarios: [
        { nome: 'Manuais', icone: 'description' },
        { nome: 'Links úteis', icone: 'link' },
        { nome: 'Telefones úteis', icone: 'phone' },
        { nome: 'Mapa', icone: 'location_on' },
        { nome: 'Assinatura', icone: 'mail' },
      ]
    }
  },
  methods: {
    mostrarDados(utilitario) {
      this.mostrar = true;
      this.utilitario = utilitario;
    },
    editar(utilitario) {
      this.mostrarEditar = true;
      this.utilitario = utilitario;
    }
  }
}
</script>

<style>

</style>
