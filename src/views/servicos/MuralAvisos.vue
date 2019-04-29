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
            <v-list-tile-sub-title class="text--primary">{{ aviso.descricao }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn color="info">Ver mais</v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider v-if="index + 1 < avisos.length" :key="index"></v-divider>
      </template>
    </v-list>

  </div>
</template>

<script>
import { ENV } from "../../env.js"

import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyDJuNPUNA12NKyosaMlyI52Tn23gQFl3SA",
  authDomain: "projeto-integrador-6962f.firebaseapp.com",
  databaseURL: "https://projeto-integrador-6962f.firebaseio.com",
  projectId: "projeto-integrador-6962f",
  storageBucket: "projeto-integrador-6962f.appspot.com",
  messagingSenderId: "593639466370"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();


export default {
  data() {
    return {
      token: null,
      avisos: []
    }
  },
  created() {
    if(Notification.permission == "granted") {
      messaging.getToken().then(token => { this.token = token; })
    }

    this.$http.get(ENV['api.aviso']).then((response) => {
      this.avisos = response.data
    })
  },
  methods: {
    habilitarNotificacoes() {
      if(this.token) {
        messaging.deleteToken(this.token)
        this.token = null

        return
      }


      messaging.requestPermission().then(() => {
        messaging.getToken().then((token) => {
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
  }
}
</script>

<style>

</style>
