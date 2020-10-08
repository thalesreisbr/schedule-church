'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('mass',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      church_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'church', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      priest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'priest', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mass');
  }
};
