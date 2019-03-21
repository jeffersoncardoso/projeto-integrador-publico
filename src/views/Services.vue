<template>
  <div class="services text-xs-center">
    <h1>Bem-vindo(a) Jefferson</h1>

    <br />

    <h2>Selecione o serviço desejado</h2>

    <br />

    <v-text-field v-model="name" placeholder="Digite o nome..." solo clearable append-icon="search" autofocus></v-text-field>

    <br />

    <v-layout row wrap>
      <v-flex md2 sm4 xs6 v-for="service in filterServices">
        <v-card style="cursor:pointer" :href="service.link">
            <v-card-text class="px-0">
              <fa :icon="service.icon" /> <br> {{ service.name }}
            </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
        { name: 'Sistemas', icon: 'sitemap', link: 'servicos/sistemas '},
        { name: 'Utilitários', icon: 'sitemap', link: 'servicos/utilitarios '}
      ]
    }
  },
  computed: {
    filterServices() {
      if(this.name == null || this.name.length == 0) return this.services;

      return this.services.filter((service) => {
        return service.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  }
}
</script>

<style>

</style>
