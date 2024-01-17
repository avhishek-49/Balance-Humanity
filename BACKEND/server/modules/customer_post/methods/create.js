"use strict";
const httpStatus = require("http-status");
const {createCustomerPostSql} = require("../sql");

(() => {
    module.exports = async (call, res) => {
        try {
            let response = {status: httpStatus.BAD_REQUEST, message: "Data Not found"};

            response = await createCustomerPostSql(call.body);
            if (response.status !== httpStatus.OK) {
                return res
                    .status(httpStatus.BAD_REQUEST)
                    .json({status: httpStatus.BAD_REQUEST, message: response.message});
                // return response;
            }
            return res.status(200).json({status: httpStatus.OK, message: response.message});
            // return response;
        } catch (error) {
            return res.status(200).json({status: httpStatus.BAD_REQUEST, message: error.message});

            // return {status: httpStatus.BAD_REQUEST, message: error.message};
        }
    };
})();
