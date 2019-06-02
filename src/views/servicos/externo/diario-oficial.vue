<template>

</template>

<script>
export default {
    created() {
        window.open('https://sistemas.canoas.rs.gov.br/domc/publicacoes-por-data', '_blank')

        this.$router.go(-1)
    }
}
</script>

<style>

</style>