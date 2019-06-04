<template>
    <layout-servicos :voltar="true">
        <h1 class="secondary--text text-xs-center">Orientações para a realização de ligações</h1>

        <v-layout row wrap py-3>
            <v-flex md6>
                <h2>1. Chamadas Internas (custo ZERO):</h2>
                <ul class="pl-5">
                    <li>Todas a ligações feitas internamente, ou seja, ramal a ramal não incide custo e não é necessário a liberação através da senha (FAC).</li>
                    <li>Digitar diretamente o ramal. Exemplo: 1700</li>
                </ul>
            </v-flex>
            <v-flex pl-3 md6>
                <h2>2. Chamadas Externas (Tarifadas):</h2>
        
                <h3>Para Telefones Fixos</h3>
                <ul class="pl-5">
                    <li>Discar zero para capturar a linha, após digitar o número (sem o código da operadora) e quando for solicitado, discar a FAC (senha)</li>
                    <li>Ex: 0 + 0XX + 30515459, onde XX é referente ao código de área da localidade (51 para o RS, 11 para São Paulo e assim por diante).</li>
                    <li>NÃO digitar código de Operadora, o sistema automaticamente preencherá a operadora 21 nas chamadas de saída.</li>
                </ul>

                <h3>Para Telefones Celulares</h3>
                <ul class="pl-5">
                    <li>Mesmo processo de discagem para telefones fixos.</li>
                    <li>Recomenda-se a utilização do telefone fixo, para ligação de celulares que não são do plano da PMC, pois a tarifa é menor.</li>
                    <li>Ligações para celulares da PMC não tem custos.</li>
                </ul>
            </v-flex>
        </v-layout>

        <h1 class="secondary--text text-xs-center">Tire o melhor proveito do seu aparelho</h1>
        <h3 class="text-xs-center">Saiba como usar - Clique no seu modelo de telefone</h3>
        <v-layout row wrap mt-2 py-3 style="background: #FFF;">
            <v-flex>
                <a href="https://cau.canoas.rs.gov.br/visao/GuiCisco3905.php" target="_blank">
                    <img src="../../../public/cau/cisco_3905.jpg" alt="">
                </a>
            </v-flex>
            <v-flex>
                <a href="https://cau.canoas.rs.gov.br/visao/GuiCisco6941.php" target="_blank">
                    <img src="../../../public/cau/cisco_6941.jpeg" alt="">
                </a>
            </v-flex>
            <v-flex>
                <a href="https://cau.canoas.rs.gov.br/visao/GuiCisco6961.php" target="_blank">
                    <img src="../../../public/cau/6961.jpeg" alt="">
                </a>
            </v-flex>
            <v-flex>
                <a href="https://cau.canoas.rs.gov.br/visao/GuiCisco7821.php" target="_blank">
                    <img src="../../../public/cau/7821.jpeg" alt="">
                </a>
            </v-flex>
            <v-flex>
                <a href="https://cau.canoas.rs.gov.br/visao/GuiCisco8941.php" target="_blank">
                    <img src="../../../public/cau/8941.jpeg" alt="">
                </a>
            </v-flex>
        </v-layout>
    </layout-servicos>
</template>

<script>
export default {

}
</script>

<style>

</style>
