<template>
  <Modal :name="name" :title="titulo">
    <div v-if="sistema">
        {{ sistema }}
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['sistema', 'name', 'titulo'],
  components: { Modal }
}
</script>

<style>

</style>
