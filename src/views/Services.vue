<template>
  <div class="services">
    <h2>Bem-vindo(a) Jefferson</h2>

    <br />

    <h3>Selecione o serviço desejado</h3>

    <br />

    <b-input v-model="name" class="text-center" placeholder="Digite o nome..." size="lg"/>

    <br />

    <b-card-group deck>
      <b-card v-for="service in filterServices" style="cursor:pointer">
        <a :href="service.link">
        <b-card-text>
            <fa :icon="service.icon" /> <br />
            {{ service.name }}
        </b-card-text>
        </a>
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
        { name: 'Troca de senha', icon: 'key', link: 'servicos/troca-senha' },
        { name: 'Buscar servidores', icon: 'users', link: 'servicos/buscar-servidores' },
        { name: 'Mural de avisos', icon: 'info', link: 'servicos/mural-avisos' },
        { name: 'Meus dados', icon: 'user', link: 'servicos/meus-dados' },
        { name: 'Sistemas', icon: 'sitemap', link: 'servicos/sistemas '}
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
    padding: 0.3rem !important;
  }
  .card {
    background: #015e6f !important;
    color: #FFF !important;
  }
  .card a {
    color: #FFF !important;
  }
  .card a:hover {
    text-decoration: none;
  }
</style>
