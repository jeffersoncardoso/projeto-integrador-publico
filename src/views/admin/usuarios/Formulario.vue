<template>
    <v-form ref="form" row>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-text-field v-model="usuario.cpf" label="CPF" placeholder="Digite o CPF do usuário" required autofocus></v-text-field>
            </v-flex>
            <v-flex lg7 md7 sm7>
                <v-text-field v-model="nome" label="Nome" disabled></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-autocomplete v-model="usuario.idperfil" item-value="id" item-text="nome" :items="perfis" placeholder="Selecione o Perfil" clearable></v-autocomplete>
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
                idperfil: ''
            },
            nome: '',
            perfis: []
        }
    },
    beforeCreate() {
        if(this.$router.currentRoute.name == 'admin.usuarios.editar') {
            let id = this.$router.currentRoute.params.id
            this.$http.get(ENV['api.usuario'] + id).then((response) => { this.usuario = response.data })
        }
    },
    created() {
        this.$http.get(ENV['api.perfil']).then((result) => {
            this.perfis = result.data
        })

        if(this.estaEditando()) this.buscarNome()
    },
    methods: {
        getId() {
            return this.$router.currentRoute.params.id
        },
        estaEditando() {
            return (this.$router.currentRoute.name == 'admin.usuarios.editar');
        },
        buscarNome() {
            if(this.usuario.cpf.length == 11) {
                this.$http.get(ENV['api.buscar-cpf'] + '/' + this.usuario.cpf, {
                    headers: { Authorization: 'Basic OmUzY2RjOTBjNmJhMTc1ZThjZWNiZDEwMDI0OTAzNTZl' }
                }).then(result => {
                    if(result.data)
                        this.nome = result.data.nome
                })
            }
        },
        save() {
            let promise
            if(this.estaEditando()) {
                promise = this.$http.put(ENV['api.usuario'] + this.getId(), this.usuario)
            }else{
                promise = this.$http.post(ENV['api.usuario'], this.usuario)
            }

            promise.then((response) => { 
                this.aviso = response.data
                this.$router.push({'name': 'admin.usuarios.listar'})
            }).catch(error => {
                console.log(error)
            })
        }
    },
    watch: {    
        "usuario.cpf" : function() {
            this.buscarNome()
        }
    }
}
</script>

<style>

</style>
