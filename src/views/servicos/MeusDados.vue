<template>
  <layout-servicos :voltar="true">
    <v-alert outline type="info" :value="true">Atualize seus dados cadastrais</v-alert>

    <v-layout row wrap>
      <v-flex>
        <h3>Jefferson Martins Cardoso</h3>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h4>Matrícula: 0 </h4>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex>
        <h4> Email: jefferson.cardoso@canoastec.rs.gov.br </h4>
      </v-flex>
      <v-flex>
        <h4>Cargo: Tecnico de Desenvolvimento de Sistemas </h4>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <label for="setor">Setor</label>
        <v-text-field name="setor" solo value="Projetos e Sistemas"></v-text-field>
      </v-flex>
      <v-flex>
        <label for="endereco">Endereço</label>
        <v-text-field name="endereco" solo value="Rua Fioravante Milanês, 140 - Centro"></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <label for="ramal">Ramal</label>
        <v-text-field name="ramal" solo value="1713"></v-text-field>
      </v-flex>
      <v-flex>
        <label for="celular">Celular</label>
        <v-text-field name="celular" solo value="(51) 93192-3122"></v-text-field>
      </v-flex>
    </v-layout>

    <div class="text-xs-center">
      <v-btn large color="success">Atualizar cadastro</v-btn>
    </div>

  </layout-servicos>
</template>

<script>
export default {

}
</script>

<style>

</style>
