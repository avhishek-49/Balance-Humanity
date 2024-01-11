"use strict";
const {mysqlHelper} = require("../../../helpers");
const httpStatus = require("http-status");
const {v4} = require("uuid");

(() => {
    module.exports = async (body, res) => {
        try {
            let response = {status: httpStatus.BAD_REQUEST, message: "Data Not found"};

            let insertObj = {
                uuid: v4(),
                customer_id: body.user.uuid,
                description: body.description,
                image_name: body.image_name,
                created_at: body.created_at,
                updated_at: body.updated_at,
            };

            let query = await mysqlHelper.format(`INSERT INTO balance_humanity_blog_post SET ?`, [insertObj]);
            const [result] = await mysqlHelper.query(query);

            if (result && result.affectedRows > 0) {
                return (response = {status: httpStatus.OK, message: "balance_humanity_blog_post successfully created"});
            }
        } catch (error) {
            return error;
        }
    };
})();
