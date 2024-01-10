"use strict";
const {mysqlHelper} = require("../../../helpers");
const httpStatus = require("http-status");
const {v4} = require("uuid");

(() => {
    module.exports = async (call, res) => {
        try {
            let response = {status: httpStatus.BAD_REQUEST, message: "Data Not found"};

            let insertObj = {
                uuid: v4(),
                customer_id: call.user.uuid,
                description: call.description,
                image_name: call.image_name,
                created_at: call.created_at,
                updated_at: call.updated_at,
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
