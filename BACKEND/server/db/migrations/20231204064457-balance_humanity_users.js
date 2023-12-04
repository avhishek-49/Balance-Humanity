'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('balance_humanity_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.STRING(36),
        allowNull: false,
        unique: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      mobile_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_delete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      customer_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      login_date: {
        type: DataTypes.DATE,
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      update_date: {
        type: DataTypes.DATE,
      },
      updated_by: {
        type: DataTypes.INTEGER, 
      },
      created_by: {
        type: DataTypes.INTEGER
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('balance_humanity_users');
  },
};
