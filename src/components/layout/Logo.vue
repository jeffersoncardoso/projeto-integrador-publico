<template>
    <div class="layout-servicos-header">
        <v-layout row wrap align-center>
            <v-flex md1></v-flex>
            <v-flex hidden-xs-only md2 class="layout-servicos-logo text-xs-center">
                <img width="130" alt="Prefeitura de Canoas" src="../../assets/brasao-canoas.png">
            </v-flex>
            <v-flex md2>
                <h2 class="text-xs-center accent--text"><router-link style="text-decoration:none;" to="/">Portal de Serviços</router-link></h2>
            </v-flex>
            <v-flex v-if="['login'].indexOf($route.name) == -1" class="text-xs-right" md7>
                <v-btn title="Sair" @click="sair()" flat icon color="teal">
                    <v-icon medium>power_settings_new</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    methods: {
        sair() {
            sessionStorage.removeItem("usuario")
            this.$router.push({'name': 'login'})
        }
    }
}
</script>

<style>
    .layout-servicos-header {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .layout-servicos-logo {
        border-right: 2px solid #CCC;
    }
</style>
