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
                <v-autocomplete v-model="cargo" item-value="valor" item-text="descricao" :items="cargos" solo placeholder="Cargo" clearable></v-autocomplete>
            </v-flex>
            <v-flex lg12 md12 sm12 xs12>
                <v-btn @click="buscar" color="teal" large block dark><v-icon right>search</v-icon> Buscar</v-btn>
            </v-flex>
        </v-layout>

        <v-expansion-panel v-if="funcionarios.length > 0">
            <v-expansion-panel-content v-for="funcionario in funcionarios" :key="funcionario.usuario">
                <template v-slot:header>
                    <v-layout row wrap>
                        <v-flex lg9 md9 sm9 xs12>
                            <div>
                                <h2>
                                    {{ funcionario.nome }} 
                                </h2>
                                <h4 style="text-transform: uppercase;">{{ funcionario.secretaria }} - {{ funcionario.cargo }}</h4>
                                <h5>{{ funcionario.email }}</h5>
                            </div>
                        </v-flex>
                        <v-flex lg3 md3 sm3 xs12>
                            <div>
                                <span>
                                    <div v-if="funcionario.ramal && funcionario.ramal.trim().length > 0">
                                        Ramal: <b>{{ funcionario.ramal }}</b>
                                    </div>
                                    <div v-if="funcionario.telefone && funcionario.telefone.trim().length > 0">
                                        Telefone: <b>{{ funcionario.telefone }}</b>
                                    </div>
                                    <div v-if="funcionario.celular && funcionario.celular.trim().length > 0">
                                        Celular: <b>{{ funcionario.celular }}</b>
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
            cargo : '',
            funcionarios: [],
            cargos: [
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
                    'cargo': this.cargo
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
