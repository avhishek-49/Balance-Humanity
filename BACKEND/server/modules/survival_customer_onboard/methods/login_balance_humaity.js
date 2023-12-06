"use strict";
const httpStatus = require('http-status');
const { mysqlHelper,jwtHelper } = require("./../../../helpers");
const { balanceHumanityValidator }= require("./../helpers");
const bcrypt = require('bcrypt');

  (() => {

    module.exports = async (call,res) => {

      try {


        let response = await balanceHumanityValidator.loginCustomer(call.body);
        if (response.status !== httpStatus.OK) {
          return res.status(400).json({ message: response.message });
        }

        let userExistCheck = await mysqlHelper.format(`SELECT uuid, customer_pin, password,email,mobile_number FROM sagar_test.balance_humanity_users WHERE mobile_number = "${call.body.mobileNumber}"`);
        let [userExistCheckResult] = await mysqlHelper.query(userExistCheck);
  
        if (!userExistCheckResult || userExistCheckResult.length === 0) {
            return res.status(400).json({ message: "user doesnt exist!" });
        }
        if(userExistCheckResult && userExistCheckResult.length > 0)
        {
          const match = await bcrypt.compare(call.body.password, userExistCheckResult[0].password);

          if(match)
          {
            const jwtToken = jwtHelper.generateJWTToken(userExistCheckResult[0].uuid)
            let customerData =
            {
                mobileNumber : userExistCheckResult[0].mobile_number,
                email:userExistCheckResult[0].email
            }

            if(jwtToken.success)
            {
                return res.status(200).json({ token:jwtToken, message: "login successfully!",customerData:JSON.stringify(customerData) });
            }


          }

          else{
            return res.status(401).json({ message: "Invalid Mobile Number or password." });

          }

        }



      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }

    }

  })
  ();

