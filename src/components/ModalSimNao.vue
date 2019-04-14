<template>
  <Modal :name="name" :title="titulo">
    <slot></slot>
    <template v-slot:actions>
      <v-spacer></v-spacer>
      <v-btn color="green darken-1" flat="flat" @click="nao()"> NÃO </v-btn>
      <v-btn color="green darken-1" flat="flat" @click="sim()"> SIM </v-btn>
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['name', 'titulo'],
  methods: {
    nao() {
      this.$modal.hide(this.name)
    },
    sim() {
      this.$emit('sim')
    },
  },
  components: { Modal }
}
</script>

<style>

</style>
