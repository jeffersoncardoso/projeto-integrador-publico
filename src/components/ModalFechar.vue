<template>
  <v-dialog v-model="value" max-width="1000" scrollable>
    <v-card>
      <v-card-title class="headline teal" style="color: #FFF">
        {{ titulo }}
        <v-spacer></v-spacer>
        <v-btn @click="fechar()" icon ripple style="color: #FFF"> <v-icon>clear</v-icon> </v-btn>
      </v-card-title>

      <v-card-text>
        <slot></slot>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['value', 'titulo'],
  methods: {
    fechar() {
      this.$emit('fechar')
    },
  },
  watch: {
    value() {
      if(this.value == false)
        this.$emit('fechar')
    }
  }
}
</script>

<style>

</style>
