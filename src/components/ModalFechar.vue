<template>
  <Modal largura="1000" :name="name" :title="titulo">
    <slot></slot>
  </Modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: ['name', 'titulo'],
  components: { Modal }
}
</script>

<style>

</style>
