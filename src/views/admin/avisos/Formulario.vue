<template>
    <v-form ref="form" row>
    <v-layout row wrap>
        <v-flex lg12 md12 sm12>
            <v-text-field v-model="aviso.assunto" label="Assunto" required autofocus></v-text-field>
        </v-flex>
    </v-layout>
    <v-layout row wrap>
        <v-flex lg12 md12 sm12>
            <v-textarea v-model="aviso.descricao" label="Descrição" required counter></v-textarea>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
        <v-flex lg12 md12 sm12>
            <v-text-field v-model="aviso.url" label="Link de destino" required counter></v-text-field>
        </v-flex>
    </v-layout>

    <v-layout row wrap>
        <v-flex>
            <v-switch v-model="aviso.status" value="Ativo" label="Status"></v-switch>
        </v-flex>
    </v-layout>

    <vue-editor v-model="aviso.conteudo"></vue-editor>

    <div class="text-xs-right">
      <v-btn @click="save()" color="success">Salvar Aviso</v-btn>
    </div>
  </v-form>
</template>

<script>
import { ENV } from "../../../env.js"
import { VueEditor } from "vue2-editor";

export default {
    created() {
        if(this.estaEditando()) {
            this.$http.get(ENV['api.aviso'] + this.getId()).then((response) => {
                this.aviso = response.data 
            })
        }
    },
    data() {
        return {
            aviso: {
                assunto: '',
                descricao: '',
                status: '',
            }
        }
    },
    methods: {
        getId() {
            return this.$router.currentRoute.params.id
        },
        estaEditando() {
            return (this.$router.currentRoute.name == 'admin.avisos.editar');
        },
        save() {
            let promise
            if(this.estaEditando()) {
                promise = this.$http.put(ENV['api.aviso'] + this.getId(), this.aviso)
            }else{
                promise = this.$http.post(ENV['api.aviso'], this.aviso)
            }

            promise.then((response) => { 
                this.aviso = response.data
                this.$router.push({'name': 'admin.avisos.listar'})
            }).catch(error => {
                console.log(error)
            })
        }
    },
    components: {
        VueEditor
    }
}
</script>

<style>

</style>
