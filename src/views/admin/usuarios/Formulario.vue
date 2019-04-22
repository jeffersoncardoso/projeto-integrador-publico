<template>
    <v-form ref="form" row>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-text-field label="CPF" placeholder="Digite o CPF do usuário" required autofocus></v-text-field>
            </v-flex>
            <v-flex lg7 md7 sm7>
                <v-text-field label="Nome" disabled></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex lg5 md5 sm5>
                <v-autocomplete :items="['Administrador', 'Mídia']" placeholder="Selecione o Perfil" clearable></v-autocomplete>
            </v-flex>
        </v-layout>
        <div class="text-xs-right">
            <v-btn @click="save()" color="success">Salvar Usuário</v-btn>
        </div>
    </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>
