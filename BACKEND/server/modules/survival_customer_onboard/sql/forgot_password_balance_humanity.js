"use strict";
const { mysqlHelper } = require("../../../helpers");
const httpStatus = require('http-status');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


(() => {
  module.exports = async (call, res) => {
    try {
        let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" }

        let userExistCheck = await mysqlHelper.format(`select uuid from sagar_test.balance_humanity_users where mobile_number = "${call.mobileNumber}"`)
        let [userExistCheckResult] = await mysqlHelper.query(userExistCheck)

        if(userExistCheckResult && userExistCheckResult.length <0)
        {
            return response = { status: httpStatus.BAD_REQUEST, message: "User Doesnt Exist!" }

        }
        // Generate a random salt
      const salt = await bcrypt.genSalt(10);

      // Combine the password and salt, then hash using bcrypt
      const hashedPassword = await bcrypt.hash(call.password + salt, 10);

      let query = await mysqlHelper.format(`update sagar_test.balance_humanity_users set password = "${hashedPassword}" and salt =${salt} where mobile_number = ${call.mobileNumber} `)
      const [result] = await mysqlHelper.query(query);

      if (result && result.warningStatus > 0) {
        return response = { status: httpStatus.BAD_REQUEST, message: "Duplicate Data entry!" }
      }

      if (result && result.affectedRows > 0) {
        // Generate a JWT token and include it in the response
        const token = jwt.sign({ uuid: insertObj.uuid }, 'yourSecretKey', { expiresIn: '1h' });
        return response = { status: httpStatus.OK, message: "Registered successfully!", token: token }
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
})();
