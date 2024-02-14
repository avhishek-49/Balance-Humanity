"use strict";

const httpStatus = require("http-status");
const { createCustomerPostSql } = require("../sql");

module.exports = async (call, res) => {
try {
    const response = await createCustomerPostSql(call.body);

    if (response.status !== httpStatus.OK) {
        return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: response.message });
    }

    return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: response.message });
} catch (error) {
    console.error("Error in handling request:", error);
    return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: error.message });
}
};
