<template>
    <span class="busca-funcionarios">
        <v-layout row wrap>
            <v-flex lg6 md6 sm6 xs12>
                <v-text-field v-model="nome" placeholder="Digite o nome do funcionário" solo clearable append-icon="person"></v-text-field>
            </v-flex>
            <v-flex lg3 md3 sm3 xs6>
                <v-autocomplete v-model="secretaria" :items="secretarias" solo placeholder="Secretaria" clearable></v-autocomplete>
            </v-flex>
            <v-flex lg3 md3 sm3 xs6>
                <v-autocomplete v-model="titulo" item-value="valor" item-text="descricao" :items="titulos" solo placeholder="Cargo" clearable></v-autocomplete>
            </v-flex>
            <v-flex lg12 md12 sm12 xs12>
                <v-btn @click="buscar" color="teal" large block dark><v-icon right>search</v-icon> Buscar</v-btn>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex>
                <v-alert class="mb-10" :value="funcionarios.length == 300" type="info"> A busca é limitada em 300 resultados, por favor seja mais específico. </v-alert>
            </v-flex>
        </v-layout>

        <v-expansion-panel v-if="funcionarios.length > 0">
            <v-expansion-panel-content v-for="funcionario in funcionarios" :key="funcionario.usuario">
                <template v-slot:header>
                    <v-layout row wrap>
                        <v-flex lg9 md9 sm9 xs12>
                            <div>
                                <h3 style="text-transform: uppercase;">
                                    {{ funcionario.nome }} 
                                </h3>
                                <h4 style="text-transform: uppercase;">
                                    {{ (funcionario.secretaria.trim()) ? funcionario.secretaria : "" }}
                                    {{ (funcionario.cargo.trim()) ? " - " + funcionario.cargo : "" }}
                                </h4>
                                <h5>{{ funcionario.email }}</h5>
                            </div>
                        </v-flex>
                        <v-flex lg3 md3 sm3 xs12>
                            <div>
                                <span>
                                    <div>
                                        Ramal: <b>{{ (funcionario.ramal && funcionario.ramal.trim().length > 0) ?  funcionario.ramal : "Não informado" }}</b>
                                    </div>
                                    <div>
                                        Telefone: <b>{{ funcionario.telefone && funcionario.telefone.trim().length > 0 ? funcionario.telefone : "Não informado" }}</b>
                                    </div>
                                    <div>
                                        Celular: <b>{{ funcionario.celular && funcionario.celular.trim().length > 0 ? funcionario.celular : "Não informado" }}</b>
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
    </span>
</template>

<script>
import { ENV } from "../../env.js"

export default {
    data() {
        return {
            nome: 'Jefferson',
            secretaria: '',
            titulo : '',
            funcionarios: [],
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
            this.$http.get(ENV['api.buscar-funcionario'], {
                params: { 
                    'nome': this.nome,
                    'secretaria': this.secretaria,
                    'titulo': this.titulo
                },
                headers: { Authorization: 'Basic OmUzY2RjOTBjNmJhMTc1ZThjZWNiZDEwMDI0OTAzNTZl'}
            }).then((result) => {
                this.funcionarios = result.data
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
