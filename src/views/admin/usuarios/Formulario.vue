<template>
    <v-form ref="form" row>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-text-field v-model="usuario.cpf" label="CPF" placeholder="Digite o CPF do usuário" required autofocus></v-text-field>
            </v-flex>
            <v-flex lg7 md7 sm7>
                <v-text-field v-model="usuario.nome" label="Nome" disabled></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-autocomplete v-model="usuario.perfil" :items="['Administrador', 'Mídia']" placeholder="Selecione o Perfil" clearable></v-autocomplete>
            </v-flex>
        </v-layout>
        <div class="text-xs-right">
            <v-btn @click="save()" color="success">Salvar Usuário</v-btn>
        </div>
    </v-form>
</template>

<script>
import { ENV } from "../../../env.js"

export default {
    data() {
        return {
            usuario: {
                cpf: '',
                nome: '',
                perfil: ''    
            }
        }
    },
    watch: {    
        "usuario.cpf" : function() {
            if(this.usuario.cpf.length == 11) {
                this.$http.get(ENV['api.buscar-cpf'] + '/' + this.usuario.cpf, {
                    headers: { Authorization: 'Basic OmUzY2RjOTBjNmJhMTc1ZThjZWNiZDEwMDI0OTAzNTZl' }
                }).then(result => {
                    if(result.data)
                        this.usuario.nome = result.data.nome
                })
            }
        }
    }
}
</script>

<style>

</style>
