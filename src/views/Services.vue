<template>
  <div class="services">
    <h2>Bem-vindo(a) Jefferson</h2>

    <br />

    <h3>Selecione o serviço desejado</h3>

    <br />

    <b-input v-model="name" class="text-center border" placeholder="Digite o nome..." size="lg"/>

    <br />

    <b-card-group deck>
      <b-row>
        <b-col class="mt-3 col-auto" v-for="service in filterServices">
          <b-card style="cursor:pointer; min-width:10em;">
            <a :href="service.link">
            <b-card-text>
                <fa :icon="service.icon" /> <br />
                <small>{{ service.name }}</small>
            </b-card-text>
            </a>
          </b-card>
        </b-col>
      </b-row>
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
        { name: 'Troca de senha', icon: 'key', link: 'troca-senha' },
        { name: 'Buscar servidores', icon: 'users', link: 'buscar-servidores' },
        { name: 'Mural de avisos', icon: 'info', link: 'mural-avisos' },
        { name: 'Meus dados', icon: 'user', link: 'meus-dados' },
        { name: 'Sistemas', icon: 'sitemap', link: 'sistemas '},
        { name: 'Utilitários', icon: 'sitemap', link: 'utilitarios '}
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
    padding: 1.5rem !important;
  }
  .card {
    /* background: #015e6f !important;
    color: #FFF !important; */
    border-color: #2FA0AA !important;
  }
  .card a {
    /* color: #FFF !important; */
    color: #015e6f !important;
  }
  .card a:hover {
    text-decoration: none;
  }
</style>
