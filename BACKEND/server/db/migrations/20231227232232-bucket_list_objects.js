'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bucket_list_object', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(100),
      },
      uuid: {
        type: DataTypes.STRING(36),
        allowNull: false,
        unique: true
      },
      bucket_id: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
        references:{
          model:"customer_bucket",keys:"id"
        }
      },
      image_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }
  }).then(()=>{
    queryInterface.addConstraint('bucket_list_object',{
      type:'FOREIGN KEY',
      fields:["bucket_id"],
      references:{
        field:"id",
        table:"customer_bucket"
      }
    })
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bucket_list_object');
  },
};
