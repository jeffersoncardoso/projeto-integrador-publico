<template>
  <v-dialog v-model="value" max-width="500" persistent>
    <v-card>
      <v-card-title class="headline teal" style="color: #FFF">
        {{ titulo }}
        <v-spacer></v-spacer>
        <v-btn @click="nao()" icon ripple style="color: #FFF"> <v-icon>clear</v-icon> </v-btn>
      </v-card-title>

      <v-card-text>
        <slot></slot>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click="nao()"> NÃO </v-btn>

          <v-btn color="green darken-1" flat="flat" @click="sim()"> SIM </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['value', 'titulo'],
  methods: {
    nao() {
      this.$emit('nao')
      this.$emit('input', false)
    },
    sim() {
      this.$emit('sim')
      this.$emit('input', false)
    },
  }
}
</script>

<style>

</style>
