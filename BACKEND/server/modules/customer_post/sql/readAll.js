"use strict";
const {mysqlHelper} = require("../../../helpers");
const httpStatus = require("http-status");

(() => {
    module.exports = async (call, res) => {
        try {
            let response = {status: httpStatus.BAD_REQUEST, data: "Data Not found"};


            let query = await mysqlHelper.format(`SELECT uuid, customer_id, description, image_name, status,created_at FROM balance_humanity_blog_post where true`);
            const [result] = await mysqlHelper.query(query);

            if (result && result.length>0) {
                return (response = {status: httpStatus.OK, data: result});
            }
        } catch (error) {
            return error;
        }
    };
})();
