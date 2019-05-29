<template>
    <v-text-field solo flat v-bind="$attrs" v-on="$listeners" :type="mostrar ? 'text' : 'password'" @click:append="mostrar = !mostrar" :append-icon="mostrar ? 'visibility' : 'visibility_off'"></v-text-field>
</template>

<script>
export default {
    data () {
      return {
          mostrar: false
      }
    }
}
</script>

<style>

</style>
