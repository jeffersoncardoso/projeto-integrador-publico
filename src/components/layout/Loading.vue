<template>
    <v-progress-linear class="ma-0" color="primary" v-if="isLoading" height="7" :indeterminate="true"></v-progress-linear>
    <v-progress-linear class="ma-0" color="light" v-else height="7" :indeterminate="false"></v-progress-linear>
</template>

<script>
export default {
    data(){
        return {
            isLoading: false
        }
    },
    created() {
        this.$http.interceptors.request.use((config) => { 
            this.isLoading = true
            return config
        }, (error) => {  return Promise.reject(error)  })

        this.$http.interceptors.response.use((response) => {
          this.isLoading = false
          return response
        }, (error) => { 
          this.isLoading = false
          return Promise.reject(error) 
        })
    }
}
</script>

<style>
</style>
