<template>
    <div class="layout-servicos-header">
        <v-layout row wrap align-center>
            <v-flex md2 class="layout-servicos-logo text-xs-center">
                <img width="120" alt="Prefeitura de Canoas" src="../../assets/brasao-canoas.png">
            </v-flex>
            <v-flex md2>
                <h2 class="text-xs-center" style="color: #2FA0AA;">Portal de Serviços</h2>
            </v-flex>
            <v-flex class="text-xs-right" md8>
                <h4 style="color: #696969">Recursos Humanos: <v-icon>phone</v-icon>7602</h4>
                <h4 style="color: #696969">Atendimento CANOASTEC: <v-icon>phone</v-icon>1700</h4>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {

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
