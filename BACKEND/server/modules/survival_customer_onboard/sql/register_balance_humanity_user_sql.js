"use strict";
const { mysqlHelper } = require("../../../helpers");
const httpStatus = require('http-status');
const { v4 } = require('uuid');
(() => {
  module.exports = async (call, res) => {

    try {
      let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" }

      let insertObj = {
        uuid: v4(),
        first_name: call.firstName,
        last_name: call.lastName,
        email: call.email,
        mobile_number: call.mobileNumber,
        password: call.password,
        salt: "test",
        is_active: 1,
        is_delete: 0,
        customer_type: call.customerType,
        is_blocked: 0,
        login_date: new Date().getTime(),
        created_date: new Date().getTime(),
        created_by: "Abishek"
      };

      let query = await mysqlHelper.format(`INSERT IGNORE INTO sagar_test.balance_humanity_users set ? `, [insertObj])
      const [result] = await mysqlHelper.query(query)

      if(result && result.warningStatus >0)
      {
        return response = { status: httpStatus.BAD_REQUEST, message: "Duplicate Data entry!" }
      }

      if (result && result.affectedRows > 0) {
        return response = { status: httpStatus.OK, message: "Registered successfully!" }

      }


    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" }); // Use 'return' to exit the function
    }
  }
})();
