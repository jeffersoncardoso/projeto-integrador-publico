<template>
    <v-app class="white">
        <Logo/>
        <Loading/>
        
        <v-content class="base pb-4">
            <v-container grid-list-md>
                <slot></slot>
            </v-container>
        </v-content>

        <Footer/>
    </v-app>
</template>

<script>
import Logo from './Logo'
import Loading from './Loading'

export default {
    components: {
        Logo, Loading
    }
}
</script>

<style>
</style>
