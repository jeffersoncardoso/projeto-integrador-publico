<template>
    <v-card flat class="card-sistema" @click="$emit('mostrar')">
        <v-card-text class="card-sistema-text px-0 text-xs-center">
            <v-icon class="card-sistema-icone" large>{{ sistema.icone }}</v-icon>
            <h4>{{ sistema.nome_abreviado }}</h4>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'sistema'
    ]
}
</script>

<style>
    .card-sistema {
        cursor: pointer;
    }
    .card-sistema:hover {
        background: #23988f;
    }
    .card-sistema .card-sistema-text {
        color: #555;
    }
    .card-sistema .card-sistema-icone {
        color: #23988f;
    }
    .card-sistema:hover .card-sistema-text, .card-sistema:hover .card-sistema-icone {
        color: #FFF;
    }
</style>
