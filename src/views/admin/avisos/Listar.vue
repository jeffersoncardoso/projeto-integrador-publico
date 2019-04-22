<template>
    <div v-if="!isLoading">
        <v-text-field v-model="assunto" placeholder="Digite o assunto..." solo clearable append-icon="search"></v-text-field>

        <v-list v-if="filtro.length > 0">
        <span v-for="aviso in filtro" :key="aviso.id">
            <v-list-tile>

                <v-list-tile-avatar @click="habilitarDesabilitarNotificacoes(aviso)">
                    <v-btn icon ripple> <v-icon x-large>{{ (aviso.status == 'Ativo') ? 'notifications' : 'notifications_off' }}</v-icon> </v-btn>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <strong>{{ aviso.assunto }}</strong>
                    <small class="text-truncate">{{ aviso.descricao }}</small>
                </v-list-tile-content>

                <v-list-tile-action title="Editar">
                    <v-btn :to="{ name: 'admin.avisos.editar', params: { id: aviso.id }}" icon ripple> <v-icon small>edit</v-icon> </v-btn>
                </v-list-tile-action>

                <v-list-tile-action title="Excluir" @click="confirmarExcluir(aviso)">
                    <v-btn icon ripple> <v-icon small>clear</v-icon> </v-btn>
                </v-list-tile-action>

            </v-list-tile>

            <v-divider></v-divider>

        </span>
        <h4 class="text-xs-right pr-2 pt-2">{{ filtro.length }} avisos encontrados</h4>
        </v-list>

        <v-alert v-else :value="true" type="info"> Nenhum aviso encontrado. </v-alert>

        <v-btn class="mb-5" :to="{ name: 'admin.avisos.cadastrar' }" color="teal" dark absolute bottom right fab large>
        <v-icon>add</v-icon>
        </v-btn>

        <ModalSimNao v-if="aviso" name="excluir" titulo="Excluir aviso" @sim="excluir">
            Deseja excluir <b>"{{ this.aviso.assunto }}"</b> da lista de avisos?
        </ModalSimNao>

    </div>
</template>

<script>
import { ENV } from "../../../env.js"
import ModalSimNao from '../../../components/ModalSimNao'
import ModalFechar from '../../../components/ModalFechar'

export default {
  data() {
    return {
      assunto: '',
      aviso: null,
      avisos: []
    }
  },
  created() {
    this.$http.get(ENV['api.aviso']).then((response) => { 
      this.avisos = response.data
    })
  },
  methods: {
    habilitarDesabilitarNotificacoes(aviso) {
        aviso.status = (aviso.status == 'Ativo') ? 'Inativo' : 'Ativo';
    },
    confirmarExcluir(aviso) {
      this.aviso = aviso
      this.$nextTick(() => { this.$modal.show("excluir") })
    },
    excluir() {
      this.modalExcluir = false
      this.$http.delete(ENV['api.aviso'] + this.aviso.id).then((response) => { 
        this.avisos.splice(this.avisos.indexOf(this.aviso), 1);
        this.aviso = null
      })
    }
  },
  computed: {
    filtro() {
      if(this.assunto == null || this.assunto.length == 0) return this.avisos;

      return this.avisos.filter((aviso) => {
        let filtro = this.assunto.toUpperCase().trim();
        return aviso.assunto.toUpperCase().includes(filtro);
      })
    }
  },
  components: {
    ModalSimNao, ModalFechar
  }
}
</script>

<style>

</style>
