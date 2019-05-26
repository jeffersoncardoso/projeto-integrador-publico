<template>
    <v-card flat class="card-servico" :to="{ 'path' : servico.link }">
        <v-card-text class="card-servico-text px-0 text-xs-center">
            <v-icon class="card-servico-icone" large>{{ servico.icone }}</v-icon> <br> 
            <h4>{{ servico.nome }}</h4>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'servico'
    ]
}
</script>

<style>
    .card-servico:hover {
        background: #23988f;
    }
    .card-servico .card-servico-text {
        color: #555;
    }
    .card-servico .card-servico-icone {
        color: #23988f;
    }
    .card-servico:hover .card-servico-text, .card-servico:hover .card-servico-icone {
        color: #FFF;
    }
</style>
