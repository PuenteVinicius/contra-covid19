const requestParaModeloNotificacao = (objetoRequest) => {
  const {
    unidadeSaudeId, notificadorId, userId, profissaoId, suspeito,
    nomeNotificador, status, unidadeDeSaude,
  } = objetoRequest;

  return {
    userId,
    unidadeSaudeId,
    notificadorId,
    municipioId: unidadeDeSaude.municipioId,
    pessoaId: suspeito.pessoaId,
    bairroId: suspeito.bairroId,
    profissaoId,
    nomeNotificador,
    status,
  };
};

const mapearSintomas = (sintomas) => {
  const { outros, ...sintomasAferidos } = sintomas;
  return {
    ...sintomasAferidos,
    outrosSintomas: outros,
  };
};

const mapearComorbidades = (comorbidades) => {
  const { outros, ...comorbidadesAferidas } = comorbidades;
  return {
    ...comorbidadesAferidas,
    outrosComorbidades: outros,
  };
};

const mapearVinculoEpidemiologico = (vinculoEpidemiologico) => {
  const { nome, ...vinculoAferido } = vinculoEpidemiologico;
  return {
    ...vinculoAferido,
    nomeTeveContato: nome,
  };
};

const mapearExamesImage = ({
  raioNormal,
  raioInfiltradoIntersticial,
  raioConsolidacao,
  raioMisto,
  raioOutro,
  tomografiaNormal,
  tomografiaVidroFoscoPredominioPerifericoBasal,
  tomografiaAusenciaDerramePleural,
  tomografiaAusenciaLinfonodoMediastenal,
  tomografiaOutro,
}) => ({
  raioXNormal: raioNormal,
  raioXInfiltrado: raioInfiltradoIntersticial,
  raioXConsolidacao: raioConsolidacao,
  raioXMisto: raioMisto,
  raioXOutro: raioOutro,
  tomografiaNormal,
  tomografiaVitro: tomografiaVidroFoscoPredominioPerifericoBasal,
  tomografiaDerrame: tomografiaAusenciaDerramePleural,
  tomografiaLinfonodo: tomografiaAusenciaLinfonodoMediastenal,
  tomografiaOutro,
});

const requestParaModeloNotificacaoCovid19 = (objetoRequest) => {
  const {
    sintomas, comorbidades, informacaoComplementar,
    vinculoEpidemiologico, conclusaoAtendimento, examesImagem,
    tipoDeContatoComCaso, tipoDeLocalDoCaso,
    nomeDoCaso, realizouExamesImagem,
  } = objetoRequest;

  const sintomasAferidos = mapearSintomas(sintomas);
  const comorbidadesAferidas = mapearComorbidades(comorbidades);
  const vinculoEpidemiologicoAferido = mapearVinculoEpidemiologico(vinculoEpidemiologico);
  const exameImagemAferido = mapearExamesImage(examesImagem);

  return {
    sintomatico: !!sintomas,
    dataInicioDosSintomas: objetoRequest.dataInicioDosSintomas,
    dataHoraNotificacao: objetoRequest.dataHoraNotificacao,
    ...sintomasAferidos,
    ...comorbidadesAferidas,
    ...informacaoComplementar,
    ...vinculoEpidemiologicoAferido,
    ...conclusaoAtendimento,
    ...exameImagemAferido,
    observacoes: objetoRequest.observacoes,
    contatoComSuspeito: tipoDeContatoComCaso,
    localDoContatoComSuspeito: tipoDeLocalDoCaso,
    nomeSuspeito: nomeDoCaso,
    realizouExameDeImagem: realizouExamesImagem,
  };
};

module.exports = { requestParaModeloNotificacao, requestParaModeloNotificacaoCovid19 };
