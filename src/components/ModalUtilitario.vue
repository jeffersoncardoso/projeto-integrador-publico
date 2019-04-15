<template>
  <Modal :name="name" :title="titulo">
    <div v-html="utilitario.descricao" v-if="utilitario"> </div>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['utilitario', 'name'],
  computed: {
      titulo(){
          return (this.utilitario != null) ? this.utilitario.nome : ''
      }
  },
  components: { Modal }
}
</script>

<style>

</style>
