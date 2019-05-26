<template>
    <v-app light>
        <v-progress-linear v-if="isLoading" height="7" style="margin: 0px" color="green" :indeterminate="true"></v-progress-linear>
        <v-progress-linear v-else height="7" style="margin: 0px" color="light" :indeterminate="false"></v-progress-linear>
        <v-content>
            <v-container grid-list-md>
                <slot></slot>
            </v-container>
        </v-content>

        <Footer/>
    </v-app>
</template>
<script>
export default {

}
</script>

<style>

</style>
