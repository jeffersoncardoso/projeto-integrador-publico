<template>
    <layout-servicos :voltar="true">
        <span class="busca-funcionarios">
            <h2 class="text-xs-center mb-2" style="color: #555">
                Localize com facilidade seus colegas de trabalho, pesquisando por nome, secretaria ou cargo.
            </h2>

            <v-layout row wrap>
                <v-flex lg5 md5 sm4 xs12>
                    <v-text-field @keyup.enter="buscar" v-model="nome" placeholder="Digite o nome do funcionário" flat solo clearable append-icon="person"></v-text-field>
                </v-flex>
                <v-flex lg2 md2 sm3 xs6>
                    <v-autocomplete @keyup.enter="buscar" v-model="secretaria" :items="secretarias" solo flat placeholder="Secretaria" clearable></v-autocomplete>
                </v-flex>
                <v-flex lg3 md3 sm3 xs6>
                    <v-autocomplete @keyup.enter="buscar" v-model="titulo" item-value="valor" item-text="descricao" :items="titulos" solo flat placeholder="Cargo" clearable></v-autocomplete>
                </v-flex>
                <v-flex lg2 md2 sm2 xs12 mb-2>
                    <v-btn class="mt-0" @click="buscar" color="teal" large block dark><v-icon right>search</v-icon> Buscar</v-btn>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex>
                    <v-alert class="mb-10" :value="funcionarios.length == 300" type="info" outline> A busca é limitada em 300 resultados, por favor seja mais específico. </v-alert>
                </v-flex>
            </v-layout>

            <v-expansion-panel v-if="funcionarios.length > 0">
                <v-expansion-panel-content v-for="funcionario in funcionarios" :key="funcionario.usuario">
                    <template v-slot:header>
                        <v-layout row wrap>
                            <v-flex lg9 md9 sm9 xs12>
                                <div>
                                    <h3 class="text-uppercase">
                                        {{ funcionario.nome }}
                                    </h3>
                                    <h4 class="text-uppercase">
                                        {{ (funcionario.secretaria) ? funcionario.secretaria : "" }}
                                        {{ (funcionario.cargo) ? " - " + funcionario.cargo : "" }}
                                    </h4>
                                    <h5>{{ funcionario.email }}</h5>
                                </div>
                            </v-flex>
                            <v-flex lg3 md3 sm3 xs12>
                                <div>
                                    <span>
                                        <div>
                                            Ramal: <b>{{ (funcionario.ramal && funcionario.ramal.length > 0) ?  funcionario.ramal : "Não informado" }}</b>
                                        </div>
                                        <div>
                                            Telefone: <b>{{ funcionario.telefone && funcionario.telefone.length > 0 ? funcionario.telefone : "Não informado" }}</b>
                                        </div>
                                        <div>
                                            Celular: <b>{{ funcionario.celular && funcionario.celular.length > 0 ? funcionario.celular : "Não informado" }}</b>
                                        </div>
                                    </span>
                                </div>
                            </v-flex>
                        </v-layout>
                    </template>
                    <v-card>
                        <v-card-title>
                            <v-layout row wrap>
                                <v-flex lg4 md4 sm4 xs12>
                                    <div><b>Empresa:</b> {{ (funcionario.empresa) ? funcionario.empresa : 'Não informado' }}</div>
                                    <div><b>Setor:</b> {{ (funcionario.setor) ? funcionario.setor : 'Não informado' }}</div>
                                </v-flex>
                                <v-flex lg4 md4 sm4 xs12>
                                    <div><b>Endereço:</b> {{ (funcionario.endereco) ? funcionario.endereco : 'Não informado' }}</div>
                                    <div><b>Bairro:</b> {{ (funcionario.bairro) ? funcionario.bairro : 'Não informado' }}</div>
                                </v-flex>
                                <v-flex lg4 md4 sm4 xs12>
                                    <div><b>CEP: </b> {{ (funcionario.cep) ? funcionario.cep : 'Não informado' }}</div>
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-alert :value="nenhumResultado" outline type="info">
                A busca não retornou nenhum resultado
            </v-alert>
        </span>
    </layout-servicos>
</template>

<script>

export default {
    data() {
        return {
            nome: '',
            secretaria: '',
            titulo : '',
            funcionarios: [],
            nenhumResultado: false,
            titulos: [
                { descricao: 'Secretario', valor: 'S' },
                { descricao: 'Diretor', valor: 'D' },
                { descricao: 'Chefe de Unidade', valor: 'U' },
                { descricao: 'Gerente de Equipe', valor: 'E' }
            ],
            secretarias: [
                'CMV', 'CANOASPREV', 'CGM', 'FMSC', 'CANOASTEC', 'GVP', 'GP', 'PGM', 'SMCT', 'SME', 'SMF', 'SMS', 'SMSPC', 'SML', 'SMRIC', 'SMDE', 'SMDS', 'SMDUH', 'SMEL', 'SMO', 'SMPG', 'SMPCM', 'SMPE', 'SMSU', 'SMTM', 'SMMA', 'SMDHPS'
            ]
        }
    },
    methods: {
        buscar() {
            this.$http.get(process.env.VUE_APP_API_BUSCAR_FUNCIONARIO, {
                params: {
                    'nome': (this.nome) ? this.nome.trim(): '',
                    'secretaria': this.secretaria,
                    'titulo': (this.titulo) ? this.titulo.trim() : ''
                }
            }).then((result) => {
                this.funcionarios = result.data
                this.nenhumResultado = this.funcionarios.length == 0
            })
        }
    }
}
</script>

<style>
    .busca-funcionarios .v-card__title {
        padding-top: 0px;
        padding-left: 22px;
    }
</style>
