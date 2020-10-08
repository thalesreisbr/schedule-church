'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mass_faithful', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mass_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'mass', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      faithful_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'faithful', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mass_faithful');
  }
};
