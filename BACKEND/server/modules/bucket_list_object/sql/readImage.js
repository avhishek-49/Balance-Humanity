"use strict";
const {mysqlHelper} = require("../../../helpers");
const httpStatus = require("http-status");

(() => {
    module.exports = async (call, res) => {
        try {
            let response = {status: httpStatus.BAD_REQUEST, data: "Data Not found"};
            // Combine the password and salt, then hash using bcrypt

            let insertObj = {
                image_type: call.image_type,
            };

            let query = await mysqlHelper.format(
                `SELECT customer_id, bucket_name, image_name from bucket_list_object where image_type = ?`,
                [insertObj.image_type]
            );
            const [result] = await mysqlHelper.query(query);

            if (result && result.length > 0) {
                return (response = {status: httpStatus.OK, data: result[0]});
            }
        } catch (error) {
            return error;
        }
    };
})();
