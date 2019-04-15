<template>
    <modal :name="name" :width="largura" :maxWidth="1000" height="auto" :scrollable="true" :adaptive="true">
        <v-card min-height="100%">
            <v-card-title class="headline teal" style="color: #FFF">
                <slot name="title">{{ title }}</slot>
                <v-spacer></v-spacer>

                <button icon flat @click="close()"><v-icon color="white">close</v-icon></button>
            </v-card-title>

            <v-card-text class="text-content">
                <slot></slot>
            </v-card-text>

            <v-card-actions>
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
    </modal>
</template>

<script>
export default {
    props: [
        'name', 'title', 'largura'
    ],
    methods: {
        close() {
            this.$modal.hide(this.name)
        }
    }
}
</script>

<style>
    .v--modal img{
        max-width: 100%;
    }
    .v--modal .ql-align-center{
        text-align:center;
    }
    .v--modal p {
        margin-bottom: 0px;
    }
    .v--modal .ql-video {
        width: 95%;
        max-width: 500px;
        height: 300px;
        margin: 10px;
    }
</style>


