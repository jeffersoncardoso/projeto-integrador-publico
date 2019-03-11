<template>
  <div id="app">
    <!-- <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Serviços</b-nav-item>
          <b-nav-item href="#">Sistemas</b-nav-item>
          <b-nav-item href="#">Mural de avisos</b-nav-item>
          <b-nav-item href="#">Usuários</b-nav-item>
          <b-nav-item href="#">Utilitários</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

    <b-container fluid class="content" style="max-width:1200px">
      <!-- <h1>Bem vindo(a) Jefferson</h1> -->

      <router-view/>


    </b-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1,h2,h3,h4,h5 {
  color: #015e6f;
}

.content {
  margin-top: 20px;
}
</style>
