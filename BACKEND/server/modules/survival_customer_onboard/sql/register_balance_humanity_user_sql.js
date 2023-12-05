"use strict";
const { mysqlHelper } = require("../../../helpers");
const httpStatus = require('http-status');
const { v4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

(() => {
  module.exports = async (call, res) => {
    try {
      let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" }

      // Generate a random salt
      const salt = await bcrypt.genSalt(10);

      // Combine the password and salt, then hash using bcrypt
      const hashedPassword = await bcrypt.hash(call.password + salt, 10);

      let insertObj = {
        uuid: v4(),
        first_name: call.firstName,
        last_name: call.lastName,
        email: call.email,
        mobile_number: call.mobileNumber,
        password: hashedPassword, // Store the hashed password with salt
        salt: salt, // Store the salt
        is_active: 1,
        is_delete: 0,
        customer_type: 1,
        is_blocked: 0,
        login_date: new Date().getTime(),
        created_date: new Date().getTime(),
        created_by: "Abishek"
      };

      let query = await mysqlHelper.format(`INSERT IGNORE INTO sagar_test.balance_humanity_users SET ?`, [insertObj])
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
