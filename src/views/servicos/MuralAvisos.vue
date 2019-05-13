<template>
  <div>
    <h2 class="text-xs-center">Informação ao servidor
      <v-btn class="mb-3" @click="habilitarNotificacoes()" icon><v-icon large>{{ notificationIcon }}</v-icon></v-btn>
    </h2>

    <v-layout row wrap>
      <v-flex lg4 md4 sm4 v-for="(aviso) in avisos" :key="aviso.id" d-flex>
        <v-card>
          <v-card-text>
            <b>{{ aviso.assunto }}</b> <br>
            {{ formatarData(aviso.data) }}
          </v-card-text>
          <v-card-actions>
            <v-btn small @click="mostrarAviso(aviso)" color="info">Ver mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <ModalAviso :aviso="avisoSelecionado" name="aviso" />

  </div>
</template>

<script>
import { ENV } from "../../env.js"
import ModalAviso from '../../components/ModalAviso'

var moment = require('moment');

export default {
  data() {
    return {
      token: null,
      avisos: [],
      avisoSelecionado: null,
      recebeNotificacao: false
    }
  },
  created() {
    this.$http.get(ENV['api.aviso']).then((response) => {
      this.avisos = response.data
    })
  },
  methods: {
    formatarData(data) {
       return (data) ? moment(data).format('DD/MM/YYYY') : '';
    },
    mostrarAviso(aviso) {
      if(aviso.descricao.trim() == "") {
        window.open(aviso.url, '_blank');
      } else {
        this.avisoSelecionado = aviso
        this.$modal.show("aviso")
      }
    },
    habilitarNotificacoes() {
      this.$messaging.requestPermission().then(() => {
        this.$messaging.getToken().then((token) => {
          this.token = token;
          this.recebeNotificacao = true;
          this.$toasted.show("Pronto para receber notificações", { duration: 3000, position: 'bottom-center' })
        })
        
      }).catch((err) => {
        this.$toasted.show('Unable to get permission to notify: ' + err.message)
      });
    }
  },
  computed: {
    notificationIcon() {
      return Notification.permission == "granted" || this.recebeNotificacao ? 'notifications' : 'notifications_off';
    }
  },
  components: {
    ModalAviso
  }
}
</script>

<style>

</style>
