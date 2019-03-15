<template>
  <div class="sistemas">
    <h2>Bem-vindo(a) Jefferson</h2>

    <br />

    <h3>Selecione o sistema desejado</h3>

    <br />

    <b-input v-model="name" class="text-center" placeholder="Digite o nome..." size="lg"/>

    <br />

    <b-card-group deck>
      <b-row>
        <b-col class="mt-3 col-auto" v-for="sistema in filterSistemas">
          <b-card style="cursor:pointer; min-width:9em;">
            <a :href="sistema.link">
            <b-card-text>
                <fa :icon="sistema.icon" /> <br />
                {{ sistema.name }}
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
  name: 'sistemas',
  data: () => {
    return {
      name: '',
      sistemas: [
        { name: 'SIGMA', icon: 'key' },
        { name: 'SAPC', icon: 'users' },
        { name: 'Memorandos', icon: 'info' },
        { name: 'Diário Oficial', icon: 'user' },
        { name: 'SGM', icon: 'sitemap' },
        { name: 'Frotas', icon: 'sitemap' },
        { name: 'MCMV', icon: 'sitemap' },
        { name: 'CTM', icon: 'sitemap' },
        { name: 'BDO', icon: 'sitemap' }
      ]
    }
  },
  computed: {
    filterSistemas() {
      if(this.name.length == 0) return this.sistemas;

      return this.sistemas.filter((sistema) => {
        return sistema.name.toUpperCase().includes(this.name.toUpperCase());
      })
    }
  }
}
</script>

<style>

</style>
