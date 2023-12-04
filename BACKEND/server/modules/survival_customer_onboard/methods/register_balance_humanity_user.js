"use strict";
const httpStatus = require('http-status');
const { createBalanceHumanitySql } = require("../sql");



  (() => {

    module.exports = async (call,res) => {


      try {

        let response = { status: httpStatus.BAD_REQUEST, message: "Data Not found" }

        let result = await createBalanceHumanitySql(call.body);

        if (result && result.length > 0) {
          response =
          {
            status: httpStatus.OK, message: "Balance Humanity Registered successfully!"
          }

        }

        return res.status(response.status).json({ error: response.message });

      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      }



    }

  })
  ();