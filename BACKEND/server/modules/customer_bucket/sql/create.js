"use strict";
const { mysqlHelper } = require("../../../helpers");
const httpStatus = require('http-status');
const { v4 } = require('uuid');


(() => {
  module.exports = async (call, res) => {
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" }
      // Combine the password and salt, then hash using bcrypt

      let insertObj = {
        uuid: v4(),
        customer_id: call.customer_id,
        bucket_name:call.bucket_name
      };

      let query = await mysqlHelper.format(`INSERT IGNORE INTO customer_bucket SET ?`, [insertObj])
      const [result] = await mysqlHelper.query(query);

      if (result && result.warningStatus > 0) {
        return response = { status: httpStatus.BAD_REQUEST, message: "Duplicate Data entry!" }
      }

      if (result && result.affectedRows > 0) {
        return response = { status: httpStatus.OK, message: "Customer successfully made a bucket",}
      }
    } catch (error) {
      
      return error
    }
  }
})();
