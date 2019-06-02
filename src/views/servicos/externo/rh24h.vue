<template>

</template>

<script>
export default {
    created() {
        window.open(
        'https://sistemas.canoas.rs.gov.br/servidor/index.php?option=com_content&view=article&id=16&catid=15&Itemid=123#main-component',
        '_blank'
        )

        this.$router.go(-1)
    }
}
</script>

<style>

</style>
