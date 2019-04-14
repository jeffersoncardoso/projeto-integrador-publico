<template>
  <Modal :name="name" :title="titulo">
    <div v-if="utilitario">
        {{ utilitario.descricao }}
    </div>
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
