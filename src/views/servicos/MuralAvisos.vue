<template>
  <div class="text-xs-center">
    <h1>Informação ao servidor
      <v-btn class="mb-3" @click="habilitarNotificacoes()" icon><v-icon large>{{ notificationIcon }}</v-icon></v-btn>
    </h1>

    <v-list two-line>
      <template v-for="(aviso, index) in avisos">
        <v-list-tile :key="aviso.id">
          <v-list-tile-content>
            <v-list-tile-title><b>{{ aviso.assunto }}</b></v-list-tile-title>
            <v-list-tile-sub-title>30/04/2019</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn @click="mostrarAviso(aviso)" color="info">Ver mais</v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < avisos.length" :key="index"></v-divider>
      </template>
    </v-list>

    <ModalAviso :aviso="avisoSelecionado" name="aviso" />

  </div>
</template>

<script>
import { ENV } from "../../env.js"
import ModalAviso from '../../components/ModalAviso'

export default {
  data() {
    return {
      token: null,
      avisos: [],
      avisoSelecionado: null
    }
  },
  created() {
    if(Notification.permission == "granted") {
      this.$messaging.getToken().then(token => {
        this.token = token;

        this.$http.post("https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/avisos", {}, {
          headers: { Authorization: ENV['firebase'] }
        }).then(() => {

          this.$toasted.show("Pronto para receber notificações", { duration: 3000, position: 'bottom-center' })

        }).catch((error) => {

          this.$toasted.show("Erro: " + error.message, { duration: 3000, position: 'bottom-center' })

        })

      })
    }

    this.$http.get(ENV['api.aviso']).then((response) => {
      this.avisos = response.data
    })
  },
  methods: {
    mostrarAviso(aviso) {
      this.avisoSelecionado = aviso
      this.$modal.show("aviso")
    },
    habilitarNotificacoes() {
      if(this.token) {
        this.$messaging.deleteToken(this.token)
        this.token = null

        return
      }


      this.$messaging.requestPermission().then(() => {
        this.$messaging.getToken().then((token) => {
          this.token = token;
        })
        
      }).catch((err) => {
        this.$toasted.show('Unable to get permission to notify: ' + err.message)
      });
    }
  },
  computed: {
    notificationIcon() {
      return Notification.permission == "granted" && this.token != null ? 'notifications' : 'notifications_off';
    }
  },
  components: {
    ModalAviso
  }
}
</script>

<style>

</style>
