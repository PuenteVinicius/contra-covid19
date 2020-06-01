module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('FechamentoNotificacaoCovid19', 'status', {
    type: Sequelize.STRING(10),
    defaultValue: 'ABERTO',
  }),
  down: (queryInterface) => queryInterface.removeColumn('FechamentoNotificacaoCovid19', 'status'),
};
