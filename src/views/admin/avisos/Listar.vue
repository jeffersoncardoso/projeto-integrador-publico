<template>
    <div v-if="!isLoading">
        <v-text-field v-model="assunto" placeholder="Digite o assunto..." solo clearable append-icon="search"></v-text-field>

        <v-list v-if="filtro.length > 0">
        <span v-for="aviso in filtro" :key="aviso.id">
            <v-list-tile>

                <v-list-tile-avatar>
                    <v-btn icon ripple @click="confirmarEnviarNotificacoes(aviso)" v-if="aviso.status == 'Ativo'">
                        <v-icon x-large>notifications</v-icon>
                    </v-btn>
                    <v-icon v-else x-large>archive</v-icon>
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

        <ModalSimNao v-if="aviso" name="notificacao" titulo="Enviar notificações" @sim="enviarNotificacoes()">
            Deseja enviar notificações para <b>TODOS OS SERVIDORES</b> de <b>"{{ this.aviso.assunto }}"</b>?
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
    enviarNotificacoes() {
        this.$http.post("https://fcm.googleapis.com/fcm/send", {
          "notification": {
            "title": this.aviso.assunto,
            "body": this.aviso.descricao,
            "click_action": "http://localhost:8080/#/admin/avisos/" + this.aviso.id + "/editar",
            "icon": "https://sistemas.canoas.rs.gov.br/servidor/images/logo-brasao-prefeitura-canoas.png"
          },
          "to": "cEh32J_HFoo:APA91bGvqhkxb1S0845oANYeCCLeZExt7VcaZ9frkHgiTIhI7Pe2MCK3_05Wi41ae7zqLNIU0H7pRv-Q4ZNQOzWUXS611ABdaltP_Vy-5vq01ZRA_Xf5pL35-aScNGiBV3JzRIUHtL-R"
        }, {
          headers: { Authorization: 'key=AAAAijerZYI:APA91bF0KPxwb4OGgoumMciW1cKElrGDj4SMLuUWDKJwM0b8Sctu8-o_fJ7CSkCODlrZVaCQ5qRWD7R3RIL38YphUAkXiee9t2ckPTTil5ikvUx3awrnpCCPAwr1PCRU6IQvqmU7QDb_'}
        })

        this.$modal.hide("notificacao");
        this.aviso = null;
    },
    confirmarEnviarNotificacoes(aviso) {
        this.aviso = aviso
        this.$nextTick(() => { this.$modal.show("notificacao") })
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
