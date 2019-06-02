<template>
    <v-progress-linear class="ma-0" color="primary" v-if="isLoading" height="7" :indeterminate="true"></v-progress-linear>
    <v-progress-linear class="ma-0" color="light" v-else height="7" :indeterminate="false"></v-progress-linear>
</template>

<script>
export default {
    
}
</script>

<style>
</style>
