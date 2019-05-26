<template>
    <v-card flat class="card-utilitario" @click="$emit('mostrar')">
        <v-card-text class="card-utilitario-text px-0 text-xs-center">
            <v-icon class="card-utilitario-icone" large>{{ utilitario.icone }}</v-icon>
            <h4>{{ utilitario.nome }}</h4>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'utilitario'
    ]
}
</script>

<style>
    .card-utilitario {
        cursor: pointer;
    }
    .card-utilitario:hover {
        background: #23988f;
    }
    .card-utilitario .card-utilitario-text {
        color: #555;
    }
    .card-utilitario .card-utilitario-icone {
        color: #23988f;
    }
    .card-utilitario:hover .card-utilitario-text, .card-utilitario:hover .card-utilitario-icone {
        color: #FFF;
    }
</style>