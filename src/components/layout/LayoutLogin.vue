<template>
    <v-app style="background:#FFF">
        <Logo/>

        <v-progress-linear v-if="isLoading" height="7" style="margin: 0px" color="green" :indeterminate="true"></v-progress-linear>
        <v-progress-linear v-else height="7" style="margin: 0px" color="light" :indeterminate="false"></v-progress-linear>
        
        <v-content class="layout-login">
            <v-container grid-list-md>
                <slot></slot>
            </v-container>
        </v-content>

        <Footer/>
    </v-app>
</template>
<script>
import Logo from './Logo'

export default {
    components: {
        Logo
    }
}
</script>

<style>
    .layout-login {
        background: #F5F5F5 !important;
    }
</style>
