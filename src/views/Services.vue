<template>
  <div class="services">
    <h2>Bem-vindo(a) Jefferson</h2>

    <br />

    <h3>Selecione o serviço desejado</h3>

    <br />

    <b-input v-model="name" class="text-center" placeholder="Digite o nome..." size="lg"/>

    <br />

    <b-card-group deck>
      <b-card v-for="service in filterServices">
        <b-card-text>
          <fa :icon="service.icon" /> <br />
          {{ service.name }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'services',
  data: () => {
    return {
      name: '',
      services: [
        {name: 'Troca de senha', icon: 'key'},
        {name: 'Buscar servidores', icon: 'users'},
        {name: 'Mural de avisos', icon: 'info'},
        {name: 'Meus dados', icon: 'user'},
        {name: 'Sistemas', icon: 'sitemap'}
      ]
    }
  },
  computed: {
    filterServices() {
      if(this.name.length == 0) return this.services;

      return this.services.filter((service) => {
        return service.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  }
}
</script>

<style>
  .card-body {
    padding: 0.50rem !important;
  }
</style>
