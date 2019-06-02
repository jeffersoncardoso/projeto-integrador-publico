<template>
    <v-card flat class="card-sistema">
        <v-card-text class="card-sistema-text px-1 pt-0 text-xs-center">
            <div class="text-xs-right">
                <v-icon @click="$emit('ajuda')" class="card-sistema-ajuda" small>help</v-icon>
            </div>
            <div>
                <v-icon @click="$emit('abrir')" class="card-sistema-icone" large>{{ sistema.icone }}</v-icon>
                <h4 @click="$emit('abrir')" class="card-sistema-nome">{{ sistema.nome_abreviado }}</h4>
            </div>
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
    .card-sistema:hover {
        background: #23988f;
    }
    .card-sistema .card-sistema-text {
        color: #555;
    }
    .card-sistema .card-sistema-icone {
        cursor: pointer;
        color: #23988f;
    }
    .card-sistema .card-sistema-nome {
        cursor: pointer;
    }
    .card-sistema .card-sistema-ajuda {
        cursor: pointer;
        color: #23988f;
    }
    .card-sistema:hover .card-sistema-ajuda {
        color: #FFF !important;
    }
    .card-sistema:hover .card-sistema-text, .card-sistema:hover .card-sistema-icone {
        color: #FFF;
    }
</style>
