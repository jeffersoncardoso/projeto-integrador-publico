<template>
    <v-app light>
        <Header/>
        <Loading/>

        <v-content>
            <v-container grid-list-md>
                <slot></slot>
            </v-container>
        </v-content>

        <Footer/>
    </v-app>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import Loading from './Loading'

export default {
    components: {
        Header, Footer, Loading
    }
}
</script>

<style>

</style>
