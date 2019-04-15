<template>
    <modal :name="name" height="auto" scrollable>
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
        'name', 'title'
    ],
    methods: {
        close() {
            this.$modal.hide(this.name)
        }
    }
}
</script>

<style>

</style>


