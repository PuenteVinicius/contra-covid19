export default class Pessoa {
  constructor(data = {}) {
    this.pessoaId = data.pessoaId || null;
    this.nome = data.nome || '';
    this.dataDeNascimento = data.dataDeNascimento || '';
    this.sexo = data.sexo || '';
    this.bairroId = data.bairroId || null;
    this.nomeDaMae = data.nomeDaMae || '';
    this.ocupacao = data.ocupacao || '';
    this.endereco = data.endereco || '';
    this.numero = data.numero || '';
    this.municipioId = data.municipioId || null;
    this.telefoneResidencial = data.telefoneResidencial || '';
    this.telefoneContato = data.telefoneContato || '';
    this.telefoneCelular = data.telefoneCelular || '';
  }
}