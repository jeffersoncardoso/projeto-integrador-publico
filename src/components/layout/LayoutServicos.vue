<template>
    <v-app class="white">
        <Logo/>
        <Loading/>
        
        <v-content class="base pb-4">
            <v-container grid-list-md>
                <slot></slot>
            </v-container>

            <div class="mt-3 text-xs-center" v-if="logo">
                <img width="200" alt="Prefeitura de Canoas" src="../../assets/logo_canoas.png">
            </div>
        </v-content>

        <div class="fixed-bottom-left" v-if="voltar">
            <v-btn fab dark color="teal" medium :to="{ name: 'servicos' }">
                <v-icon dark>arrow_back</v-icon>
            </v-btn>
        </div>

        <Footer/>
    </v-app>
</template>

<script>
import Footer from './Footer'
import Logo from './Logo'
import Loading from './Loading'

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
        Logo, Footer, Loading
    }
}
</script>

<style>
    .fixed-bottom-left {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        justify-content: left;
    }
</style>
