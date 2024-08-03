'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tarefas', 'concluida', {
      type: Sequelize.TINYINT,
      after: 'data_termino',
      allowNull: false,
      defaultValue: 0
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tarefas', 'concluida');
  }
};
