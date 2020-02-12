'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('db_postal_code_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      urban: {
        type: Sequelize.STRING
      },
      sub_district: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province_code: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'db_province_data',
          key: 'province_code',
          as: 'province_code',
        },
      },
      postal_code: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('db_postal_code_data');
  }
};