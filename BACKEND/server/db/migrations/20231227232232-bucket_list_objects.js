"use strict";
const {DataTypes} = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("bucket_list_object", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(100),
            },
            uuid: {
                type: DataTypes.STRING(36),
                allowNull: false,
                unique: true,
            },
            customer_id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                // references: {
                //     model: "balance_humanity_users",
                //     keys: "uuid",
                // },
            },
            bucket_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            image_category: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            image_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
        });
        // .then(() => {
        //     queryInterface.addConstraint("bucket_list_object", {
        //         type: "FOREIGN KEY",
        //         fields: ["customer_id"],
        //         references: {
        //             field: "id",
        //             table: "balance_humanity_users",
        //         },
        //     });
        // });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("bucket_list_object");
    },
};
