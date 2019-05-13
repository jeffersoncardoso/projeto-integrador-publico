<template>
  <Modal :largura="1000" :name="name" :title="titulo">
    <div v-html="aviso.descricao" v-if="aviso"></div>
    <template v-if="aviso">
      <v-btn v-if="aviso.url" target="_blank" :href="aviso.url" small color="info">Ver mais</v-btn>
    </template>
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
