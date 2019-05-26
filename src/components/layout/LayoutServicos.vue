<template>
    <v-app style="background:#FFF">
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

        <v-progress-linear v-if="isLoading" height="7" style="margin: 0px" color="green" :indeterminate="true"></v-progress-linear>
        <v-progress-linear v-else height="7" style="margin: 0px" color="light" :indeterminate="false"></v-progress-linear>
        
        <v-content class="layout-servicos">
            <v-container grid-list-md>
                <slot></slot>
            </v-container>

            <div class="mt-5 text-xs-center" v-if="logo">
                <img width="200" alt="Prefeitura de Canoas" src="../../assets/logo_canoas.png">
            </div>
        </v-content>

        <div class="fixed-bottom-center" v-if="voltar">
            <v-btn fab dark color="teal" medium :to="{ name: 'servicos' }">
                <v-icon dark>arrow_back</v-icon>
            </v-btn>
        </div>

        <Footer/>
    </v-app>
</template>

<script>
import Footer from './Footer'

export default {
    props: {
        voltar: {
            type: Boolean,
            default: false
        },
        logo: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Footer
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

    .fixed-bottom-center {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    .layout-servicos {
        background: #F5F5F5 !important;
    }
</style>
