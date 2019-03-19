<template>
  <v-app>

    <v-content>
      <v-container grid-list-md text-xs-center>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
