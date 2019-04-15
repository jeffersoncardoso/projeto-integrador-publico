<template>
  <Modal :name="name" :title="titulo">
    <div v-html="sistema.sobre" v-if="sistema">
    </div>
    <template v-if="sistema" v-slot:actions>
      <v-spacer></v-spacer>
      <v-btn target="_blank" :href="sistema.producao" color="primary" flat="flat"> ACESSAR </v-btn>
    </template>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['sistema', 'name'],
  computed: {
      titulo(){
          return (this.sistema != null) ? this.sistema.nome : ''
      }
  },
  components: { Modal }
}
</script>

<style>
</style>
