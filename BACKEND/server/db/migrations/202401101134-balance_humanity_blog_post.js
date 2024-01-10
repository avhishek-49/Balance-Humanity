"use strict";
const {DataTypes} = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("balance_humanity_blog_post", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(255),
            },
            uuid: {
                type: DataTypes.STRING(36),
                allowNull: false,
                unique: true,
            },
            customer_id:{
                type:DataTypes.UUID,
                allowNull:false,
                //foreign key from customer table
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            image_name:{
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },

            created_at: {
                type: DataTypes.BIGINT,
            },
            updated_at: {
                type: DataTypes.BIGINT,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("balance_humanity_blog_post");
    },
};
