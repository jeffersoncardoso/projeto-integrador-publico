<template>
    <v-app style="background:#FFF">
        <Logo/>

        <v-progress-linear v-if="isLoading" height="7" style="margin: 0px" color="green" :indeterminate="true"></v-progress-linear>
        <v-progress-linear v-else height="7" style="margin: 0px" color="light" :indeterminate="false"></v-progress-linear>
        
        <v-content class="layout-servicos">
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
        Logo, Footer
    }
}
</script>

<style>
    .layout-servicos {
        background: #F5F5F5 !important;
        padding-bottom: 35px !important;
    }


    .fixed-bottom-left {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        justify-content: center;
    }

    @media (max-width: 600px) 
    {
        .fixed-bottom-left {
            justify-content: left;
        }
    }
    
</style>
