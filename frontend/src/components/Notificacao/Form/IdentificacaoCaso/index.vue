<template>
  <div class="px-2">
    <h4 class="primary--text font-weight-medium title">3. IDENTIFICAÇÃO DO PACIENTE</h4>
    <dados-pessoais
      :data-hora-notificacao="dataHoraNotificacao"
      :suspeito="suspeito"
      :possui-fechamento="possuiFechamento"
      @update:dataHoraNotificacao="updateDataHoraNotificacao"
      @update:tipoDocumento="updateTipoDocumento"
      @update:numeroCpf="updateNumeroCpf"
      @update:numeroDocumento="updateNumeroDocumento"
      @update:nome="updateNome"
      @update:nomeDaMae="updateNomeDaMae"
      @update:sexo="updateSexo"
      @update:gestante="updateGestante"
      @update:tipoPeriodoGestacional="updateTipoPeriodoGestacional"
      @update:racaCor="updateRacaCor"
      @update:dataDeNascimento="updateDataDeNascimento"
      @update:tipoClassificacaoPessoa="updateTipoClassificacaoPessoa"
      :disabled="disabled"
    />
    <endereco
      :suspeito="suspeito"
      :possui-fechamento="possuiFechamento"
      @update:cep="updateCep"
      @update:endereco="updateEndereco"
      @update:numero="updateNumero"
      @update:bairroId="updateBairroId"
      @update:complemento="updateComplemento"
      @update:municipioId="updateMunicipioId"
      :disabled="disabled"
    />
    <contato
      :suspeito="suspeito"
      @update:telefoneResidencial="updateTelefoneResidencial"
      @update:telefoneCelular="updateTelefoneCelular"
      @update:telefoneContato="updateTelefoneContato"
      :disabled="disabled"
    />
    <ocupacao
      :suspeito="suspeito"
      @update:ocupacao="updateOcupacao"
      @update:updateDescricaoOcupacao="updateDescricaoOcupacao"
      :disabled="disabled"
    />
  </div>
</template>
<script>
import Pessoa from '@/entities/Pessoa';
import DadosPessoais from './DadosPessoais.vue';
import Endereco from './Endereco.vue';
import Contato from './Contato.vue';
import Ocupacao from './Ocupacao.vue';

export default {
  components: {
    DadosPessoais,
    Endereco,
    Contato,
    Ocupacao,
  },
  props: {
    dataHoraNotificacao: {
      type: String,
      default: '',
    },
    suspeito: {
      type: Pessoa,
      required: true,
    },
    disabled: {
      type: Boolean,
      defaultValue: false,
    },
    possuiFechamento: {
      type: Boolean,
      defaultValue: false,
    },
  },
  methods: {
    updateDataHoraNotificacao(dataHoraNotificacao) {
      this.$emit('update:dataHoraNotificacao', dataHoraNotificacao);
    },
    updateTipoDocumento(tipoDocumento) {
      this.$emit('update:tipoDocumento', tipoDocumento);
    },
    updateNumeroCpf(numeroCpf) {
      this.$emit('update:numeroCpf', numeroCpf);
    },
    updateNumeroDocumento(numeroDocumento) {
      this.$emit('update:numeroDocumento', numeroDocumento);
    },
    updateNome(nome) {
      this.$emit('update:nome', nome);
    },
    updateNomeDaMae(nomeDaMae) {
      this.$emit('update:nomeDaMae', nomeDaMae);
    },
    updateSexo(sexo) {
      this.$emit('update:sexo', sexo);
    },
    updateGestante(gestante) {
      this.$emit('update:gestante', gestante);
    },
    updateTipoPeriodoGestacional(tipoPeriodoGestacional) {
      this.$emit('update:tipoPeriodoGestacional', tipoPeriodoGestacional);
    },
    updateRacaCor(racaCor) {
      this.$emit('update:racaCor', racaCor);
    },
    updateDataDeNascimento(dataDeNascimento) {
      this.$emit('update:dataDeNascimento', dataDeNascimento);
    },
    updateCep(cep) {
      this.$emit('update:cep', cep);
    },
    updateEndereco(endereco) {
      this.$emit('update:endereco', endereco);
    },
    updateNumero(numero) {
      this.$emit('update:numero', numero);
    },
    updateBairroId(bairroId) {
      this.$emit('update:bairroId', bairroId);
    },
    updateTelefoneResidencial(telefoneResidencial) {
      this.$emit('update:telefoneResidencial', telefoneResidencial);
    },
    updateTelefoneCelular(telefoneCelular) {
      this.$emit('update:telefoneCelular', telefoneCelular);
    },
    updateTelefoneContato(telefoneContato) {
      this.$emit('update:telefoneContato', telefoneContato);
    },
    updateDescricaoOcupacao(descricaoOcupacao) {
      this.$emit('update:descricaoOcupacao', descricaoOcupacao);
    },
    updateOcupacao(ocupacao) {
      this.$emit('update:ocupacao', ocupacao);
    },
    updateComplemento(complemento) {
      this.$emit('update:complemento', complemento);
    },
    updateMunicipioId(municipioId) {
      this.$emit('update:municipioId', municipioId);
    },
    updateTipoClassificacaoPessoa(tipoClassificacaoPessoa) {
      this.$emit('update:tipoClassificacaoPessoa', tipoClassificacaoPessoa);
    },
  },
};
</script>
