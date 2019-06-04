<template>
    <layout-servicos :voltar="true">
        <h1 class="text-xs-center secondary--text">Links do seu interesse</h1>
        <v-layout row wrap pl-5 pr-5 ma-5>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://sistemas.canoas.rs.gov.br/servidor/">Portal do Servidor</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://canoas.rs.gov.br/">Portal de Canoas</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="http://www.canoasprev.rs.gov.br/">CANOASPREV</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://leismunicipais.com.br/prefeitura/rs/canoas">Legislação Municipal</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://sistemas.canoas.rs.gov.br/transparencia/servlet/home">Portal da transparência</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://sistemas.canoas.rs.gov.br/servidor/index.php?option=com_content&view=article&layout=edit&id=39">CAS - Central de Atendimento ao Servidor</a></h3>
            </v-flex>
            <v-flex md3>
                <h3><a target="_blank" class="link-util" href="https://sistemas.canoas.rs.gov.br/servidor/index.php?option=com_content&view=article&layout=edit&id=38">Conduta do Servidor</a></h3>
            </v-flex>
        </v-layout>
    </layout-servicos>
</template>

<script>
export default {

}
</script>

<style>
    .link-util {
        text-decoration: none;
    }
</style>
