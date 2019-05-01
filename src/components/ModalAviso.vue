<template>
  <Modal :largura="1000" :name="name" :title="titulo">
    <div v-html="aviso.descricao" v-if="aviso"></div>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['aviso', 'name'],
  computed: {
      titulo(){
          return (this.aviso != null) ? this.aviso.assunto : ''
      }
  },
  components: { Modal }
}
</script>

<style>
</style>
